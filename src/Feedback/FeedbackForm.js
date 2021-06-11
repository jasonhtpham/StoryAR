import React from "react";
import { useForm } from "react-hook-form";

 const Feedback = () => {
    const {handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return (

        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                id="first-name"
                class="form-field"
                type="text" 
                placeholder="First Name" 
                name="firstName"
            />
            
            <input 
                id="last-name"
                class="form-field"
                type="text"
                placeholder="Last Name"
                name="lastName"
            />

            <input
                id="email"
                class="form-field"
                type="text"
                placeholder="Email"
                name="email"
            />

            <input
                id="feedback"
                class="form-field"
                type="text"
                placeholder="feedback"
                name="feedback"
            />

                        
            <input type ="submit" />
        </form>
        <a href="/view-feedbacks">View feedbacks</a>
        </div>
    );
};

export default Feedback;



