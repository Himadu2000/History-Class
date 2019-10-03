import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";
import Photo1 from "./../../../../assets/photos/photo1.webp";
import Photo2 from "./../../../../assets/photos/photo2.webp";
import Photo3 from "./../../../../assets/photos/photo3.webp";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}>
        <MDBCarouselInner>
          <MDBCarouselItem itemId='1'>
            <MDBView>
              <img className='d-block w-100' src={Photo1} alt='Main' />
              <MDBMask overlay='black-slight' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>Photo</h3>
              <p>Main Photo</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='2'>
            <MDBView>
              <img className='d-block w-100' src={Photo3} alt='Info' />
              <MDBMask overlay='black-slight' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>Photo</h3>
              <p>Photo</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='3'>
            <MDBView>
              <img className='d-block w-100' src={Photo2} alt='Places' />
              <MDBMask overlay='black-slight' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>Photo</h3>
              <p>Photo</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
