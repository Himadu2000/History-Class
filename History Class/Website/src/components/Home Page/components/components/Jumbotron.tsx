import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";
import Photo from "./../../../../assets/photos/photo1.webp";

const JumbotronPage = () => {
  return (
    <MDBContainer className='mt-5 text-center'>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className='p-0'>
            <MDBCardImage className='img-fluid' src={Photo} />
            <MDBCardBody>
              <MDBCardTitle className='h3'>Title</MDBCardTitle>
              <MDBCardText>Paragraph.</MDBCardText>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default JumbotronPage;
