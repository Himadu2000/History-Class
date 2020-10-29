import { Link } from "gatsby"
import { MDBBtn, MDBCard, MDBCardTitle, MDBIcon } from "mdbreact"
import React from "react"
import Layout from "../components/layout"
import BookOrder from "../components/pages/home/bookOrder"
import "../components/pages/home/grid.sass"

const Template = ({ title, image }) => (
  <MDBCard
    className="card-image"
    style={{
      display: "block",
      margin: "1em",
      width: "14em",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundImage: `url(${image})`,
    }}
  >
    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
      <div>
        <h5 className="pink-text">
          <MDBIcon icon="chart-bar" /> History
        </h5>
        <MDBCardTitle tag="h3" className="pt-2">
          <strong>{title}</strong>
        </MDBCardTitle>
      </div>
    </div>
  </MDBCard>
)

const MDBURL =
  "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"

const Home = () => (
  <>
    <Layout>
      <section className="main">
        <Link to="/grade10">
          <Template title="Grade 10" image={MDBURL} />
        </Link>
        <Link to="/grade11">
          <Template title="Grade 11" image={MDBURL} />
        </Link>
        <Link to="term test">
          <Template title="Term Test" image={MDBURL} />
        </Link>
        <Link to="map marking">
          <Template title="Map Marking" image={MDBURL} />
        </Link>
        <Link to="picture description">
          <Template title="Picture Description" image={MDBURL} />
        </Link>
      </section>
      <Link to="/comments">
        <MDBBtn>Please add a comment</MDBBtn>
      </Link>
      <MDBCard>
        <BookOrder />
      </MDBCard>
    </Layout>
  </>
)

export default Home
