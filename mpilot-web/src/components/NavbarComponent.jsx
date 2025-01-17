import { useState } from 'react';
import { User, LogOut, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <nav className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-4 w-full shadow-xl">
            <div></div>

            {/* Right side - Profile dropdown */}
            <div className="relative">
                <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg"
                >
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="text-left">
                        <span className="block text-sm font-medium text-gray-700">John Doe</span>
                        <span className="block text-xs text-gray-500">Administrator</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                        <a
                            href="#profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        >
                            <User className="h-4 w-4 mr-2" />
                            Profile
                        </a>
                        <a
                            href="#logout"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        >
                            <LogOut className="h-4 w-4 mr-2" />
                            Log Out
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
