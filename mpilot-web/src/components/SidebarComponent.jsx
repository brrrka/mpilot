import { useState } from "react";
import { Users, HandCoins, LogOut, ChevronLeft, ChevronRight, Ship, ClipboardList, Navigation, House } from "lucide-react";

const Sidebar = () => {
    const [isMinimized, setIsMinimized] = useState(false);

    return (
        <div className={`h-screen ${isMinimized ? "w-20" : "w-64"} bg-gradient-to-b from-red-600 to-red-400 border-r border-gray-200 flex flex-col transition-all duration-300`}>
            {/* Logo and Toggle Section */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                {!isMinimized && <h1 className="text-2xl font-bold text-white ">mPilot</h1>}
                <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-white focus:outline-none"
                >
                    {isMinimized ? <ChevronRight className="h-5 w-5 hover:bg-red-300 hover:rounded-xl" /> : <ChevronLeft className="h-5 w-5 hover:bg-red-300 hover:rounded-xl" />}
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-2 py-2 space-y-1">

                <div className="space-y-2">

                    <a href="#" className="flex items-center px-4 py-2 text-white hover:bg-red-300 hover:text-black rounded-lg">
                        <House className="mr-3 h-5 w-5" />
                        {!isMinimized && <span>Dashboard</span>}
                    </a>

                    <div className="my-4 border-t border-gray-200"></div>

                    <a href="#" className="flex items-center px-4 py-2 text-white hover:bg-red-300 hover:text-black rounded-lg">
                        <Ship className="mr-3 h-5 w-5" />
                        {!isMinimized && <span>Kapal Masuk / Keluar</span>}
                    </a>

                    <a href="#" className="flex items-center px-4 py-2 text-white hover:bg-red-300 hover:text-black rounded-lg">
                        <ClipboardList className="mr-3 h-5 w-5" />
                        {!isMinimized && <span>mRPKRD</span>}
                    </a>

                    <a href="#" className="flex items-center px-4 py-2 text-white hover:bg-red-300 hover:text-black rounded-lg">
                        <Navigation className="mr-3 h-5 w-5" />
                        {!isMinimized && <span>mSPKP</span>}
                    </a>

                    <a href="#" className="flex items-center px-4 py-2 text-white hover:bg-red-300 hover:text-black rounded-lg">
                        <HandCoins className="mr-3 h-5 w-5" />
                        {!isMinimized && <span>mHPKP</span>}
                    </a>
                </div>

                {/* Divider */}
                <div className="my-4 border-t border-gray-200"></div>

                {/* User Management Section */}
                <div>
                    <a href="#" className="flex items-center px-4 py-2 text-white hover:bg-red-300 hover:text-black rounded-lg">
                        <Users className="mr-3 h-5 w-5" />
                        {!isMinimized && <span>User Management</span>}
                    </a>
                </div>
            </nav>

            {/* Log Out Button */}
            <div className="p-4 border-t border-gray-200">
                <a href="#" className="flex items-center px-4 py-2 text-white hover:bg-red-300 hover:text-black rounded-lg">
                    <LogOut className="mr-3 h-5 w-5" />
                    {!isMinimized && <span>Log Out</span>}
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
