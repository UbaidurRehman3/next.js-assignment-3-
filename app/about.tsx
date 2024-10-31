// app/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-10 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-8">
          I am a passionate web developer with a strong focus on creating modern, responsive, and user-friendly web applications. With several years of experience, I have developed a deep understanding of both front-end and back-end technologies.
        </p>

        {/* Skills Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>HTML & CSS</p>
              <p>JavaScript (ES6+)</p>
              <p>React & Next.js</p>
              <p>Tailwind CSS</p>
            </div>
            <div>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>MongoDB & SQL</p>
              <p>TypeScript</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <ul className="list-disc list-inside text-left">
            <li><strong>Frontend Developer</strong> - XYZ Company (2022 - Present)</li>
            <li><strong>Full-Stack Developer</strong> - ABC Startup (2020 - 2022)</li>
            <li><strong>Internship</strong> - Web Development at DEF Solutions (2019)</li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <p><strong>Bachelor's in Computer Science</strong> - University of Technology (2016 - 2020)</p>
        </div>

        {/* Additional Section: Interests (Optional) */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Interests</h3>
          <p>
            Outside of development, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest trends in the tech world. I also love photography and hiking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
