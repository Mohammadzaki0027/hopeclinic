import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Star, Users, Zap, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      icon: "🩹",
      title: "Acne Treatment",
      description: "Advanced acne solutions including laser therapy and chemical peels",
    },
    {
      icon: "💇",
      title: "Hair Loss Treatment",
      description: "Comprehensive hair restoration and growth treatments",
    },
    {
      icon: "✨",
      title: "Skin Rejuvenation",
      description: "Facial treatments and skin brightening procedures",
    },
    {
      icon: "🧴",
      title: "Dermatitis Treatment",
      description: "Specialized care for various skin conditions",
    },
    {
      icon: "💉",
      title: "Botox & Fillers",
      description: "Anti-aging treatments and wrinkle reduction",
    },
    {
      icon: "🔆",
      title: "Mole Removal",
      description: "Safe and effective mole and wart removal services",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Excellent treatment for my acne. Dr. is very professional and caring.",
    },
    {
      name: "Rajesh Patel",
      rating: 5,
      text: "Great experience with hair loss treatment. Visible results in 3 months.",
    },
    {
      name: "Sneha Desai",
      rating: 5,
      text: "Best skin clinic in the area. Very hygienic and friendly staff.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              H
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-gray-900">
                The Hope Skin Hospital
              </h1>
              <p className="text-xs text-gray-500">Skin Care Excellence</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition">
              Services
            </a>
            <a href="#doctor" className="text-gray-600 hover:text-primary transition">
              Doctor
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary transition">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition">
              Contact
            </a>
            <a
              href="https://wa.me/919834315358"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              <a
                href="#services"
                className="block text-gray-600 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#doctor"
                className="block text-gray-600 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                Doctor
              </a>
              <a
                href="#about"
                className="block text-gray-600 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-gray-600 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="https://wa.me/919834315358"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-white px-6 py-2 rounded-lg text-center hover:bg-opacity-90 transition"
                onClick={() => setMenuOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-primary/5 to-secondary/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    Dermatology Excellence
                  </motion.span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Healthy Skin,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Happy You
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Welcome to The Hope Skin Hospital - your premier destination for
                  advanced dermatological treatments and skin care excellence. With 4
                  years of specialized experience, we're committed to transforming
                  your skin health.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/919834315358"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition duration-300 text-center"
                  >
                    Book via WhatsApp
                  </a>
                  <a
                    href="#contact"
                    className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition text-center"
                  >
                    Learn More
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div>
                    <p className="text-3xl font-bold text-primary">4+</p>
                    <p className="text-gray-600 text-sm">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">1000+</p>
                    <p className="text-gray-600 text-sm">Happy Patients</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">100%</p>
                    <p className="text-gray-600 text-sm">Satisfaction</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Placeholder clinic image */}
                <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden relative">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#2dd4bf", stopOpacity: 0.1 }} />
                        <stop offset="100%" style={{ stopColor: "#ff6b4a", stopOpacity: 0.1 }} />
                      </linearGradient>
                    </defs>
                    {/* Background */}
                    <rect width="400" height="400" fill="url(#grad1)" />
                    {/* Clinic building */}
                    <rect x="50" y="120" width="300" height="250" fill="#e8f8f5" stroke="#2dd4bf" strokeWidth="2" />
                    {/* Roof */}
                    <polygon points="50,120 200,40 350,120" fill="#2dd4bf" />
                    {/* Door */}
                    <rect x="175" y="280" width="50" height="90" fill="#ff6b4a" />
                    {/* Door handle */}
                    <circle cx="220" cy="325" r="4" fill="#fff" />
                    {/* Windows */}
                    <rect x="80" y="150" width="40" height="40" fill="#87ceeb" stroke="#2dd4bf" strokeWidth="2" />
                    <rect x="140" y="150" width="40" height="40" fill="#87ceeb" stroke="#2dd4bf" strokeWidth="2" />
                    <rect x="220" y="150" width="40" height="40" fill="#87ceeb" stroke="#2dd4bf" strokeWidth="2" />
                    <rect x="280" y="150" width="40" height="40" fill="#87ceeb" stroke="#2dd4bf" strokeWidth="2" />
                    {/* Window panes */}
                    <line x1="100" y1="150" x2="100" y2="190" stroke="#2dd4bf" strokeWidth="1" />
                    <line x1="80" y1="170" x2="120" y2="170" stroke="#2dd4bf" strokeWidth="1" />
                    {/* Cross symbol for medical */}
                    <line x1="80" y1="220" x2="120" y2="220" stroke="#2dd4bf" strokeWidth="3" />
                    <line x1="100" y1="200" x2="100" y2="240" stroke="#2dd4bf" strokeWidth="3" />
                  </svg>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 w-32"
                >
                  <div className="flex items-center gap-2">
                    <div className="text-2xl">⭐</div>
                    <div>
                      <p className="font-bold text-gray-900">4.9/5</p>
                      <p className="text-xs text-gray-500">Patient Rating</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 w-32"
                >
                  <div className="flex items-center gap-2">
                    <div className="text-2xl">✓</div>
                    <div>
                      <p className="font-bold text-gray-900">Certified</p>
                      <p className="text-xs text-gray-500">BUMS MD</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive dermatological treatments tailored to your skin needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section id="doctor" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Doctor Image Placeholder */}
            <motion.div {...slideInLeft} className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden flex items-center justify-center">
                <svg
                  className="w-64 h-64"
                  viewBox="0 0 200 280"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Head */}
                  <circle cx="100" cy="60" r="35" fill="#d4a574" />
                  {/* Hair */}
                  <path
                    d="M 65 45 Q 65 25, 100 25 Q 135 25, 135 45"
                    fill="#3d2817"
                  />
                  {/* Eyes */}
                  <circle cx="90" cy="55" r="4" fill="#000" />
                  <circle cx="110" cy="55" r="4" fill="#000" />
                  {/* Smile */}
                  <path d="M 90 65 Q 100 72, 110 65" stroke="#000" strokeWidth="2" fill="none" />
                  {/* Body - Doctor coat */}
                  <rect x="75" y="100" width="50" height="120" fill="#fff" stroke="#2dd4bf" strokeWidth="2" rx="5" />
                  {/* Stethoscope */}
                  <path
                    d="M 90 110 Q 80 120, 75 140"
                    stroke="#2dd4bf"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 110 110 Q 120 120, 125 140"
                    stroke="#2dd4bf"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Stethoscope circles */}
                  <circle cx="75" cy="140" r="5" fill="#2dd4bf" />
                  <circle cx="125" cy="140" r="5" fill="#2dd4bf" />
                  {/* Hands */}
                  <rect x="60" y="115" width="10" height="60" fill="#d4a574" rx="5" />
                  <rect x="130" y="115" width="10" height="60" fill="#d4a574" rx="5" />
                  {/* Legs */}
                  <rect x="85" y="220" width="10" height="60" fill="#333" />
                  <rect x="105" y="220" width="10" height="60" fill="#333" />
                </svg>
              </div>

              {/* Badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-secondary text-white rounded-full w-24 h-24 flex items-center justify-center font-bold text-center shadow-lg"
              >
                <div className="text-sm">
                  <p className="font-bold">BUMS</p>
                  <p className="text-xs">MD PG</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Doctor Info */}
            <motion.div {...slideInRight} className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Meet Our Expert
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wide">
                    Qualification
                  </p>
                  <p className="text-2xl font-bold text-gray-900">BUMS MD PG in Cosmetology</p>
                </div>

                <div>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wide">
                    Experience
                  </p>
                  <p className="text-2xl font-bold text-gray-900">4+ Years in Dermatology</p>
                </div>

                <div>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wide">
                    Specialization
                  </p>
                  <p className="text-gray-700">
                    Acne treatment, Hair loss solutions, Anti-aging treatments, Skin rejuvenation
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                Our experienced dermatologist is dedicated to providing personalized, 
                compassionate care for all your skin concerns. With advanced techniques 
                and a patient-first approach, we ensure you receive the best possible treatment outcomes.
              </p>

              <div className="pt-4">
                <a
                  href="https://wa.me/919834315358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition"
                >
                  <Phone size={20} />
                  Consult Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About The Hope Skin Hospital
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...slideInLeft} className="space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading dermatology center providing world-class skin care 
                  treatments with compassion, integrity, and excellence.
                </p>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl p-8 border border-secondary/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To deliver advanced dermatological treatments using cutting-edge technology 
                  and evidence-based practices, ensuring optimal results and patient satisfaction.
                </p>
              </div>
            </motion.div>

            <motion.div {...slideInRight} className="space-y-8">
              {[
                { icon: <Star size={24} />, title: "Premium Care", desc: "State-of-the-art facilities" },
                { icon: <Users size={24} />, title: "Expert Team", desc: "Highly qualified specialists" },
                { icon: <Zap size={24} />, title: "Advanced Tech", desc: "Latest treatment methods" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary text-white">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Patient Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from our satisfied patients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">Verified Patient</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Visit Us Today
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div {...slideInLeft} className="space-y-8">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary text-white">
                      <MapPin size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-700">
                      Chota Bazar, Malkapur<br />
                      Dist. Buldana, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary text-white">
                      <Phone size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Contact</h3>
                    <a href="tel:9834315358" className="text-primary hover:underline block mb-2">
                      +91 9834315358
                    </a>
                    <a
                      href="https://wa.me/919834315358"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary text-white">
                      <Clock size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Timings</h3>
                    <p className="text-gray-700 mb-1">Morning: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-700">Evening: 5:00 PM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919834315358"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition text-center flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Book Appointment on WhatsApp
              </a>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div {...slideInRight} className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl overflow-hidden flex items-center justify-center relative">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Map background */}
                  <rect width="400" height="400" fill="#e8f8f5" />
                  {/* Grid lines */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <g key={i}>
                      <line x1={i * 100} y1="0" x2={i * 100} y2="400" stroke="#2dd4bf" strokeWidth="1" opacity="0.3" />
                      <line x1="0" y1={i * 100} x2="400" y2={i * 100} stroke="#2dd4bf" strokeWidth="1" opacity="0.3" />
                    </g>
                  ))}
                  {/* Location pin */}
                  <g transform="translate(200, 180)">
                    {/* Pin shape */}
                    <path
                      d="M 0 0 C -22 -22, -40 -40, -40 -60 C -40 -86.27, -21.84 -108, 0 -108 C 21.84 -108, 40 -86.27, 40 -60 C 40 -40, 22 -22, 0 0 Z"
                      fill="#2dd4bf"
                    />
                    {/* Circle inside pin */}
                    <circle cx="0" cy="-60" r="12" fill="#fff" />
                  </g>
                  {/* Clinic name label */}
                  <text x="200" y="350" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1a4d47">
                    The Hope Skin Hospital
                  </text>
                  <text x="200" y="370" textAnchor="middle" fontSize="12" fill="#2dd4bf">
                    Malkapur, Buldana
                  </text>
                </svg>
              </div>

              {/* Info Card */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-xl p-4 w-56 border-l-4 border-primary"
              >
                <p className="font-bold text-gray-900 mb-1">Old Town Fort</p>
                <p className="text-sm text-gray-600">Malkapur Dist Buldana</p>
                <p className="text-xs text-primary mt-2">Open 9 AM - 10 PM</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-secondary text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your consultation with our expert dermatologist today
          </p>
          <a
            href="https://wa.me/919834315358"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition shadow-lg"
          >
            Get Started on WhatsApp
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-lg">
                  H
                </div>
                <h3 className="font-bold">The Hope Skin Hospital</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted dermatology partner for healthy, beautiful skin.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-primary transition">Services</a></li>
                <li><a href="#doctor" className="hover:text-primary transition">Doctor</a></li>
                <li><a href="#about" className="hover:text-primary transition">About</a></li>
                <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm text-gray-400 mb-2">
                <a href="tel:9834315358" className="hover:text-primary transition">
                  +91 9834315358
                </a>
              </p>
              <p className="text-sm text-gray-400">
                Malkapur, Dist. Buldana
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <p className="text-sm text-gray-400 mb-1">
                Morning: 9 AM - 2 PM
              </p>
              <p className="text-sm text-gray-400">
                Evening: 5 PM - 10 PM
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-gray-400">
              <p>&copy; 2024 The Hope Skin Hospital. All rights reserved.</p>
              <p>Powered by premium dermatology care</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
