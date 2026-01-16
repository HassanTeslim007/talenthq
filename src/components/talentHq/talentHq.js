import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Users, FileText, TrendingUp, Mail, Phone, ArrowRight } from 'lucide-react';

const TalentHQWebsite = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Hero carousel images
    const heroImages = [
        { src: `${process.env.PUBLIC_URL}/images/logo.png`, alt: 'TalentHQ Nigeria - HR Consulting', isLogo: true },
        { src: `${process.env.PUBLIC_URL}/images/hero-realistic.png`, alt: 'Professional HR team collaboration' },
        { src: `${process.env.PUBLIC_URL}/images/hero-interview.png`, alt: 'HR professional conducting interview' },
        { src: `${process.env.PUBLIC_URL}/images/hero-training.png`, alt: 'Corporate training session' },
        { src: `${process.env.PUBLIC_URL}/images/hero-celebration.png`, alt: 'Team celebrating success' }
    ];

    // Auto-rotate carousel every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const scrollToSection = (sectionId) => {
        setMobileMenuOpen(false);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white shadow-md z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-3">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                                alt="TalentHQ Logo"
                                className="h-10 w-auto"
                            />
                            <div className="hidden md:block text-sm font-medium text-gray-600">Nigeria</div>
                        </div>

                        <div className="hidden md:flex space-x-8">
                            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition">Home</button>
                            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition">Services</button>
                            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-600 transition">Process</button>
                            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition">About</button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition">Contact</button>
                        </div>

                        <button onClick={() => scrollToSection('contact')} className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                            Get Started
                        </button>

                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700">Home</button>
                            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700">Services</button>
                            <button onClick={() => scrollToSection('process')} className="block w-full text-left py-2 text-gray-700">Process</button>
                            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">About</button>
                            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700">Contact</button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Build a Strong HR Foundation for Your Growing Startup
                            </h1>
                            <p className="text-lg text-gray-600 mb-8">
                                Clear, practical, and scalable people systems without unnecessary bureaucracy.
                                Perfect for early-stage startups and small organizations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                                    Get Your Free Consultation
                                    <ArrowRight className="ml-2" size={20} />
                                </button>
                                <button onClick={() => scrollToSection('services')} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:block relative">
                            {/* Decorative background elements */}
                            <div className="absolute -top-6 -right-6 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                            {/* Carousel Images - No Card Wrapper */}
                            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                                {heroImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className={`w-full h-full ${image.isLogo
                                                ? 'object-contain bg-gradient-to-br from-blue-50 to-white p-12'
                                                : 'object-cover'
                                                }`}
                                        />
                                    </div>
                                ))}

                                {/* Subtle gradient overlay for non-logo images */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Early-Stage Startups Often Grow Faster Than Their Internal Structures
                        </h2>
                        <p className="text-lg text-gray-600">
                            While flexibility is helpful at the beginning, the lack of clear people policies,
                            documentation, and processes can lead to avoidable misunderstandings, compliance risks,
                            and management strain.
                        </p>
                    </div>

                    {/* Two-column layout: Illustration on left, Cards on right */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Team Growth Illustration - Left Side */}
                        <div className="relative">
                            {/* Decorative corner accents */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-blue-500 rounded-tl-3xl opacity-50"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-green-500 rounded-br-3xl opacity-50"></div>

                            {/* Image container with gradient background */}
                            <div className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 p-6 rounded-2xl shadow-xl transform hover:shadow-2xl transition-all duration-300">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/team-growth.png`}
                                    alt="Startup team growth and organizational structure"
                                    className="w-full h-auto rounded-lg relative z-10"
                                />
                                {/* Subtle inner glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-green-400/5 rounded-2xl"></div>
                            </div>
                        </div>

                        {/* Problem Cards - Right Side (Stacked) */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">⚠️</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Compliance Risks</h3>
                                        <p className="text-gray-600">Without proper documentation, you're exposed to legal and regulatory issues.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">🤝</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Misunderstandings</h3>
                                        <p className="text-gray-600">Unclear expectations lead to conflicts between management and staff.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">😓</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">Management Strain</h3>
                                        <p className="text-gray-600">Leaders waste time on preventable people issues instead of growing the business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">HR Foundation Setup</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A lean HR foundation designed to help your company put simple, clear, and scalable
                            people structures in place.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-blue-500 hover:shadow-lg transition">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <Users className="text-blue-600" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">HR Review & Needs Assessment</h3>
                            <p className="text-gray-600 mb-4">Review current practices, identify gaps and risks, and get practical recommendations.</p>
                        </div>

                        <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-blue-500 hover:shadow-lg transition">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <FileText className="text-blue-600" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Employment Documentation</h3>
                            <p className="text-gray-600 mb-4">Standardized contract templates with clear terms, aligned with labor laws.</p>
                        </div>

                        <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-blue-500 hover:shadow-lg transition">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <CheckCircle className="text-blue-600" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Staff Handbook</h3>
                            <p className="text-gray-600 mb-4">Company values, working hours, leave policies, code of conduct, and grievance procedures.</p>
                        </div>

                        <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-blue-500 hover:shadow-lg transition">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-blue-600 text-2xl font-bold">₦</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Pay & Leave Structure</h3>
                            <p className="text-gray-600 mb-4">Documented salary structure, payment timelines, and leave entitlements.</p>
                        </div>

                        <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-blue-500 hover:shadow-lg transition">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp className="text-blue-600" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Role Clarity & Structure</h3>
                            <p className="text-gray-600 mb-4">Simple job descriptions and clear reporting lines for all current staff.</p>
                        </div>

                        <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-blue-500 hover:shadow-lg transition">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">🎓</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Management Handover</h3>
                            <p className="text-gray-600 mb-4">Walk-through of all documents with practical guidance on day-to-day application.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process/Timeline Section */}
            <section id="process" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
                        <p className="text-lg text-gray-600">Completed within 2–4 weeks</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                            <h3 className="text-lg font-semibold mb-2">Week 1</h3>
                            <p className="text-gray-600">Initial briefing and interviews with key staff members</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                            <h3 className="text-lg font-semibold mb-2">Week 2</h3>
                            <p className="text-gray-600">Submission of initial deliverables for review</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                            <h3 className="text-lg font-semibold mb-2">Week 3</h3>
                            <p className="text-gray-600">Final submission of all deliverables</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
                            <h3 className="text-lg font-semibold mb-2">Week 4</h3>
                            <p className="text-gray-600">Documents walkthrough and policy application guidance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment</h2>
                        <p className="text-lg text-gray-600">Simple, transparent pricing</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white border-2 border-blue-600 p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-2">HR Foundation Setup</h3>
                            <div className="text-4xl font-bold text-blue-600 mb-4">₦350,000</div>
                            <p className="text-gray-600 mb-6">Complete foundation setup with all deliverables</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">HR Audit & Recommendations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">Employment Contracts</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">Staff Handbook</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">Job Descriptions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">Pay Structure Documentation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">Management Training Session</span>
                                </li>
                            </ul>
                            <div className="text-sm text-gray-600 mb-4">
                                Payment: 50% upfront, 50% on completion
                            </div>
                        </div>

                        <div className="bg-white border-2 border-gray-200 p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-2">Ongoing HR Support</h3>
                            <div className="text-4xl font-bold text-gray-900 mb-4">₦100,000<span className="text-lg text-gray-600">/month</span></div>
                            <p className="text-gray-600 mb-6">Optional continuous advisory support</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">Staff Guidance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">Performance Check-ins</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">Hiring & Onboarding Support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">HR Policy Updates</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">Compliance Monitoring</span>
                                </li>
                            </ul>
                            <div className="text-sm text-gray-600">
                                Available after foundation setup
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Consultant Photo */}
                        <div className="order-2 md:order-1 relative">
                            {/* Decorative frame */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl opacity-20 blur-lg"></div>

                            {/* Photo container */}
                            <div className="relative">
                                {/* Corner decorations */}
                                <div className="absolute -top-3 -left-3 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
                                <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-green-500 rounded-full opacity-20"></div>

                                {/* Image with frame */}
                                <div className="relative bg-white p-3 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/moshood.png`}
                                        alt="Moshood Abayomi Hassan - HR Consultant"
                                        className="w-full h-auto rounded-xl"
                                    />
                                    {/* Professional badge overlay */}
                                    <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-lg shadow-lg transform hover:scale-110 transition-transform">
                                        <p className="text-sm font-semibold text-blue-600">8+ Years Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Your HR Consultant</h2>
                            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Moshood Abayomi Hassan</h3>
                            <p className="text-gray-700 mb-4">
                                An HR professional with over 8 years' experience helping growing organizations put clear,
                                practical, and scalable people systems in place.
                            </p>
                            <p className="text-gray-700 mb-4">
                                He has worked across financial services, media, outsourcing, and high-growth environments,
                                supporting teams at different stages of growth.
                            </p>
                            <p className="text-gray-700 mb-6">
                                He specializes in translating business goals into lean HR structures that improve role
                                clarity and performance without introducing unnecessary bureaucracy.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="text-green-500" size={20} />
                                    <span className="text-gray-700">HND in Office Technology & Management</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="text-green-500" size={20} />
                                    <span className="text-gray-700">BSc in Business Administration</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="text-green-500" size={20} />
                                    <span className="text-gray-700">Associate, Chartered Institute of Personnel Management (ACIPM)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Expertise Content - Left Side */}
                        <div className="relative">
                            {/* Decorative background element */}
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>

                            <div className="relative bg-white p-8 rounded-xl shadow-lg transform hover:shadow-2xl transition-all duration-300">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-green-600 rounded-full"></div>
                                    Areas of Expertise
                                </h3>
                                <div className="space-y-5">
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-lg">HR Operations</h4>
                                            <p className="text-sm text-gray-600">Building efficient people systems</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-3 h-3 bg-green-600 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-lg">Talent Acquisition</h4>
                                            <p className="text-sm text-gray-600">Finding and hiring the right people</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-lg">Performance Management</h4>
                                            <p className="text-sm text-gray-600">Driving team productivity</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-3 h-3 bg-green-600 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-lg">Workforce Planning</h4>
                                            <p className="text-sm text-gray-600">Strategic team growth</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-lg">Employee Engagement</h4>
                                            <p className="text-sm text-gray-600">Creating positive work cultures</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services Illustration - Right Side with Offset */}
                        <div className="relative lg:mt-16">
                            {/* Animated background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-green-100 to-blue-100 rounded-3xl opacity-50 blur-2xl animate-pulse"></div>

                            {/* Decorative corner elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-blue-400 rounded-tr-3xl opacity-30"></div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-green-400 rounded-bl-3xl opacity-30"></div>

                            {/* Services card with offset */}
                            <div className="relative bg-white p-8 rounded-2xl shadow-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2">
                                {/* Header badge */}
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full shadow-lg">
                                    <p className="text-sm font-semibold">Our Services</p>
                                </div>

                                <img
                                    src={`${process.env.PUBLIC_URL}/images/services-illustration.png`}
                                    alt="HR services and documentation"
                                    className="w-full h-auto rounded-lg mt-4"
                                />

                                {/* Decorative animated dots */}
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                </div>

                                {/* Bottom accent */}
                                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-3 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded-full blur-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            < section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600" >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Build Your HR Foundation?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Hire, manage, and disengage staff confidently and consistently
                    </p>
                    <button onClick={() => scrollToSection('contact')} className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">
                        Get Started Today
                    </button>
                </div>
            </section >

            {/* Contact Section */}
            < section id="contact" className="py-16 px-4 sm:px-6 lg:px-8" >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                        <p className="text-lg text-gray-600">Let's discuss how we can help your organization grow</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Email</h4>
                                        <a href="mailto:careers.mhtalents@gmail.com" className="text-blue-600 hover:underline">careers.mhtalents@gmail.com</a>
                                        <br />
                                        <a href="mailto:moshoodhassan11@gmail.com" className="text-blue-600 hover:underline">moshoodhassan11@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Phone</h4>
                                        <a href="tel:+2348138584744" className="text-blue-600 hover:underline">+234 813 858 4744</a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                                <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
                                <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                                <p className="text-gray-700">Response time: Within 24 hours</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl">
                            <h3 className="text-xl font-semibold mb-4">Quick Inquiry</h3>
                            <p className="text-gray-600 mb-4">
                                Send us an email to discuss your HR needs and get a customized proposal.
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">What to expect:</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                                            <span className="text-sm text-gray-700">Free initial consultation</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                                            <span className="text-sm text-gray-700">Customized proposal for your needs</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                                            <span className="text-sm text-gray-700">No obligation to proceed</span>
                                        </li>
                                    </ul>
                                </div>
                                <a href="mailto:careers.mhtalents@gmail.com" className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                                    Send Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Footer */}
            < footer className="bg-gray-900 text-white py-8" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="text-2xl font-bold mb-2">TalentHQ Nigeria</div>
                        <p className="text-gray-400 mb-4">
                            Helping startups and small firms put lean HR structures in place and drive productivity
                        </p>
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} TalentHQ Nigeria. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer >
        </div >
    );
};

export default TalentHQWebsite;