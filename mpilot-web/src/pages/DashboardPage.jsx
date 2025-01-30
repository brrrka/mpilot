import { Home, Ship, Navigation } from 'lucide-react';
import Sidenav from "../components/SidenavComponent";
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, LineChart, Line, Cell } from 'recharts';

const DashboardPage = () => {
    // Dummy data untuk statistik
    const stats = {
        totalShips: 245,
        domesticShips: 180,
        internationalShips: 65,
        pilots: 42
    };

    // Data untuk grafik batang kapal masuk/keluar per bulan
    const monthlyShipData = [
        { name: 'Jan', masuk: 40, keluar: 35 },
        { name: 'Feb', masuk: 45, keluar: 42 },
        { name: 'Mar', masuk: 38, keluar: 40 },
        { name: 'Apr', masuk: 50, keluar: 48 },
        { name: 'Mei', masuk: 42, keluar: 39 },
        { name: 'Jun', masuk: 47, keluar: 45 }
    ];
    const shipDistributionData = [
        { name: 'Dalam Negeri', value: stats.domesticShips },
        { name: 'Luar Negeri', value: stats.internationalShips }
    ];

    const COLORS = ['#ef4444', '#3b82f6'];

    return (
        <Sidenav>
            <div className="p-8">
                {/* Header */}
                <h1 className="text-2xl font-bold text-red-600 mb-2">
                    Overview Dashboard
                </h1>

                {/* Breadcrumbs */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {/* Total Kapal */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Total Kapal</p>
                                <h3 className="text-2xl font-bold text-gray-700">{stats.totalShips}</h3>
                            </div>
                            <Ship className="h-10 w-10 text-red-600" />
                        </div>
                    </div>

                    {/* Kapal Dalam Negeri */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Kapal Dalam Negeri</p>
                                <h3 className="text-2xl font-bold text-gray-700">{stats.domesticShips}</h3>
                            </div>
                            <Ship className="h-10 w-10 text-blue-600" />
                        </div>
                    </div>

                    {/* Kapal Luar Negeri */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Kapal Luar Negeri</p>
                                <h3 className="text-2xl font-bold text-gray-700">{stats.internationalShips}</h3>
                            </div>
                            <Ship className="h-10 w-10 text-green-600" />
                        </div>
                    </div>

                    {/* Jumlah Pandu */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Jumlah Pandu</p>
                                <h3 className="text-2xl font-bold text-gray-700">{stats.pilots}</h3>
                            </div>
                            <Navigation className="h-10 w-10 text-purple-600" />
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Grafik Kapal Masuk/Keluar */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Statistik Kapal Masuk/Keluar</h3>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <ReBarChart data={monthlyShipData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="masuk" fill="#ef4444" name="Kapal Masuk" />
                                    <Bar dataKey="keluar" fill="#3b82f6" name="Kapal Keluar" />
                                </ReBarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Sebaran Kapal */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Sebaran Kapal</h3>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={shipDistributionData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                        label
                                    >
                                        {shipDistributionData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Trend Kapal Masuk */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Trend Kapal Masuk</h3>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={monthlyShipData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="masuk" stroke="#ef4444" name="Kapal Masuk" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Trend Kapal Keluar */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Trend Kapal Keluar</h3>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={monthlyShipData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="keluar" stroke="#3b82f6" name="Kapal Keluar" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </Sidenav>
    );
};

export default DashboardPage;