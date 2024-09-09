import Bannerslider from "../Components/Bannerslider";
import { Container, Row, Col } from 'react-bootstrap';
import { PiScreencastLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { SiDatabricks } from "react-icons/si";
import { animated, useSpring } from 'react-spring';
import { Accordion } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";


function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 1000,
        config: { mass: 1, tenstion: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}


function Home() {
    return (
        <>
            <Bannerslider></Bannerslider>

            <section>
                <div className="service-area ptb--30 bg-white">
                    <Container>
                        <Row>
                            <Col xl={4} lg={4} md={6} sm={6}>
                                <a href="" className="text-center">
                                    <div className="service service__style--2">
                                        <div className="icon">
                                            <PiScreencastLight />
                                        </div>
                                        <div className="content">
                                            <h3 class="service-title">Business Stratagy</h3>
                                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                            <Col xl={4} lg={4} md={6} sm={6}>
                                <a href="" className="text-center">
                                    <div className="service service__style--2">
                                        <div className="icon">
                                            <SiDatabricks />
                                        </div>
                                        <div className="content">
                                            <h3 class="service-title">Website Development</h3>
                                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                            <Col xl={4} lg={4} md={6} sm={6}>
                                <a href="" className="text-center">
                                    <div className="service service__style--2">
                                        <div className="icon">
                                            <GoPeople />
                                        </div>
                                        <div className="content">
                                            <h3 class="service-title">Marketing & Reporting</h3>
                                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section>
                <div className="pt--90 pb--120 bg_color--5">
                    <Container>
                        <Row className="text-left">
                            <Col lg={3} md={6} className="mt--30">
                                <div className="section-title">
                                    <h2 class="title">Services</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but.</p>
                                    <div className="service-btn">
                                        <a href="" className="btn-transparent"><span>Request Custom Service</span></a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={9}>
                                <Row>
                                    <Col lg={4} md={4} className="mt--30">
                                        <div className="standard-service">
                                            <div className="thumbnail">
                                                <img src={require('../assets/corporate-01.jpg')} />
                                            </div>
                                            <div className="content">
                                                <h3><a href="">Thinking Development</a></h3>
                                                <p>I throw myself down among the tall grass by the stream</p>
                                                <a href="" className="btn-transparent"><span class="text">Read More</span></a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} className="mt--30">
                                        <div className="standard-service">
                                            <div className="thumbnail">
                                                <img src={require('../assets/corporate-02.jpg')} />
                                            </div>
                                            <div className="content">
                                                <h3><a href="">Business Consulting</a></h3>
                                                <p>I throw myself down among the tall grass by the stream</p>
                                                <a href="" className="btn-transparent"><span class="text">Read More</span></a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} className="mt--30">
                                        <div className="standard-service">
                                            <div className="thumbnail">
                                                <img src={require('../assets/corporate-03.jpg')} />
                                            </div>
                                            <div className="content">
                                                <h3><a href="">Business Development</a></h3>
                                                <p>I throw myself down among the tall grass by the stream</p>
                                                <a href="" className="btn-transparent"><span class="text">Read More</span></a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section>
                <div className="counterup-area pb--80 pt--40" data-black-overlay="7">
                    <Container>
                        <Row>
                            <Col lg={4} md={4} sm={6} className="counterup_style--1 ">
                                <h5 id="counter" className="cnt"> <Number n={199} /> </h5>
                                <p class="description">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                            </Col>
                            <Col lg={4} md={4} sm={6} className="counterup_style--1 ">
                                <h5 id="counter1" className="cnt"> <Number n={575} /> </h5>
                                <p class="description">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                            </Col>
                            <Col lg={4} md={4} sm={6} className="counterup_style--1 ">
                                <h5 id="counter3" className="cnt"> <Number n={69} /> </h5>
                                <p class="description">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>


            <section>
                <div className="about-area ptb--120 bg_color--5">
                    <Container>
                        <Row className="row--35 text-align-center">
                            <Col lg={6}>
                                <div className="thumbnail">
                                    <img src={require('../assets/about-4.jpg')} />

                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="about-inner">
                                    <div class="section-title">
                                        <h2 class="about-title">Working Process</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim exercitationem impedit iure quia quo recusandae?</p>
                                    </div>
                                    <div className="accordion-wrraper mt--30">
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Your Business Skills But Never Stop Improving.</Accordion.Header>
                                                <Accordion.Body>
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus eaque
                                                        error est explicabo facilis fugit incidunt iste iure non nostrum officia, perspiciatis
                                                        quidem quisquam rerum.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Tactics That Can Help Your Business Grow.</Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Assumenda, porro, rerum. A amet, dolorum esse laboriosam
                                                        Accusantium cum laborum nulla possimus. Repellat!</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>The Secret of Successful Business</Accordion.Header>
                                                <Accordion.Body>
                                                    <p> Ad aliquam dicta enim excepturi explicabo in ipsum iste iure natus
                                                        perferendis placeat quae similique tempore totam veniam vero!</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>How To Start A Business With Business</Accordion.Header>
                                                <Accordion.Body>
                                                    <p> Ad aliquam dicta enim excepturi explicabo in ipsum iste iure natus
                                                        perferendis placeat quae similique tempore totam veniam vero!</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                    <div className="about-btn mt--50">
                                        <a href="" className="about-btn-1">See how it works</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row></Row>
                    </Container>
                </div>
            </section>

            <section>
                <div className="team-area ptb--120 bg-white">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="section-title text-center mb--25">
                                    <h2 class="title">Managing Team</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Row>
                                <Col lg={3} md={6} sm={6} className="mt--30">
                                    <div className="team-static ">
                                        <div className="thumbnail">
                                            <img src={require('../assets/team-01.jpg')} />
                                        </div>
                                        <div className="inner-2">
                                            <div className="content">
                                                <h4 class="title">Jone Due</h4>
                                                <p class="designation">Sr. Web Developer</p>
                                            </div>
                                            <ul className="social-transparent d-flex">
                                                <li><a href=""><FaFacebookF /></a></li>
                                                <li><a href=""><FaLinkedinIn /></a></li>
                                                <li><a href=""><FaTwitter /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={6} className="mt--30">
                                    <div className="team-static ">
                                        <div className="thumbnail">
                                            <img src={require('../assets/team-02.jpg')} />
                                        </div>
                                        <div className="inner-2">
                                            <div className="content">
                                                <h4 class="title">Fatima Asrafi</h4>
                                                <p class="designation">Front-end Engineer</p>
                                            </div>
                                            <ul className="social-transparent d-flex">
                                                <li><a href=""><FaFacebookF /></a></li>
                                                <li><a href=""><FaLinkedinIn /></a></li>
                                                <li><a href=""><FaTwitter /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={6} className="mt--30">
                                    <div className="team-static ">
                                        <div className="thumbnail">
                                            <img src={require('../assets/team-03.jpg')} />
                                        </div>
                                        <div className="inner-2">
                                            <div className="content">
                                                <h4 class="title">Jone Due</h4>
                                                <p class="designation">Sr. Graphic Designer</p>
                                            </div>
                                            <ul className="social-transparent d-flex">
                                                <li><a href=""><FaFacebookF /></a></li>
                                                <li><a href=""><FaLinkedinIn /></a></li>
                                                <li><a href=""><FaTwitter /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={6} className="mt--30">
                                    <div className="team-static ">
                                        <div className="thumbnail">
                                            <img src={require('../assets/team-06.jpg')} />
                                        </div>
                                        <div className="inner-2">
                                            <div className="content">
                                                <h4 class="title">Jone Due</h4>
                                                <p class="designation"> Sr. Web Developer </p>
                                            </div>
                                            <ul className="social-transparent d-flex">
                                                <li><a href=""><FaFacebookF /></a></li>
                                                <li><a href=""><FaLinkedinIn /></a></li>
                                                <li><a href=""><FaTwitter /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Row>
                    </Container>
                </div>
            </section >

            <section>
                <div className="about-area ptb--120 bg_color--5">
                    <Container>
                        <Row className="row--35 align-item-center">
                            <Col lg={6}>
                                <div className="about-inner">
                                    <div className="about-section-title">
                                        <h2 class="title">About</h2>
                                        <p class="description">
                                            There are many variations of passages of Lorem Ipsum available,
                                            but the majority have suffered alteration in some form, by injected humour,
                                            or randomised words which dont look even slightly believable.</p>
                                    </div>
                                    <div class="mt--30">
                                        <h4 className="about-h4">Lorem ipsum dolor sit.</h4>
                                        <ul className="list-style--1">
                                            <li> <IoMdCheckmark /> The Philosophy Of business analytics</li>
                                            <li> <IoMdCheckmark /> Fast-Track Your business</li>
                                            <li> <IoMdCheckmark /> Lies And Damn Lies About business</li>
                                            <li> <IoMdCheckmark /> The Ultimate Deal On business</li>
                                        </ul>
                                    </div>
                                    <div class="mt--30">
                                        <h4 className="about-h4">Lorem ipsum dolor sit.</h4>
                                        <ul className="list-style--1">
                                            <li> <IoMdCheckmark /> Proof That business Really Works</li>
                                            <li> <IoMdCheckmark /> Here Is What You Should Do For Your business</li>
                                            <li> <IoMdCheckmark /> The Hidden Mystery Behind business</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="thumbnail position-relative">
                                    <img src={require('../assets/about-3.jpg')} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>


            <section>
                <div className="brand-area ptb--120 bg-white">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <ul className="brand-list branstyle--2">
                                    <li><img src={require('../assets/brand-01.jpg')} /></li>
                                    <li><img src={require('../assets/brand-02.jpg')} /></li>
                                    <li><img src={require('../assets/brand-03.jpg')} /></li>
                                    <li><img src={require('../assets/brand-04.jpg')} /></li>
                                    <li><img src={require('../assets/brand-05.jpg')} /></li>
                                    <li><img src={require('../assets/brand-06.jpg')} /></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section>
                <div className="pricing-table-area ptb--120 bg_color--5">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="section-title text-center mb--25">
                                    <h2 class="title">Pricing Plan</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} md={6} className="mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div class="pricing-header">
                                            <h4 class="title">Free</h4>
                                            <div class="pricing">
                                                <span class="price">29</span>
                                                <span class="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li> <IoMdCheckmark /> 5 PPC Campaigns</li>
                                                <li> <IoMdCheckmark /> Digital Marketing</li>
                                                <li> <IoMdCheckmark /> Marketing Agency</li>
                                                <li> <IoMdCheckmark /> Seo Friendly</li>
                                                <li> <IoMdCheckmark /> UI/UX designs</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer text-center">
                                            <a href="" className="pricing-btn">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div class="pricing-header">
                                            <h4 class="title">Business</h4>
                                            <div class="pricing">
                                                <span class="price">29</span>
                                                <span class="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li> <IoMdCheckmark /> 5 PPC Campaigns</li>
                                                <li> <IoMdCheckmark /> Digital Marketing</li>
                                                <li> <IoMdCheckmark /> Marketing Agency</li>
                                                <li> <IoMdCheckmark /> Seo Friendly</li>
                                                <li> <IoMdCheckmark /> UI/UX designs</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer text-center">
                                            <a href="" className="pricing-btn">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="mt--30">
                            <div className="rn-pricing active">
                                    <div className="pricing-table-inner">
                                        <div class="pricing-header">
                                            <h4 class="title">Advanced</h4>
                                            <div class="pricing">
                                                <span class="price">29</span>
                                                <span class="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li> <IoMdCheckmark /> 5 PPC Campaigns</li>
                                                <li> <IoMdCheckmark /> Digital Marketing</li>
                                                <li> <IoMdCheckmark /> Marketing Agency</li>
                                                <li> <IoMdCheckmark /> Seo Friendly</li>
                                                <li> <IoMdCheckmark /> UI/UX designs</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer text-center">
                                            <a href="" className="pricing-btn">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}


export default Home;