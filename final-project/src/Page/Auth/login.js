import axios from "axios";
import jsCookie from "js-cookie";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Alert from "../../Components/Alert";
import { GlobalContext } from "../../Context/GlobalContext";

const Login = () => {
  const { state, functionHandle } = useContext(GlobalContext);
  const { input, setInput, show, setShow, setAlert, setMessage } = state;
  const { handleChange } = functionHandle;
  let history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();

    let { email, password } = input;

    if (email !== "") {
      if (password.length >= 8) {
        axios
          .post(`https://dev-example.sanbercloud.com/api/login`, {
            email: email,
            password: password,
          })
          .then((res) => {
            let data = res.data;

            jsCookie.set("token", data.token);
            jsCookie.set("user", JSON.stringify(data.user));
            jsCookie.set("password", password);

            setInput({
              email: "",
              password: "",
            });
            history.push("/dashboard");
            setAlert("Success");
            setMessage("Selamat, anda berhasil login!");
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
        Login Akun
      </div>
      <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        Belum punya akun ?{" "}
        <Link
          to="/register"
          target="_blank"
          class="text-sm text-blue-500 underline hover:text-blue-700"
        >
          Daftar
        </Link>
      </span>
      <div class="p-6 mt-8">
        <form onSubmit={handleLogin}>
          <div class="flex flex-col mb-2">
            <div class=" relative ">
              <input
                onChange={handleChange}
                type="text"
                id="create-account-pseudo"
                class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={input.email}
                name="email"
                placeholder="Email..."
              />
            </div>
          </div>
          <div class="flex flex-col mb-2">
            <div class=" relative ">
              <input
                onChange={handleChange}
                type="password"
                id="create-account-pseudo"
                class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={input.password}
                name="password"
                placeholder="Password..."
              />
            </div>
          </div>
          <div class="flex w-full my-4">
            <button
              type="submit"
              class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Login
            </button>
          </div>
        </form>
        {show && <Alert />}
      </div>
    </div>
  );
};

export default Login;
