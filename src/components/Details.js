import React, { useEffect, useState } from 'react'

export default function Details({login, view}){
    const [data, setData]=useState(null)

    useEffect(()=>{
        fetch(`https://api.github.com/users/${login}`)
        .then(response=>response.json())
        .then(setData);
    },[login]);
    if(data){
        return(
            <div>
                <img className='profile-pic' alt={data.login} src={data.avatar_url} style={style.image}/>
                </div>
        );
       
    }
    return (
    <div>
    </div>);
}
const style={
    image: {
        borderRadius: "50%",
        marginTop:"2vh",
        height:'35vh',
    }
}