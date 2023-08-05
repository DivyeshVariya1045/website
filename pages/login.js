import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const methods = useForm();
  const {
    formState: { errors },
  } = methods;
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (data) => {
    setLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_DOMAIN}/login`, data)
      .then((response) => {
        if (response?.data?.status === 200) {
          localStorage.setItem("User", JSON.stringify(response.data?.result));
          setTimeout(() => {
            router.push("/");
          }, 1000);
        } else {
          setErrorMessage(response?.data?.message);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("User")) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <div className="container">
      <div className="position-relative d-flex align-items-center justify-content-center">
          
          <div className="heading_container">
            <h2>Login</h2>
          </div>
        </div>        <form method="post" onSubmit={methods.handleSubmit(handleSubmit)}>
          <div className="user__details">
            <div className="input__box" style={{ width: "100%" }}>
              <span className="details">Email</span>
              <input
                type="text"
                placeholder="Enter email"
                {...methods.register("email", {
                  required: "Please enter email",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="error_message">{errors?.email?.message}</p>
              )}
            </div>

            <div className="input__box" style={{ width: "100%" }}>
              <span className="details">Password</span>
              <input
                type="password"
                placeholder="********"
                {...methods.register("password", {
                  required: "Please enter password",
                  minLength: {
                    value: 3,
                    message: "Password minimum 3 characters",
                  },
                  maxLength: {
                    value: 10,
                    message: "Password maximum 10 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="error_message">{errors?.password?.message}</p>
              )}
            </div>
          </div>
          {errorMessage && <p className="error_message">{errorMessage}</p>}
           <Link href="/register">Dont's have an accoutn? Sign Up</Link>

          <div className="button">
            <input type="submit" value="Login" />
          </div>

          {loading && <div className="loading"></div>}
        </form>
      </div>
    </>
  );
};

export default Login;
