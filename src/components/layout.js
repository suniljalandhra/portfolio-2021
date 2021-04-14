/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
        <main
        style={{
          flexGrow: 1,
        }}
        >
          {children}</main>
        <footer
        style={{
          textAlign: "center",
        }}
        >
          © {new Date().getFullYear()}, Sunil Jalandhra
          {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
