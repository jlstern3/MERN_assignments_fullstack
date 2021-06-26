import React from 'react';
import axios from 'axios';
// import AllAuthors from './AllAuthors';
import { Button } from 'reactstrap';


const DeleteAuthor = (props) => {
    const {id, afterDeleteHandler} = props;
    
    const deleteHandler = (e, id) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/authors/" + id)
            .then((res) => {
                console.log(res.data);
                afterDeleteHandler(id);
            })
            .catch((err) => {console.log(err)});
    }



    return(
        <div>
            <Button outline color = "danger" onClick = {(e) => deleteHandler(e, id)}>Delete {id.name}</Button>
        </div>
    )
}

export default DeleteAuthor;