import { Inertia } from "@inertiajs/inertia";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";
import ModalRoot from "../ModalRoot";

export default function DoctorForm() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [doctorData, setDoctorData] = useState({
        no_str: "",
        name: "",
        gender: "",
        specialist: "",
        hp: "",
        address: "",
    });

    const [error, setError] = useState();

    const submitDoctor = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("doctor-update", doctorData,  {
                onError: (e) => {
                    e?.duplicate&&toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setDoctorData((doctorData) => ({
                        ...doctorData,
                        name: "",
                        gender: "",
                        address: "",
                        specialist: "",
                        hp: "",
                        no_str: "",
                    }));
                    toast.success("Dokter Berhasil Diubah!");
                },
            });
        } else {
            Inertia.post("doctors", doctorData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setDoctorData((doctorData) => ({
                        ...doctorData,
                        name: "",
                        gender: "",
                        address: "",
                        specialist: "",
                        hp: "",
                        no_str: "",
                    }));
                    toast.success("Dokter Berhasil Ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setDoctorData((doctorData) => ({
            ...doctorData,
            id: editData?.id,
            name: editData?.name,
            address: editData?.address,
            no_str: editData?.no_str,
            gender: editData?.gender,
            specialist: editData?.specialist,
            hp: editData?.hp,
        }));
    }, [editData]);

    return (
        <ModalRoot
            title={
                <h1 className="font-semibold  text-gray-800 text-xl">
                    {`${editData ? "Edit" : "Tambah"} Dokter`}
                </h1>
            }
        >
            <form onSubmit={submitDoctor} className="flex flex-col space-y-3">
                <div className="flex flex-col space-y-1">
                    <h1 className="text-gray-500 text-sm">Nama Dokter</h1>
                    <input
                        onChange={(e) => {
                            setDoctorData((doctorData) => ({
                                ...doctorData,
                                name: e.target.value,
                            }));
                        }}
                        value={doctorData.name}
                        type="text"
                        name="name"
                        id="name"
                        className="border-2 border-gray-200 focus:border-white 
                        focus:outline-none focus:ring focus:ring-gray-400 transition 
                        duration-200 rounded-lg"
                    />
                    {error?.name && (
                        <span className="text-xs text-red-500  ">
                            {error?.name}
                        </span>
                    )}
                </div>
                <div className="flex flex-col space-y-1">
                    <h1 className="text-gray-500 text-sm">Jenis Kelamin</h1>
                    <select
                        onChange={(e) => {
                            setDoctorData((doctorData) => ({
                                ...doctorData,
                                gender: e.target.value,
                            }));
                        }}
                        value={doctorData.gender}
                        name="gender"
                        id="gender"
                        className="border-2 border-gray-200 focus:border-white 
                        focus:outline-none focus:ring focus:ring-gray-400 transition 
                        duration-200 rounded-lg"
                    >
                        <option value="">-Pilih-</option>
                        <option value="L">Laki-Laki</option>
                        <option value="P">Perempuan</option>
                    </select>
                    {error?.gender && (
                        <span className="text-xs text-red-500  ">
                            {error?.gender}
                        </span>
                    )}
                </div>
                <div className="flex flex-col space-y-1">
                    <h1 className="text-gray-500 text-sm">No STR</h1>
                    <input
                        onChange={(e) => {
                            setDoctorData((doctorData) => ({
                                ...doctorData,
                                no_str: e.target.value,
                            }));
                        }}
                        value={doctorData.no_str}
                        type="text"
                        name="no_str"
                        id="no_str"
                        className="border-2 border-gray-200 focus:border-white 
                        focus:outline-none focus:ring focus:ring-gray-400 transition 
                        duration-200 rounded-lg"
                    />
                    {error?.no_str && (
                        <span className="text-xs text-red-500  ">
                            {error?.no_str}
                        </span>
                    )}
                </div>

                <div className="flex flex-col space-y-1">
                    <h1 className="text-gray-500 text-sm">Spesialis</h1>
                    <select
                        onChange={(e) => {
                            setDoctorData((doctorData) => ({
                                ...doctorData,
                                specialist: e.target.value,
                            }));
                        }}
                        value={doctorData.specialist}
                        name="specialist"
                        id="specialist"
                        className="border-2 border-gray-200 focus:border-white 
                        focus:outline-none focus:ring focus:ring-gray-400 transition 
                        duration-200 rounded-lg"
                    >
                        <option value="">-Pilih-</option>
                        <option value="Bedah">Bedah</option>
                        <option value="Anak">Anak</option>
                        <option value="KK">Kulit dan Kelamin</option>
                        <option value="THT">Telinga Hidung Tenggorokan</option>
                        <option value="Radiologi">Radiologi</option>
                    </select>
                    {error?.specialist && (
                        <span className="text-xs text-red-500  ">
                            {error?.specialist}
                        </span>
                    )}
                </div>
                <div className="flex flex-col space-y-1">
                    <h1 className="text-gray-500 text-sm">No. HP/WA</h1>
                    <input
                        onChange={(e) => {
                            setDoctorData((doctorData) => ({
                                ...doctorData,
                                hp: e.target.value,
                            }));
                        }}
                        value={doctorData.hp}
                        type="text"
                        name="hp"
                        id="hp"
                        className="border-2 border-gray-200 focus:border-white 
                        focus:outline-none focus:ring focus:ring-gray-400 transition 
                        duration-200 rounded-lg"
                    />
                    {error?.hp && (
                        <span className="text-xs text-red-500  ">
                            {error?.hp}
                        </span>
                    )}
                </div>
                <div className="flex flex-col space-y-1">
                    <h1 className="text-gray-500 text-sm">Alamat</h1>
                    <input
                        onChange={(e) => {
                            setDoctorData((doctorData) => ({
                                ...doctorData,
                                address: e.target.value,
                            }));
                        }}
                        value={doctorData.address}
                        type="text"
                        name="address"
                        id="address"
                        className="border-2 border-gray-200 focus:border-white 
                        focus:outline-none focus:ring focus:ring-gray-400 transition 
                        duration-200 rounded-lg"
                    />
                    {error?.address && (
                        <span className="text-xs text-red-500  ">
                            {error?.address}
                        </span>
                    )}
                </div>
                <div className="pt-2 flex">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold text-center py-2 rounded-lg w-full"
                    >
                        Simpan
                    </button>
                </div>
            </form>
        </ModalRoot>
    );
}
