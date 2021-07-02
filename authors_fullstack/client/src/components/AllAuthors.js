import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import {Button, Table, UncontrolledTooltip} from 'reactstrap';
import DeleteAuthor from './DeleteAuthor';
import io from 'socket.io-client';


const AllAuthors = (props) => {
    //need state to hold an array to map through 
    const [authors, setAuthors] = useState([]);

    //need to use state to hold socket connection in memory
    //so the connection remains as long as this component is loaded 
    //below sets the socket only 1 time b/c it's run with a callback function
    const[socket, setSocket] = useState( () => io(":8000"));

    useEffect(()=> {
        console.log("Inside of useEffect for sockets");
        // we listen using the .on() function - this is for BOTH client and server
        //socket is listening for connect conversation, server will reply back with console.log
        socket.on("connect", () => {
            console.log("We are connected with the server on:" + socket.id );
        });
        //socket is listening for different 
        socket.on("author_added", (data) => {
            console.log(data);
        });
    }, []);


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

    const afterDeleteHandler = (deletedAuthor) => {
        let filteredAuthorArray = authors.filter((authors) => {
            return authors._id !== deletedAuthor;
        })
        setAuthors(filteredAuthorArray);
    }

    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to = "/api/authors/new"><Button outline color = "success" id = "UncontrolledTooltipExample">Add an author</Button></Link>
            <UncontrolledTooltip placement = "left" target = "UncontrolledTooltipExample">Add your new favorite author!</UncontrolledTooltip>
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
                        <td>
                            <Link to = {"/api/authors/" + author._id + "/edit"}>
                                <Button outline color = "primary">Edit</Button></Link>
                            <DeleteAuthor
                            id = {author._id}
                            afterDeleteHandler = {afterDeleteHandler} />
                        </td>

                        </tr>
                        ))
                    }

                        
                    
                </tbody>
            </Table>
        </div>
    )
}

export default AllAuthors;