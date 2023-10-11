import React from 'react';
import { useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error=useRouteError();
    console.log(error);
    return (
        <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p>{error.statusText || error.message}</p>
            {
                error.status===404 && <div>
                      <h1 className="text-4xl text-red-500 font-semibold mb-2">404</h1>
            <p className="text-gray-700 text-xl">Page Not Found</p>
            <p className="text-gray-500 mt-4">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <a href="/" className="mt-6 text-blue-500 hover:underline">Go back to the homepage</a>
                </div>
            }
          
        </div>
    </div>
    );
};

export default Errorpage;