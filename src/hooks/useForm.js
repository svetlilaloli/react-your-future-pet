import { useState, useEffect } from 'react';

export function useForm (callback, validate) {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
        callback(values);
        }
    }, [errors]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        // onSubmitHandler(values);
        // setValues(initialValues);
    };

    const handleChange = (event) => {
        event.persist();
        setValues(state => ({ ...state, [event.target.name]: event.target.value }));
    };

    const updateValues = (newValues) => {
        setErrors(validate(newValues));    
        setValues(newValues);
        //setIsSubmitting(true);
    };
        
    return {
        handleChange,
        handleSubmit,
        updateValues,
        values,
        errors,
    }
};
