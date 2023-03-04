import { toast } from "react-hot-toast"
import { authenticate } from "./helper"

// validate login page username
export async function usernameValidate(values) {
    const errors = usernameVerify({}, values)
    
    if(values.username) {
        //check existence
        const { status } = await authenticate(values.username)

        if (status !== 200) {
            errors.exist = toast.error("User does not Exist")
        }
    }

    return errors
}

// validate password
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values)
    return errors
}

export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values)

    if(values.password !== values.confirm_pwd) {
        errors.exist = toast.error("Passwords does not Match!!!")
    }

    return errors
}


// validate password
function passwordVerify(errors = {}, values) {

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

    if(!values.password){
        errors.password = toast.error("Password Required!!!")
    } else if(values.password.includes(" ")) {
        errors.password = toast.error("Invalid Password!!!")
    } else if (values.password.length < 4) {
        errors.password = toast.error("Password must be more than 4 characters long")
    } else if (!specialChars.test(values.password)) {
        errors.password = toast.error("Password must have Special Characters!!!")
    }

    return errors
}

// validate username

function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error("Username Required!!!")
    } else if(values.username.includes(" ")) {
            error.username = toast.error("Invalid Username")
    }
    return error
}

// validate register form

export async function registerValidation(values) {
    const errors = usernameVerify({}, values)
    passwordVerify(errors, values)
    emailVerify(errors, values)

    return errors

}

// validate email
function emailVerify(error = {}, values) {
    if(!values.email){
        error.email = toast.error("Email Required")
    } else if (values.email.includes(" ")) {
        error.email = toast.error("Wrong Email")
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = toast.error("Invalid Email Adress")
    }

    return error
}


// validate profile page

export async function profileValidation(values) {
    const errors = emailVerify({}, values)
    return errors
}