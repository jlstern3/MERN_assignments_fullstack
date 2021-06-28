import React, {useEffect, useState} from 'react';
import AuthorForm from './AuthorForm';
import axios from 'axios';
import { navigate } from '@reach/router';


const EditAuthor = (props) => {
    const [author, setAuthor] = useState({});
    const [errors, setErrors] = useState({});


    useEffect(()=> {
         // axios to get prior values of author
        axios.get("http://localhost:8000/api/authors/" + props.id)
            .then((res) => {
                console.log(res.data);
                setAuthor(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [props.id]);
    
    const handleSubmit = (e) => {
        e.preventDefault(e);
        axios.put("http://localhost:8000/api/authors/" + props.id, author)
            .then((res) => {
                console.log(res.data)
                if(res.data.errors){
                    setErrors(res.data.errors)
                }
                else{
                    navigate("/api/authors/" + props.id)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }



    return(
        <div>
            <AuthorForm 
            author = {author}
            errors = {errors}
            setAuthor = {setAuthor}
            submitButtonLabel = {"Update Author"}
            submitButtonColor = {"primary"}
            handleSubmit = {handleSubmit}
            />
        </div>
    )
}

export default EditAuthor;