import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link,navigate} from '@reach/router';
import AuthorForm from './AuthorForm';
import {Button} from 'reactstrap';

const AllAuthors = (props) => {
    //need state to hold an array to map through 
    const [authors, setAuthors] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data)
            })
            .catch((err)=> {
                console.log(err);
            })
    }, []);

    return(
        <div>
            <Link to = "/api/authors/new"><Button color = "primary">Add an author</Button></Link>
            <table>
                <thead>
                    <tr>
                        <td>Author</td>
                        <td>Actions Available</td>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        authors.map((author, index)=> (
                        <tr>
                        <td key = {index}>{author.name}</td>
                        <td><Link to = {"/api/authors/" + author._id + "/edit"}><button>Edit</button></Link><button>Delete</button></td>
                        </tr>
                        ))
                    }

                        
                    
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors;