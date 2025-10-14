import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('Data & Analytics');

  const categoryIcons = {
    'Data & Analytics': Database,
    'Development': Code,
    'Data Integration': Wrench,
    'Cloud & Infrastructure': Cloud
  };
  // Proficiency visuals removed; only showing skill names.

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & Tech Stack
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Our expertise spans across modern technologies and tools to deliver cutting-edge solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive skill set across different technology categories
            </p>
          </motion.div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skills.map((category) => {
              const IconComponent = categoryIcons[category.category];
              return (
                <button
                  key={category.category}
                  onClick={() => setSelectedCategory(category.category)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.category}</span>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {skills
              .find(cat => cat.category === selectedCategory)
              ?.technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-600">
                        {tech.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tech.name}
                    </h3>
                    {/* Proficiency bars and badges removed */}
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>
      {/* Expertise Levels section removed */}

      {/* Certifications & Training */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Continuous Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stay current with the latest technologies through continuous learning and certification
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'AWS Certified', description: 'Cloud Solutions Architect' },
              { name: 'Microsoft Azure', description: 'Data Engineer Associate' },
              { name: 'Google Cloud', description: 'Professional Data Engineer' },
              { name: 'Tableau Desktop', description: 'Specialist Certification' }
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Leverage Our Expertise?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technical expertise can help solve your business challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200"
              >
                Start a Project
              </a>
              <a
                href="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
