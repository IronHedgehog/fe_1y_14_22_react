import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";
import { object, string } from "yup";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const SignUpSchema = object({
  firstName: string().min(2, "Занадто коротко").required("Обовʼязкове поле"),
  lastName: string().min(2, "Занадто коротко").required("Обовʼязкове поле"),
  email: string()
    .min(6, "Мінімум 6 символів")
    .email("Введи нормально")
    .required("Обовʼязкове поле"),
});
class App extends Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={async (values) => {
            await sleep(500);
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field className="" name="firstName" placeholder="Jane" />
              <ErrorMessage name="firstName" component="div" />

              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" placeholder="Doe" />
              <ErrorMessage name="lastName" component="div" />

              <label htmlFor="email">Email</label>
              <Field name="email" placeholder="jane@acme.com" type="email" />
              <ErrorMessage name="email" component="div" />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default App;
//  <Formik
//         initialValues={{ nickname: "", email: "", password: "" }}
//         onSubmit={(values, { setSubmitting }) => {
//           console.log("Значення", values);
//           setSubmitting(false);
//         }}
//       >
//         {({ isSubmitting }) => {
//           <Form>
//             <Field as="" name="lastName">
//               {({
//                 field, // { name, value, onChange, onBlur }
//                 form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
//                 meta,
//               }) => (
//                 <div>
//                   <input type="text" placeholder="Email" {...field} />
//                   {meta.touched && meta.error && (
//                     <div className="error">{meta.error}</div>
//                   )}
//                 </div>
//               )}
//             </Field>

//             <div>
//               <label>Nickname</label>
//               <Field type="text" name="nickname" placeholder="nickname" />
//               <ErrorMessage />
//             </div>
//             <div>
//               <label>email</label>
//               <Field type="email" name="email" placeholder="Email" />
//               <ErrorMessage />
//             </div>
//             <div>
//               <label>password</label>
//               <Field type="password" name="password" placeholder="password" />
//               <ErrorMessage />
//             </div>
//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </Form>;
//         }}
//       </Formik>
