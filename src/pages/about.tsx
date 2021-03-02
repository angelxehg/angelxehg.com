import React from "react"

import Layout, { Content, Header } from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Acerca de" />
    <Header title="Acerca de" description="Esta es mi descripción"/>
    <Content>
      Hola mundo
    </Content>
  </Layout>
)

export default AboutPage
