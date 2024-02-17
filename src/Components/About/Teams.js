import React from "react";
import { FaXTwitter , FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Teams() {
    const teamMembers = [
    {
      name: 'Arthur Melo',
      role: 'Design Director',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      socialMedia: [
        { name: 'Twitter', icon: FaXTwitter , link: '##' },
        { name: 'Instagram', icon: FaInstagram, link: '##' },
        { name: 'LinkedIn', icon: FaLinkedinIn, link: '##' },
      ],
    },
    {
      name: 'Pamela Anderson',
      role: 'Lead Developer',
      imageUrl: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      socialMedia: [
        { name: 'Twitter', icon: FaXTwitter , link: '##' },
        { name: 'Instagram', icon: FaInstagram, link: '##' },
        { name: 'LinkedIn', icon: FaLinkedinIn, link: '##' },
      ],
    },
    {
      name: 'John Doe',
      role: 'Full Stack Developer',
      imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      socialMedia: [
        { name: 'Twitter', icon: FaXTwitter , link: '##' },
        { name: 'Instagram', icon: FaInstagram, link: '##' },
        { name: 'LinkedIn', icon: FaLinkedinIn, link: '##' },
      ],
    },
  ];

  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center p-4 border sm:p-6 rounded-xl">
              <img className="object-cover w-full rounded-xl aspect-square" src={member.imageUrl} alt={member.name} />
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">{member.name}</h1>
              <p className="mt-2 text-gray-500 capitalize">{member.role}</p>
              <div className="flex mt-3 -mx-2">
                {member.socialMedia.map((social, index) => (
                  <a key={index} href={social.link} className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500" aria-label={social.name}>
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teams;
