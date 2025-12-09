import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, Linkedin, GraduationCap } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Esteban Andrés Rodríguez Meléndez",
      subtitle: "Master's Program Application",
      content: (
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold">
              ER
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Systems & Mechatronics Engineering</h3>
            <p className="text-lg text-gray-600">Universidad Nacional de Colombia</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mt-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Research Focus</h4>
              <p className="text-sm text-gray-700">Robotics, AI, Materials Science</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Experience</h4>
              <p className="text-sm text-gray-700">Software Dev, IoT, Cloud Engineering</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <a href="https://www.linkedin.com/in/earodriguezmelendez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://scholar.google.com/citations?user=15pZM9kAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <GraduationCap size={20} />
              <span className="text-sm">Google Scholar</span>
            </a>
            <a href="https://github.com/EARodriguezM" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <Github size={20} />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      )
    },
    {
      title: "Academic & Research Background",
      subtitle: "Interdisciplinary Engineering Education",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-2">Mechatronics Engineering</h4>
              <p className="text-blue-100 text-sm mb-3">Universidad Nacional de Colombia</p>
              <p className="text-sm">Aug 2019 - Present</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-2">Systems Engineering</h4>
              <p className="text-purple-100 text-sm mb-3">Universidad Popular del Cesar</p>
              <p className="text-sm">Jan 2017 - Present</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <GraduationCap className="text-blue-600" />
              Research Experience
            </h4>
            <div className="space-y-3 text-sm">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold text-gray-800">Biomaterials Research</p>
                <p className="text-gray-600">Magnetic hydrogels for pancreatic cancer treatment delivery systems</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold text-gray-800">IoT Systems</p>
                <p className="text-gray-600">Aquaponic networks and smart garden prototypes</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-800">Materials Science</p>
                <p className="text-gray-600">Synthesis and evaluation of hydraulic cements</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm font-semibold text-gray-800 mb-1">Published Research</p>
            <p className="text-xs text-gray-700">
              "Influence of ammonium nitrate in the synthesis of alpha tricalcium phosphates (α-TCP)" 
              <span className="text-gray-500 ml-2">Int. Journal of Self-Propagating High-Temperature (2023)</span>
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Technical Expertise & Projects",
      subtitle: "Robotics, AI, and Software Development",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg">
            <h4 className="font-bold text-xl mb-4">Featured Project: E6R-1 Robotic Arm</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-1">Technology Stack:</p>
                <p className="text-indigo-100">MATLAB, Simulink, Machine Learning</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Capabilities:</p>
                <p className="text-indigo-100">6-DOF, Inverse Kinematics, ML Control</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-900 mb-2 text-sm">Programming</h5>
              <p className="text-xs text-gray-700">C++, Python, Java, C#, TypeScript</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-900 mb-2 text-sm">Tools & Platforms</h5>
              <p className="text-xs text-gray-700">MATLAB, Simulink, Git, Linux, Qt Creator</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold text-purple-900 mb-2 text-sm">Technologies</h5>
              <p className="text-xs text-gray-700">ROS, Isaac Lab, Unreal Engine, AWS</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Key Projects</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800">Data Analysis Tools</p>
                <p className="text-xs text-gray-600">RAMAN Spectroscopy analysis with ML peak detection</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <p className="font-semibold text-gray-800">IoT Systems</p>
                <p className="text-xs text-gray-600">ThermoRegister: High-temp measurement (0-1200°C)</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800">Mobile Development</p>
                <p className="text-xs text-gray-600">Smart Campus & GPS tracking applications</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <p className="font-semibold text-gray-800">AI Applications</p>
                <p className="text-xs text-gray-600">Neural network training tools & image classification</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Research Interests & Goals",
      subtitle: "Vision for Graduate Studies",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg">
            <h4 className="text-2xl font-bold mb-4">Primary Research Focus</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <p className="text-lg">Advanced Robotics & Simulation (ROS, Isaac Lab)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <p className="text-lg">AI-Driven Control Systems & Machine Learning</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <p className="text-lg">Interdisciplinary Applications (Robotics + Materials)</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h5 className="font-semibold text-blue-900 mb-3">Strengths</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Interdisciplinary background</li>
                <li>• Strong programming skills</li>
                <li>• Research publication record</li>
                <li>• Hands-on project experience</li>
                <li>• International academic exposure</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h5 className="font-semibold text-purple-900 mb-3">Career Goals</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Advance robotics research</li>
                <li>• Develop AI control systems</li>
                <li>• Bridge engineering disciplines</li>
                <li>• Contribute to innovation</li>
                <li>• Academic/industry leadership</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <p className="font-semibold text-green-900 mb-2">International Experience</p>
            <p className="text-sm text-gray-700">
              DAAD Scholarship recipient - Academic exchange at Leibniz Universität Hannover, 
              Karlsruhe Institute of Technology, and University of Kassel (2024)
            </p>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600 italic">
              "Committed to advancing robotics and AI through rigorous research and innovative applications"
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-6">
            <h1 className="text-3xl font-bold">{slides[currentSlide].title}</h1>
            <p className="text-blue-100 mt-2">{slides[currentSlide].subtitle}</p>
          </div>

          {/* Content */}
          <div className="p-8 min-h-[500px]">
            {slides[currentSlide].content}
          </div>

          {/* Footer Navigation */}
          <div className="bg-gray-50 px-8 py-6 flex items-center justify-between border-t">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-center py-4 text-sm text-gray-500">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;