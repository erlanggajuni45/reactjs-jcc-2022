import React, { useState } from "react";
import { Link } from "react-router-dom";
import jsCookie from "js-cookie";

const Navbar = () => {
  const [menustates, setMenustates] = useState(false);

  let a = [];
  let link = [];

  if (jsCookie.get("token")) {
    a = ["Dashboard"];
    link = ["/dashboard"];
  } else {
    a = ["Register", "Login"];
    link = ["/register", "/login"];
  }

  const navigation = [
    { title: "Beranda", path: "/" },
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
              menustates ? "" : "hidden"
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
//   return (
//     <>
//       <meta charSet="UTF-8" />
//       <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <nav class="fixed top-0 w-full bg-zinc-300 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
//         <div class="container flex flex-wrap justify-between items-center mx-auto">
//           <Link to="/" class="flex items-center">
//             <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
//               Job Vacancy
//             </span>
//           </Link>
//           <button
//             data-collapse-toggle="mobile-menu"
//             type="button"
//             class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="mobile-menu"
//             aria-expanded="false"
//           >
//             <span class="sr-only">Open main menu</span>
//             <svg
//               class="w-6 h-6"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//             <svg
//               class="hidden w-6 h-6"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//           </button>
//           <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
//             <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
//               {!jsCookie.get("token") && (
//                 <>
//                   <li>
//                     <Link
//                       to="/"
//                       class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                     >
//                       Beranda
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/register"
//                       class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                     >
//                       Register
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/login"
//                       class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                     >
//                       Login
//                     </Link>
//                   </li>
//                 </>
//               )}

//               {jsCookie.get("token") && (
//                 <>
//                   <li>
//                     <Link
//                       to="/"
//                       class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                     >
//                       Beranda
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/dashboard"
//                       class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                     >
//                       Dashboard
//                     </Link>
//                   </li>
//                 </>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

export default Navbar;
