import React from 'react';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import { FaPhoneAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen bg-slate-900 text-white py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <p className="text-lg text-white/70 mb-12">
        Feel free to reach out for collaborations, opportunities, or just a friendly hello!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-10 items-center max-w-3xl mx-auto">
        {/* Email */}
        <div className="flex items-center gap-4">
          <SiGmail className="text-red-500 text-2xl" />
          <a
            href="mailto:vigneshwaran274mail@gmail.com"
            className="text-white hover:underline"
          >
            vigneshwaran274mail@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-green-400 text-xl" />
          <a href="tel:9489370083" className="text-white hover:underline">
            +91 94893 70083
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-4">
          <SiGithub className="text-gray-300 text-2xl" />
          <a
            href="https://github.com/Vigneshkarthik2729"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            github.com/Vigneshkarthik2729
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4">
          <SiLinkedin className="text-blue-500 text-2xl" />
          <a
            href="https://www.linkedin.com/in/vigneshwaran-k-29a502215"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            linkedin.com/in/vigneshwaran-k
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;