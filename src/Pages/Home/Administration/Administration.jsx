/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import  { useContext, useEffect, useState } from 'react';
import { FaArrowRight ,FaMapMarker ,FaClock} from "react-icons/fa";
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Administration = () => {

    const [allevent, setAllEvent] = useState([]);

    const {user,signIn,createUser}=useContext(AuthContext);
    console.log(user);

    useEffect(() => {
        fetch('event.json')
            .then(res => res.json())
            .then(data => setAllEvent(data));
    }, []);
    return (
        <div className='mx-14 my-10' data-aos="zoom-in-up">
    <div className='ml-10 text-center'>
            <h2 className='text-4xl md:text-6xl mx-auto mt-16 font-bold'>OUR EVENTS</h2>
            <h2 className='text-lg md:text-3xl mb-10 my-3'>DON'T MISS OUR EVENTS</h2>
    </div>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:mx-10'>
                {allevent.map(event =>  (
                    <li key={event.id}>
                       
                        <div className="card card-compac bg-base-100 shadow-2xl">
                            <figure className='h-full'><img src={event.img} alt={event.name} /></figure>
                         
                            <div  style={{ backgroundColor: event.card_bg_color,color: event.bg_color}}  className="card-body">
                            <h2 className="card-title text-2xl font-bold md:-ml-5 ">{event.title}</h2>
                                <div className='flex items-center gap-2'>
                                <FaMapMarker></FaMapMarker>
                                <p>{event.location}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                <FaClock></FaClock>
                                <p>{event.time}</p>
                                </div>
                                <p>{event.description}</p>
                                <div className="card-actions events-center mt-4">
                                <div className='flex items-center gap-5'>
                                  
                                <FaArrowRight></FaArrowRight>
                                </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
};

export default Administration;