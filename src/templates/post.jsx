import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage } from "gatsby-plugin-image"

import Footer from "../components/footer"
import SEO from "../components/seo"
import { Icon } from "../components/icons"
import DefaultNavbar from "../components/navbar"

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        caption
        type
        stack
      }
    }
  }
`

const PostTemplate = props => {
  const { frontmatter, body } = props.data.mdx
  const { title, date, image, caption, stack } = frontmatter
  const stackIcons = stack ? stack.split(",") : []
  return (
    <div>
      <SEO
        title={title}
        lang="es"
        image={image.childImageSharp.gatsbyImageData.images.fallback.src}
      />
      <DefaultNavbar />
      <div className="container-xl ps-md-4 pe-md-4 pt-3 pb-3">
        <h1 className="h2">{title}</h1>
        <ul className="p-0 m-0 mb-2" style={{ listStyleType: "none" }}>
          <li>Fecha: {date}</li>
          {stackIcons.length > 0 && <li>
            {stackIcons.map(icon => {
              return (
                <span
                  key={icon}
                  className="badge rounded-pill bg-dark mt-1 me-1"
                >
                  <Icon name={icon} /> {icon}
                </span>
              )
            })}
          </li>}
        </ul>
        <GatsbyImage
          className="mb-2 img-fluid rounded"
          image={image.childImageSharp.gatsbyImageData}
          alt={caption}
        />
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <Footer />
    </div>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.any,
}

export default PostTemplate
