import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AvatarImage from "../../imgs/Avatar.jpeg";
import * as Yup from "yup";
import "./EditForm.css";

function EditProfile() {
  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
  const initialValues = {
    profileImage: "",
    dateOfBirth: "",
    gender: "",
    aboutMe: "",
    contactInfo: "",
    email: "",
  };

  const validationSchema = Yup.object({
    profileImage: Yup.mixed()
      .nullable()
      .required("A file is required")
      .test(
        "upload file",
        (value) => !value || (value && value.size <= 1024 * 1024)
      )
      .test(
        "format",
        "upload file",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
      ),
    name: Yup.string().required("Required Field!"),
    dateOfBirth: Yup.date().required("Required Field!"),
    gender: Yup.string().required("Required Field!"),
    aboutMe: Yup.string().required(),
    contactInfo: Yup.number().required(),
    email: Yup.string()
      .email("Invalid Email Format!")
      .required("Required Field!"),
  });

  const onSubmit = (values) => console.log("values", values);
  const fileRef = useRef(null);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue }) => (
        <Form>
          <div className="form">
            <div className="form__control">
              <h1 className="form__name">Edit Profile</h1>
              <h3 htmlFor="profileImage">Profile Photo</h3>
              <div className="form__profileSection">
                <div className="form__profileSectionLeft">
                  <img
                    src={AvatarImage}
                    alt="Avatar Image!"
                    className="form__profileSectionImage"
                  />
                </div>
                <div className="form__profileSectionRight">
                  <input
                    type="file"
                    ref={fileRef}
                    hidden
                    onChange={(event) =>
                      setFieldValue("value", event.target.files[0])
                    }
                  ></input>
                  <button onClick={() => fileRef.current.click()}>
                    Upload Photo
                  </button>
                  <strong>JPG, JPEG, PNG Max: 1024px</strong>
                </div>
              </div>

              <div className="form__aboutSection">
                <h3>Basic Information</h3>
                <Field type="text" name="name" placeholder="John Doe" />
                <ErrorMessage name="name"></ErrorMessage>
                <br />

                <label htmlFor="dateOfBirth" className="label">
                  Date Of Birth
                </label>

                <Field type="date" name="dateOfBirth" />
                <br />

                <div className="form__genderSection">
                  <label htmlFor="gender" className="label">
                    Gender
                  </label>

                  <br />
                  <label className="form__genderSectionOption">
                    <Field type="radio" name="checked" value="1"></Field>
                    Male
                  </label>
                  <br />
                  <label className="form__genderSectionOption">
                    <Field type="radio" name="checked" value="2"></Field>
                    Female
                  </label>
                  <br />
                  <label className="form__genderSectionOption">
                    <Field type="radio" name="checked" value="3"></Field>
                    Other
                  </label>
                  <ErrorMessage name="gender" />
                  <br />
                </div>

                <div className="form__aboutSectionDescription">
                  <Field
                    type="textarea"
                    name="aboutMe"
                    placeholder="About Me (Optional)"
                  ></Field>
                </div>
              </div>
              <br />

              <br />

              <div className="form__contactSection">
                <h3>Contact Information</h3>
                <div className="form__phoneSection">
                  <Field
                    type="number"
                    name="contactInfo"
                    placeholder="+92  | Phone Number"
                  />
                  <small>This is the Number for Buyers Contact ....</small>
                </div>
                <br />

                <div className="form__emailSection">
                  <Field
                    type="email"
                    name="email"
                    placeholder="abc@gmail.com"
                  />
                  <small>We won't reveal your email to anyone else ....</small>
                </div>
                <br />
              </div>

              <div className="form__actionButtons">
                <button type="button" className="form__discardButton">
                  Discard
                </button>
                <button type="submit" className="form__saveButton">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default EditProfile;
