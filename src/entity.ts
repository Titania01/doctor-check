import { entity } from "simpler-state";

export const doctorEntity = entity([{
  name: "",
  username: "",
  email: "",
  address: { street: "", suite: "", city: "" },
  phone: "",
  website: "",
}]);

export const setDoctor = (data: any) => {
    Array.isArray(data)?
    doctorEntity.set(data):doctorEntity.set(state => [data, ...state])

}