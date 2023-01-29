import axios from "axios";

export const createBlog = async (authtoken, formData, setProgress) => {
  return await axios.post(process.env.REACT_APP_API + "/blog", formData, {
    headers: {
      authtoken,
    },
    onUploadProgress: (ProgressEvent) => {
      const progress = parseInt(
        Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
      ); //value progress upload
      setProgress(progress);
    },
  });
};

export const listBlog = async () => {
  return await axios.get(process.env.REACT_APP_API + "/blog");
};

export const deleteBlog = async (authtoken, id) => {
  return await axios.delete(process.env.REACT_APP_API + "/blog/" + id, {
    headers: {
      authtoken,
    }
  });
};


