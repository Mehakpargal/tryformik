import React from "react";
import { useFormik } from "formik";
const  initialValues = {
    name: '',
    email: '',
    address: ''
}

const onSubmit= values =>{
    console.log('Form data' , values)
}

const validate = values =>{
    let errors={}

    if(!values.name)
    {
        errors.name='Required'
    }

    if(!values.email)
    {
        errors.email='Required'
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(values.email))
    {
        errors.email='Invalid email format'
    }

    if(!values.address)
    {
        errors.address='Required'
    }

    return errors
}

function TrailForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log('visited Values' , formik.touched)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                <label htmlFor="name">Name</label>
                <br></br>
                <input type='text' id='name' name='name' 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.name} />
                {formik.touched.name && formik.errors.name ? 
                <div className="error">{formik.errors.name}</div> : null}
                <br></br>
                <hr></hr>
                </div>

                <div className="form-control">
                <label htmlFor="email">Email</label>
                <br></br>
                <input type='email' id='email' name='email' 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? 
                <div className="error">{formik.errors.email}</div> : null}
                <br></br>
                <hr></hr>
                </div>

                <div className="form-control"> 
                <label htmlFor="address">Address</label>
                <br></br>
                <input type='text' id='address' name='address' 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                value={formik.values.address}/>
                {formik.touched.address && formik.errors.address ? 
                <div className="error">{formik.errors.address}</div> : null}
                <br></br>
                <hr></hr>
                </div>

                <input type= 'submit' />
            </form>
        </div>
    )
}

export default TrailForm;