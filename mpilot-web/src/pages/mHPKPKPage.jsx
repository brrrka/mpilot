import { Plus, Eye, Edit, Trash2, Home, Anchor } from 'lucide-react';
import Sidenav from "../components/SidenavComponent";

const MHPKPPage = () => {
    // Dummy data untuk contoh
    const pilotageData = [
        {
            id: 1,
            spkp: 'SPKP/001/2024',
            pkk: 'PKK/001/2024',
            shipName: 'KM Sinabung',
            pilotDateTime: '2024-01-21 08:00',
            status: 'Completed'
        },
        {
            id: 2,
            spkp: 'SPKP/002/2024',
            pkk: 'PKK/002/2024',
            shipName: 'KM Kelud',
            pilotDateTime: '2024-01-21 09:30',
            status: 'Completed'
        },
        {
            id: 3,
            spkp: 'SPKP/003/2024',
            pkk: 'PKK/003/2024',
            shipName: 'KM Dobonsolo',
            pilotDateTime: '2024-01-21 11:15',
            status: 'Pending'
        },
    ];

    // Function untuk menghasilkan warna status
    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <Sidenav>
            <div className="p-2">
                {/* Header */}
                <h1 className="text-2xl font-bold text-red-600 mb-2">
                    Monitor Hasil Pelayanan Kapal Pandu
                </h1>

                {/* Breadcrumbs */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                    <Home className="h-4 w-4" />
                    <span>/</span>
                    <Anchor className="h-4 w-4" />
                    <span>MHPKP</span>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-lg shadow-md">
                    {/* Card Header with Add Button */}
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-700">Daftar MHPKP</h2>
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
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. SPKP</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. PKK</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Kapal</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal / Jam Pandu</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {pilotageData.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.spkp}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.pkk}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.shipName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.pilotDateTime}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                                                {item.status}
                                            </span>
                                        </td>
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

export default MHPKPPage;