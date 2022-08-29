import React, { useEffect, useState } from "react";
import Beginner from '../Carousel/Beginner'
import Table from 'react-bootstrap/Table';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup,
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody
} from 'mdb-react-ui-kit';



export default function Template() {

    // const [level, setlevel] = useState("")

    // // const updateLevel = (e) => {
    // //     e.preventDefault();
    // //     dispatch({
    // //         type: "SET_LEVEL",
    // //         payload: e.target.player1.value
    // //     });
    // // }

    // const changeLevel = (level) => {
    //     setlevel(level)
    //     console.log(level)
    // }

    const [optLgModal, setOptLgModal] = useState(false);

    const toggleShow = () => setOptLgModal(!optLgModal);

    return (
        <>
            <div>
                <MDBCardGroup>
                    <MDBCard>
                        {/* <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' /> */}
                        <MDBCardBody>
                            <MDBCardTitle>Beginner</MDBCardTitle>
                            <MDBCardText>
                                <Table borderless hover>
                                    <tbody>
                                        <tr>
                                            <td>Monday:</td>
                                            <td>Upper Body</td>
                                        </tr>
                                        <tr>
                                            <td>Tuesday:</td>
                                            <td>Lower Body</td>
                                        </tr>
                                        <tr>
                                            <td>Wednesday</td>
                                            <td>REST DAY</td>
                                        </tr>
                                        <tr>
                                            <td>Thursday:</td>
                                            <td>Upper Body</td>
                                        </tr>
                                        <tr>
                                            <td>Friday:</td>
                                            <td>Lower Body</td>
                                        </tr>
                                        <tr>
                                            <td>Saturday:</td>
                                            <td>REST DAY</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday:</td>
                                            <td>REST DAY</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </MDBCardText>
                            <button onClick={toggleShow}>View workout</button>
                            <MDBModal show={optLgModal} tabIndex='-1' setShow={setOptLgModal}>
                                <MDBModalDialog size='xl'>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle>Beginner workout template</MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody><Beginner /> 
                                        <a href="https://www.youtube.com/watch?v=acp77RhVzMM&t=418s" target = "blank"><button>Video guide</button></a>
                                        </MDBModalBody>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                        {/* <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/042.webp' alt='...' position='top' /> */}
                        <MDBCardBody>
                            <MDBCardTitle>Intermediate</MDBCardTitle>
                            <MDBCardText>
                                <Table borderless hover>
                                    <tbody>
                                        <tr>
                                            <td>Monday:</td>
                                            <td>Push</td>
                                        </tr>
                                        <tr>
                                            <td>Tuesday:</td>
                                            <td>Pull</td>
                                        </tr>
                                        <tr>
                                            <td>Wednesday</td>
                                            <td>Legs</td>
                                        </tr>
                                        <tr>
                                            <td>Thursday:</td>
                                            <td>REST DAY</td>
                                        </tr>
                                        <tr>
                                            <td>Friday:</td>
                                            <td>Upper Body</td>
                                        </tr>
                                        <tr>
                                            <td>Saturday:</td>
                                            <td>Lower Body</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday:</td>
                                            <td>REST DAY</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </MDBCardText>
                            <button>View workout</button>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                        {/* <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/043.webp' alt='...' position='top' /> */}
                        <MDBCardBody>
                            <MDBCardTitle>Advanced</MDBCardTitle>
                            <MDBCardText>
                                <Table borderless hover>
                                    <tbody>
                                        <tr>
                                            <td>Monday:</td>
                                            <td>Upper Body</td>
                                        </tr>
                                        <tr>
                                            <td>Tuesday:</td>
                                            <td>Lower Body</td>
                                        </tr>
                                        <tr>
                                            <td>Wednesday</td>
                                            <td>REST DAY</td>
                                        </tr>
                                        <tr>
                                            <td>Thursday:</td>
                                            <td>Upper Body</td>
                                        </tr>
                                        <tr>
                                            <td>Friday:</td>
                                            <td>Lower Body</td>
                                        </tr>
                                        <tr>
                                            <td>Saturday:</td>
                                            <td>REST DAY</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday:</td>
                                            <td>REST DAY</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </MDBCardText>
                            <button >View workout</button>
                            <button >Select this workout</button>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCardGroup>
            </div>
        </>
    );
};
