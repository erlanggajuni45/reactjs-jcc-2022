import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import jsCookie from 'js-cookie';

const Navbar = () => {
  const [menustates, setMenustates] = useState(false);

  let a = [];
  let link = [];

  if (jsCookie.get('token')) {
    a = ['Dashboard'];
    link = ['/dashboard'];
  } else {
    a = ['Register', 'Login'];
    link = ['/register', '/login'];
  }

  const navigation = [
    { title: 'Beranda', path: '/' },
    { title: a[0], path: link[0] },
    { title: a[1], path: link[1] },
  ];
  return (
    <nav className="bg-white border-b fixed top-0 w-full drop-shadow-lg">
      <div className="flex items-center space-x-8 py-1 px-4 max-w-screen-xl mx-auto">
        <div className="flex-none lg:flex-initial">
          <Link
            to="/"
            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >
            Job Vacancy
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-end space-x-2">
          <div
            className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
              menustates ? '' : 'hidden'
            }`}
          >
            <ul className="space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className={`text-gray-600 hover:text-gray-900 
                  `}
                >
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <div className="flex items-center space-x-2 p-2"></div>
            <button
              className="outline-none text-gray-400 block lg:hidden"
              onClick={() => setMenustates(!menustates)}
            >
              {menustates ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
