import { useState } from 'react';
import { Home, Anchor, ArrowLeft } from 'lucide-react';
import Sidenav from "../../components/SidenavComponent";
import { useNavigate } from 'react-router-dom';

const MHPKPFormPage = () => {
    const [formData, setFormData] = useState({
        hpkpNumber: '',
        pkkNumber: '',
        hpkpDate: '',
        ppkNumber: '',
        shipName: '',
        agentName: '',
        grt: '',
        flag: '',
        anchoragePosition: '',
        loa: ''
    });

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/MHPKP');
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <Sidenav>
            <div className="p-2 space-y-6">
                {/* Header */}
                <h1 className="text-2xl font-bold text-red-600 mb-2">
                    Tambah Data MHPKP
                </h1>

                {/* Breadcrumbs */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                    <Home className="h-4 w-4" />
                    <span>/</span>
                    <Anchor className="h-4 w-4" />
                    <span>MHPKP</span>
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
                        <h2 className="text-lg font-semibold text-gray-700">Form Data MHPKP</h2>
                    </div>

                    <div className="p-6">
                        <form>
                            {/* First Section */}
                            <div className="grid grid-cols-2 gap-6 mb-6">
                                {/* Left Column */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Nama HPKP <span className="text-gray-500 italic">/ HPKP Number</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="hpkpNumber"
                                            value={formData.hpkpNumber}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Nomor PKK <span className="text-gray-500 italic">/ PKK Number</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="pkkNumber"
                                            value={formData.pkkNumber}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Tanggal HPKP <span className="text-gray-500 italic">/ HPKP Date</span>
                                        </label>
                                        <input
                                            type="date"
                                            name="hpkpDate"
                                            value={formData.hpkpDate}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Nomor PPK <span className="text-gray-500 italic">/ PPK Number</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="ppkNumber"
                                            value={formData.ppkNumber}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Divider with Section Title */}
                            <div className="border-t-2 border-gray-300 my-6"></div>

                            {/* Section Title */}
                            <h3 className="text-lg font-medium text-gray-800 mb-6">
                                Pelayanan Kemampuan <span className="text-gray-500 italic">/ Pilotage Service</span>
                            </h3>

                            {/* Second Section */}
                            <div className="grid grid-cols-2 gap-6">
                                {/* Left Column */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Nama Kapal <span className="text-gray-500 italic">/ Ship Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="shipName"
                                            value={formData.shipName}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Nama Agen <span className="text-gray-500 italic">/ Agents Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="agentName"
                                            value={formData.agentName}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Isi Kotor <span className="text-gray-500 italic">/ GRT</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="grt"
                                            value={formData.grt}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Bendera <span className="text-gray-500 italic">/ Ships Flag</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="flag"
                                            value={formData.flag}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Posisi Labuh <span className="text-gray-500 italic">/ Anchorage Position</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="anchoragePosition"
                                            value={formData.anchoragePosition}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-1">
                                            Panjang Kapal <span className="text-gray-500 italic">/ Length Overall (LOA)</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="loa"
                                            value={formData.loa}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Calculation Card */}
                <div className="bg-white rounded-lg shadow-md">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Perhitungan Pandu <span className="text-gray-500 italic">/ Pilotage Calculation</span>
                        </h2>
                    </div>

                    <div className="p-6">
                        {/* Pilotage IN Calculation */}
                        <div className="mb-6">
                            <h3 className="font-medium mb-4">I. PERHITUNGAN PANDU MASUK / CALCULATION OF PILOTAGE (IN)</h3>
                            <div className="border-2 border-gray-400 p-1">
                                <table className="w-full border-collapse border-2 border-gray-400">
                                    <tbody>
                                        <tr>
                                            <td className="p-2 w-1/4">
                                                <div className="border border-gray-300 p-2">TARIF TETAP</div>
                                            </td>
                                            <td className="p-2 w-1/4">
                                                <div className="border border-gray-300 p-2">= TARIF x GERAKAN</div>
                                            </td>
                                            <td className="p-2 w-1/4">
                                                <div className="border border-gray-300 p-2">= USD 180.00 x 1</div>
                                            </td>
                                            <td className="p-2 w-1/4">
                                                <div className="border border-gray-300 p-2">= USD 180.00</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">
                                                <div className="border border-gray-300 p-2">TARIF VARIABEL</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="border border-gray-300 p-2">= TARIF x GERAKAN x GRT</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="border border-gray-300 p-2">= USD 0.050 x 1 x 38205</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="border border-gray-300 p-2">= USD 955.13</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" className="p-2">
                                                <div className="border border-gray-300 p-2 text-right">TAGIHAN IN</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="border border-gray-300 p-2">= USD 1,045.13</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Pilotage OUT Calculation */}
                        <div className="mb-6">
                            <h3 className="font-medium mb-4">II. PERHITUNGAN PANDU KELUAR / CALCULATION OF PILOTAGE (OUT)</h3>
                            <div className="border-2 border-gray-400 p-1">
                                <table className="w-full border-collapse border-2 border-gray-400">
                                    <tbody>
                                        <tr>
                                            <td className="p-2 w-1/4">
                                                <div className="border border-gray-300 p-2">TARIF TETAP</div>
                                            </td>
                                            <td className="p-2 w-1/4">
                                                <div className="border border-gray-300 p-2">= TARIF x GERAKAN</div>
                                            </td>
                                            <td className="p-2 w-1/4">
                                                <div className="border border-gray-300 p-2">= USD 180.00 x 1</div>
                                            </td>
                                            <td className="p-2 w-1/4">
                                                <div className="border border-gray-300 p-2">= USD 180.00</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">
                                                <div className="border border-gray-300 p-2">TARIF VARIABEL</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="border border-gray-300 p-2">= TARIF x GERAKAN x GRT</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="border border-gray-300 p-2">= USD 0.050 x 1 x 38205</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="border border-gray-300 p-2">= USD 955.13</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" className="p-2">
                                                <div className="border border-gray-300 p-2 text-right">TAGIHAN OUT</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="border border-gray-300 p-2">= USD 1,045.13</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Total Calculation */}
                        <div className="mb-6">
                            <div className="border-2 border-gray-400 p-1">
                                <table className="w-full border-collapse border-2 border-gray-400">
                                    <tbody>
                                        <tr>
                                            <td colSpan="3" className="p-2">
                                                <div className="border border-gray-300 p-2 text-right">JUMLAH TAGIHAN IN + OUT (USD)</div>
                                            </td>
                                            <td className="p-2 w-1/4">
                                                <div className="border border-gray-300 p-2">= USD 2,0180.50</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" className="p-2">
                                                <div className="border border-gray-300 p-2 text-right">JUMLAH TAGIHAN IN + OUT (IDR)</div>
                                            </td>
                                            <td className="p-2 w-1/4">
                                                <div className="border border-gray-300 p-2">= Rp. 30.0180.000,50</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" className="p-2">
                                                <div className="border border-gray-300 p-2 text-right">PPN 10%</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="border border-gray-300 p-2">= USD 209.03</div>
                                            </td>
                                        </tr>
                                        <tr className="font-bold">
                                            <td colSpan="3" className="p-2">
                                                <div className="border border-gray-300 p-2 text-right">TOTAL TAGIHAN</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="border border-gray-300 p-2">= USD 2,299.28</div>
                                            </td>
                                        </tr>
                                        <tr className="font-bold">
                                            <td colSpan="3" className="p-2">
                                                <div className="border border-gray-300 p-2 text-right">PEMBULATAN</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="border border-gray-300 p-2">= USD 2,300</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Amount in Words */}
                        <div className="mt-6">
                            <div className="border-2 border-gray-400 p-1">
                                <div className="border-2 border-gray-400 p-4 bg-gray-50">
                                    <div className="mb-2">
                                        <span className="font-semibold text-gray-700">Terbilang</span>
                                        <span className="text-gray-500 italic"> / Amount in words</span>
                                    </div>
                                    <div className="font-medium text-gray-800 tracking-wide">
                                        DUA RIBU DUA RATUS SEMBILAN PULUH SEMBILAN DOLLAR KOMA DUA PULUH DELAPAN SEN
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Attention Notes Card - Add this after the Amount in Words div */}
                        <div className="mt-6">
                            <div className="border-2 border-gray-400 p-1">
                                <div className="border-2 border-gray-400 p-4">
                                    <h3 className="font-bold mb-4">PERHATIAN !!!</h3>
                                    <ol className="list-decimal list-inside space-y-2">
                                        <li>Nota ini harus dilunasi setelah Nota diterima Debitur.</li>
                                        <li>
                                            Pembayaran dalam mata uang dollar USD secara bank transfer ke rekening:
                                            <div className="ml-5 mt-1">
                                                <p>Bank Mandiri</p>
                                                <p>Acc. Name: PT. Mitra Rama Samudera</p>
                                                <p>Acc. USD Valas: 157-00-0398040-7</p>
                                            </div>
                                        </li>
                                        <li>Berlaku sebagai faktur pajak setelah lunas.</li>
                                    </ol>
                                    <div className="mt-4">
                                        <p>PT. MITRA RAMA SAMUDERA</p>
                                        <p>N.P.W.P.: 02.615.817.0-412.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Sidenav>
    );
};

export default MHPKPFormPage;