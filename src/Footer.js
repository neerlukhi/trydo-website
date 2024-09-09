import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import './style.css';
import './media.css';

function Footer() {
    return (
        <>
            <footer className="footer-area">
                <div className="footer-wrapper">
                    <Container fluid className='p-0'>
                        <Row className='d-flex align-items-end g-0 m-0'>
                            <Col lg={6}>
                                <div className="footer-left position-relative">
                                    <div className="inner">
                                        <span>Ready To Do This</span>
                                        <h2>Let's get <br /> to work</h2>
                                        <a href="/contact" className="btn-1"><span>CONTACT US</span></a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="footer-right" data-black-overlay='6'>
                                    <Row>
                                        <Col lg={6} sm={6} className=''>
                                            <div className="footer-link">
                                                <h4>Quick Link</h4>
                                                <ul className="ft-link ps-0">
                                                    <li><a href="/home">Work</a></li>
                                                    <li><a href="/about">About</a></li>
                                                    <li><a href="/contact">Let's Talk</a></li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col lg={6} sm={6} className='mt--mobile--30'>
                                            <div class="footer-link">
                                                <h4>Say Hello</h4>
                                                <ul class="ft-link ps-0"><li><a href="mailto:admin@example.com">admin@example.com</a></li>
                                                    <li><a href="mailto:hr@example.com">hr@example.com</a></li>
                                                </ul>
                                                <div className="social-share-inner">
                                                    <ul className='social-share d-flex justify-content-start mt--15'>
                                                        <li><a href=""><FaFacebookF /></a></li>
                                                        <li><a href=""><FaLinkedinIn /></a></li>
                                                        <li><a href=""><FaInstagram /></a></li>
                                                        <li><a href=""><FaTwitter /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div class="copyright-text">
                                                <p>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default Footer;