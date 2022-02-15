import React,{useState,useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import { notify } from './toast';
import 'react-toastify/dist/ReactToastify.css';
import { validate } from './validate';
import styles from "./SignUp.module.css";
const SingUp = () => {
const [data,setDate]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    isAccepted:false
    // dar marhaleh aval karbar on ro ghabool nakardeh

});

// object daryafti az error ro dar state zir zakhireh mikonim
const [errors,setErrors]=useState({});
// vseh estefadeh az error ha az useEffect estefadeh mikonim
const [touched,setTouched]=useState({});

useEffect(()=>{
setErrors(validate(data))
// data ro be setErrors midimke bar asas maghadir dakhel on validate ro anjam midim 
console.log(errors)
},[data,touched])
// har mogeh data , touched taghirkard amaliyat validate ro anjam bedeh 
// 
const changeHandler=event=>{
    // console.log(event.target.checked)
    // meghdar checkbox true ya false shavad on ro be ma  midahad
// be sorat zir migim ke ageh name input entekhabi barabar isAccepted bood meghddar event.checked ro be event.target.name ya event.target.isAccepted gharar bedeh
if(event.target.name==="isAccepted"){
setDate({...data,[event.target.name]:event.target.checked})
}else{
    // ageh gozineh hayeh digeh bashand vlaue on ro dar setdata gharar bedeh
    setDate({...data,[event.target.name]:event.target.value}) 
    // maghadiri ke dar input vared mikonim ro dar on namayesh bedeh
}
console.log(data)

}
// focusHandier
const  focusHandier=event=>{
    // mikhahim zamani ke royeh har input click shod bro be objectmojood dar state touched 1key=name har input va value=true/false  midahim va har inputi ke bood vlaue true ro behesh bedeh
    setTouched({...touched,[event.target.name]:true}) ;
}
// submitHandler
const submitHandler=event=>{
    // event ro migirim ke amaliyat pishfarz form ro ghirefal konim
    event.preventDefault();
    // vaghti form submit shod 1 validate digeh anjambedeh va ageh hamechi ok bood onharo samt database befrest
    // dar marhale aval tool object error ro migirim va ageh 0 bood dadeh haro ersal kon
    // notify();

    if(!Object.keys(errors).length){
        // ageh 0 basheh false ast va error nadarad ba  ! migim ageh error dasht amaliyat zir ro anjam bedeh
notify("you sing up successfully","success");
// meghdar aval text va meghdar dovom type ast
    }else{
        // vaseh einkeh hameh error haro namayeshbedeh touch onharo =true gharar midahim
        notify("invalid data","error");

        setTouched({
            name:true,
            email:true,
            password:true,
            confirmPassword:true,
            isAccepted:true

            })
    }
}


    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2 className={styles.header}>SignUp</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input 
                    // ba shart zir migim ke ageh validation drost nabood style uncompleted ro behesh bedeh va ageh sahih bood ya chizi varednakardeh boob style fomInput ro behesh bedeh 
                    className={(errors.name && touched.name)?styles.uncompleted:styles.formInput} 
                    type="text" 
                    name="name" value={data.name} 
                    onChange={changeHandler} 
                    onFocus={focusHandier}/>
                    {/* vaseh einkeh faghat ba click (focus) kardan royeh input error ro namayesh bedeh az onfocuse esteafadeh mikonim */}
                    {errors.name && touched.name && <span>{errors.name}</span>}
                    {/* be sorat zir error haro namayesh bedeh ->shart mizarimke ageh errors.name vjood dasht on ro dar span namayesh bedeh
                    -1 shart digeh hammizarim ke bayad input ham touched shideh basheh ke error ro namayesh bedeh */}


                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input 
                    className={(errors.email && touched.email)?styles.uncompleted:styles.formInput} 
                    type="text" 
                    name="email" 
                    value={data.email} 
                    onChange={changeHandler} onFocus={focusHandier}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input className={(errors.password && touched.password)?styles.uncompleted:styles.formInput} 
                    type="password" 
                    name="password" 
                    value={data.password} 
                    onChange={changeHandler} onFocus={focusHandier}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                     
                </div>
                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input className={(errors.confirmPassword && touched.confirmPassword)?styles.uncompleted:styles.formInput} 
                    type="password" 
                    name="confirmPassword" 
                    value={data.confirmPassword} 
                    onChange={changeHandler} onFocus={focusHandier}/>
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                     
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                    <label>I accept termsof privacy policy </label>
                    <input  type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} onFocus={focusHandier}/>
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                     
                </div>
                <div className={styles.formButtons}>
                    <a href='#' type='submit'>login</a>
                    <button type='submit'>sign up</button>
                </div>
            </form>
            <ToastContainer />
        </div>

    );
};

export default SingUp;