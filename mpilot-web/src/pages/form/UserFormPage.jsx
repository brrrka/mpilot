import { useState } from 'react';
import { Home, Users, ArrowLeft } from 'lucide-react';
import Sidenav from "../../components/SidenavComponent";

const UserFormPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: '',
        status: 'active'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <Sidenav>
            <div className="p-2">
                {/* Header */}
                <h1 className="text-2xl font-bold text-red-600 mb-2">
                    Tambah User Website
                </h1>

                {/* Breadcrumbs */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                    <Home className="h-4 w-4" />
                    <span>/</span>
                    <Users className="h-4 w-4" />
                    <span>User Management</span>
                    <span>/</span>
                    <span>Tambah User</span>
                </div>

                {/* Back Button */}
                <button className="mb-4 flex items-center text-gray-600 hover:text-red-600 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Kembali
                </button>

                {/* Form Card */}
                <div className="bg-white rounded-lg shadow-md">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-700">Form User Website</h2>
                    </div>

                    <div className="p-6">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-6">
                                {/* Left Column */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Nama Lengkap
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            placeholder="Masukkan nama lengkap"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            placeholder="Masukkan email"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Role
                                        </label>
                                        <select
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="">Pilih Role</option>
                                            <option value="superadmin">Super Admin</option>
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            placeholder="Masukkan password"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Konfirmasi Password
                                        </label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            placeholder="Konfirmasi password"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Status
                                        </label>
                                        <select
                                            name="status"
                                            value={formData.status}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Submit and Cancel Buttons */}
                            <div className="flex justify-end space-x-4 mt-6 pt-4 border-t border-gray-200">
                                <button
                                    type="button"
                                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Sidenav>
    );
};

export default UserFormPage;