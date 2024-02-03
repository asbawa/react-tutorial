import { useState } from "react";
import LayoutMain from "../Layouts/LayoutMain";
import ProfileComp from "./Profile";

const Home =() =>{

    const [name,setName]=useState('Intial Name')
    return <>
    <LayoutMain name='my home'>
        <h1>Name : {name}</h1>
        <button onClick={()=>setName('Raman')}> Raman </button>
        <button onClick={()=>setName('Harry')}> Harry </button>

        <ProfileComp setName={setName} profname={name}/>
    </LayoutMain>    
    </>
}

export default Home;
