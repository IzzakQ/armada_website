import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-slate-800 tracking-tighter">
                АРМАДА
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Услуги', 'О компании', 'Контакты'].map((item) => (
              <a
                key={item}
                href={`#${item === 'Услуги' ? 'services' : item === 'О компании' ? 'about' : 'lead-form'}`}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wide"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#lead-form"
              className="bg-blue-600 text-white px-6 py-2.5 rounded hover:bg-blue-700 transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              Рассчитать стоимость
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {['Услуги', 'О компании', 'Контакты'].map((item) => (
              <a
                key={item}
                href={`#${item === 'Услуги' ? 'services' : item === 'О компании' ? 'about' : 'lead-form'}`}
                className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
             <a
              href="#lead-form"
              className="block mt-4 text-center bg-blue-600 text-white px-6 py-3 rounded font-semibold uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              Рассчитать стоимость
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
