import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', to: '/', current: true },
  { name: 'Projects', to: '/project', current: false },
  { name: 'About Me', to: '/about', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link 
                className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-700 transition-all duration-300" 
                to='/'
              >
                Nitin Patil
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      location.pathname === item.to
                        ? 'text-white bg-gray-800'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700',
                      'rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 relative group'
                    )}
                  >
                    {item.name}
                    <span className={classNames(
                      location.pathname === item.to
                        ? 'w-full'
                        : 'w-0 group-hover:w-full',
                      'absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300'
                    )} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={classNames(
                location.pathname === item.to
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200'
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
