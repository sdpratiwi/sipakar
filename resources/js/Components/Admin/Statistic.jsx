import React from "react";
import * as FaIcons from "react-icons/fa";

export default function Statistic() {
    return (
        <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 text-2xl shadow-xl shadow-sky-600/10">
                <h1 className="text-5xl text-sky-600">24</h1>
                <div className="flex items-center space-x-2">
                    <FaIcons.FaUserMd size={24} className="text-sky-600" />
                    <h4 className="text-sky-600 text-lg">Dokter</h4>
                </div>
            </div>
            <div className="bg-white rounded-xl p-5 text-2xl shadow-xl shadow-emerald-400/10">
                <h1 className="text-5xl text-emerald-600">24</h1>
                <div className="flex items-center space-x-2">
                    <FaIcons.FaUserInjured
                        size={24}
                        className="text-emerald-600"
                    />
                    <h4 className="text-emerald-400 text-lg">Pasien</h4>
                </div>
            </div>
            <div className="bg-white rounded-xl p-5 text-2xl shadow-xl shadow-rose-600/10">
                <h1 className="text-5xl text-rose-600">24</h1>
                <div className="flex items-center space-x-2">
                    <FaIcons.FaBook size={24} className="text-rose-600" />
                    <h4 className="text-rose-600 text-lg">Diagnosis</h4>
                </div>
            </div>
            <div className="bg-white rounded-xl p-5 text-2xl shadow-xl shadow-lime-400/10">
                <h1 className="text-5xl text-lime-400">24</h1>
                <div className="flex items-center space-x-2">
                    <FaIcons.FaVirus size={24} className="text-lime-400" />
                    <h4 className="text-lime-600 text-lg">Penyakit</h4>
                </div>
            </div>
        </div>
    );
}
