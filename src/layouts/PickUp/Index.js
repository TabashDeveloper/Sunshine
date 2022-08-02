import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Axios from "axios";
import Modal from 'react-bootstrap/Modal'
import logo from "../../assets/ic_logo.svg";
const initialValues = {
  fullName: "",
  emailAddress: "",
  cellNumber: "",
  address: "",
  status: 1,
  orderDate: "",
  orderTime: "",
};
const validationSchema = Yup.object({
  fullName: Yup.string().required("username is required!"),
  emailAddress: Yup.string()
    .email("Email should be valid")
    .required("Email is required!")
    .matches(/^(\S+$)/g, "email cannot contain blankspaces"),
  cellNumber: Yup.string()
    .required("Phone number is required")
    .max(10, "Maximum ten character is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  address: Yup.string().required("Address is required!"),
  orderDate: Yup.string().required("Order Date is required!"),
  orderTime: Yup.string().required("Please Select Time!"),
});
const Index = () => {
  const [show, setShow] = useState(false);
  const[res,setRes]=useState('')
  function timeChanging(time) {
    var timeSplit = time.split(":"),
      hours,
      minutes,
      meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
      meridian = "PM";
      hours -= 12;
    } else if (hours < 12) {
      meridian = "AM";
      if (hours === 0) {
        hours = 12;
      }
    } else {
      meridian = "PM";
    }
    return hours + ":" + minutes + " " + meridian;
  }
  
  const onSubmit = (data, { resetForm }) => {
    data.orderTime = timeChanging(data?.orderTime);
    data.cellNumber='+1'+data.cellNumber;
  
    Axios.post("https://node01.dagnum.com:8443/sunshine/api/order", data)
      .then((response) => {
        setRes(response.data.message);
        setShow(true);
      })
      .catch((err) => {
        toast("Your Cannot book", "top-right");
      });
    resetForm();
  };
  return (
    <>
      <section id="contactus" className="Sched-for-pick container">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Schedule for PickUp</h2>
            <p className="welcome-one__call-desc">
              Keep up a vital separation from the hussle of Washing Cloths. Book
              you Laundry in your general region with
              <br />
              Watertown. Book Now and Avail Great Discounts on Your Next Order.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 Sched-for-pick__timings">
            <h5>Store Open Close Timing</h5>
            <div>
              <h6>Monday</h6>
              <p>7:00AM - 11:30PM</p>
            </div>
            <div>
              <h6>Tuesday</h6>
              <p>7:00AM - 11:30PM</p>
            </div>
            <div>
              <h6>Wednesday</h6>
              <p>7:00AM - 11:30PM</p>
            </div>
            <div>
              <h6>Thursday</h6>
              <p>7:00AM - 11:30PM</p>
            </div>
            <div>
              <h6>Friday</h6>
              <p>7:00AM - 11:30PM</p>
            </div>
            <div>
              <h6>Saturday</h6>
              <p>7:00AM - 11:30PM</p>
            </div>
            <div>
              <h6>Sunday</h6>
              <p>7:00AM - 11:30PM</p>
            </div>
          </div>

          <div className="col-lg-9 Sched-for-pick__form">
            <Formik
              initialValues={initialValues}
              enableReinitialize={false}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => {
                return (
                  <Form
                    name="BookingForm"
                    // onFinish={formik.handleSubmit}
                    autoComplete="off"
                    // validateMessages={validationSchema}
                  >
                    <div className="Sched-for-pick__inputs">
                      <div className="w-50">
                        <Field
                          name="fullName"
                          className="Sched-for-pick__input"
                          placeholder="Full Name"
                          type="text"
                        />
                        <div className="error-message">
                          <ErrorMessage name="fullName" />
                        </div>
                      </div>
                      <div className="w-50">
                        <Field
                          name="emailAddress"
                          className="Sched-for-pick__input"
                          placeholder="Email Address"
                          type="email"
                        />
                        <div className="error-message">
                          <ErrorMessage name="emailAddress" />
                        </div>
                      </div>
                    </div>
                    <div className="Sched-for-pick__inputs">
                      <div className="w-50">
                        <Field
                          name="cellNumber"
                          className="Sched-for-pick__input"
                          placeholder="416 704 5420"
                          type="number"
                          maxlength="10"
                          min="0"
                        />
                        <div className="error-message">
                          <ErrorMessage name="cellNumber" />
                        </div>
                      </div>
                      <div className="w-50">
                        <Field
                          name="address"
                          className="Sched-for-pick__input"
                          placeholder="Address"
                          type="text"
                        />
                        <div className="error-message">
                          <ErrorMessage name="address" />
                        </div>
                      </div>
                    </div>
                    <div className="Sched-for-pick__inputs">
                      <div className="Sched-for-pick__inputs">
                        {/* <!-- <Field name="status" className="Sched-for-pick__input__day" placeholder="Day"/> --> */}
                        <div className="w-75">
                          <Field
                            name="orderDate"
                            className="Sched-for-pick__input__date"
                            type="date"
                            min={new Date().toISOString().split("T")[0]}
                          />
                          <div className="error-message">
                            <ErrorMessage name="orderDate" />
                          </div>
                        </div>
                        {/* <!-- <Field name="orderTime" className="Sched-for-pick__input__time" name='time' format='HH:MM'  id="time" type="time"> --> */}

                        <div>
                          <Field
                            type="time"
                            className="Sched-for-pick__input__time"
                            min="07:00:00"
                            max="23:30:00"
                            name="orderTime"
                            placeholder="Select Time"
                          />
                          <div className="error-message">
                            <ErrorMessage name="orderTime" />
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        name="placeorder"
                        className="Sched-for-pick__button"
                      >
                        PickupNow
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
           
          </div>
         
        </div>
        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div style={{textAlign:'center'}}>
        <img src={logo} alt="logo"/>
        <p style={{marginTop:'15px'}}> {res}</p>
        </div>
        </Modal.Body>
      </Modal>
      </section>
    </>
  );
};

export default Index;
