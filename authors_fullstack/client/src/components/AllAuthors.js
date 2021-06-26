import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link,navigate} from '@reach/router';
import AuthorForm from './AuthorForm';
import {Button, Table, UncontrolledTooltip} from 'reactstrap';

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
            <Link to = "/api/authors/new"><Button outline color = "success" id = "UncontrolledTooltipExample">Add an author</Button></Link>
            <UncontrolledTooltip placement = "left" target = "UncontrolledTooltipExample">Does this work?</UncontrolledTooltip>
            <Table striped hover>
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
                        <td><Link to = {"/api/authors/" + author._id + "/edit"}><Button outline color = "primary">Edit</Button></Link><Button outline color = "danger">Delete</Button></td>
                        </tr>
                        ))
                    }

                        
                    
                </tbody>
            </Table>
        </div>
    )
}

export default AllAuthors;