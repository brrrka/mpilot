import { Plus, Eye, FileText, Home, Ship } from 'lucide-react';
import Sidenav from "../components/SidenavComponent";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MRPKROPage = () => {
    // Dummy data
    const [mrpkroData] = useState([
        {
            id: 1,
            noPkk: 'PKK.DN.IDSTU.2501.000640',
            namaKapal: 'MAPAN 200',
            noPpk: 'PPK.IDSTU.0125.003534',
            noRpkro: 'IDSTU-RPOK-MRS-2501-176B',
            lokasi: 'AREA LABUH Rede Dalam Satui',
            waktuRencana: '2025-01-29 17:00:00',
            waktuMulai: '2025-01-29 17:00:00',
            waktuSelesai: '2025-01-30 23:00:00',
            status: 'VERIFIKASI'
        },
        {
            id: 2,
            noPkk: 'PKK.DN.IDSTU.2501.000641',
            namaKapal: 'EQUATOR 02',
            noPpk: '',
            noRpkro: 'IDSTU-RPOK-MRS-2501-176A',
            lokasi: 'AREA LABUH Rede Dalam Satui',
            waktuRencana: '2025-01-29 17:00:00',
            waktuMulai: '2025-01-29 17:00:00',
            waktuSelesai: '2025-01-30 23:00:00',
            status: 'VERIFIKASI'
        },
        {
            id: 3,
            noPkk: 'PKK.DN.IDSTU.2501.000632',
            namaKapal: 'ETI 3301',
            noPpk: 'PPK.IDSTU.0125.003534',
            noRpkro: 'IDSTU-RPOK-MRS-2501-175B',
            lokasi: 'AREA LABUH Rede Dalam Satui',
            waktuRencana: '2025-01-29 23:00:00',
            waktuMulai: '2025-01-29 23:00:00',
            waktuSelesai: '2025-01-31 23:00:00',
            status: 'DISETUJUI'
        }
    ]);

    const navigate = useNavigate();

    const handleAddButtonClick = () => {
        navigate('/mrpkro/form');
    }

    return (
        <Sidenav>
            <div className="p-2">
                {/* Header */}
                <h1 className="text-2xl font-bold text-red-600 mb-2">
                    Data MRPKRO
                </h1>

                {/* Breadcrumbs */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                    <Home className="h-4 w-4" />
                    <span>/</span>
                    <Ship className="h-4 w-4" />
                    <span>MRPKRO</span>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-lg shadow-md">
                    {/* Card Header with Add Button */}
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-700">Daftar MRPKRO</h2>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors" onClick={handleAddButtonClick}>
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
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nomor PKK</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Kapal</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No PPK</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No RPKRO</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lokasi</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waktu</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {mrpkroData.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.noPkk}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.namaKapal}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.noPpk}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.noRpkro}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.lokasi}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div className="space-y-1">
                                                <p>
                                                    <span className="font-medium">Rencana:</span> {item.waktuRencana}
                                                </p>
                                                <p>
                                                    <span className="font-medium">Mulai:</span> {item.waktuMulai}
                                                </p>
                                                <p>
                                                    <span className="font-medium">Selesai:</span> {item.waktuSelesai}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`px-2 py-1 rounded-full text-xs ${item.status === 'VERIFIKASI' ? 'bg-purple-100 text-purple-600' :
                                                item.status === 'DISETUJUI' ? 'bg-green-100 text-green-600' :
                                                    'bg-gray-100 text-gray-600'
                                                }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div className="flex space-x-2">
                                                <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 flex items-center space-x-1">
                                                    <Eye className="h-4 w-4" />
                                                    <span>View</span>
                                                </button>
                                                <button className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-lg hover:bg-yellow-200 flex items-center space-x-1">
                                                    <FileText className="h-4 w-4" />
                                                    <span>EPB</span>
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

export default MRPKROPage;