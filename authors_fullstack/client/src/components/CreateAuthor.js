import AuthorForm from "./AuthorForm";
import React, {useState} from "react";
import axios from 'axios';
import { navigate } from "@reach/router";
import {Alert, Spinner} from 'reactstrap';


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


        const [visible, setVisible] = useState(true);
        const onDismiss = () => setVisible(false);



    return(
        <div>
            <h3>Add Your New Favorite Author</h3>
            <AuthorForm
                author = {author}
                setAuthor = {setAuthor}
                errors = {errors}
                handleSubmit = {handleSubmit}
                submitButtonLabel = {"Bring my author to life!"}
                submitButtonColor = {"success"}
            />
            {/* <Alert color="info">
                Alert!  You're about to bring a very talented author to (cyber) life. 
            </Alert> */}


            <Alert color="info" isOpen={visible} toggle={onDismiss}>
                I am an alert and I can be dismissed!
            </Alert>
            <Spinner color="primary" />
        
        </div>
    )
}

export default CreateAuthor;