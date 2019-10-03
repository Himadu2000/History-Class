import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle
} from "mdbreact";
import BackgroundImage from "./../../../../assets/photos/Gradient.webp";

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
                  Title
                </MDBCardTitle>
                <p className='mx-5 mb-5'>Paragraph</p>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default JumbotronPage;
