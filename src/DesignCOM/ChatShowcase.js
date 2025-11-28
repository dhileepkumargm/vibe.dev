import React, { useState, useEffect } from 'react';

const ChatShowcase = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Sample chat messages for demonstration
  const demoMessages = [
    {
      id: 1,
      type: 'user',
      text: 'Create a modern landing page for my startup',
      timestamp: '2:30 PM'
    },
    {
      id: 2,
      type: 'ai',
      text: 'I\'ll create a stunning landing page for your startup. Let me design something modern with clean typography, engaging visuals, and clear call-to-action sections.',
      timestamp: '2:31 PM'
    },
    {
      id: 3,
      type: 'user',
      text: 'Make it dark themed with purple accents',
      timestamp: '2:32 PM'
    },
    {
      id: 4,
      type: 'ai',
      text: 'Perfect! I\'ve updated the design with a sleek dark theme and beautiful purple accents. The contrast creates an elegant, professional look that will make your startup stand out.',
      timestamp: '2:33 PM'
    }
  ];

  // Auto-animate messages appearing
  useEffect(() => {
    if (currentMessageIndex < demoMessages.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, demoMessages[currentMessageIndex]]);
        setCurrentMessageIndex(prev => prev + 1);
      }, currentMessageIndex === 0 ? 1000 : 2000);

      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex, demoMessages.length]);

  // Reset animation every 12 seconds
  useEffect(() => {
    const resetTimer = setTimeout(() => {
      setMessages([]);
      setCurrentMessageIndex(0);
    }, 12000);

    return () => clearTimeout(resetTimer);
  }, [messages]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
    </div>
  );
};

export default ChatShowcase;