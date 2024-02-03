import { NavLink, Outlet } from "react-router-dom"

const UserLayout=()=>{
    return <>
    <h1>User Header Data</h1>
    <div style={{display:'flex',gap:'10px'}}>
        <NavLink to=''>Name</NavLink>
        <NavLink to='profile'>Profile</NavLink>
        <NavLink to='section'>Section</NavLink>
    </div>
    <Outlet/>
    <div>Footer data will be here</div>
    </>
}

export default UserLayout