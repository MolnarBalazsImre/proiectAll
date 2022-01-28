import React from 'react';
import {useState} from 'react';
import axios from 'axios';


const BookAdd = () =>{
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [number, setNumber] = useState("");
    const [isAddBook, setIsAddBook] = useState(false);
    const handleSubmit = (event)=>{
        event.preventDefault();
    const data = {
        title:title,
        author:author,
        category: category,
        number: number
    }
    console.log(data);
    axios.post('http://localhost:8000/loged/addBook',data)
        .then(res => console.log(res))
    setTitle("");
    setAuthor("");
    }
    if(isAddBook === true)
    {
   return(
       <div>
       ADD BOOK <b><p></p></b>
       <form onSubmit={handleSubmit}>
              <label>Title:
                  <input type="text" onChange={(e)=>{setTitle(e.target.value)}}></input>
              </label><b><p></p></b>
              <label>Author:
                  <input type="text" onChange={(e)=>{setAuthor(e.target.value)}}></input>
              </label><b><p></p></b>
              <label>Category:
                    <select onChange={(e)=>{setCategory(e.target.value)}}>
                        <option value="Category1">Category1</option>
                        <option value="Category2">Category2</option>
                        <option value="Category3">Category3</option>
                        <option value="Category4">Category4</option>
                    </select>
              </label><b><p></p></b>
              <label>Number:
                  <input type="text" onChange={(e)=>{setNumber(e.target.value)}}></input>
              </label><b><p></p></b>
              <input type="submit" value="ADD"></input>
              <button onClick={()=>{setIsAddBook(false)}}>Hide</button>
       </form>
       </div>
   )}else{
       return(
           <div>
               <button onClick={()=>{setIsAddBook(true)}}>ADD BOOK</button>
           </div>
       )
   }

}

export default BookAdd;