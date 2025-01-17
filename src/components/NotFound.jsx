import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../../components/components/ui/button"

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-lg text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Button asChild>
        <Link to="/">Go Back Home</Link>
      </Button>
    </div>
  </div>
);

export default NotFound;

