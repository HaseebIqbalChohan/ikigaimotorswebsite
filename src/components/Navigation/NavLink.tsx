import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className="text-white/80 hover:text-white transition-colors relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
  </a>
);