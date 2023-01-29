import axios from "axios";

export const createCategory = async (authtoken, value) => {
  return await axios.post(process.env.REACT_APP_API + "/category", value, {
    headers: {
      authtoken,
    },
  });
};

export const listCategory = async (authtoken) =>
  await axios.get(process.env.REACT_APP_API + "/category");

export const deleteCategory = async (authtoken, id) =>
  await axios.delete(process.env.REACT_APP_API + "/category/" + id, {
    headers: {
      authtoken,
    },
  });

export const ReadCategory = async (authtoken, id) =>
  await axios.get(process.env.REACT_APP_API + "/category/" + id, {
    headers: {
      authtoken,
    },
  });
//async (authtoken, อัพเดทที่ id, ค่าที่จะอัพเดท)
export const EditCategory = async (authtoken, id, value) => {
  return await axios.put(process.env.REACT_APP_API + "/category/" + id, value, {
    headers: {
      authtoken,
    },
  });
};