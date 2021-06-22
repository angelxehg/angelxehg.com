import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

import Footer from "../components/Footer"
import SEO from "../components/SEO"
import Layout from "../layouts/Layout"
import DefaultNavbar from "../components/Navbar"
import { CreateBadge } from "../components/Link"

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
        stack
        caption
      }
    }
  }
`

interface PageTemplateProps {
  data: {
    mdx: {
      body: string
      frontmatter: {
        title: string
        date: string
        image: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData
          }
        }
        stack: string[]
        caption: string
      }
    }
  }
}

const PageTemplate = (props: PageTemplateProps): JSX.Element => {
  const { frontmatter, body } = props.data.mdx
  const { title, image, caption, stack } = frontmatter
  return (
    <Layout>
      <SEO
        title={title}
        lang="es"
        image={image.childImageSharp.gatsbyImageData.images.fallback?.src || ""}
      />
      <DefaultNavbar />
      <div className="bg-shadow">
        <header className="container-lg ps-sm-4 pe-sm-4 pt-3 pb-2">
          <h1>{title}</h1>
          <p className="m-0">{caption}</p>
          <p>
            {stack.map(toolName => (
              <CreateBadge key={toolName} from={toolName} />
            ))}
          </p>
          <Link to="/projects">{"< "}Volver a Proyectos</Link>
        </header>
      </div>
      <div className="container-lg ps-sm-4 pe-sm-4 pt-3">
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          alt={caption}
        />
      </div>
      <main className="container-lg ps-sm-4 pe-sm-4 pt-3">
        <MDXRenderer>{body}</MDXRenderer>
      </main>
      <Footer />
    </Layout>
  )
}

export default PageTemplate
