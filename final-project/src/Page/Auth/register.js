import React, { useContext, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const Register = () => {
  const { functionHandle } = useContext(GlobalContext);
  const { setAuth } = functionHandle;
  const {
    reset,
    handleSubmit,
    getValues,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', image_url: '', email: '', password: '' },
  });

  const history = useHistory();
  const dispatching = useRef(null);

  const handleRegister = useCallback(() => {
    dispatching.current = toast.loading('Mendaftarkan akun...');
    const { name, image_url, email, password } = getValues();

    axios
      .post(`https://dev-example.sanbercloud.com/api/register`, {
        name,
        image_url,
        email,
        password,
      })
      .then((res) => {
        let data = res.data;
        setAuth(data, password);
        toast.success('Daftar akun berhasil', {
          id: dispatching.current,
        });
        history.push('/dashboard');
        reset();
      })
      .catch((err) => {
        if (err.response.data) {
          toast.error('Email sudah terdaftar', {
            id: dispatching.current,
          });
        } else {
          toast.error('Ada kesalahan. Coba beberapa saat lagi', {
            id: dispatching.current,
          });
        }
      });
  }, [getValues, history, reset, setAuth]);

  return (
    <div className="flex flex-col w-3/5 m-auto my-24 px-4 py-8 bg-gray-200 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
        Buat Akun Baru
      </div>
      <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        Sudah punya akun ?{' '}
        <Link
          to="/login"
          className="text-sm text-blue-500 underline hover:text-blue-700"
        >
          Masuk
        </Link>
      </span>
      <div className="p-6 mt-8">
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input
                {...register('name', {
                  required: 'Nama harus diisi',
                })}
                className={`rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                  errors.name?.message &&
                  'border-red-300 focus:border-red-500 focus:ring-red-400'
                }`}
                placeholder="Nama..."
              />
              <p className="pl-1 pt-1 text-red-500">{errors.name?.message}</p>
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input
                {...register('image_url', {
                  required: 'Link foto profil harus diisi',
                })}
                className={`rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                  errors.image_url?.message &&
                  'border-red-300 focus:border-red-500 focus:ring-red-400'
                }`}
                placeholder="Link untuk foto profil..."
              />
              <p className="pl-1 pt-1 text-red-500">
                {errors.image_url?.message}
              </p>
            </div>
          </div>
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
                    message: 'Panjang password minimal 8 karakter',
                  },
                })}
                className={`rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                  errors.password?.message &&
                  'border-red-300 focus:border-red-500 focus:ring-red-400'
                }`}
                placeholder="Password..."
                type="password"
              />
              <p className="pl-1 pt-1 text-red-500">
                {errors.password?.message}
              </p>
            </div>
          </div>
          <div className="flex w-full my-4">
            <button
              type="submit"
              className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            >
              Daftar
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

export default Register;
