import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const Hero = () => {
  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Success Rate" }
  ];

  const features = [
    "Data Warehousing & Integration",
    "Business Analytics & Reporting", 
    "Full Stack Development",
    "Machine Learning & Big Data"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(32, 178, 170, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(32, 178, 170, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 right-16 w-48 h-48 bg-primary-400/15 rounded-full blur-2xl"
        />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            {/* Company Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Trusted by Fortune 500 Companies
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
            >
              IT Services &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                Solutions
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              Transform your business with cutting-edge data warehousing, analytics, 
              and full-stack development solutions. We help you unlock the power of your data.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </motion.div>


            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
              >
                <span>Get Started Today</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group flex items-center justify-center px-8 py-4 border border-gray-600 text-gray-300 hover:text-white hover:border-primary-500 rounded-lg transition-all duration-300"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full h-80 sm:h-96 lg:h-[500px]">
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  x1="50%" y1="50%" x2="25%" y2="25%"
                  stroke="rgba(32, 178, 170, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.2, duration: 1.5 }}
                  x1="50%" y1="50%" x2="75%" y2="35%"
                  stroke="rgba(32, 178, 170, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.4, duration: 1.5 }}
                  x1="50%" y1="50%" x2="30%" y2="75%"
                  stroke="rgba(32, 178, 170, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.6, duration: 1.5 }}
                  x1="50%" y1="50%" x2="80%" y2="85%"
                  stroke="rgba(32, 178, 170, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>

              {/* Floating Cards - All Equal Size */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-primary-500/10 backdrop-blur-sm rounded-2xl border border-primary-500/20 p-2 sm:p-4"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-xl flex items-center justify-center">
                  <span className="text-primary-400 font-bold text-xs sm:text-sm text-center leading-tight">Data Analytics</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-8 sm:top-16 right-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-primary-500/10 backdrop-blur-sm rounded-2xl border border-primary-500/20 p-2 sm:p-4"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-xl flex items-center justify-center">
                  <span className="text-primary-400 font-bold text-xs sm:text-sm text-center leading-tight">Cloud</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-12 sm:bottom-16 left-4 sm:left-8 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-primary-500/10 backdrop-blur-sm rounded-2xl border border-primary-500/20 p-2 sm:p-4"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-xl flex items-center justify-center">
                  <span className="text-primary-400 font-bold text-xs sm:text-sm text-center leading-tight">Full Stack</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 18, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute bottom-0 right-4 sm:right-8 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-primary-500/10 backdrop-blur-sm rounded-2xl border border-primary-500/20 p-2 sm:p-4"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-xl flex items-center justify-center">
                  <span className="text-primary-400 font-bold text-xs sm:text-sm text-center leading-tight">ML & AI</span>
                </div>
              </motion.div>

              {/* Central Static NPD Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-primary-500/20 backdrop-blur-sm rounded-full border-2 border-primary-500/30 flex items-center justify-center shadow-lg">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-primary-500/30 rounded-full flex items-center justify-center">
                  <span className="text-primary-400 font-bold text-sm sm:text-lg">NPD</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
