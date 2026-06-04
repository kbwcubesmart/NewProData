import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

import {
  Building2,
  Clock,
  FolderOpen,
  Target,
  Lightbulb,
  Trophy,
  CheckCircle,
  Calendar,
  BarChart3
} from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find(
    (p) => p.id === parseInt(id)
  );

  if (!project) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-3xl font-bold">
          Project Not Found
        </h2>
      </div>
    );
  }
return (
  <div className="min-h-screen bg-gray-50">

    {/* HERO SECTION */}
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-6">
          {project.title}
        </h1>

        <p className="text-xl text-white/90 max-w-4xl leading-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-6 mt-8">

          <div className="flex items-center">
            <Building2 className="w-5 h-5 mr-2" />
            {project.client}
          </div>

          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            {project.duration}
          </div>

          <div className="flex items-center">
            <FolderOpen className="w-5 h-5 mr-2" />
            {project.category}
          </div>

        </div>
      </div>
    </section>

    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* PROJECT IMPACT */}

      <div className="mb-14">

        <div className="flex items-center mb-8">
          <BarChart3 className="w-8 h-8 text-primary-600 mr-3" />
          <h2 className="text-3xl font-bold">
            Project Impact
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {project.stats?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-primary-600 mb-2">
                {item.value}
              </h3>

              <p className="text-gray-600">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* OVERVIEW */}

      <div className="mb-14 border-l-4 border-primary-600 pl-6">

        <h2 className="text-3xl font-bold mb-5">
          📖 Project Overview
        </h2>

        <p className="text-gray-700 leading-9 text-lg">
          {project.overview}
        </p>

      </div>

      {/* BUSINESS CHALLENGE */}

      <div className="mb-14 border-l-4 border-red-500 pl-6">

        <div className="flex items-center mb-5">
          <Target className="w-7 h-7 text-red-500 mr-3" />
          <h2 className="text-3xl font-bold">
            Business Challenge
          </h2>
        </div>

        <p className="text-gray-700 leading-9 text-lg">
          {project.businessChallenge}
        </p>

      </div>

      {/* SOLUTION */}

      <div className="mb-14 border-l-4 border-yellow-500 pl-6">

        <div className="flex items-center mb-5">
          <Lightbulb className="w-7 h-7 text-yellow-500 mr-3" />
          <h2 className="text-3xl font-bold">
            Solution Delivered
          </h2>
        </div>

        <p className="text-gray-700 leading-9 text-lg">
          {project.solutionDelivered}
        </p>

      </div>

      {/* TECHNOLOGIES */}

      <div className="mb-14">

        <h2 className="text-3xl font-bold mb-6">
          🛠 Technologies Used
        </h2>

        <div className="flex flex-wrap gap-4">

          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-primary-100 text-primary-700 px-5 py-3 rounded-full font-semibold"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>

      {/* FEATURES */}

      <div className="mb-14">

        <h2 className="text-3xl font-bold mb-6">
          ✨ Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          {project.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-md rounded-lg p-4"
            >
              <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
              {feature}
            </div>
          ))}

        </div>

      </div>

      {/* TIMELINE */}

      <div className="mb-14">

        <div className="flex items-center mb-6">
          <Calendar className="w-7 h-7 text-primary-600 mr-3" />
          <h2 className="text-3xl font-bold">
            Project Timeline
          </h2>
        </div>

        <div className="space-y-4">

          {project.timeline?.map((step, index) => (
  <div
    key={index}
    className="flex items-center bg-white shadow-lg rounded-xl p-5 border-l-4 border-primary-600"
  >
    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold mr-4">
      {index + 1}
    </div>

    <span className="font-medium text-gray-800">
      {step}
    </span>
  </div>
))}

        </div>

      </div>

      {/* OUTCOME */}

      <div className="mb-14 border-l-4 border-green-500 pl-6">

        <div className="flex items-center mb-5">
          <Trophy className="w-7 h-7 text-green-500 mr-3" />
          <h2 className="text-3xl font-bold">
            Project Outcome
          </h2>
        </div>

        <p className="text-gray-700 leading-9 text-lg">
          {project.projectOutcome}
        </p>

      </div>

      {/* BACK BUTTON */}

      <div className="text-center">

        <Link
          to="/projects"
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-xl font-bold transition-all"
        >
          ← Back To Projects
        </Link>

      </div>

    </div>

  </div>
);
 
};

export default ProjectDetails;