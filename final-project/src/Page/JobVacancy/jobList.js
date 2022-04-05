import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../../Components/Alert";
import ReadMore from "../../Components/ReadMore";
import { GlobalContext } from "../../Context/GlobalContext";

const JobList = () => {
  const { state, functionHandle } = useContext(GlobalContext);

  const { dataJob, search, setFetchStatus, input, show } = state;

  const {
    handleStatus,
    handleDelete,
    handleUpdate,
    pemisahRibuan,
    handleChange,
    handleChangeSearch,
    handleSearch,
    handleFilter,
  } = functionHandle;

  const thClass =
    "px-2 py-4 text-left bg-blue-900 text-white text-sm font-medium";
  const tdClass = "px-2 py-8 border-t border-b border-gray-300 text-sm";
  const trClass = "border-gray-300 even:bg-gray-300";
  return (
    <>
      {dataJob !== null && (
        <div className="max-w-full w-full my-4 mx-1 xl:mx-4 ">
          <div class="flex items-center my-4 p-4 overflow-y-auto whitespace-nowrap bg-gray-200">
            <Link to="/dashboard" class="text-gray-600 dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>

            <span class="mx-5 text-gray-500 dark:text-gray-300">/</span>

            <Link
              to="/list-job-vacancy"
              class="text-blue-600 dark:text-blue-400 hover:underline"
            >
              List Lowongan Pekerjaan
            </Link>
          </div>
          <div class="flex justify-between">
            <div class="my-2 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
              <form onSubmit={handleSearch} className="my-4">
                <input
                  onChange={handleChangeSearch}
                  type="text"
                  value={search}
                  class="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                  placeholder="Cari Lowongan...."
                />

                <button
                  type="submit"
                  class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Cari
                </button>
              </form>

              <div className="my-4 ml-2">
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

                  <input
                    onChange={handleChange}
                    type="text"
                    value={input.job_type}
                    name="job_type"
                    class="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    placeholder="Tipe Pekerjaan...."
                  />
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
                    class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    Filter
                  </button>
                </form>
              </div>
            </div>
            <button
              onClick={() => {
                setFetchStatus(true);
              }}
              class="my-2 px-4 py-2 h-10 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-700 rounded-md sm:mx-2 hover:bg-red-600 focus:outline-none focus:bg-blue-600"
            >
              Reset Filter
            </button>
          </div>

          <button class=" px-6 py-2 flex-none my-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
            <Link to="/dashboard/list-job-vacancy/form/create">
              TAMBAR LOKER BARU
            </Link>
          </button>
          <table className="table-auto lg:w-fit sm:w-fit xl:w-fit rounded-sm block overflow-x-auto">
            <thead>
              <tr>
                <th className={thClass}>Logo Perusahaan</th>
                <th className={thClass}>Nama Lowongan</th>
                <th className={thClass}>Deskripsi Pekerjaan</th>
                <th className={thClass}>Kualifikasi</th>
                <th className={thClass}>Tipe Pekerjaan</th>
                <th className={thClass}>Job Tenure</th>
                <th className={thClass}>Status</th>
                <th className={thClass}>Nama Perusahaan</th>
                <th className={thClass}>Lokasi</th>
                <th className={thClass}>Gaji (Rupiah)</th>
                <th className={thClass}>Action</th>
              </tr>
            </thead>
            <tbody>
              {dataJob.map((item, idx) => {
                return (
                  <>
                    <tr key={idx} className={trClass}>
                      <td className={tdClass}>
                        <img src={item.company_image_url} className="h-12" />
                      </td>
                      <td className={tdClass}>{item.title}</td>
                      <td className={tdClass}>
                        <ReadMore>{item.job_description}</ReadMore>
                      </td>
                      <td className={tdClass}>
                        <ReadMore>{item.job_qualification}</ReadMore>
                      </td>
                      <td className={tdClass}>{item.job_type}</td>
                      <td className={tdClass}>{item.job_tenure}</td>
                      <td className={tdClass}>
                        {handleStatus(item.job_status)}
                      </td>
                      <td className={tdClass}>{item.company_name}</td>
                      <td className={tdClass}>{item.company_city}</td>
                      <td className={tdClass}>
                        {pemisahRibuan(item.salary_min)} -{" "}
                        {pemisahRibuan(item.salary_max)}
                      </td>
                      <td className={tdClass}>
                        <button
                          onClick={handleDelete}
                          type="button"
                          value={item.id}
                          class="py-2 px-4 mb-2 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          Hapus
                        </button>

                        <button
                          onClick={handleUpdate}
                          type="button"
                          value={item.id}
                          class="py-2 px-4 mb-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          {show && <Alert />}
        </div>
      )}
    </>
  );
};

export default JobList;
