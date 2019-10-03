import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIframe } from "mdbreact";

const gridExamplesPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          Avicii - Waiting For Love
          <MDBContainer className='text-center'>
            <MDBIframe
              height='150'
              src='https://www.youtube.com/embed/cHHLHGNpCSA'
            />
          </MDBContainer>
        </MDBCol>
        <MDBCol>
          DJ Snake - Let Me Love You ft. Justin Bieber
          <MDBContainer className='text-center'>
            <MDBIframe
              height='150'
              src='https://www.youtube.com/embed/euCqAq6BRa4'
            />
          </MDBContainer>
        </MDBCol>
        <MDBCol>
          Maroon 5 - One more night
          <MDBContainer className='text-center'>
            <MDBIframe
              height='150'
              src='https://www.youtube.com/embed/fwK7ggA3-bU'
            />
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default gridExamplesPage;
