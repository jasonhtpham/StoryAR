import {useState, useEffect} from 'react'

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({})

    const [isSubmitting ] = useState (false);

    const handleChange = e => {
        const { name, value} = e.target
        setValues({
            ...values, 
            [name] : value
        })
    }

    const handleSubmit = e => {
        e.preventDefeault();

        setErrors(validate(values))
    }

    useEffect(() => {
        if(Object.keys(errors).length ===0 &&
        isSubmitting) {
            callback()
        }
    })

    return {handleChange, values, handleSubmit, errors};
};

export default useForm;
