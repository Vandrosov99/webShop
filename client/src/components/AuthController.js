import React, { useEffect, useState } from "react";
import { authCheck } from "../../src/http/userApi";
import { setAuth, setUser } from "../store/actions";
import { Spinner } from "react-bootstrap";
import { useHistory, useDispatch } from "react-router";
import { LOGIN_ROUTE, SHOP_ROUTE } from "../const/routeKeys";

const AuthController = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  const checkUser = async () => {
    try {
      const user = await authCheck();

      dispatch(setUser(user));
      dispatch(setAuth(true));
      history.push(SHOP_ROUTE);
    } catch (e) {
      console.log("CHECK USER");
      console.log(e);
      history.push(LOGIN_ROUTE);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    checkUser();
  }, []);

  if (isLoading) {
    return <Spinner animation='grow' />;
  }

  return { children };
};

export default AuthController;
