import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';

function Bannerslider() {
    const options = {
        items: 1,
        // margin: 20,
        loop: true,
        // responsiveClass: true,
        nav: true,
        dots: false,
        animateIn: 'animate__fadeIn',
        animateOut: 'animate__fadeOut',
        // autoplay: true,
        // slideBy: 1,   
        // navText: ['<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>', '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>'],
        smartSpeed: 1000,
        // mouseDrag: false,
        // touchDrag: false,
        // autoplayTimeout: 5000,
    };
    return (
        <>

            <OwlCarousel className='owl-theme' id='car-col' {...options} nav>
                <div class='item'>
                    <div className="slide1 animate__fadeIn">
                        <div className="container">
                            <Row>
                                <Col lg={12} className='text-right m-0 slide-style-1'>
                                    <div className="inner-1">
                                        <h1>Business.</h1>
                                        <p class="description">There are many variations of passages but the
                                            majority have suffered alteration.
                                        </p>
                                        <div class="slide-btn st-current">
                                            <a class="slider-btn-1 btn-solid" href="/contact">Contact Us</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div class='item '>
                    <div className="slide2">
                        <div className="container">
                            <Row>
                                <Col lg={12} className='text-left slide-style-2'>
                                    <div class="inner-2 text-left">
                                        <h1 class="title">Agency.</h1>
                                        <p class="description">There are many variations of passages but the majority have suffered alteration.</p>
                                        <div class="slide-btn">
                                            <a class="slider-btn-2 btn-solid" href="/contact">Contact Us</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </OwlCarousel>

        </>
    )
}

export default Bannerslider;