
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './components/CardsData'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch } from 'react-redux' 
import { ADD } from './redux/action/action';
import Header from './Header';
import { useRouter } from 'next/router'; 


const Cards = () => {
    const router = useRouter();



    const [data, setData] = useState(Cardsdata);
    
     const dispatch = useDispatch();

     const send = (e)=>{
        console.log(e);
    dispatch(ADD(e));
    

     }

     const logData=()=>{
        router.push("/login");

     }
    return (
        <>
        <Header />
        <div className='container mt-3'>
            <h2 className='text-center'>Add to Cart Projects</h2>
            <div className="row d-flex justify-content-center align-items-center">


                {
                    data.map((element, id) => {
                        return (
                            <>

                                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                    <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
                                    <Card.Body>
                                        <Card.Title>{element.rname}</Card.Title>
                                        <Card.Text>
                                            Price : ₹ {element.price}
                                        </Card.Text>
                                        <div className="button_div d-flex justify-content-center">
                                            <Button variant="primary"
                                             onClick={()=>send(element)}
                                             className='col-lg-12'>Add to Cart</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                                

                            </>
                        )

                    })
                }
            </div>
        </div>
        
        <Button variant="primary" className='col-lg-4' onClick={logData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                            Logout
                            </Button>
        </>

    )
    
}

export default Cards;