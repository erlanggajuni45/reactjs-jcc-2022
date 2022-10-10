import jsCookie from 'js-cookie';
import { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalContext';

// Profile Dropdown
const ProfileDropDown = (props) => {
  const [states, setStates] = useState(false);
  const { state } = useContext(GlobalContext);
  const { dataUser } = state;
  const profileRef = useRef();
  let history = useHistory();

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef.current.contains(e.target)) setStates(false);
    };
    document.addEventListener('click', handleDropDown);
  }, []);

  return (
    <div className={`relative  ${props.class}`}>
      <div className="flex items-center space-x-4">
        <button
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
          onClick={() => setStates(!states)}
        >
          <img
            src={dataUser.image_url}
            className="w-full h-full rounded-full"
            alt=""
          />
        </button>
        <div className="lg:hidden">
          <span className="block">{dataUser.name}</span>
          <span className="block text-sm text-gray-500">{dataUser.email}</span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          states ? '' : 'lg:hidden'
        }`}
      >
        <li>
          <Link
            to="/Profile"
            className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
          >
            Lihat Profil
          </Link>
        </li>
        <li>
          <Link
            to="/ChangePassword"
            className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
          >
            Change Password
          </Link>
        </li>
        <li>
          <a
            onClick={() => {
              jsCookie.remove('token');
              jsCookie.remove('user');
              jsCookie.remove('password');
              history.push('/');
            }}
            className="cursor-pointer block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default () => {
  const [menustates, setMenustates] = useState(false);

  const navigation = [
    { title: 'Dashboard', path: '/dashboard' },
    { title: 'List Loker', path: '/dashboard/list-job-vacancy' },
    { title: 'Posting Loker', path: '/dashboard/list-job-vacancy/form/create' },
  ];
  return (
    <nav className="bg-white border-b drop-shadow-lg">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto">
        <div className="flex-none lg:flex-initial">
          <Link
            to="/"
            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >
            Job Vacancy
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div
            className={`bg-white absolute z-20 w-full top-12 left-0 p-4 border-b lg:static lg:block lg:border-none ${
              menustates ? '' : 'hidden'
            }`}
          >
            <ul className="space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className={`text-gray-600 hover:text-gray-900 ${
                    menustates ? '' : 'hidden'
                  }`}
                >
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ProfileDropDown class="mt-5 pt-5 border-t lg:hidden" />
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <div className="flex items-center space-x-2 p-2"></div>
            <ProfileDropDown class="hidden lg:block" />
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
