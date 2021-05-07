import React from "react"
import { Link, navigate } from "gatsby"

import CenterLayout from "../layouts/center"
import SEO from "@components/seo"

setTimeout(() => navigate('/#projects'), 2000)

const ProjectsPage = () => (
  <CenterLayout>
    <SEO title="301: Moved Permanently" lang="es" />
    <div className="card bg-dark">
      <div className="card-body">
        <h1 className="card-title">301: Moved Permanently</h1>
        <p className="card-text m-0">
          Redireccionando a <Link to="/#projects">proyectos</Link>...
        </p>
      </div>
    </div>
  </CenterLayout>
)

export default ProjectsPage
