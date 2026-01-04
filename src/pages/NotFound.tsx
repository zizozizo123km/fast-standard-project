import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-lg w-full">
        
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-blue-600 dark:text-blue-500 mb-6 tracking-widest">
          404
        </h1>
        
        {/* Title */}
        <p className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          Page Not Found
        </p>
        
        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        {/* CTA Button */}
        <Link
          to="/"
          className="inline-block px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Go Back Home
        </Link>
        
      </div>
    </div>
  );
};

export default NotFound;