import React from "react"
import Container from "react-bootstrap/Container"

import "./Header.scss"

import IconLink, { ClickableIcon } from "./Link"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import socialLinks from "../meta/links/social"

const SocialLinks = () => (
  <nav>
    <p className="d-none d-sm-block">
      {socialLinks.map(link => (
        <ClickableIcon
          key={link.href}
          meta={link}
          iconProps={{ size: "1.5rem" }}
        />
      ))}
    </p>
    <ul className="p-0 m-0 d-sm-none" style={{ listStyleType: "none" }}>
      {socialLinks.map(link => (
        <li key={link.href}>
          <IconLink meta={link} />
        </li>
      ))}
    </ul>
  </nav>
)

export const HugeHeader = (): JSX.Element => {
  const site = useSiteMetadata()
  return (
    <Container className="huge-header mt-3">
      <img
        src="/images/Profile.500.Sqr.jpg"
        className="rounded-circle fluid align-self-center"
        alt="Foto de perfil de Angel"
        style={{ height: "120px", width: "120px" }}
      />
      <header>
        <h1>{site.title}</h1>
        <p>{site.description}</p>
      </header>
      <SocialLinks />
    </Container>
  )
}
