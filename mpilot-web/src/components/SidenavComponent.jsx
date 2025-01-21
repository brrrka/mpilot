import Navbar from './NavbarComponent';
import Sidebar from './SidebarComponent';
import { useState } from 'react';

const Sidenav = ({ children }) => {
    const [isMinimized, setIsMinimized] = useState(false);

    return (
        <div className="flex min-h-screen">
            {/* Sidebar with state management passed as prop */}
            <div className={`fixed ${isMinimized ? "w-20" : "w-64"} transition-all duration-300`}>
                <Sidebar isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
            </div>

            {/* Main Content Area with dynamic padding */}
            <div className={`flex-1 flex flex-col ${isMinimized ? 'pl-20' : 'pl-64'} transition-all duration-300`}>
                <Navbar />
                <main className="flex-1 p-4 bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Sidenav;