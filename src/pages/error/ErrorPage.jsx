import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl text-red-600 mb-4">Oops! Something went wrong.</h1>
        <p className="text-gray-700 mb-4">We apologize for the inconvenience. Please try again later.</p>
        <Link className="mt-6  bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
