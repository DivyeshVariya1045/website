import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const review = () => {
  const methods = useForm();
  const {
    formState: { errors },
  } = methods;
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState();
  const [refreshLocalStorage, setRefreshLocalStorage] = useState(false);

  const handleSubmit = (data) => {
    data.userId = JSON.parse(localStorage.getItem("User"))?._id;
    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);
    let moduleFor = "insert-review";
    if (review) {
      moduleFor = "update-review";
      data._id = review?._id;
    }
    axios
      .post(`${process.env.NEXT_PUBLIC_API_DOMAIN}/${moduleFor}`, data)
      .then((response) => {
        if (response?.data?.status === 200) {
          setSuccessMessage(response?.data?.message);
          localStorage.setItem(
            "reviewId",
            JSON.stringify(response?.data?.result)
          );
          setRefreshLocalStorage((prev) => !prev);
          methods.reset();
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
    axios
      .get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/get-review`)
      .then((response) => {
        if (response.status === 200) {
          let res = response?.data?.reviews?.find(
            (review) => review.userId === "64aec93b150fdda7433c4d1e"
          );

          setReview(res);
        } else {
          setErrorMessage(response?.data?.message);
        }
      })
      .catch((error) => {
        setErrorMessage(error?.message);
      })
      .finally(() => {});

    // setReview(JSON.parse(localStorage.getItem("reviewId")));
  }, []);
  return (
    <>
      <div className="container">
        <div className="title">Review</div>
        <form method="post" onSubmit={methods.handleSubmit(handleSubmit)}>
          <div className="user__details">
            <div className="input__box" style={{ width: "100%" }}>
              <span className="details">Name</span>
              <input
                type="text"
                placeholder="Enter name"
                // defaultValue={review?.firstName}
                {...methods.register("firstName", {
                  required: "Please enter name",
                })}
              />
              {errors.firstName && (
                <p className="error_message">{errors?.firstName?.message}</p>
              )}
            </div>

            <div className="input__box" style={{ width: "100%" }}>
              <span className="details">Message</span>
              <textarea
                placeholder="Message...."
                {...methods.register("message", {
                  required: "Please enter Message",
                })}
                // defaultValue={review?.message}
                name="message"
                id=""
                cols="30"
                rows="10"
              ></textarea>

              {errors.message && (
                <p className="error_message">{errors?.message?.message}</p>
              )}
            </div>
          </div>
          {errorMessage && <p className="error_message">{errorMessage}</p>}
          {successMessage && (
            <p className="success_message_line">{successMessage} </p>
          )}

          <div className="button">
            {review ? (
              <input type="submit" value="Edit your review" />
            ) : (
              <input type="submit" value="Post Your Review" />
            )}
          </div>

          {loading && <div className="loading"></div>}
        </form>
      </div>
    </>
  );
};

export default review;
