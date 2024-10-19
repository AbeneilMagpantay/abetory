import React from 'react';
import backgroundImage from '../assets/background.png'; // Ensure this path is correct
import googleIcon from '../assets/google-icon.png'; // Ensure this path is correct

const LogIn = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* Shaded background overlay */}
            <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
            
            <div className="flex items-center justify-center min-h-screen">
                <div className="max-w-sm w-full bg-white p-8 rounded-xl shadow-lg z-10">
                    <div className="text-center">
                        <h1 className="text-lg font-bold text-gray-800">Sign in with Google</h1>
                    </div>
                    <div className="mt-6">
                        <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <img className="h-5 w-5 mr-2" src={googleIcon} alt="Google" />
                            Sign in with Google
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
