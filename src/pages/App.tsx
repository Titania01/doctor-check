import Button from "../atoms/button/Button";
import Input from "../atoms/Input";
import DoctorForm from "../organisms/DoctorForm";
import DoctorList from "../organisms/DoctorList";

function App() {
  return (
    <div className=" mt-8">
      <DoctorForm />
      <DoctorList />
    </div>
  );
}

export default App;
