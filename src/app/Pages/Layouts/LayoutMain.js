import { NavLink } from "react-router-dom"

const LayoutMain =(props)=>{
    return <>
    <div style={{display:'flex',gap:'10px'}}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/form'>Form</NavLink>
    </div>
    <h1>{props.title}</h1>
        {/* <h1>Layout ({props?.name})  {props.role && `role : ${props.role}`}</h1> */}
        {/* <h1>My Header</h1> */}
        {props?.children}
        {/* <h1>My Footer</h1> */}
    </>
}

export default LayoutMain