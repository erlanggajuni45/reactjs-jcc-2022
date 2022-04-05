import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTableCellsLarge,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  let location = useLocation();
  let classname1 = "";
  let classname2 = "";
  let classname3 = "";

  switch (location.pathname) {
    case "/dashboard":
      classname1 = "bg-blue-900 border-blue-400 border-l-4";
      break;
    case "/dashboard/list-job-vacancy":
      classname2 = "bg-blue-900 border-blue-400 border-l-4";
      break;
    case "/dashboard/list-job-vacancy/form/create":
      classname3 = "bg-blue-900 border-blue-400 border-l-4";
      break;
  }

  const navigation = [
    { title: "Dashboard", icon: faHome, path: "/dashboard", class: classname1 },
    {
      title: "List Loker",
      icon: faTableCellsLarge,
      path: "/dashboard/list-job-vacancy",
      class: classname2,
    },
    {
      title: "Posting Loker",
      icon: faPlus,
      path: "/dashboard/list-job-vacancy/form/create",
      class: classname3,
    },
  ];

  let navClass =
    "w-56 max-w-full bg-blue-800 h-screen -ml-6 flex flex-col text-white fixed lg:absolute lg:sticky top-0 transition-transform transform duration-500 ease";
  if (mobileOpen) navClass += " translate-x-0";
  else navClass += " -translate-x-full lg:translate-x-0";
  return (
    <div className={navClass}>
      <div className="flex-1 mt-8">
        <div className="mt-0">
          {navigation.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`flex justify-between no-underline w-full px-8 py-3 text-sm transition-colors duration-200 ease-in-out hover:text-blue-400 ${item.class}`}
            >
              <div>
                <FontAwesomeIcon icon={item.icon} className="mr-4" />
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
