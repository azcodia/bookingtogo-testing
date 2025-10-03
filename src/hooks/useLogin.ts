import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoginStatus } from "../store/slices/authSlice";
import { APP_ROUTE } from "../constant/routeList.constant";

export default function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = useCallback(async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    dispatch(setLoginStatus(true));
    navigate(APP_ROUTE, { replace: true });
    setIsLoading(false);
  }, [dispatch, navigate]);

  return { submitHandler, isLoading };
}
