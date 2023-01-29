import axios from "axios";

export const createReservation = async (authtoken, values) => {
  return await axios.post(process.env.REACT_APP_API + "/reservation", values, {
    headers: {
      authtoken,
    },
  });
};

export const listReservation = async () => {
  return await axios.get(process.env.REACT_APP_API + "/reservation");
};

export const deleteReservation = async (id) => {
  return await axios.delete(process.env.REACT_APP_API + "/reservation/" + id);
};
