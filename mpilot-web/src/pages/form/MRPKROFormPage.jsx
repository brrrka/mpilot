import { useState } from 'react';
import { Home, Ship, ArrowLeft } from 'lucide-react';
import Sidenav from "../../components/SidenavComponent";

const MRPKROFormPage = () => {
    const [formData, setFormData] = useState({
        jenis_rpkro: '',
        nomor_layanan: '',
        nomor_rpkro: '',
        lokasi: '',
        tanggal_rencana: '',
        jam_rencana: '',
        keterangan: '',
        gambar_tambahan: null,
        // Detail RPKRO
        nomor_rkbm: '',
        nomor_ppkb: '',
        komoditi: '',
        bongkar: '',
        muat: '',
        tanggal_mulai: '',
        jam_mulai: '',
        tanggal_selesai: '',
        jam_selesai: '',
        kade_meter_awal: '',
        kade_meter_akhir: '',

        // Tambahkan di dalam useState
        tanggal_mulai_pandu: '',
        jam_mulai_pandu: '',
        tanggal_selesai_pandu: '',
        jam_selesai_pandu: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            gambar_tambahan: e.target.files[0]
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
                    Tambah MRPKRO
                </h1>

                {/* Breadcrumbs */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                    <Home className="h-4 w-4" />
                    <span>/</span>
                    <Ship className="h-4 w-4" />
                    <span>MRPKRO</span>
                    <span>/</span>
                    <span>Tambah Data</span>
                </div>

                {/* Back Button */}
                <button className="mb-4 flex items-center text-gray-600 hover:text-red-600 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Kembali
                </button>

                {/* Form Card */}
                <div className="bg-white rounded-lg shadow-md">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-700">Form RPKRO</h2>
                    </div>

                    <div className="p-6">
                        <form onSubmit={handleSubmit}>
                            {/* RPKRO Section */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Jenis RPKRO <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="jenis_rpkro"
                                            value={formData.jenis_rpkro}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="">Pilih Jenis</option>
                                            <option value="masuk">Masuk</option>
                                            <option value="keluar">Keluar</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Lokasi Sandar/Labuh <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="lokasi"
                                            value={formData.lokasi}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Gambar Tambahan
                                        </label>
                                        <input
                                            type="file"
                                            name="gambar_tambahan"
                                            onChange={handleFileChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Nomor Layanan/Produk <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="nomor_layanan"
                                            value={formData.nomor_layanan}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Tanggal Rencana <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            name="tanggal_rencana"
                                            value={formData.tanggal_rencana}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Jam Rencana <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="time"
                                            name="jam_rencana"
                                            value={formData.jam_rencana}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Nomor RPKRO
                                        </label>
                                        <input
                                            type="text"
                                            value="IDSTU - Nomor RPKRO - Otomatis"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                            disabled
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Keterangan
                                        </label>
                                        <textarea
                                            name="keterangan"
                                            value={formData.keterangan}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Detail RPKRO Section */}
                            <div className="border-t border-gray-200 pt-6 mb-8">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4">Detail RPKRO</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                                Nomor RKBM
                                            </label>
                                            <select
                                                name="nomor_rkbm"
                                                value={formData.nomor_rkbm}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            >
                                                <option value="">Pilih Nomor RKBM</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                                Bongkar (Ton)
                                            </label>
                                            <input
                                                type="number"
                                                name="bongkar"
                                                value={formData.bongkar}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                                Tanggal Mulai <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="date"
                                                name="tanggal_mulai"
                                                value={formData.tanggal_mulai}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                                Jam Mulai <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="time"
                                                name="jam_mulai"
                                                value={formData.jam_mulai}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                                Kade Meter Awal <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                name="kade_meter_awal"
                                                value={formData.kade_meter_awal}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                                Nomor PPKB
                                            </label>
                                            <div className="flex items-center space-x-2">
                                                <span className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500">IDSTU</span>
                                                <input
                                                    type="text"
                                                    value="Nomor PPKB - Otomatis"
                                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                                    disabled
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                                Muat (Ton)
                                            </label>
                                            <input
                                                type="number"
                                                name="muat"
                                                value={formData.muat}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                                Tanggal Selesai <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="date"
                                                name="tanggal_selesai"
                                                value={formData.tanggal_selesai}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                                Jam Selesai <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="time"
                                                name="jam_selesai"
                                                value={formData.jam_selesai}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                                Kade Meter Akhir <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                name="kade_meter_akhir"
                                                value={formData.kade_meter_akhir}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                                Komoditi
                                            </label>
                                            <input
                                                type="text"
                                                name="komoditi"
                                                value={formData.komoditi}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Service Pandu Section */}
                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4">Service Pandu</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Kolom Kiri */}
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                                Tanggal Mulai Pandu
                                            </label>
                                            <input
                                                type="date"
                                                name="tanggal_mulai_pandu"
                                                value={formData.tanggal_mulai_pandu}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                                Jam Mulai Pandu
                                            </label>
                                            <input
                                                type="time"
                                                name="jam_mulai_pandu"
                                                value={formData.jam_mulai_pandu}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                    {/* Kolom Kanan */}
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                                Tanggal Selesai Pandu
                                            </label>
                                            <input
                                                type="date"
                                                name="tanggal_selesai_pandu"
                                                value={formData.tanggal_selesai_pandu}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                                Jam Selesai Pandu
                                            </label>
                                            <input
                                                type="time"
                                                name="jam_selesai_pandu"
                                                value={formData.jam_selesai_pandu}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            />
                                        </div>
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

export default MRPKROFormPage;