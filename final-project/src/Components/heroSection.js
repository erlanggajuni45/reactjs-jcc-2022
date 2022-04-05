import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

const HeroSection = () => {
  const { state, functionHandle } = useContext(GlobalContext);
  const { dataJob, search, setFetchStatus, input } = state;

  const { handleChange, handleChangeSearch, handleSearch, handleFilter } =
    functionHandle;

  const { handleSalary } = functionHandle;

  return (
    <>
      <div class="bg-white dark:bg-gray-800 mt-16">
        <div class="bg-blue-800 text-center w-full mx-auto py-16 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            <span class="block">Sedang Mencari Lowongan? </span>
            <span class="block text-white">Website ini cocok buat kamu!</span>
          </h2>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <form
              onSubmit={handleSearch}
              className="items-center justify-center mt-12 sm:flex"
            >
              <input
                onChange={handleChangeSearch}
                type="text"
                value={search}
                placeholder="Cari Loker...."
                className="text-gray-500 w-1/5 p-3 rounded-md border outline-none focus:border-indigo-600"
              />
              <button className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto">
                Cari
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex justify-center lg:pl-2 py-6 px-6 lg:px-0">
        <div className="my-2 ">
          <form onSubmit={handleFilter} className="my-4">
            <h1 className="ml-2 text-xl">Filter Data</h1>
            <input
              onChange={handleChange}
              type="text"
              value={input.company_city}
              name="company_city"
              class="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Lokasi Perusahaan...."
            />
            <br />
            <input
              onChange={handleChange}
              type="text"
              value={input.job_type}
              name="job_type"
              class="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Tipe Pekerjaan...."
            />
            <br />
            <input
              onChange={handleChange}
              type="text"
              value={input.job_tenure}
              name="job_tenure"
              class="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Job Tenure...."
            />
            <button
              type="submit"
              class="px-4 py-2 text-white bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Filter
            </button>
          </form>
          <button
            onClick={() => {
              setFetchStatus(true);
            }}
            class="my-2 px-4 py-2 text-white bg-red-700 rounded-md sm:mx-2 hover:bg-red-600 focus:outline-none focus:bg-blue-600"
          >
            Reset Filter
          </button>
        </div>
      </div>

      <section className="mt-8 max-w-screen-lg mx-auto px-4">
        <div>
          <h1 className="text-gray-800 text-3xl font-semibold">
            Explore The Jobs
          </h1>
        </div>

        {dataJob !== null && (
          <ul className="my-4 space-y-6">
            {dataJob
              .filter((res, idx) => {
                return idx < 3;
              })
              .map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="p-5 bg-gray-100 rounded-md shadow-md"
                  >
                    <Link to={`/job-vacancy/${item.id}`}>
                      <div>
                        <div className="justify-between sm:flex">
                          <div className="flex-1">
                            <h3 className="text-xl font-medium text-cyan-600">
                              {item.title}
                            </h3>
                            <p className="text-gray-500 mt-2 pr-2">
                              {item.job_description}
                            </p>
                          </div>
                          <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                            <span className="flex items-center text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-building h-5 w-5 mr-2"
                                viewBox="0 0 24 24"
                                stroke-width={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <line x1={3} y1={21} x2={21} y2={21}></line>
                                <line x1={9} y1={8} x2={10} y2={8}></line>
                                <line x1={9} y1={12} x2={10} y2={12}></line>
                                <line x1={9} y1={16} x2={10} y2={16}></line>
                                <line x1={14} y1={8} x2={15} y2={8}></line>
                                <line x1={14} y1={12} x2={15} y2={12}></line>
                                <line x1={14} y1={16} x2={15} y2={16}></line>
                                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                              </svg>
                              {item.company_name}
                            </span>
                            <span className="flex items-center text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Rp. {handleSalary(item.salary_min)}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                          <span className="flex items-center text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                            </svg>
                            {item.job_tenure}
                          </span>
                          <span className="flex items-center text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {item.company_city}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
          </ul>
        )}
      </section>
    </>
  );
};

export default HeroSection;
