import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import Photo1 from "./../../../assets/photos/photo1.webp";
import Photo2 from "./../../../assets/photos/photo2.webp";
import Photo3 from "./../../../assets/photos/photo3.webp";

class CarouselPage extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md='12' className='mb-3'>
            <img src={Photo1} className='img-fluid z-depth-1' alt='' />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg='4' md='12' className='mb-3'>
            <img
              src='https://mdbootstrap.com/img/Others/documentation/img(115)-mini.jpg'
              className='img-fluid z-depth-1'
              alt=''
            />
          </MDBCol>
          <MDBCol lg='4' md='6' className='mb-3'>
            <img
              src='https://mdbootstrap.com/img/Others/documentation/img(116)-mini.jpg'
              className='img-fluid z-depth-1'
              alt=''
            />
          </MDBCol>
          <MDBCol lg='4' md='6' className='mb-3'>
            <img
              src='https://mdbootstrap.com/img/Others/documentation/img(117)-mini.jpg'
              className='img-fluid z-depth-1'
              alt=''
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md='6' className='mb-3'>
            <img src={Photo2} className='img-fluid z-depth-1' alt='' />
          </MDBCol>
          <MDBCol md='6' className='mb-3'>
            <img src={Photo3} className='img-fluid z-depth-1' alt='' />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default CarouselPage;
