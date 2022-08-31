import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from '../../Components'


import { motion } from 'framer-motion';
import './register.css'

// UTILS
import AuthContext from "../../Context/AuthContext";

export default function Register() {
  const navigate = useNavigate()

  const initialValues = { username: "", email: "", password: "", password2: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const { postUser } = useContext(AuthContext)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      postUser(formValues.username, formValues.email, formValues.password)
    }
  }, [formErrors]);

  function changePage() {
    setTimeout(() => {
      navigate('/dashboard')
    }, 2000)
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.password2) {
      errors.password2 = "Password is required";
    } else if (values.password !== values.password2) {
      errors.password2 = "Passwords don't match";
    }
    return errors;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          default: {
            duration: 0.3,
          }
        }}>

        {Object.keys(formErrors).length === 0 && isSubmit && (
          changePage()
        )}
        <Navbar />


        <div className="hero hero-register min-h-screen info-content">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Signup </h1>
              <p className="py-6">Only One Step Away...</p>
            </div>

            <div className="card max-width flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-dash">
              <form onSubmit={handleSubmit}>
                <div className="card-body register-margin">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Username</span>
                    </label>
                    <input type="text" value={formValues.username} name="username"
                      placeholder="username" className="input input-ghost" onChange={handleChange} />
                  </div>
                  <div className="ui divider"></div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" name="email"
                      className="input input-ghost" value={formValues.email} onChange={handleChange} />
                  </div>
                  <div className="ui divider"></div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password"
                      name="password" className="input input-ghost"
                      value={formValues.password} onChange={handleChange} />
                  </div>
                  <div className="ui divider"></div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="text" placeholder="confirm password"
                      name="password2" className="input input-ghost" value={formValues.password2} onChange={handleChange} />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">                        {Object.keys(formErrors).length === 0 && isSubmit && (
                        <div className="ui message success">Signed in successfully</div>)}</a>
                    </label>
                  </div>
                  <div className="ui divider"></div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
