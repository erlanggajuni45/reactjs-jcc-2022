import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";

const JobForm = () => {
  let { IDJOB } = useParams();
  const { state, functionHandle } = useContext(GlobalContext);
  const { input, setInput, setCurrentId } = state;
  const { handleChange, handleSubmit } = functionHandle;
  const [isDisable, setIsDisable] = useState("disabled");

  useEffect(() => {
    if (IDJOB !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${IDJOB}`)
        .then((res) => {
          let x = res.data;
          setInput({
            title: x.title,
            jobDesc: x.job_description,
            jobQual: x.job_qualification,
            jobType: x.job_type,
            jobTenure: x.job_tenure,
            jobStatus: x.job_status,
            companyName: x.company_name,
            companyImageUrl: x.company_image_url,
            companyCity: x.company_city,
            salaryMin: x.salary_min,
            salaryMax: x.salary_max,
          });

          setCurrentId(IDJOB);
          setIsDisable("");
        });
    }

    return () => {
      setInput({
        title: "",
        jobDesc: "",
        jobQual: "",
        jobType: "Onsite",
        jobTenure: "",
        jobStatus: 1,
        companyName: "",
        companyImageUrl: "",
        companyCity: "",
        salaryMin: 0,
        salaryMax: 0,
      });

      setCurrentId(null);
    };
  }, []);

  return (
    <div className="bg-gray-200 w-full">
      <section class="p-6 m-10 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Form Data Lowongan Kerja
        </h2>

        <form onSubmit={handleSubmit}>
          <div class="w-full mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Nama Lowongan
            </label>

            <input
              onChange={handleChange}
              value={input.title}
              name="title"
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            />
          </div>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Deskripsi Pekerjaan
              </label>
              <textarea
                onChange={handleChange}
                value={input.jobDesc}
                name="jobDesc"
                class="block w-full h-20 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              ></textarea>
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Kualifikasi
              </label>
              <textarea
                onChange={handleChange}
                value={input.jobQual}
                name="jobQual"
                class="block w-full h-20 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              ></textarea>
            </div>
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Job Tenure (Magang, kontrak, part-timer, dll)
            </label>
            <input
              onChange={handleChange}
              value={input.jobTenure}
              name="jobTenure"
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            />
          </div>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Tipe Pekerjaan
              </label>

              <select
                onChange={handleChange}
                value={input.jobType}
                name="jobType"
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              >
                <option value="Onsite">Onsite</option>
                <option value="Work From Home">Work From Home</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Status
              </label>

              <select
                onChange={handleChange}
                value={input.jobStatus}
                name="jobStatus"
                disabled={isDisable}
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              >
                <option value="1">Dibuka</option>
                <option value="0">Ditutup</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Nama Perusahaan
              </label>
              <input
                onChange={handleChange}
                value={input.companyName}
                name="companyName"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Lokasi Perusahaan
              </label>
              <input
                onChange={handleChange}
                value={input.companyCity}
                name="companyCity"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div class="w-full mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Link Gambar Logo Perusahaan
            </label>

            <input
              onChange={handleChange}
              value={input.companyImageUrl}
              name="companyImageUrl"
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            />
          </div>

          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Gaji Terendah
              </label>
              <input
                onChange={handleChange}
                value={input.salaryMin}
                name="salaryMin"
                type="number"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Gaji Tertinggi
              </label>
              <input
                onChange={handleChange}
                value={input.salaryMax}
                name="salaryMax"
                type="number"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div class="flex justify-center mt-6">
            <button
              type="submit"
              class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Submit Data
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default JobForm;
