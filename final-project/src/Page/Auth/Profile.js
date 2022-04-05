import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const Profile = () => {
  const { state } = useContext(GlobalContext);
  const { dataUser } = state;

  return (
    <section class="h-screen mx-auto w-full bg-gray-100 bg-opacity-50">
      <div class="container max-w-2xl w-4/5 mx-auto my-10 shadow-md md:w-3/4">
        <div class="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
          <div class="max-w-sm mx-auto md:w-full md:mx-0">
            <div class="inline-flex items-center mx-auto">
              <h1 class="text-gray-600 text-2xl align-center">
                Informasi Akun
              </h1>
            </div>
          </div>
        </div>
        <div class=" bg-white my-auto">
          <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 class="max-w-sm mx-auto md:w-1/3">Email</h2>
            <div class="max-w-sm mx-auto md:w-2/3">
              <div class=" relative ">{dataUser.email}</div>
            </div>
          </div>
          <hr />
          <div class="items-center w-full p-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 class="max-w-sm mx-auto md:w-1/3">Nama Akun</h2>
            <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div class=" relative ">{dataUser.name}</div>
            </div>
          </div>
          <hr />
          <div class="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 class="max-w-sm mx-auto md:w-4/12">Foto Profil</h2>
            <div class="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
              <div class=" relative ">
                <img
                  alt="profil"
                  src={dataUser.image_url}
                  class="mx-auto object-cover rounded-full h-16 w-16 "
                />
              </div>
            </div>
            <div class="text-center md:w-3/12 md:pl-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Profile;
