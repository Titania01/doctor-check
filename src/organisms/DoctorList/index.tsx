import { useEffect, useState } from "react";
import SearchBox from "../../atoms/SearchBox";
import { doctorEntity, setDoctor } from "../../entity";
import Table from "../../molecules/table/Table";

import { getDoctors } from "../../Services";
import "./DoctorList.scss";

const DoctorList = () => {
  const doctors = doctorEntity.use();
  const [form, setForm] = useState("");

  const filteredDoctors = doctors.filter(
    (data) =>
      data.username.toLowerCase().includes(form.toLowerCase()) ||
      data.name.toLowerCase().includes(form.toLowerCase())
  );

  const fetchDoctors = async () => {
    try {
      const res = await getDoctors();
      setDoctor(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const doctorsToShow = filteredDoctors || doctors;

  return (
    <fieldset className="doctor-list-cont mb-8">
      <legend className="px-4 text-[#47A985] font-bold text-lg">
        Doctors List
      </legend>
      <div className="w-full flex items-center justify-center">
        <SearchBox value={form} onChange={(e) => setForm(e.target.value)} />
      </div>
      <Table tableData={doctorsToShow} />
    </fieldset>
  );
};

export default DoctorList;
