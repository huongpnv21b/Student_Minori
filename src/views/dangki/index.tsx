import { render } from 'react-dom'
import { useRouter } from 'next/router'
import axios from 'axios';
import { MENU_ITEM } from '../../config'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'


    
export default function Dangki() {
    const [data, setData] = useState([]);
    const getData = async () => {
        const URL = 'http://192.168.10.215:11000/api/majors/'+testvalue;
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
    console.log(data)

    const router = useRouter()
    const  testvalue  = router.query.major
        console.log(testvalue);
    // localStorage.setItem('Id_Major','testvalue');  
    
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
            <section className='our-course'>
                <div className="popular_course pb--100">
                    <div className="container">
                    <div className='section-title'>
                        <h2>Các Ngành học của chúng tôi <br></br><p>Các ngành học đa dạng tại Viêt Nam được cập nhật hàng ngày. Đảm bảo chất lượng về kiến thức cho học sinh</p></h2>
                       
                    </div>

                    <div className="rows">
                    {/* {data.map((datas,index)=> */}
                        <div className="col-lg-4 col-md-6">
                           
                        <div className="single-course">
                            <div className="course-image">
                                <a href="#"><img  src={data.image} alt="image" /></a>
                                <div className="date-box">
                                {data.fee}
                                </div>
                            </div>
                            <div className="course-content">
                            
                                <div className="rating clearfix ">
                                <div className="float-left">
                                <div className="reting-star">
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star-half-o" aria-hidden="true" />
                                </div>
                                </div>
                                <div className="float-right">
                                
                                <Link href={{ pathname: MENU_ITEM.SIGN_UP, query: {major:data.id} }}><a>Đăng kí</a></Link>
                                 {/* <Link href={MENU_ITEM.SIGN_UP} params={{ major: datas.id }}>Đăng kí</Link> */}
                                                            
                                </div>
                            </div>
                                <div className="bottom-text">
                                    <h6><a href="detail"> {data.name}</a></h6>
                                    <p>{data.description} </p>
                                </div>
                                <div className="info clearfix">
                                    {/* <div className=""><p><i className="fa fa-calendar" aria-hidden="true" />05-11-2018</p></div> */}
                                    <div className="float-lefts"><p><i className="fa fa-clock-o" aria-hidden="true"></i>{data.duration} ngày</p></div>
                                    <div className="float-rights"><p><i className="fa fa-user" aria-hidden="true" />{data.numberOfStudents} học sinh</p></div>
                                    <div>
                                </div>
                            </div>  
                        </div>
                            
                        </div>
                    </div>
                    {/* )} */}
                       
                    </div>
                    </div>
                </div>
            </section>
            
           
        </>
    )

}
