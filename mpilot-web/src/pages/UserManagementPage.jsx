import { Plus, Eye, Edit, Trash2, Home, Users } from 'lucide-react';
import Sidenav from "../components/SidenavComponent";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserManagementPage = () => {
    // Dummy data untuk users website
    const [webUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Super Admin', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Active' },
        { id: 3, name: 'Alice Williams', email: 'alice@example.com', role: 'User', status: 'Active' },
    ]);

    // Dummy data untuk pandu
    const [panduUsers] = useState([
        {
            id: 1,
            name: 'Bob Johnson',
            nip: '198505152010011022',
            wilayah: 'Pelabuhan Utama',
            status: 'Active',
            keterangan: 'Shift Pagi'
        },
        {
            id: 2,
            name: 'Charlie Brown',
            nip: '199003172012011033',
            wilayah: 'Pelabuhan Bantu',
            status: 'Active',
            keterangan: 'Shift Malam'
        },
        {
            id: 3,
            name: 'David Wilson',
            nip: '198708232011011044',
            wilayah: 'Pelabuhan Utama',
            status: 'Inactive',
            keterangan: 'Cuti'
        },
    ]);

    const navigate = useNavigate();

    const handleAddButtonClick = (type) => {
        navigate(`/user-management/${type}-form`);
    }

    return (
        <Sidenav>
            <div className="p-2">
                {/* Header */}
                <h1 className="text-2xl font-bold text-red-600 mb-2">
                    Manajemen User
                </h1>

                {/* Breadcrumbs */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                    <Home className="h-4 w-4" />
                    <span>/</span>
                    <Users className="h-4 w-4" />
                    <span>User Management</span>
                </div>

                {/* Website Users Card */}
                <div className="bg-white rounded-lg shadow-md mb-6">
                    {/* Card Header with Add Button */}
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-700">Daftar User Website</h2>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors" onClick={() => handleAddButtonClick('user')}>
                            <Plus className="h-4 w-4" />
                            <span>Add User</span>
                        </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {webUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`px-2 py-1 rounded-full text-xs ${user.role === 'Super Admin' ? 'bg-purple-100 text-purple-600' :
                                                user.role === 'Admin' ? 'bg-blue-100 text-blue-600' :
                                                    'bg-gray-100 text-gray-600'
                                                }`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`px-2 py-1 rounded-full text-xs ${user.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                                                }`}>
                                                {user.status}
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

                {/* Pandu Users Card */}
                <div className="bg-white rounded-lg shadow-md">
                    {/* Card Header with Add Button */}
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-700">Daftar Pandu</h2>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors" onClick={() => handleAddButtonClick('pandu')}>
                            <Plus className="h-4 w-4" />
                            <span>Add Pandu</span>
                        </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NIP</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wilayah</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keterangan</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {panduUsers.map((pandu) => (
                                    <tr key={pandu.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pandu.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pandu.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pandu.nip}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pandu.wilayah}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`px-2 py-1 rounded-full text-xs ${pandu.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                                                }`}>
                                                {pandu.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pandu.keterangan}</td>
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

export default UserManagementPage;