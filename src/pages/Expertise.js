import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Expertise = () => {
  const [selectedCategory, setSelectedCategory] = useState('Data & Analytics');

  const categoryIcons = {
    'Development': Code,
    'Machine Learning & Big Data': Wrench,
    'Data & Analytics': Database,
    'Data Integration': Wrench,
    'Cloud & Infrastructure': Cloud
  };

  const orderedCategories = [
    'Development',
    'Machine Learning & Big Data',
    'Data & Analytics',
    'Data Integration',
    'Cloud & Infrastructure'
  ];

  const getTechBgColor = (name) => {
    const n = name.toLowerCase();
    if (n.includes('react')) return '#E6F6FF';
    if (n.includes('angular')) return '#FDE3E3';
    if (n.includes('vue')) return '#E8F5E9';
    if (n.includes('node')) return '#E8F5E9';
    if (n.includes('python')) return '#FFF8E1';
    if (n.includes('java')) return '#FFF3E0';
    if (n.includes('typescript')) return '#E3F2FD';
    if (n.includes('javascript')) return '#FFFDE7';
    if (n.includes('aws')) return '#FFF3E0';
    if (n.includes('azure')) return '#E3F2FD';
    if (n.includes('google')) return '#E8F5E9';
    if (n.includes('docker')) return '#E3F2FD';
    if (n.includes('kubernetes')) return '#E3F2FD';
    if (n.includes('terraform')) return '#E8EAF6';
    if (n.includes('sql')) return '#E0F2F1';
    if (n.includes('spark')) return '#FFF3E0';
    if (n.includes('tableau')) return '#E3F2FD';
    if (n.includes('power bi') || n.includes('powerbi')) return '#FFFDE7';
    return '#F3F4F6';
  };

  const getTechTextColor = (name) => {
    return '#0F172A';
  };

  const getTechIconLetter = (name) => {
    const parts = name.split(' ');
    if (parts.length > 1) return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.charAt(0).toUpperCase();
  };

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
              Expertise & Tech Stack
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
            {orderedCategories
              .map(name => skills.find(c => c.category === name))
              .filter(Boolean)
              .map((category) => {
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

          {/* Technologies Grid */}
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
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                         style={{ backgroundColor: getTechBgColor(tech.name) }}>
                      <span className="text-2xl font-bold" style={{ color: getTechTextColor(tech.name) }}>
                        {getTechIconLetter(tech.name)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tech.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
          </motion.div>
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

export default Expertise;


