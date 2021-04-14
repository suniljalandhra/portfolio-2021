import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className="header">
      <div className="header_intro">
        <h4>Hi,My name is</h4>
      <div className="headerContent">
      <p className="Name">Sunil Jalandhra.</p>
      <p className="FollowByName">
        I am a Software Engineer.  
      </p>
      <p className = "lineHeader">
      I am graduating from Indian Institute of Information Technology Una in 2021,I love to work with <span className="techStack">C++,Swift,Python,HTML,CSS,javaScript,Soidity</span>,When I am not coding you can find me travelling
      </p>
      </div>
     
      </div>
      
    </header>
  </Layout>
)

export default IndexPage
