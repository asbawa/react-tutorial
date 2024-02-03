import { useEffect, useMemo, useState } from "react";
import LayoutMain from "../Layouts/LayoutMain";
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { setInputs } from "../../../store/studentSlice";
const FormHandle =() =>{

    const {inputs, studentList} = useSelector(store=>store?.student);
    const dispatch = useDispatch()
    // const [inputs,setInputs]=useState({})

    // const [isNameDisabled,setIsNameDisabled]=useState(false) 
    console.log('inputs ',inputs)
    const hanldeChange=(value,name)=>{
        const newInputs = {
            ...inputs,
            studentForm:{
                ...inputs?.studentForm,
                [name]:value
            }
        }
        dispatch(setInputs(newInputs))
        // setInputs({
        //     ...inputs,
        //     [name]:value
        // })
    }
    const handleSubmit=()=>{
        console.log('saving pyalos',inputs)
    }

    const handleClear=()=>{
        dispatch(setInputs({
            ...inputs,
            studentForm:{}
        }))
    }

    const isNameDisabled = useMemo(()=>{
        if(inputs?.studentForm?.student_id==2){
            return true
        }else{
            return false 
                   
        }

    },[inputs?.studentForm?.student_id])
    
    // useEffect(()=>{
    //     if(inputs?.studentForm?.student_id==2){
    //         setIsNameDisabled(true)
    //     }else{
    //         setIsNameDisabled(false)
    //     }

    // },[inputs?.studentForm?.student_id])

    
    return <LayoutMain title='Form Handling'>
        <Form onSave={handleSubmit} onClear={handleClear}>
            <Input disabled={isNameDisabled} title='Name' name="name" value={inputs?.studentForm?.name} hanldeChange={hanldeChange} />
            <Input title='Box 10' name="box10" value={inputs?.studentForm?.box10} hanldeChange={hanldeChange} />
            <Input disabled={isNameDisabled} title='Box 14' name="box14" value={inputs?.studentForm?.box14} hanldeChange={hanldeChange} />
            <select  onChange={(e)=>hanldeChange(e.target.value, 'student_id')} value={inputs?.studentForm?.student_id}>
                <option value=''>----Select----</option>
                {
                    studentList && studentList.map(item=>{
                        return <option value={item.id}>{item.name}</option>
                    })
                }
            </select>
        </Form>
       
    </LayoutMain>
}

export default FormHandle;

const Input=(props)=>{
    return <div className="form-input">
        <span className="form-input-label">{props?.title}</span>
        <input
        disabled={props?.disabled}
        name={props?.name} 
        value={props?.value || ''} 
        onChange={(e)=>props?.hanldeChange(e.target.value, props.name)} 
        />
        
    </div>
}

const Form=({children, onSave,onClear })=>{
    return <div style={{
        display:'flex',
        flexDirection:'column',
        width:'500px',
        margin:'50px auto'
        }}>
        {children}

        <button onClick={onSave}>Save</button>
        <button onClick={onClear}>Clear</button>
    </div>
}

Form.defaultProps={
    onSave:()=>null,
    onClear:()=>null
}