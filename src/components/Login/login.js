import { Box,Button, Container, FormGroup, TextField ,DialogActions, DialogTitle,Grid,Item, DialogContent, ButtonGroup} from '@material-ui/core'
import React,{useState} from 'react'
import {useFormik} from 'formik'
const Login = (props) => {
//   const [userName, setuserName] = useState("")
//   const [password, setPassword] = useState("")
  const formik = useFormik({
      initialValues:{
          userName:"",
          password:""    
      },

      onSubmit : (values)=>{

              
            props.setOpenLogin(false)
            props.setUser({...props.user,userName:values.userName,login:true})
        

      }
  })
  return (

    <>
    
        <ButtonGroup  variant = 'contained' style={{ height:"20", }} >
          <Button style={{width:"50%" ,borderRadius:"0" ,height:55,backgroundColor:"black",color:'white'}} >LOGIN</Button>
          <Button  style={{width:"50%",borderRadius:"0",backgroundColor:"black",color:'white'}}>SIGN UP</Button>
        </ButtonGroup>
         
        <DialogContent dividers >      
        <FormGroup >
        <TextField style={{ margin:10,width:500}}variant="outlined" name="userName" label="username" value={formik.values.userName} onChange={formik.handleChange}/>
        <TextField label="password" style={{ margin:10}} variant="outlined" name="password" value={formik.values.password} onChange={formik.handleChange} ></TextField>
       
        <Button  style={{alignItems:"center",margin:10,backgroundColor:"black",color:'white'}}  variant="outlined" onClick={formik.handleSubmit}  >
            PROCEED
          </Button>
          </FormGroup>

        </DialogContent>

        {JSON.stringify(formik.values)}
        {JSON.stringify(props.user)}
          
        
</>
  )
}

export default Login