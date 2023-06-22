import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string().required("Please provide your name"),
    subject: Yup.string().required("Please provide your email subject"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please provide your email"),
    message: Yup.string().required("Please provide a message"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      emailjs
        .send(
          "service_0zmy41g",
          "template_c444ggo",
          {
            from_name: values.name + " " + values.email,
            to_name: "Agus Wirayasa",
            message: values.subject + ", " + values.message,
            reply_to: values.email,
          },
          "V2bgm5BiV-jTGXwxl"
        )
        .then((response) => {
          setSuccess(true);
          formik.resetForm();
        })
        .catch((error) => {
          setError("An error occurred. Please try again later.");
        });
    },
  });

  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <>
      {success && (
        <p className="bg-green-400 text-green-600 rounded-md font-medium text-xl p-3">
          Email sent successfully!
        </p>
      )}
      {error && (
        <p className="bg-red-400 text-red-600 rounded-md font-medium text-xl p-3">
          {error}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <div className="mb-4">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            className="bg-zinc-900 rounded-md border border-zinc-700 p-2 focus:outline-indigo-800 w-full"
          />
          {touched.name && errors.name && (
            <p className="text-red-500">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            className="bg-zinc-900 rounded-md border border-zinc-700 p-2 focus:outline-indigo-800 w-full"
          />
          {touched.email && errors.email && (
            <p className="text-red-500">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            className="bg-zinc-900 rounded-md border border-zinc-700 p-2 focus:outline-indigo-800 w-full"
          />
          {touched.subject && errors.subject && (
            <p className="text-red-500">{errors.subject}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={values.message}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            className="bg-zinc-900 rounded-md border border-zinc-700 p-2 focus:outline-indigo-800 w-full"
          ></textarea>
          {touched.message && errors.message && (
            <p className="text-red-500">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-purple-500 shadow-lg shadow-purple-500/50 hover:bg-purple-700 px-3 py-2 text-white rounded-md transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactMe;
