// @ts-nocheck
import axios from 'axios';
import React, { useState , useEffect} from 'react';


const RentedBook = () =>{
    const [rent,setRent] = useState([]);
    const getRents = async () =>{
        try{
            const user = {
                user: "User"
            }
          const data = await axios.post('http://localhost:8000/loged/allRent',user);
          console.log(data.data);
          setRent(data.data);
        }catch(err) {console.log(err);}
    }

    useEffect(()=>{
        getRents();
    },[])
    return(
        <div>
            RENTED BOOKS
            <table>
                <tbody>
                <tr>
                    <th>Title</th>
                    <th>Days</th>
                </tr>
                {rent.map((val,key)=>{
                    return(
                        <tr key={key}>
                            <td>{val.book}</td>
                            <td>{val.days}</td>
                            <td><button>RESTORE</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default RentedBook;