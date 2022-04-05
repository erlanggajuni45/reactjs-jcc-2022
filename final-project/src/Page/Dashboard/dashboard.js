import React, { useContext } from "react";
import Alert from "../../Components/Alert";
import { GlobalContext } from "../../Context/GlobalContext";

const Dashboard = () => {
  const { state } = useContext(GlobalContext);
  const { dataUser, dataJob, show } = state;
  return (
    <>
      <div class="bg-white dark:bg-gray-800 mx-auto ">
        <div class="text-center w-full  py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-base font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">Selamat Datang di Dashboard</span>
            <span class="block text-indigo-500">{dataUser.name} </span>
          </h2>
        </div>

        <div class="shadow-lg rounded-2xl mb-4 mx-auto w-96 p-4 bg-slate-200 dark:bg-gray-800">
          <div class="flex items-center">
            <p class="text-md text-gray-700 dark:text-gray-50 ml-2">
              Jumlah Lowongan
            </p>
          </div>
          <div class="flex flex-col justify-start">
            <p class="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
              {dataUser.id}
            </p>
            <div class="relative w-28 h-2 bg-gray-200 rounded">
              <div class="absolute top-0 h-2  left-0 rounded bg-green-500 w-2/3"></div>
            </div>
          </div>
        </div>

        <div class="shadow-lg rounded-2xl mt-8 w-96 mx-auto p-4 bg-slate-200 dark:bg-gray-800">
          <div class="flex items-center">
            <p class="text-md text-gray-700 dark:text-gray-50 ml-2">
              Lowongan Tersedia
            </p>
          </div>
          <div class="flex flex-col justify-start">
            <p class="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
              {dataJob.length}
            </p>
            <div class="relative w-28 h-2 bg-gray-200 rounded">
              <div class="absolute top-0 h-2  left-0 rounded bg-green-500 w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
      {show && <Alert />}
    </>
  );
};

export default Dashboard;
