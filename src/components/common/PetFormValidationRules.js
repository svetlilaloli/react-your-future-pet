export default function validate(values) {
    let errors = {};

    if (!values.name) {
        errors.name = 'Name is required';
    } else if (values.name.length < 2) {
        errors.name = 'Name should be at least 2 characters long';
    }

    if (!values.breed) {
        errors.breed = 'Breed is required';
    } else if (values.breed.length < 3) {
        errors.breed = 'Breed should be at least 3 characters long';
    } 

    if (!values.age) {
        errors.age = 'Age is required';
    } 

    if (!values.weight) {
        errors.weight = 'Weight is required';
    } 

    if (!values.image) {
        errors.image = 'Image is required';
    } 

    if (!values.summary) {
        errors.summary = 'Please write a short description about this pet';
    } 

    return errors;
};