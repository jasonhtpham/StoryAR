import React from "react";
import { useForm } from "react-hook-form";


 const Feedback = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return (

        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First" name="First" ref={register} />
            <input type="text" placeholder="Last" name="Last" ref={register} />
            <input 
                type="password" 
                placeholder="Password" 
                name="password"
                ref={register({ required: "Password Required", minlength: {value: 4, message: "Too Short"} })}
                />
                        
            {errors.password && <p>please enter something</p>}
            <input type ="submit" />
        </form>
        </div>
    );
};

export default Feedback;



