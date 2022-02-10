import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import * as IoIcons from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';


export default function Register() {
    const [namaLengkap, setNamaLengkap] = useState();
    const [alamat, setAlamat] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confPassword, setconfPassword] = useState();

    const [error, setError] = useState();

    const insertData = (e) => {
        e.preventDefault();

        let data = {
            name: namaLengkap,
            address: alamat,
            email: email,
            username: username,
            password: password,
            confPassword: confPassword,
        };
        Inertia.post("/register", data, {
            onError: (e) => {
                setError(e);
            },
            onSuccess:(e)=>{
                toast.success('Pendaftaran Berhasil');
                setNamaLengkap('');
                setAlamat('');
                setEmail('');
                setUsername('');
                setPassword('');
                setconfPassword('');
            },
        });
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
            <Toaster/>
            <div className="bg-white rounded-2xl shadow-xl space-y-2 sm:w-1/2 w-10/12 relative overflow-hidden">
                <Link href="/">
                    <a href="">
                        <div className="absolute z-30">
                            <IoIcons.IoMdArrowRoundBack
                                className="text-white opacity-70 ml-8 mt-8"
                                size={24}
                            />
                        </div>
                    </a>
                </Link>

                <div className="absolute w-screen -translate-y-10 skew-y-6 transform sm:h-48 h-32 bg-blue-500 z-10"></div>
                <div className="absolute w-screen -translate-y-10 -skew-y-6 transform sm:h-16 h-28 bg-blue-300 z-0"></div>
                <form
                    className="z-40 px-10 py-5 pt-32 space-y-6"
                    onSubmit={insertData}
                >
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Selamat Bergabung!
                        </h1>
                    </div>
                    <div className="sm:grid-cols-2 grid grid-cols-1 gap-0 sm:gap-10">
                        <div className="flex flex-col space-y-3 ">
                            <div className="py-1 border-b border-blue-500">
                                <input
                                    onChange={(e) => {
                                        setNamaLengkap(e.target.value);
                                    }}
                                    type="text"
                                    className="bg-white border-0 focus:outline-none focus:ring-white px-0 w-full"
                                    placeholder="Nama Lengkap"
                                    value={namaLengkap}
                                />
                            </div>

                            {error?.name && (
                                <span className="text-red-500 text-xs italic">
                                    {error?.name}
                                </span>
                            )}
                            <div className="py-1 border-b border-blue-500">
                                <input
                                    onChange={(e) => {
                                        setAlamat(e.target.value);
                                    }}
                                    type="text"
                                    className="bg-white border-0 focus:outline-none focus:ring-white px-0 w-full"
                                    placeholder="Alamat"
                                    value={alamat}
                                />
                            </div>
                            {error?.address && (
                                <span className="text-red-500 text-xs italic">
                                    {error?.address}
                                </span>
                            )}
                            <div className="py-1 border-b border-blue-500">
                                <input
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    type="email"
                                    className="bg-white border-0 focus:outline-none focus:ring-white px-0 w-full"
                                    placeholder="Email"
                                    value={email}
                                />
                            </div>
                            {error?.email && (
                                <span className="text-red-500 text-xs italic">
                                    {error?.email}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col space-y-3">
                            <div className="py-1 border-b border-blue-500">
                                <input
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                    type="text"
                                    className="bg-white border-0 focus:outline-none focus:ring-white px-0 w-full"
                                    placeholder="Username"
                                    value={username}
                                />
                            </div>
                            {error?.username && (
                                <span className="text-red-500 text-xs italic">
                                    {error?.username}
                                </span>
                            )}
                            <div className="py-1 border-b border-blue-500">
                                <input
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    type="password"
                                    className="bg-white border-0 focus:outline-none focus:ring-white px-0 w-full"
                                    placeholder="Password"
                                    value={password}
                                />
                            </div>
                            {error?.password && (
                                <span className="text-red-500 text-xs italic">
                                    {error?.password}
                                </span>
                            )}
                            <div className="py-1 border-b border-blue-500">
                                <input
                                    onChange={(e) => {
                                        setconfPassword(e.target.value);
                                    }}
                                    type="password"
                                    className="bg-white border-0 focus:outline-none focus:ring-white px-0 w-full"
                                    placeholder="Konfirmasi Password"
                                    value={confPassword}
                                />
                            </div>
                            {error?.confPassword && (
                                <span className="text-red-500 text-xs italic">
                                    {error?.confPassword}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="pt-5 w-full flex">
                        <button
                            type="submit"
                            className="bg-blue-500 rounded-full text-white font-bold w-full py-2"
                        >
                            Daftar
                        </button>
                    </div>
                    <div className="flex justify-center py-3">
                        <Link href="/login">
                            <a
                                href=""
                                className="text-blue-500 hover:underline cursor-pointer"
                            >
                                Sudah Punya Akun? Masuk!
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
