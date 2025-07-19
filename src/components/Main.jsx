import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SiReact, SiGmail, SiLinkedin, SiNextdotjs, SiJavascript, SiMui, SiTailwindcss, SiFirebase, SiMongodb, SiExpress, SiNodedotjs, SiWordpress, SiHtml5, SiCss3, SiGit, SiGithub } from "react-icons/si";
import { FaPhoneAlt } from 'react-icons/fa';

const Main = () => {
  const skills = [
  { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Material UI", icon: <SiMui className="text-blue-300" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "WordPress", icon: <SiWordpress className="text-blue-300" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> }
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Grid background - consistent across all sections */}
      <div 
        className="fixed inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Animated gradient orbs - consistent across all sections */}
      <div className="fixed top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse z-0"></div>
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse delay-1000 z-0"></div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name with gradient text */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Vigneshwaran
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 font-light tracking-wide">
            React Frontend Developer | Focused on User Experience
          </p>
          
          {/* Skills badges */}
<div className="flex flex-wrap justify-center gap-4 mb-16">
  {skills.map((skill, index) => (
    <div
      key={skill.name}
      className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
      style={{
        animationDelay: `${index * 200}ms`
      }}
    >
      {skill.icon}
      <span>{skill.name}</span>
    </div>
  ))}
</div>
      
          {/* Scroll indicator */}
          <div className="flex flex-col items-center">
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors duration-300" />
            </div>
            <div className="mt-2 text-sm text-white/50 font-light">
              Scroll to explore
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-md text-white text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white/90 font-light">
          I am a frontend Developer with 18 months of overall IT experience, including 9 months of hands-on React.js development and 9 months in an application support role.
          Skilled in building responsive, user-focused interfaces and resolving technical issues in fast-paced environments.
          Adept at writing clean, maintainable code and collaborating with cross-functional teams to deliver seamless user experiences.
          Looking to contribute to innovative frontend projects and continue growing within modern tech ecosystems.
        </p>
      </div>

      {/* Projects Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/3 backdrop-blur-md text-white text-center">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects & Highlights
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          {/* NGO Query Management System */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:scale-[1.02] transition">
            <h3 className="text-2xl font-semibold mb-2 text-white">Thanporunai Arakkattalai</h3>
            <p className="text-white/80 mb-3">Developing an ongoing full-stack platform where users can submit queries to an NGO. Admins can review and respond to these through a secure dashboard. Focused on enabling transparency and community help.</p>
            <p className="text-sm text-white/60">Tech Used: MongoDB, Express.js, React.js, Node.js (MERN)</p>
          </div>

          {/* Durga Traders - Business Website */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:scale-[1.02] transition">
            <h3 className="text-2xl font-semibold mb-2 text-white">Durga Traders – Business Website</h3>
            <p className="text-white/80 mb-3">Developed a combined e-commerce and product showcase site for a water filter business, featuring real-time data with Firebase and modern UI design using MUI.</p>
            <p className="text-sm text-white/60">Tech Used: React.js, MUI, Firebase</p>
          </div>

          {/* Math Gym E-Learning */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:scale-[1.02] transition">
            <h3 className="text-2xl font-semibold mb-2 text-white">Math Gym – E-Learning Platform</h3>
            <p className="text-white/80 mb-3">Built a dynamic e-learning website using React.js and MUI, delivering responsive layouts and interactive learning features.</p>
            <p className="text-sm text-white/60">Tech Used: React.js, MUI</p>
          </div>

          {/* WordPress Projects */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:scale-[1.02] transition">
            <h3 className="text-2xl font-semibold mb-2 text-white">Gayra Construction & Nivedha Interior</h3>
            <p className="text-white/80 mb-3">Customized WordPress themes and plugins to meet client needs with responsive design and performance optimization.</p>
            <p className="text-sm text-white/60">Tech Used: WordPress, Elementor</p>
          </div>

          {/* Internship - Minerva Softs */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:scale-[1.02] transition">
            <h3 className="text-2xl font-semibold mb-2 text-white">Minerva Softs – Web Developer Intern</h3>
            <p className="text-white/80 mb-3">Enhanced and built high-performance web pages using Next.js and Tailwind CSS during internship tenure.</p>
            <p className="text-sm text-white/60">Tech Used: Next.js, Tailwind CSS</p>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <section id="certifications" className="relative z-10 py-20 px-6 bg-white/5 backdrop-blur-md text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <ul className="space-y-6 text-lg text-white/80">
            <li className="bg-white/10 p-4 rounded-lg shadow-md hover:bg-white/20 transition-all duration-300">
              <strong>Certification of Training in Frontend Development</strong>  
              <br />
              Uniq Technology, Chennai — <span className="italic">June 2024 to September 2024 (4 months)</span>
            </li>
            <li className="bg-white/10 p-4 rounded-lg shadow-md hover:bg-white/20 transition-all duration-300">
              <strong>Certification of Internship in Frontend Development</strong>  
              <br />
              Minerva Softs, Chennai — <span className="italic">August 2024 to October 2024 (3 months)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Resume Download Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/3 backdrop-blur-md text-white text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Download My Resume
        </h2>
        <p className="max-w-xl mx-auto mb-6 text-lg text-white/80 font-light">
          Please find the resume by clicking below.
        </p>
        <a
          href="/Vigneshwaran%20CV.pdf"
          download
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          Download Resume
        </a>
      </div>

      {/* Contact Section */}
      <section className="relative z-10 text-center py-20 px-4 bg-slate-950">
        <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
        <p className="text-lg text-white/70 mb-12">
          Feel free to connect for collaborations or opportunities!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <SiGmail className="text-red-500 text-xl" />
            <a href="mailto:vigneshwaran274mail@gmail.com" className="text-white hover:underline">
              vigneshwaran274mail@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-green-400 text-lg" />
            <a href="tel:9489370083" className="text-white hover:underline">
              +91 94893 70083
            </a>
          </div>
          <div className="flex items-center gap-3">
            <SiGithub className="text-gray-300 text-xl" />
            <a href="https://github.com/Vigneshkarthik2729" target="_blank" className="text-white hover:underline" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="flex items-center gap-3">
            <SiLinkedin className="text-blue-500 text-xl" />
            <a
              href="https://www.linkedin.com/in/vigneshwaran-k-29a502215"
              target="_blank"
              className="text-white hover:underline"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      
      {/* Floating elements */}
      <div className="fixed top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping z-5"></div>
      <div className="fixed top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-500 z-5"></div>
      <div className="fixed bottom-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1000 z-5"></div>
      
      {/* CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Main;