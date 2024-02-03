import { useState } from "react";
import LayoutMain from "../Layouts/LayoutMain";

const About =() =>{
    const [section,setSection]=useState('A')
    return <LayoutMain title='How to use conditional rendering'>
        {
        section=='A' ? <SectionA/> : <SectionB/>
        }
        <input
        type="checkbox"
        checked={section=='A'}
        />
        
        <button onClick={()=>setSection('A')}>A</button>
        <button onClick={()=>setSection('B')}>B</button>
    </LayoutMain>
}

export default About;

const SectionA=()=>{
    return <h1>Section A</h1>
}

const SectionB=()=>{
    return <h1>Section B</h1>
}