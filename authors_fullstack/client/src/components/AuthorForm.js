import React from 'react';
import { Button } from 'reactstrap';


const AuthorForm = (props) => {
    // deconstruct props for CreateAuthor and EditAuthor
    const {errors, author, setAuthor, handleSubmit, submitButtonLabel, submitButtonColor} = props;

    // create functionality for when input is changed
    const inputChange = (e) => {
        // create copy of author object
        let newAuthorObject = {...author};
        // set new target name = target value
        newAuthorObject[e.target.name] = e.target.value;
        // use setter to set new author (with the new keys/values) to author (state)
        setAuthor(newAuthorObject);
    }

    return(
        <div>
            <form onSubmit = {(e) => handleSubmit(e)}>
                <label>Name: </label>
                {/* ternary operator to show validations */}
                {
                    errors.name ?
                    <span>{errors.name.message}</span>
                    : null
                }
                <input
                type = "text"
                name = "name"
                value = {author.name}
                onChange = {(e) => inputChange(e)}
                ></input>
                <Button outline color = {submitButtonColor} type = "submit">{submitButtonLabel}</Button>
            </form>
        </div>
    )
}

export default AuthorForm;