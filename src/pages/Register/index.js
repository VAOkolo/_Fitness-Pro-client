import { useState, useEffect, useContext } from "react";
import { Navbar } from '../../components'
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import './register.css'

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

    function changePage () {
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
        <motion.div className="container-register"
        initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{
                default: {
                    duration: 0.3,
                }
            }}>
            {Object.keys(formErrors).length === 0 && isSubmit && (
                <div className="ui message success">Signed in successfully</div>)}

            {isSubmit == true && changePage()}

            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className="ui divider"></div>
                <div className="form-group">
                    <div className="field">
                        <input type="text" name="username" placeholder="Username" value={formValues.username} onChange={handleChange} />
                    </div>
                    <p>{formErrors.username}</p>
                    <div className="field">
                        <input type="text" name="email" placeholder="Email" value={formValues.email} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.email}</p>
                    <div className="field">
                        <input type="password" name="password" placeholder="Password" value={formValues.password} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.password}</p>
                    <div className="field">
                        <input type="password" name="password2" placeholder="Confirm password" value={formValues.password2} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.password2}</p>
                    <button className="fluid ui button blue">Submit</button>
                </div>
            </form>
        </motion.div>
        </>
    );
}