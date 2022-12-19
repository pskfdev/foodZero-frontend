import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingtoRedirect";
import { currentAdmin } from "../../functions/auth";

function AdminRoute({ children }) {
  /* Redux */
  const { user } = useSelector((state) => ({ ...state }));
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    /* check stor user && check user.token */
    if (user && user.user.token) {
      currentAdmin(user.user.token)
        .then((res) => {
          /* console.log(res) */
          setAdmin(true);
        })
        .catch((err) => {
          //err
          console.log(err);
          setAdmin(false);
        });
    }
  }, [user]);

  return admin ? children : <LoadingToRedirect />;
}

export default AdminRoute;
