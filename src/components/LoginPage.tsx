import React, { useState } from 'react';
import AnimatedHeader from './AnimatedHeader';
import AnimatedInput from './AnimatedInput';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoggingIn(false);
      alert(`Login attempted with username: ${username}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#151a36] p-4">
      <div className="w-full max-w-md relative">
        {/* Background elements */}
        <div className="absolute -top-32 -left-24 w-64 h-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-32 -right-24 w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        
        {/* Login card */}
        <div className="relative bg-[#1a203f]/70 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-purple-900/30 overflow-hidden z-10">
          {/* Anime-style decorative lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          
          <AnimatedHeader />
          
          <form onSubmit={handleSubmit}>
            <AnimatedInput
              type="text"
              placeholder="Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            
            <AnimatedInput
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            <div className="mb-4 flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 rounded border-gray-400 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-300">
                Remember me
              </label>
              <a href="#" className="ml-auto text-sm text-purple-400 hover:text-purple-300 transition-colors">
                Forgot password?
              </a>
            </div>
            
            <button
              type="submit"
              disabled={isLoggingIn}
              className={`
                w-full py-3 rounded-lg
                font-semibold text-white
                transition-all duration-300
                relative overflow-hidden
                ${isLoggingIn ? 'bg-purple-800' : 'bg-purple-600 hover:bg-purple-700'}
                group
              `}
            >
              <span className="relative z-10">
                {isLoggingIn ? 'Logging in...' : 'Login'}
              </span>
              <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full -z-1"></span>
            </button>
            
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account?{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;