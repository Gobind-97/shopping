import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

const Home = () => {


    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: "",
        select:""
    })

    const [data, setData] = useState([]);

    console.log(inpval);


    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        //console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }


    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password, select } = inpval;


        if (name === "") {
            alert("name field is required")
        } else if (email === "") {
            alert("email field is required")
        } else if (!email.includes("@")) {
            alert("valid emil address")
        } else if (date === "") {
            alert("date field is required")
        } else if (password === "") {
            alert("pass field is required")
        } else if (password.length < 5) {
            alert("greater than five")
        } else {
            console.log("data added succesfully");

            localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));

        }

    }






    return (
        <>

            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control onChange={getdata} name='date' type="date" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                                <br />

                                <Form.Select onChange={getdata}  name='select' className="mb-3 col-lg-6"  controlId="formBasicEmail">
                                <option>Select Option</option>
                                <option value="1">One</option>

                            </Form.Select>
                            </Form.Group>

                         
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><Link href="/login"><a>SignIn</a></Link></span> </p> 
                    </div>

                </section>

            </div>
        </>
    )
}

export default Home;