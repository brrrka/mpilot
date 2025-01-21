
import { Plus, Eye, Edit, Trash2, Home, Ship } from 'lucide-react';
import Sidenav from "../components/SidenavComponent";

const DashboardPage = () => {
    // Dummy data
    const shipData = [
        { id: 1, rpdk: 'RPDK-001-2024', name: 'KM Sinabung', agent: 'AGN-2024-001' },
        { id: 2, rpdk: 'RPDK-002-2024', name: 'KM Kelud', agent: 'AGN-2024-002' },
        { id: 3, rpdk: 'RPDK-003-2024', name: 'KM Dobonsolo', agent: 'AGN-2024-003' },
        { id: 4, rpdk: 'RPDK-004-2024', name: 'KM Ciremai', agent: 'AGN-2024-004' },
        { id: 5, rpdk: 'RPDK-005-2024', name: 'KM Umsini', agent: 'AGN-2024-005' },
    ];

    return (
        <Sidenav>
            <div className="p-2">
                {/* Header */}
                <h1 className="text-2xl font-bold text-red-600 mb-2">
                    Kapal Masuk / Kapal Keluar
                </h1>

                {/* Breadcrumbs */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                    <Home className="h-4 w-4" />
                    <span>/</span>
                    <Ship className="h-4 w-4" />
                    <span>Kapal Masuk / Kapal Keluar</span>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-lg shadow-md">
                    {/* Card Header with Add Button */}
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-700">Daftar Kapal</h2>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors">
                            <Plus className="h-4 w-4" />
                            <span>Add Data</span>
                        </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No RPDK-MRS</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Kapal</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nomor Agen</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {shipData.map((ship) => (
                                    <tr key={ship.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ship.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ship.rpdk}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ship.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ship.agent}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div className="flex space-x-2">
                                                <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 flex items-center space-x-1">
                                                    <Eye className="h-4 w-4" />
                                                </button>
                                                <button className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-lg hover:bg-yellow-200 flex items-center space-x-1">
                                                    <Edit className="h-4 w-4" />
                                                </button>
                                                <button className="px-3 py-1 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 flex items-center space-x-1">
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Sidenav>
    );
};

export default DashboardPage;