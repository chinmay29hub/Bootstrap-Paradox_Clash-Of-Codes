import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from "../assests/profile.png"
import styles from "../styles/Username.module.css"
import { toast, Toaster } from "react-hot-toast"
import { useFormik } from "formik"
import { registerValidation } from '../helper/validate'
import convertToBase64 from '../helper/convert'
import { registerUser } from '../helper/helper'
import axios from 'axios'
// import { Geocode } from 'opencage-api-client';

export default function Register() {
    // let hell = []

    const navigate = useNavigate()
    const [file, setFile] = useState()
    const [city, setCity] = useState()
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    // useEffect(() => {
    //     axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=6592cb8b55e740fa9fc48f6d8a65af05')
    //     .then(response => {
    //         console.log(response.data);
    //         setCity(response.data.city)
    //         setLatitude(response.data.latitude)
    //         setLongitude(response.data.longitude)
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }, [])
    useEffect(() => {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setLatitude(latitude);
              setLongitude(longitude);
            },
            (error) => {
              console.log(`Error getting user location: ${error}`);
            }
          );
        } else {
          console.log('Geolocation is not available in this browser.');
        }
        
    
    axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
        .then(
            response => {
                // console.log(response.data) 
                setCity(response.data.city)
            }
        ).catch(e => console.error(e))
}, [latitude, longitude]);
    
    const formik = useFormik({
        initialValues : {
            email : "abc@gmail.com",
            username : "example123",
            password : "admin@123",
            city : "",
            latitude : "",
            longitude : ""
        },
        validate : registerValidation,
        validateOnBlur : false,
        validateOnChange : false,
        onSubmit : async values => {
            values = await Object.assign(values, { profile : file || "" })
            // console.log(values)
            let registerPromise = registerUser(values)
            toast.promise(registerPromise, {
                loading : "Creating User...",
                success : <b>Registered Successfuly!!!</b>,
                error : <b>Could Not Register</b>
            })

            registerPromise.then(function () {
                navigate("/")
            })

        }
    })

  // formik does not support file upload
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0])
    setFile(base64)
  }

  return (
    <div className='container mx-auto'>
    {/* {
        console.log(latitude, longitude)
    } */}
        <Toaster position='top-center' reverseOrder={false}></Toaster>
        <div className='flex justify-center items-center h-content'>
            <div className={styles.glass} style={{width : "45%", paddingTop : "3em"}}>
                <div className='title flex flex-col items-center'>
                    <h4 className='text-5xl font-bold'>Register</h4>
                    <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                        Happy to join you!
                    </span>
                </div>
                <form className='py-1' onSubmit={formik.handleSubmit}>
                    <div className='profile flex justify-center py-4'>
                        <label htmlFor='profile'>
                        <img className={styles.profile_img} src={file || avatar} alt='avatar' />
                        </label>

                        <input onChange={onUpload} type="file" id='profile' name='profile' />                        
                    </div>
                    <div className='textbox flex flex-col items-center gap-6'>
                        <input {...formik.getFieldProps("email")} className={styles.textbox} type="email" placeholder='Email*' />
                        <input {...formik.getFieldProps("username")} className={styles.textbox} type="text" placeholder='Username*' />
                        <input {...formik.getFieldProps("password")} className={styles.textbox} type="password" placeholder='Password*' />
                        <input {...formik.getFieldProps("city")} className={styles.textbox} type="text" placeholder='City*' value={city} disabled />
                        <input {...formik.getFieldProps("latitude")} className={styles.textbox} type="text" placeholder='Latitude*' value={latitude} disabled />
                        <input {...formik.getFieldProps("longitude")} className={styles.textbox} type="text" placeholder='Longitude*' value={longitude} disabled />
                        <button className={styles.btn} type='submit'>Register!</button>
                    </div>

                    <div className='text-center py-4'>
                        <span className='text-gray-500'>Already a User? <Link className='text-red-500' to='/'>Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}