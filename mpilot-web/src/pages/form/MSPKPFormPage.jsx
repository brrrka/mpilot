import { useState } from 'react';
import { Home, Ship, ArrowLeft } from 'lucide-react';
import Sidenav from "../../components/SidenavComponent";
import { useNavigate } from 'react-router-dom';

const MSPKPFormPage = () => {
    const [formData, setFormData] = useState({
        nomor_pkk: '',
        nomor_ppk: '',
        panjang_kapal: '',
        lebar_kapal: '',
        gt_kapal: '',
        no_spk_pandu: '',
        petugas_pandu: '',
        kapal_pandu: '',
        kapal_tunda: '',
        tanggal_pandu: '',
        jam_pandu: '',
        lokasi_awal: 'LAUT',
        lokasi_akhir: 'LAUT',
        jenis_pandu: '',
        keperluan: '',
        waktu_gerak: ''
    });

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/mspkp')
    }

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
                    Tambah SPKP
                </h1>

                {/* Breadcrumbs */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                    <Home className="h-4 w-4" />
                    <span>/</span>
                    <Ship className="h-4 w-4" />
                    <span>SPKP</span>
                    <span>/</span>
                    <span>Tambah Data</span>
                </div>

                {/* Back Button */}
                <button className="mb-4 flex items-center text-gray-600 hover:text-red-600 transition-colors" onClick={handleBackButtonClick}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Kembali
                </button>

                {/* Form Card */}
                <div className="bg-white rounded-lg shadow-md">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-700">Permohonan SPK Pandu</h2>
                    </div>

                    <div className="p-6">
                        {/* Perhatian Section */}
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                            <h3 className="font-medium text-yellow-800 mb-2">PERHATIAN !!</h3>
                            <ul className="list-disc list-inside text-sm text-yellow-800 space-y-1">
                                <li>Untuk Kegiatan Masuk, Lokasi Awal adalah LAUT</li>
                                <li>Untuk Kegiatan Keluar, Lokasi Akhir adalah LAUT</li>
                                <li>Panjang Kapal 70 Sampai 150 menggunakan 1 kapal tunda</li>
                                <li>Panjang Kapal 151 Sampai 250 menggunakan 2 kapal tunda</li>
                                <li>Panjang Kapal 251 ke atas menggunakan 3 kapal tunda</li>
                            </ul>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Column 1 */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Nomor PKK <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="nomor_pkk"
                                            value={formData.nomor_pkk}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Lebar Kapal <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="lebar_kapal"
                                            value={formData.lebar_kapal}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Petugas Pandu <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="petugas_pandu"
                                            value={formData.petugas_pandu}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="">Pilih Petugas</option>
                                            <option value="AGUS SUBIAKTO">AGUS SUBIAKTO</option>
                                            <option value="HANIF FAHRI">HANIF FAHRI</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Kapal Pandu - Max 2 Kapal <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="kapal_pandu"
                                            value={formData.kapal_pandu}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Lokasi Akhir <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="lokasi_akhir"
                                            value={formData.lokasi_akhir}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="LAUT">LAUT</option>
                                            <option value="DERMAGA">DERMAGA</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Nomor PPK <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="nomor_ppk"
                                            value={formData.nomor_ppk}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            GT Kapal <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="gt_kapal"
                                            value={formData.gt_kapal}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Tanggal Pandu <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            name="tanggal_pandu"
                                            value={formData.tanggal_pandu}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Kapal Tunda - Max 4 Kapal
                                        </label>
                                        <input
                                            type="text"
                                            name="kapal_tunda"
                                            value={formData.kapal_tunda}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                        <p className="text-xs text-red-500 mt-1">Text ikutan penggunaan kapal tunda sesuai dengan panjang kapal !</p>
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Jenis Pandu <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="jenis_pandu"
                                            value={formData.jenis_pandu}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="">Pilih Jenis</option>
                                            <option value="Sungai">Sungai</option>
                                            <option value="Laut">Laut</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Panjang Kapal <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="panjang_kapal"
                                            value={formData.panjang_kapal}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            No SPK Pandu
                                        </label>
                                        <div className="flex items-center space-x-2">
                                            <span className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500">IDSTU</span>
                                            <input
                                                type="text"
                                                value="Nomor SPK - Otomatis"
                                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                                disabled
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Jam Pandu <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="time"
                                            name="jam_pandu"
                                            value={formData.jam_pandu}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Lokasi Awal <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="lokasi_awal"
                                            value={formData.lokasi_awal}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="LAUT">LAUT</option>
                                            <option value="DERMAGA">DERMAGA</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Keperluan / Kegiatan <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="keperluan"
                                            value={formData.keperluan}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="">Pilih Keperluan</option>
                                            <option value="Masuk">Masuk</option>
                                            <option value="Keluar">Keluar</option>
                                            <option value="Pindah">Pindah</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Waktu Gerak <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="datetime-local"
                                            name="waktu_gerak"
                                            value={formData.waktu_gerak}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit and Cancel Buttons */}
                            <div className="flex justify-end space-x-4 mt-6 pt-4 border-t border-gray-200">
                                <button
                                    type="button"
                                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Kembali
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

export default MSPKPFormPage;