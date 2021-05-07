import React from "react"
import { Link } from "gatsby"

import CenterLayout from "@layouts/center"
import SEO from "@components/seo"
import { LinkExternal, ProfileImage, socialLinks } from "@components/social"
import { Icon } from "@components/icons"
import { useSiteMetadata } from "@hooks/use-site-metadata"

const IndexPage = () => {
  const site = useSiteMetadata()
  return (
    <CenterLayout>
      <SEO title="Inicio" lang="es" />
      <div className="card pt-3">
        <ProfileImage />
        <div className="card-body">
          <Link to="/">
            <h4 className="card-title">{site.title}</h4>
          </Link>
          <p className="card-text m-0">{site.description}</p>
          <div className="row mt-2">
            <div className="col">
              <Link to="/projects" className="me-3">
                Proyectos
              </Link>
              <Link to="/about">Acerca de</Link>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <LinkExternal
                to="mailto:sudo@angelxehg.com"
                title="Email (sudo@angelxehg.com)"
              >
                <Icon name="Email" size="1.5rem" />
              </LinkExternal>
              {socialLinks.map(({ title, to, icon }) => (
                <LinkExternal key={to} to={to} title={title}>
                  <Icon name={icon} size="1.5rem" />
                </LinkExternal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CenterLayout>
  )
}

export default IndexPage
