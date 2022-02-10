import React from "react";
import Admin from "../../Layouts/Admin";
import * as MdIcons from "react-icons/md";
import { useRecoilState } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";
import PatientForm from "../../Components/Patient/PatientForm";
import PatientTable from "../../Components/Patient/PatientTable";

export default function Patients(props) {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const [dataEdit, setDataEdit] = useRecoilState(modalData);
    const PatientsData = props.patients.data;

    return (
        <Admin judul="Pasien">
            <PatientForm />
            <div className="p-4 ">
                <button
                    onClick={() => {
                        setDataEdit(null);
                        setShowModal(true);
                    }}
                    className="text-blue-500 border-2 border-blue-500 px-3 py-1 rounded-xl 
                focus:ring focus:ring-blue-200 focus:outline-none hover:bg-blue-500 
                hover:text-white transition-all duration-200 flex items-center space-x-2"
                >
                    <MdIcons.MdAddCircle size={16} />
                    <h1>Tambah</h1>
                </button>
            </div>
            <PatientTable patientsData ={PatientsData} />
        </Admin>
    );
}
