import axios from "axios";

export const createProduct = async (authtoken, formData, setProgress) => {
  return await axios.post(process.env.REACT_APP_API + "/product", formData, {
    headers: {
      authtoken,
    },
    onUploadProgress: (ProgressEvent) => {
      const progress = parseInt(Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)); //value progress upload
      setProgress(progress);
    }
  });
};

export const listProduct = async () => {
  return await axios.get(process.env.REACT_APP_API + "/product");
};

export const readProduct = async (id) => {
  return await axios.get(process.env.REACT_APP_API + "/product/" + id);
};

export const updateProduct = async (authtoken, id, formData) => {
  return await axios.put(process.env.REACT_APP_API + "/product/" + id, formData, {
    headers: {
      authtoken,
    },
  });
};

export const deleteProduct = async (authtoken, id) => {
  return await axios.delete(process.env.REACT_APP_API + "/product/" + id, {
    headers: {
      authtoken,
    },
  });
};
