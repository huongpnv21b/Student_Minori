import { render } from 'react-dom'
import { useRouter } from 'next/router'
import axios from 'axios';
import { MENU_ITEM } from '../../config'
import React, { useState, useEffect } from 'react';


    
export default function Dangki() {
    const [data, setData] = useState([]);
    const getData = async () => {
        const URL = 'http://192.168.10.215:11000/api/majors';
        axios
          .get(URL)
          .then(async (response) => {
            setData(response.data);
            
          })
          .catch((error) => {
            console.log('error ' + error);
          });
      };
      useEffect(() => {
        getData();
    }, []);

    const router = useRouter()
    const { testvalue } = router.query
    console.log(testvalue);
    console.log(data)
    console.log(testvalue);
    
    return (
        
        <>
   
    
            <section className='banner'>
                <div className='banner-img'>
                    <img src='/images/banner/banner-img1.jpg' />
                </div>
                <div className='banner-text'>
                    <div className='container'>
                        <h1>Prepare for exams the smart way</h1>
                        <p>Join us today to know how you can ace entrance exams</p>
                        <div className='search-box'>
                            <input type='text' placeholder='Search here' />
                            <input type='submit' value='' />
                        </div>
                        <div className='learning-btn'>
                            <a href='#' className='btn'>
                                Start learning now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <h1>ra{testvalue}</h1>
            </div>
            
           
        </>
    )

}
