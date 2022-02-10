import { Link } from "@inertiajs/inertia-react";
import React from "react";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

export default function Sidebar(props) {
    return (
        <div className="sm:h-screen h-fit py-5 bg-white shadow-lg w-full sm:w-fit md:w-64 fixed sm:relative bottom-0">
            <div className="hidden sm:flex py-5 justify-center items-center space-x-1">
                <MdIcons.MdMedicalServices
                    size={32}
                    className="text-blue-500"
                />
                <h1 className="font-bold text-3xl text-blue-500 hidden sm:hidden md:block ">
                    SIPAKAR
                </h1>
            </div>
            <div className="mt-0 px-5 sm:mt-10 flex flex-row sm:flex-col space-y-0 sm:space-y-3 items-center sm:items-start justify-evenly sm:justify-start">
                <Link className="w-auto sm:w-full" href="dashboard">
                    <div
                        className={`${
                            props.active == "Dashboard"
                                ? "bg-blue-500  border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  p-3 rounded-md flex space-x-3 border-l-8 transition-all duration-200 w-full`}
                    >
                        <MdIcons.MdDashboard size={24} className="" />
                        <h1 className="hidden sm:hidden md:block ">
                            Dashboard
                        </h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="doctors">
                    <div
                        className={`${
                            props.active == "Dokter"
                                ? "bg-blue-500  border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  p-3 rounded-md flex space-x-3 border-l-8 transition-all duration-200 w-full`}
                    >
                        <FaIcons.FaUserMd size={24} className="" />
                        <h1
                            className="w-auto sm:w-full"
                            className="hidden sm:hidden md:block "
                        >
                            Dokter
                        </h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="patients">
                    <div
                        className={`${
                            props.active == "Pasien"
                                ? "bg-blue-500  border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  p-3 rounded-md flex space-x-3 border-l-8 transition-all duration-200 w-full`}
                    >
                        <FaIcons.FaUserInjured size={24} className="" />
                        <h1 className=" hidden sm:hidden md:block">Pasien</h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="activity">
                    <div
                        className={`${
                            props.active == "Aktivitas"
                                ? "bg-blue-500  border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  p-3 rounded-md flex space-x-3 border-l-8 transition-all duration-200 w-full`}
                    >
                        <FaIcons.FaChartLine size={24} className="" />
                        <h1 className=" hidden sm:hidden md:block">
                            Aktivitas
                        </h1>
                    </div>
                </Link>

                <Link className='w-auto sm:w-full' href="profile">
                    <div
                        className={`${
                            props.active == "Profil"
                                ? "bg-blue-500  border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  p-3 rounded-md flex space-x-3 border-l-8 transition-all duration-200`}
                    >
                        <FaIcons.FaUser size={24} className="" />
                        <h1 className=" hidden sm:hidden md:block">Profil</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}
