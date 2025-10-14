import React from 'react';
import { motion } from 'framer-motion';

const Career = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers</h1>
            <p className="text-xl text-primary-100">
              Join our team of builders and problem-solvers. Grow your career with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">We're always looking for great talent.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Frontend Developer', type: 'Full-time', location: 'Remote' },
              { title: 'Data Engineer', type: 'Full-time', location: 'Chennai / Remote' },
              { title: 'Cloud Architect', type: 'Contract', location: 'Remote' }
            ].map((role, idx) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{role.type} • {role.location}</p>
                <a href="/contact" className="text-primary-600 font-medium hover:underline">Apply Now</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Learn & Grow', desc: 'Training, mentorship, and certifications.' },
              { title: 'Flexible Work', desc: 'Remote-friendly with balanced schedules.' },
              { title: 'Impact', desc: 'Build real solutions for real customers.' }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Don’t see your role?</h2>
            <p className="text-xl text-primary-100 mb-6">Send us your resume and we’ll get in touch.</p>
            <a href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200">Contact Us</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;


