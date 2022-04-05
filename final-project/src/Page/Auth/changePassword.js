import axios from "axios";
import jsCookie from "js-cookie";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";

const ChangePassword = () => {
  const { state, functionHandle } = useContext(GlobalContext);
  const { dataUser, input, setInput, setShow, setAlert, setMessage } = state;
  const { handleChange } = functionHandle;

  let history = useHistory();

  const handleChangePassword = (event) => {
    event.preventDefault();

    let { currentPassword, newPassword, confirmPassword } = input;

    if (currentPassword == jsCookie.get("password")) {
      if (newPassword.length >= 8) {
        if (confirmPassword == newPassword)
          axios
            .post(
              `https://dev-example.sanbercloud.com/api/change-password`,
              {
                current_password: currentPassword,
                new_password: newPassword,
                new_confirm_password: confirmPassword,
              },
              {
                headers: {
                  Authorization: "Bearer " + jsCookie.get("token"),
                },
              }
            )
            .then(() => {
              jsCookie.remove("token");
              jsCookie.remove("user");
              jsCookie.remove("password");
              setInput({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
              });
              history.push("/login");
              setAlert("Info");
              setMessage("Berhasil ganti password!");
              setShow(true);
            });
      } else {
      }
    } else {
    }
  };

  return (
    <div class="flex flex-col w-3/5 m-auto my-24 px-4 py-8 bg-gray-200 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
        Change Password
      </div>
      <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        Ubah Password akun {dataUser.email}
      </span>
      <div class="p-6 mt-8">
        <form onSubmit={handleChangePassword}>
          <div class="flex flex-col mb-2">
            <div class=" relative ">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Password Lama
              </label>
              <input
                onChange={handleChange}
                type="password"
                class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={input.currentPassword}
                name="currentPassword"
                placeholder="Masukkan password lama..."
              />
            </div>
          </div>
          <div class="flex flex-col mb-2">
            <div class=" relative ">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Password Baru
              </label>
              <input
                onChange={handleChange}
                type="password"
                class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={input.newPassword}
                name="newPassword"
                placeholder="Masukkan password baru..."
              />
            </div>
          </div>
          <div class="flex flex-col mb-2">
            <div class=" relative ">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Konfirmasi Password Baru
              </label>
              <input
                onChange={handleChange}
                type="password"
                class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={input.confirmPassword}
                name="confirmPassword"
                placeholder="Konfirmasi Password Baru..."
              />
            </div>
          </div>
          <div class="flex w-full my-4">
            <button
              type="submit"
              class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Ubah password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
