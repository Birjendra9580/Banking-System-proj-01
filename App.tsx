
import React, { useState, useCallback } from 'react';
import LoginScreen from './components/LoginScreen';
import MainLayout from './components/MainLayout';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
  }, []);

  return (
    <div className="min-h-screen antialiased">
      {isAuthenticated ? (
        <MainLayout onLogout={handleLogout} />
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
