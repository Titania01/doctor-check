import { FormEvent, useState } from "react";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/Input";
import Loader from "../../atoms/Loader";
import { doctorEntity, setDoctor } from "../../entity";
import { addDoctors } from "../../Services";
import "./DoctorForm.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DoctorForm = () => {
  const doctors = doctorEntity.use();
  const [form, setForm] = useState({
    doctorName: "",
    username: "",
    email: "",
    city: "",
    phone: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);

  const updateField = (field: string, value: string) =>
    setForm({ ...form, [field]: value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userExist = doctors.find((d) => d.email == form.email);
      const phoneExist = doctors.find((d) => d.phone == form.phone);
      const webExist = doctors.find((d) => d.website == form.website);

      if (userExist) {
        toast("Email has been used");
        return;
      }
      if (phoneExist) {
        toast("Phone number has been used");
        return;
      }
      if (webExist) {
        toast("Website has been used");
        return;
      }

      setLoading(true);
      const res = await addDoctors({
        name: form.doctorName,
        username: form.username,
        email: form.email,
        phone: form.phone,
        address: {
          city: form.city,
        },
        website: form.website,
      });
      setDoctor(res);
      setLoading(false);
      setForm({
        doctorName: "",
        username: "",
        email: "",
        city: "",
        phone: "",
        website: "",
      });
      toast(`${form.doctorName} has been added successfully!`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="wrapper" onSubmit={handleSubmit}>
      <fieldset>
        <legend className="px-4 text-[#47A985] font-bold text-lg">
          Register a new Doctor
        </legend>

        {loading ? (
          <Loader />
        ) : (
          <div className="formfields">
            <Input
              label="Name"
              value={form.doctorName}
              onChange={(e) => updateField("doctorName", e.target.value)}
            />
            <Input
              label="Username"
              value={form.username}
              onChange={(e) => updateField("username", e.target.value)}
            />
            <Input
              label="Email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
            <Input
              label="Phone Number"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
            <Input
              label="City"
              value={form.city}
              onChange={(e) => updateField("city", e.target.value)}
            />
            <Input
              label="Website"
              value={form.website}
              onChange={(e) => updateField("website", e.target.value)}
            />
          </div>
        )}
        <div className="flex justify-end mt-4">
          <Button>Register</Button>
        </div>
      </fieldset>
      <ToastContainer toastClassName="text-[#47A985]" />
    </form>
  );
};

export default DoctorForm;
