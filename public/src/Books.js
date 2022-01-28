// @ts-nocheck
import React, { useState , useEffect} from 'react';
import axios from 'axios';


const Books = () =>{
    const[book,setBook] = useState([]);
    const getBooks = async () =>{
        try {
            const data = await axios.get('http://localhost:8000/loged/allBook');
            console.log(data.data);
            setBook(data.data);
        } catch (error) {console.log(error);}
    }
    
    useEffect(()=>{
        getBooks();
    },[]);
    return(
        <div>
            BOOKS
            <table>
                <tbody>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Number</th>
                    <th></th>
                </tr>
                {book.map((val,key)=>{
                    return(
                        <tr key={key}>
                            <td>{val.title}</td>
                            <td>{val.author}</td>
                            <td>{val.category}</td>
                            <td>{val.number}</td>
                            <td><button onClick={async ()=>{console.log(val.title)
                                const data = {
                                    book: val.title,
                                    user: "asd",
                                    days: 50
                                }
                               await axios.post('http://localhost:8000/loged/rent',data)
                               .then((res)=>{console.log(res)})
                            }}>RENT</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
export default Books;

