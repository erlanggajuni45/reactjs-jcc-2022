import React, { useContext, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
  const { functionHandle } = useContext(GlobalContext);
  const { setAuth } = functionHandle;
  const {
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: { email: '', password: '' },
  });
  const history = useHistory();
  const dispatching = useRef(null);

  const handleLogin = useCallback(() => {
    const { email, password } = getValues();
    dispatching.current = toast.loading('Login akun...');

    axios
      .post(`https://dev-example.sanbercloud.com/api/login`, {
        email,
        password,
      })
      .then((res) => {
        let data = res.data;
        setAuth(data, password);
        toast.success('Login berhasil', {
          id: dispatching.current,
        });
        history.push('/dashboard');
        reset();
      })
      .catch((err) => {
        toast.error(err.response.data.error, {
          id: dispatching.current,
        });
      });
  }, [getValues, history, reset, setAuth]);

  return (
    <div className="flex flex-col w-3/5 m-auto my-24 px-4 py-8 bg-gray-200 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
        Login Akun
      </div>
      <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        Belum punya akun ?{' '}
        <Link
          to="/register"
          className="text-sm text-blue-500 underline hover:text-blue-700"
        >
          Daftar
        </Link>
      </span>
      <div className="p-6 mt-8">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input
                {...register('email', {
                  required: 'Email harus diisi',
                  pattern: {
                    value: /(^$|^.*@.*\..*$)/,
                    message: 'Silahkan masukkan email yang valid',
                  },
                })}
                className={`rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                  errors.email?.message &&
                  'border-red-300 focus:border-red-500 focus:ring-red-400'
                }`}
                placeholder="Email..."
              />
              <p className="pl-1 pt-1 text-red-500">{errors.email?.message}</p>
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input
                {...register('password', {
                  required: 'Password harus diisi',
                  minLength: {
                    value: 8,
                    message: 'Panjang password harus 8 karakter',
                  },
                })}
                type="password"
                className={`rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                  errors.password?.message &&
                  'border-red-300 focus:border-red-500 focus:ring-red-400'
                }`}
                placeholder="Password..."
              />
              <p className="pl-1 pt-1 text-red-500">
                {errors.password?.message}
              </p>
            </div>
          </div>
          <div className="flex w-full my-4">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            >
              Login
            </button>
          </div>
        </form>
        <p className="pt-2 text-center underline">
          <Link to="/" className="hover:text-gray-400">
            Kembali ke beranda
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
