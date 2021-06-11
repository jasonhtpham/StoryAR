import React from 'react'
import validate from './ValidateInfo'
import useForm from './UseForm'
import './Form.css'

const FormSignup = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors} 
    = useForm(
        submitForm,
        validate);
    
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get started with us today! Create an 
                    account.
                </h1>
                <div className="form-inputs">                    
                    <label htmlFor="username" 
                    className="form-label">
                        Username
                    </label>
                    <input 
                        id="username"
                        type="text" 
                        name="username" 
                        className="form-input" 
                        placeholder="enter your username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" 
                    className="form-label">
                        Email
                        </label>
                        <input
                            id="email" 
                            type="email" 
                            name="email" 
                            className="form-input" 
                            placeholder="enter your Email"
                            value={values.email}
                            onChange={handleChange}
                        />
                       {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" 
                    className="form-label">
                        Password
                        </label>
                        <input
                            id="password" 
                            type="password" 
                            name="password" 
                            className="form-input" 
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                        />           
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" 
                    className="form-label">
                        Password2
                        </label>
                        <input
                            id="password2" 
                            type="password" 
                            name="password2" 
                            className="form-input" 
                            placeholder="Enter Password 2"
                            value={values.password2}
                            onChange={handleChange}
                        />           
                       {errors.password2 && <p>{errors.password2}</p>}

                </div>
                <button className="form-input-btn" class="waves-effect waves-light btn" type="submit">
                    Sign-up
                </button>
                <span className= "form-input-login">
                    Already have an account? Login <a href="https://www.youtube.com/watch?v=KGFG-yQD7Dw&t=15s">here</a>
                </span>
            </form>
        </div>

    )
}

export default FormSignup
