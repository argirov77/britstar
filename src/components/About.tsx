import React from 'react';
import config from '../config/index.json';

const About: React.FC = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { sections } = about;

  return (
    <section id="about" className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
      <div className="flex flex-col items-center">
        {/* Логотип и название */}
        <img src={logo} alt={companyName} className="w-16 h-16 mb-4" />
        <h2 className="text-2xl font-bold mb-6">{companyName}</h2>

        {/* Ссылки на подразделы */}
        <div className="flex flex-wrap gap-8 justify-center">
          {sections.map((section, idx) => (
            <a
              key={idx}
              href={`#${section.href}`}
              className="text-base font-medium text-gray-700 hover:text-primary"
            >
              {section.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
