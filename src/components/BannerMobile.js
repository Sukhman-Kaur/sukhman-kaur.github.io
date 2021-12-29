import React,{useEffect, useState} from 'react'

function Details({login, view}){
    const [data, setData]=useState(null)

    useEffect(()=>{
        fetch(`https://api.github.com/users/${login}`)
        .then(response=>response.json())
        .then(setData);
    },[login]);
    if(data){
        return(
            <div>
                <img className='profile-pic2' alt={data.login} src={data.avatar_url} style={style.image}/>
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
        height:'15vh',
    },
    heading:{
        margin:'10px 0px'
    },
    banner:{
        textAlign:'center'
    }
}
export default function BannerMobile(){
    return(
    
    <div className="container-fluid banner-mobile" style={style.banner}>
                <div className="name-wrapper">
                <Details login='Sukhman-Kaur' view='m'></Details>
                    <h2 className='name' style={style.heading}>Student at Red River College</h2>
                </div>

</div>
    );
}