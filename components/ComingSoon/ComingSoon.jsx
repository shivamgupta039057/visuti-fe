'use client';
import { useState } from 'react';

const ComingSoon = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);


    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email && email.includes('@')) {
            setIsSubscribed(true);
            setTimeout(() => {
                setEmail('');
                setIsSubscribed(false);
            }, 3000);
        }
    };

    return (
        <>
            <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col items-center justify-center p-4 sm:p-8 mt-40">
                {/* Animated Background Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-500 to-purple-700 rounded-full blur-[100px] opacity-40 animate-float"></div>
                    <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-gradient-to-br from-pink-500 to-red-500 rounded-full blur-[100px] opacity-40 animate-float-delayed"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full blur-[100px] opacity-30 animate-float-slow"></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/50 rounded-full animate-rise"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${8 + Math.random() * 7}s`
                            }}
                        ></div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="relative z-10 max-w-5xl w-full text-center animate-fadeInUp">
                    {/* Brand Section */}
                    <div className="mb-12 sm:mb-16">
                        <div className="relative inline-block mb-4">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/30 rounded-full blur-[60px] animate-pulse-slow"></div>
                            <h1 className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent tracking-tight animate-shimmer">
                                Visuti
                            </h1>
                        </div>
                        <p className="text-base sm:text-lg md:text-xl text-white/70 font-light tracking-[0.2em] uppercase">
                            Something Amazing is Coming
                        </p>
                    </div>

                    {/* Coming Soon Text */}
                    <div className="mb-10 sm:mb-12">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#20DD8E] to-[#098493] blur-3xl opacity-30 animate-pulse-slow"></div>
                            <h2 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-primary via-[#20DD8E] to-[#098493] bg-clip-text text-transparent tracking-tight py-4">
                                COMING SOON
                            </h2>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8 sm:mb-10">
                        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed px-4">
                            We're working hard to bring you an exceptional experience.
                            Subscribe to get notified when we launch!
                        </p>
                    </div>

                    {/* Email Subscription */}
                    <div className="mb-10 sm:mb-12 px-4">
                        {!isSubscribed ? (
                            <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-full p-2 transition-all duration-300 focus-within:border-purple-500/50 focus-within:shadow-lg focus-within:shadow-purple-500/20">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 bg-transparent border-none outline-none px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg text-white placeholder:text-white/40"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="group bg-gradient-to-r from-primary via-[#20DD8E] to-[#098493] hover:shadow-xl hover:shadow-primary/30 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                                    >
                                        <span className="text-base sm:text-lg">Notify Me</span>
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="max-w-2xl mx-auto bg-primary/10 border border-primary/30 rounded-2xl sm:rounded-full px-6 py-4 flex items-center justify-center gap-3 animate-slideIn">
                                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-primary font-medium text-base sm:text-lg">
                                    Thank you! We'll notify you when we launch.
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Social Links */}
                    <div className="mb-8">
                        <p className="text-xs sm:text-sm text-white/50 uppercase tracking-wider mb-4">
                            Follow us on social media
                        </p>
                        <div className="flex gap-3 sm:gap-4 justify-center items-center">
                            {[
                                {
                                    name: 'YouTube',
                                    href: 'https://www.youtube.com/@visuticareer',
                                    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
                                },
                                {
                                    name: 'Facebook',
                                    href: 'https://www.facebook.com/visuticareer?mibextid=ZbWKwL',
                                    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
                                },
                                {
                                    name: 'Instagram',
                                    href: 'https://www.instagram.com/visuticareer/?igshid=ZDdkNTZiNTM%3D',
                                    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
                                },
                                {
                                    name: 'Telegram',
                                    href: 'https://t.me/visuticareer',
                                    path: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'
                                }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href || '#'}
                                    target={social.href ? '_blank' : undefined}
                                    rel={social.href ? 'noopener noreferrer' : undefined}
                                    className="group w-12 h-12 sm:w-14 sm:h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white/70 transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-lg hover:shadow-purple-500/20 relative overflow-hidden"
                                    aria-label={social.name}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                                        <path d={social.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="relative z-10 mt-auto pt-8">
                    <p className="text-xs sm:text-sm text-white/40">
                        &copy; 2026 Visuti. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 50px) scale(1.1); }
          66% { transform: translate(20px, -20px) scale(0.9); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }
        @keyframes rise {
          0% { bottom: -10px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { bottom: 100vh; opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.3); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 20s ease-in-out infinite 5s; }
        .animate-float-slow { animation: float-slow 20s ease-in-out infinite 10s; }
        .animate-rise { animation: rise linear infinite; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out; }
        .animate-shimmer { animation: shimmer 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-slideIn { animation: slideIn 0.5s ease-out; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
        </>
    );
};

export default ComingSoon;
