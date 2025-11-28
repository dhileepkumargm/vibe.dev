import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Initialize Firebase app once using environment variables for safety
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

if (!firebaseConfig.apiKey) {
  // eslint-disable-next-line no-console
  console.warn("Firebase configuration is missing. Populate your .env file to enable auth.");
}

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

let analytics = null;
let analyticsReady = Promise.resolve(null);

if (typeof window !== "undefined" && firebaseConfig.measurementId) {
  // Lazy-load analytics to avoid issues in unsupported environments (SSR, testing)
  analyticsReady = import("firebase/analytics")
    .then(async ({ getAnalytics, isSupported }) => {
      const supported = await isSupported();
      if (!supported) {
        return null;
      }
      analytics = getAnalytics(app);
      return analytics;
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.warn("Firebase Analytics failed to initialize", error);
      return null;
    });
}

export const getAnalyticsInstance = () => analytics;
export const analyticsInitialized = analyticsReady;
export const auth = getAuth(app);
export default app;
