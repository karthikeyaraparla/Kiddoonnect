import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br bg-white">
            {/* Hero Section */}
            <nav className="fixed w-full p-6 flex justify-between items-center z-50">
                <img src="https://res.cloudinary.com/diwdkifv7/image/upload/v1741210986/kc_lmhfm3.png" alt="Logo" className="h-9" />
                <div className="space-x-4">
                    <button
                        onClick={() => navigate('/login')}
                        className="px-6 py-2 text-white bg-[#B592F4] rounded-full hover:bg-white hover:text-[#B592F4] transition-colors border-2 border-[#B592F4]"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => navigate('/register')}
                        className="px-6 py-2 bg-white text-[#B592F4] rounded-full hover:bg-white border-2 border-[#B592F4] transition-colors"
                    >
                        Sign Up
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
                {/* Spline animation container */}
                <div className="absolute inset-0 z-40">
                    <Spline scene="https://prod.spline.design/G7s-w750jRbqPupb/scene.splinecode" />
                </div>

                {/* Content overlay */}
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <h1 className="text-8xl font-thin text-black mb-6 tracking-tighter">
                        Connecting Parents to What Matters Most!
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Empowering parents and healthcare providers with seamless child health record management
                    </p>
                    <button
                        onClick={() => navigate('/register')}
                        className="px-8 py-3 bg-[#B592F4] text-white rounded-full text-lg font-semibold hover:bg-orange-50 transition-colors z-40"
                    >
                        Get Started Free
                    </button>
                </motion.div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white" id="about">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 ">Why Choose Us?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Secure Records",
                                description: "Your child's health data is protected with enterprise-grade security"
                            },
                            {
                                title: "Easy Access",
                                description: "Access records anytime, anywhere with our cloud-based solution"
                            },
                            {
                                title: "Healthcare Integration",
                                description: "Seamless collaboration with healthcare providers"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="p-9 rounded-3xl border-2 border-[#B592F4]">
                                <h3 className="text-xl font-semibold mb-3 text-[#B592F4]">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-[#E3EDFE]" id="testimonials">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Parents Say</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                quote: "This platform has made managing my children's health records so much easier!",
                                author: "Sarah Johnson",
                                role: "Parent of 2"
                            },
                            {
                                quote: "The best solution for keeping track of vaccinations and medical history.",
                                author: "Michael Chen",
                                role: "Parent of 3"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="p-8 bg-white rounded-3xl shadow-sm ">
                                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                                <p className="font-semibold text-[#B592F4]">{testimonial.author}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white" id="contact">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">Get in Touch</h2>
                    <p className="text-gray-600 mb-8">
                        Have questions? We're here to help!
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a href="mailto:karthikeyar1811@gmail.com" className="text-[#B592F4] hover:text-black">
                            karthikeyar1811@gmail.com

                        </a>
                        <span className="text-gray-300">|</span>
                        <a href="tel:+1234567890" className="text-[#B592F4] hover:text-black">
                            +91 999999999
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#B592F4] text-white py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p>© 2024 Your Application. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage; 