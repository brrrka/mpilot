import Navbar from './NavbarComponent';
import Sidebar from './SidebarComponent';

// eslint-disable-next-line react/prop-types
const Sidenav = ({ children }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <Navbar />
                {/* Content Area */}
                <main className="flex-1 p-4 bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Sidenav;