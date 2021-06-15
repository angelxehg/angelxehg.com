import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Container from 'react-bootstrap/Container'

import Layout from "../layouts/Layout"
import DefaultFooter from "../components/Footer"
import SEO from "../components/SEO"
import { usePages, Page } from "../hooks/use-pages"

interface ProjectCardProps {
  item: Page
}

export const ProjectCard = (props: ProjectCardProps): JSX.Element => {
  const { slug, title, resume, image, caption, stack } = props.item
  const stackIcons = stack.split(",")
  return (
    <article>
      <div>
        <GatsbyImage image={image} alt={caption} />
        <h3>
          <Link to={`/${slug}`}>{title}</Link>
        </h3>
        <p>{resume}</p>
        <p>
          {stackIcons.map(icon => (
            <span key={icon}>{icon}</span>
          ))}
        </p>
      </div>
    </article>
  )
}

const ProjectsPage = (): JSX.Element => {
  const projects = usePages()
  return (
    <Layout>
      <SEO title="Portafolio" lang="es" />
      <Container as="header">
        <h1>Todos mis proyectos</h1>
        <p>Estos son todos mis proyectos públicos</p>
      </Container>
      <Container as="main">
        <div>
          {projects.map(item => (
            <div key={item.id}>
              <ProjectCard item={item} />
            </div>
          ))}
        </div>
      </Container>
      <DefaultFooter />
    </Layout>
  )
}

export default ProjectsPage
