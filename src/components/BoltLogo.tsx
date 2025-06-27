import React from 'react';

export const BoltLogo: React.FC = () => {
  return (
    <a
      href="https://bolt.new/"
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="w-20 h-20 rounded-full overflow-hidden transition-all duration-700 hover:scale-110 shadow-lg hover:shadow-2xl animate-spin-slower group-hover:animate-none">
        <img
          src="/public/black_circle_360x360.png"
          alt="Bolt.new"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </a>
  );
};