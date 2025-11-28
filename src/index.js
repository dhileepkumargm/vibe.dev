import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./background.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import { ErrorCom } from "./Components/UI";
// import { DesignSystemProvider } from './design/DesignSystemProvider';
// import ThemeLayer from './design/ThemeLayer';
// import { AuthContextProvider } from "./context/AuthContext";
// import { TelegramUserProvider } from "./context/TelegramUserContext";
// import { UserProvider } from "./context/userContext";
// import { AdminProvider } from "./context/AdminContext";
// import Leaderboard from "./pages/Leaderboard";
// import DailyCheckIn from "./pages/DailyCheckIn";
// import Eran from "./pages/Eran";
// import Airdrop from "./pages/Airdrop";
// import Dashboard from "./pages/admin/Dashboard";
// import Settings from "./pages/admin/Settings";
// import EditTasks from "./pages/admin/EditTasks";
// import AdminExternalTasksPage from "./pages/admin/AdminExternalTasksPage";
// import AirdropWallets from "./pages/admin/AdminWallets";
// import Search from "./pages/admin/Search";
// import Statistics from "./pages/admin/Statistics";
// import AdminRanks from "./pages/admin/AdminRanks";
// import AdminYoutube from "./pages/admin/AdminYoutube";
// import AlphaDogs from "./pages/AlphaDogs";
// import Withdraw from "./pages/Withdraw";
// import { AdminADsTasts } from './Components/Admin';
// import AdminWithdrawalsPage from "./pages/admin/AdminWithdrawalsPage";
// import { Bottoncss } from './Components/UI';
// import AdminFacePage from "./pages/admin/AdminFacePage";
// import AdminDailyCombopage from './pages/admin/AdminDailyCombopage';
// import PollAdminPage from "./pages/admin/PollAdmin";
// import Profile from "./pages/Profile";
// import SceneComponent from "./pages/SceneComponent";
// import ManualTasks from "./Components/Features/Tasks/ManualTasks";
// import AdminManualTasksPage from "./pages/admin/AdminManualTasksPage";
// import AdminPartnerTasksPage from "./pages/admin/AdminPartnerTasksPage";
// import NotAdmin236 from "./pages/NotAdmin236";
// import Notifications from "./Components/NotificationsPage";
// import SpinWin from "./pages/SpinWin";
// import Tournament from "./pages/Tournament";
// import ArcheryGame from './games/ArcheryGame';
// import AllGames from './games/AllGames';
// import ComponentShowcase from './pages/ComponentShowcase';
// import UltimateGamingHub from './pages/UltimateGamingHub';
// import UltimateAdminPortal from './pages/UltimateAdminPortal';
// import UltimateUILibrary from './pages/UltimateUILibrary';
import Hero from "./pages/Hero";
import Components from "./pages/Components";
import Templates from "./pages/Templates";
import ChallengePage from "./pages/Challenge";
import ComponentDetail from "./pages/ComponentDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RootLayout from './layout/RootLayout';
import { AuthProvider } from "./context/AuthContext";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Hero /> },
        { path: 'designs', element: <Hero /> },
        { path: 'components', element: <Components /> },
        { path: 'components/:slug', element: <ComponentDetail /> },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
        // { path: 'templates', element: <Templates /> },
        // { path: 'challenges', element: <ChallengePage /> },
        // { path: 'challenge', element: <ChallengePage /> }
      ]
    }
  ],
  { future: { v7_startTransition: true } }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <DesignSystemProvider>
  //   <ThemeLayer mode="dark" />
  //   <AuthContextProvider>
  //     <TelegramUserProvider>
        <React.StrictMode>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </React.StrictMode>
  //     </TelegramUserProvider>
  //   </AuthContextProvider>
  // </DesignSystemProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
