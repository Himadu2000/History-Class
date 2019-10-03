import React from "react";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon
} from "mdbreact";
import BackgroundImage from "./../../assets/photos/Gradient.webp";
import { Link } from "react-router-dom";

const JumbotronPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol
              className='text-white text-center py-5 px-4 my-5'
              style={{
                backgroundImage: "url(" + BackgroundImage + ")"
              }}>
              <MDBCol className='py-5'>
                <MDBCardTitle className='h1-responsive pt-3 m-5 font-bold'>
                  Sorry, your page was not found.
                  <br /> Sorry for inconvenience
                </MDBCardTitle>
                <p className='mx-5 mb-5'>
                  Please use our Navigation to return to a working page.
                </p>
                <Link to='/'>
                  <MDBBtn outline color='white' className='mb-5'>
                    <MDBIcon icon='clone' className='mr-2' />
                    Go to Home Page
                  </MDBBtn>
                </Link>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default JumbotronPage;
