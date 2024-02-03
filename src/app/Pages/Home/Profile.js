import { useEffect, useState } from "react";

const ProfileComp=(props)=>{
    const [role,setRole]= useState('admin')
    return <div style={{background:'pink'}}>
    <h2>Profile Name : {props?.profname}</h2>
    <h2>Profile Role : {role}</h2>

    
    <button onClick={()=>props.setName('Payal')}>Name Payal</button>
    <button onClick={()=>setRole('Teacher')}>Role Teacher</button>
    <button onClick={()=>setRole('Student')}>Role Student</button>

    <ShowName setNameddd={props.setName} name={props?.profname} role={role}/>


    </div>
}

export default ProfileComp;


const ShowName=({name,role,setNameddd})=>{
    return <div style={{color:'red',background:'green'}}>
        <h3>Fancy Name : {name}</h3>
        <h3>Fancy Role : {role}</h3>
        <button onClick={()=>setNameddd('param')}>Name Param</button>
    </div>
}