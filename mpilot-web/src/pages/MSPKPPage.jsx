import { Plus, Eye, FileText, Home, Ship } from 'lucide-react';
import Sidenav from '../components/SidenavComponent';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MSPKPPage = () => {
    // Dummy data
    const [mspkpData] = useState([
        {
            id: 1,
            noPkk: 'PKK.DN.IDSTU.2501.000612',
            namaKapal: 'HASNUR 301',
            noPpk: 'PPK.IDSTU.0125.003526',
            noSpk: 'IDSTU-SPKN-MRS-2501-172B',
            waktuPandu: '2023-01-30 09:30:00',
            pandu: 'HANIF FAHRI',
            lokasi: {
                asal: 'TERSUS PT. Bayan Resources Tbk',
                tujuan: 'AREA LABUH Anchorage Satui'
            },
            kegiatan: 'Pindah',
            status: 'DISETUJUI'
        },
        {
            id: 2,
            noPkk: 'PKK.DN.IDSTU.2501.000611',
            namaKapal: 'HASNUR 01',
            noPpk: 'PPK.IDSTU.0125.003525',
            noSpk: 'IDSTU-SPKN-MRS-2501-172A',
            waktuPandu: '2023-01-30 09:30:00',
            pandu: 'HANIF FAHRI',
            lokasi: {
                asal: 'TERSUS PT. Bayan Resources Tbk',
                tujuan: 'AREA LABUH Anchorage Satui'
            },
            kegiatan: 'Pindah',
            status: 'DISETUJUI'
        },
        {
            id: 3,
            noPkk: 'PKK.DN.IDSTU.2501.000602',
            namaKapal: 'APAR',
            noPpk: '',
            noSpk: 'IDSTU-SPK/OUT-MRS-2501-166B-P11',
            waktuPandu: '2023-01-30 10:00:00',
            pandu: 'AGUS SUBIAKTO',
            lokasi: {
                asal: 'TERSUS PT. Arutmin Indonesia',
                tujuan: 'LAUT'
            },
            kegiatan: 'Keluar',
            status: 'MENUNGGU AGEN MENGAJUKAN PKK'
        },
        {
            id: 4,
            noPkk: 'PKK.DN.IDSTU.2501.000603',
            namaKapal: 'TJA 288',
            noPpk: '',
            noSpk: 'IDSTU-SPK/OUT-MRS-2501-166A-P11',
            waktuPandu: '2023-01-30 10:00:00',
            pandu: 'AGUS SUBIAKTO',
            lokasi: {
                asal: 'TERSUS PT. Arutmin Indonesia',
                tujuan: 'LAUT'
            },
            kegiatan: 'Keluar',
            status: 'MENUNGGU AGEN MENGAJUKAN PKK'
        }
    ]);

    const navigate = useNavigate();

    const handleAddButtonClick = () => {
        navigate('/mspkp/form');
    }

    return (
        <Sidenav>
            <div className="p-2">
                {/* Header */}
                <h1 className="text-2xl font-bold text-red-600 mb-2">
                    Data MSPKP
                </h1>

                {/* Breadcrumbs */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                    <Home className="h-4 w-4" />
                    <span>/</span>
                    <Ship className="h-4 w-4" />
                    <span>MSPKP</span>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-lg shadow-md">
                    {/* Card Header with Add Button */}
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-700">Daftar MSPKP</h2>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors" onClick={handleAddButtonClick}>
                            <Plus className="h-4 w-4" />
                            <span>Add Data</span>
                        </button>
                    </div>

                    {/* Table Section */}
                    <div className="p-4">
                        {/* Show Entries */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-600">Show</span>
                                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                </select>
                                <span className="text-sm text-gray-600">entries</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-600">Search:</span>
                                <input
                                    type="search"
                                    className="border border-gray-300 rounded px-3 py-1 text-sm"
                                />
                            </div>
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
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No SPK</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waktu Pandu</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pandu</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lokasi</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kegiatan</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mspkpData.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.noPkk}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.namaKapal}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.noPpk}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.noSpk}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.waktuPandu}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.pandu}</td>
                                            <td className="px-6 py-4 text-sm text-gray-900">
                                                <div>
                                                    <p><span className="font-medium">Asal:</span> {item.lokasi.asal}</p>
                                                    <p><span className="font-medium">Tujuan:</span> {item.lokasi.tujuan}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.kegiatan}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span className={`px-2 py-1 rounded-full text-xs ${item.status === 'DISETUJUI' ? 'bg-green-100 text-green-600' :
                                                    item.status === 'MENUNGGU AGEN MENGAJUKAN PKK' ? 'bg-yellow-100 text-yellow-600' :
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
                                                        <span>SPK</span>
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
            </div>
        </Sidenav>
    );
};

export default MSPKPPage;