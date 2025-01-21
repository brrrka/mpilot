import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
        console.log('Login attempt:', formData);
    };

    return (
        <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center p-4">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48">
                {/* Top-left image placeholder */}
                <div className="w-full h-full bg-gray-100 rounded-full border-2 border-[#90B77D] opacity-50" />
            </div>

            <div className="absolute bottom-0 right-0 w-40 h-40 md:w-56 md:h-56">
                {/* Bottom-right image placeholder */}
                <div className="w-full h-full border-2 border-[#90B77D] rounded-full opacity-50" />
            </div>

            <div className="absolute top-10 right-10 w-8 h-8">
                {/* Top-right small square placeholder */}
                <div className="w-full h-full border-2 border-[#90B77D] rotate-45" />
            </div>

            {/* Login Form Card */}
            <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-lg relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#42855B]">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-[#90B77D] focus:ring-1 focus:ring-[#90B77D]"
                            placeholder="Ketikkan email"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#42855B]">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-[#90B77D] focus:ring-1 focus:ring-[#90B77D]"
                                placeholder="Ketikkan password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                ) : (
                                    <Eye className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-[#90B77D] text-white rounded-full hover:bg-[#42855B] transition-colors duration-200 font-medium"
                    >
                        Masuk
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;