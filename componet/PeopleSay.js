import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import { BiSolidQuoteLeft } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const PeopleSay = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [review, setReviw] = useState([]);

  let settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/get-review`)
      .then((response) => {
        if (response.status === 200) {
          setReviw(response?.data?.reviews);
        } else {
          setErrorMessage(response?.data?.message);
        }
      })
      .catch((error) => {
        setErrorMessage(error?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="position-relative d-flex align-items-center justify-content-center">
        <div className="heading_container">
          <h2>People Say</h2>
        </div>
      </div>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <Slider {...settings}>
          {review?.map((review) => {
            return (
              <Fragment key={review._id}>
                <div className="container-fluid py-5" id="testimonial">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <div className="owl-carousel testimonial-carousel">
                          <div className="text-center">
                            <BiSolidQuoteLeft
                              size={50}
                              className="peopleSay mb-4"
                            />
                            <h4 className="font-weight-light mb-4">
                              {review.message}
                            </h4>

                            <h5 className="font-weight-bold m-0">
                              {review.firstName}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </Slider>
      )}
    </>
  );
};

export default PeopleSay;
