// import React from "react";
// import { UserOutlined } from "@ant-design/icons";
// import { Input, Button } from "antd";
// import { FacebookOutlined, TwitterOutlined } from "@ant-design/icons";
// import { withFormik } from "formik";

// const Formlogin = (props) => {
//   const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
//     props;

//   return (
//     <form onSubmit={handleSubmit}>
//       <div
//         style={{
//           height: window.innerHeight,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//         }}
//       >
//         <h3 className="text-center mb-5">{props.displayName}</h3>
//         <div>
//           <Input
//             onChange={handleChange}
//             style={{ width: "100%", minWidth: 300 }}
//             value={values.email}
//             className="mb-5"
//             name="email"
//             size="large"
//             placeholder="large size"
//             prefix={<UserOutlined />}
//           />
//           <Input
//             type="password"
//             onChange={handleChange}
//             value={values.passWord}
//             name="passWord"
//             size="large"
//             placeholder="large size"
//             prefix={<UserOutlined />}
//           />
//         </div>
//         <Button
//           htmlType="submit"
//           size="large"
//           className="mt-5 btn btn-primary"
//           style={{ width: "65%" }}
//         >
//           Login
//         </Button>
//         <div className="social mt-5">
//           <Button
//             className="bg-primary me-3"
//             type="primary"
//             shape="circle"
//             icon={<FacebookOutlined />}
//             size={"large"}
//           ></Button>
//           <Button
//             className="bg-primary"
//             type="primary"
//             shape="circle"
//             icon={<TwitterOutlined />}
//             size={"large"}
//           ></Button>
//         </div>
//       </div>
//     </form>
//   );
// };
// const mapToFormik = withFormik({
//   mapPropsToValues: () => ({ email: "", passWord: "" }),

//   // Custom sync validation
//   validate: (values) => {
//     const errors = {};

//     if (!values.name) {
//       errors.name = "Required";
//     }

//     return errors;
//   },

//   handleSubmit: (values, { setSubmitting }) => {
//     console.log(values);
//   },
//   handleChange: (values, props) => {
//     console.log(values);
//   },

//   displayName: "Form Login",
// })(Formlogin);

// export default mapToFormik;
import React from "react";
import { Input, Button } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { signinCyberbugAction } from "../../redux/actions/actions";

const Formlogin = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          height: window.innerHeight,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3 className="text-center mb-5">{props.displayName}</h3>
        <Input
          className=""
          onChange={handleChange}
          value={values.email}
          size="large"
          name="email"
          placeholder="large size"
          prefix={<UserOutlined />}
        />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
        <Input
          type="password"
          onChange={handleChange}
          value={values.passWord}
          size="large"
          name="passWord"
          placeholder="large size"
          prefix={<LockOutlined />}
        />
        {errors.passWord && touched.passWord ? (
          <div>{errors.passWord}</div>
        ) : null}
        <Button
          htmlType="submit"
          size="large"
          className="mt-5 btn btn-primary"
          style={{ width: "65%" }}
        >
          Login
        </Button>
        <div className="social mt-5">
          <Button
            className="bg-primary me-3"
            type="primary"
            shape="circle"
            icon={<FacebookOutlined />}
            size={"large"}
          ></Button>
          <Button
            className="bg-primary"
            type="primary"
            shape="circle"
            icon={<TwitterOutlined />}
            size={"large"}
          ></Button>
        </div>
      </div>
    </form>
  );
};

const LoginCyberBugs = withFormik({
  mapPropsToValues: () => ({ email: "", passWord: "" }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Invalid email").required("email is required"),
    passWord: Yup.string()
      .min(6, "password must have min 6 character")
      .max(32, "password"),
  }),
  handleSubmit: ({ email, passWord }, { props, setSubmitting }) => {
    props.dispatch(signinCyberbugAction(email, passWord));
    console.log(props);
  },
  displayName: "BasicForm",
})(Formlogin);
export default connect()(LoginCyberBugs);
//không dùng hook dc vì nguyên tắc phải để trước react function nên phải dung hàm connect
