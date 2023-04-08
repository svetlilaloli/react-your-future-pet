export default function validate(values) {
    let errors = {};

    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password should be at least 6 characters long';
    }

    if (values.repeatPassword && (values.repeatPassword !== values.password)) {
        errors.repeatPassword = 'Password does not match';
    } 

    return errors;
};