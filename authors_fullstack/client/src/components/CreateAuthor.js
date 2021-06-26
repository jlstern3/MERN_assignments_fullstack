import AuthorForm from "./AuthorForm";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link,navigate } from "@reach/router";
import { Button } from "reactstrap";

const CreateAuthor = (props) => {
    // create state for author (with structure) and errors
    const [author, setAuthor] = useState({
        name: "",
    });
    
    const[errors, setErrors] = useState({});

    const handleSubmit = (e) => {
    // prevent default functioning
        e.preventDefault();
    // send axios call in with new author data
        axios.post("http://localhost:8000/api/authors", author)
            .then((res) => {
                console.log(res.data);
                if(res.data.errors){
                    setErrors(res.data.errors);
                }
                else{
                    // NEED THIS LINE?
                    setAuthor(res);
            // upon success (no errors) navigate to all authors
                    navigate("/api/authors");
                }
            })
            .catch ((err) => {console.log(err);})
    }

    return(
        <div>
            <h3>Create Author</h3>
            <AuthorForm
                author = {author}
                setAuthor = {setAuthor}
                errors = {errors}
                handleSubmit = {handleSubmit}
                submitButtonLabel = {"Bring my author to life!"}
            />
        </div>
    )
}

export default CreateAuthor;