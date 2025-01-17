import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="flex h-screen w-full">
            {/* Left side - Form */}
            <div className="w-1/2 flex flex-col justify-center items-center p-16">
                <div className="w-full max-w-md">
                    <h1 className="text-7xl font-bold mb-2 text-red-500">MPilot</h1>
                    <p className="text-gray-600 mb-8 text-lg">Selamat datang kembali! Silahkan login ke akun mu</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xl font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xl font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-400" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember" className="ml-2 text-md text-gray-600">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="text-md text-red-500 hover:text-red-600">
                                Lupa Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200 text-lg"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="mt-8 text-center text-md text-gray-600">
                        Belum punya akun?{' '}
                        <a href="/register" className="text-red-500 hover:text-red-600 font-medium text-md">
                            Daftar disini!
                        </a>
                    </p>
                </div>
            </div>

            {/* Right side - Image */}
            <div className="w-11/12 bg-gray-100">
                <img
                    src="/images/login.jpg"
                    alt="Login illustration"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default LoginPage;