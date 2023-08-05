import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
const Register = () => {
  const methods = useForm();
  const {
    formState: { errors },
  } = methods;
  const router=useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const password = useRef({});
  password.current = methods.watch("password", "");

  const handleSubmit = (data) => {
    delete data.cpassword;
    setLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_DOMAIN}/insert-user`, data)
      .then((response) => {
        if (response?.data?.status === 200) {
          setSuccessMessage(response?.data?.message);
          setTimeout(()=>{
            router.push("/login")

          },1000)
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
  return (
    <>
      {successMessage ? (
        <div className="success_message">Registration successfully</div>
      ) : (
        <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          
          <div className="heading_container">
            <h2>Registration</h2>
          </div>
        </div>          <form method="post" onSubmit={methods.handleSubmit(handleSubmit)}>
            <div className="user__details">
              <div className="input__box ">
                <span className="details">First Name</span>
                <input
                  {...methods.register("firstName", {
                    required: "Please enter first name",
                    pattern: {
                      value: /^\S.*[a-zA-Z\s]*$/g,
                      message: "Please enter valid first name",
                    },
                    maxLength: {
                      value: 20,
                      message: "Maximum 20 characters allowed",
                    },
                    minLength: {
                      value: 3,
                      message: "First name should contain atleast 3 characters",
                    },
                  })}
                  type="text"
                  placeholder="Enter first name..."
                />
                {errors.firstName && (
                  <p className="error_message">{errors?.firstName?.message}</p>
                )}
              </div>
              <div className="input__box">
                <span className="details">Last Name</span>
                <input
                  type="text"
                  placeholder="Enter last name..."
                  {...methods.register("lastName", {
                    required: "Please enter last name",
                    pattern: {
                      value: /^\S.*[a-zA-Z\s]*$/g,
                      message: "Please enter valid last name",
                    },
                    maxLength: {
                      value: 20,
                      message: "Maximum 20 characters allowed",
                    },
                    minLength: {
                      value: 3,
                      message: "Last name should contain atleast 3 characters",
                    },
                  })}
                />
                {errors.lastName && (
                  <p className="error_message">{errors?.lastName?.message}</p>
                )}
              </div>
              <div className="input__box">
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
              <div className="input__box">
                <span className="details">Phone Number (Optional)</span>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  {...methods.register("mobile", {
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter a valid 10 digit mobile number",
                    },
                  })}
                />
                {errors.mobile && (
                  <p className="error_message">{errors?.mobile?.message}</p>
                )}
              </div>
              <div className="input__box">
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
              <div className="input__box">
                <span className="details">Confirm Password</span>
                <input
                  type="password"
                  placeholder="********"
                  {...methods.register("cpassword", {
                    required: "Please enter confirm password",
                    validate: (value) =>
                      value === password.current || "Password mismatch",
                  })}
                />
                {errors.cpassword && (
                  <p className="error_message">{errors?.cpassword?.message}</p>
                )}
              </div>
            </div>
            {errorMessage && <p className="error_message">{errorMessage}</p>}

            <div className="button">
              <input type="submit" value="Register" />
            </div>
            <Link href="/login">Already have an account?</Link>

            {loading && <div className="loading"></div>}
          </form>
        </div>
      )}
    </>
  );
};

export default Register;
