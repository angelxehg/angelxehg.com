import React from 'react';

const LinkedInSVG = require("../assets/bootstrap-icons/linkedin.svg")
const EmailSVG = require("../assets/bootstrap-icons/envelope-fill.svg")
const GitHubSVG = require("../assets/bootstrap-icons/github.svg")
const GitlabSVG = require("../assets/fontawesome/gitlab-brands.svg")
const InstagramSVG = require("../assets/bootstrap-icons/instagram.svg")
const TwitterSVG = require("../assets/bootstrap-icons/twitter.svg")
const PayPalSVG = require("../assets/fontawesome/paypal-brands.svg")
const AngularSVG = require("../assets/fontawesome/angular-brands.svg")
const AWSSVG = require("../assets/fontawesome/aws-brands.svg")
const BootstrapSVG = require("../assets/fontawesome/bootstrap-brands.svg")
const CSS3SVG = require("../assets/fontawesome/css3-alt-brands.svg")
const DigitalOceanSVG = require("../assets/fontawesome/digital-ocean-brands.svg")
const GitSVG = require("../assets/fontawesome/git-alt-brands.svg")
const HTML5SVG = require("../assets/fontawesome/html5-brands.svg")
const JavascriptSVG = require("../assets/fontawesome/js-square-brands.svg")
const MarkdownSVG = require("../assets/fontawesome/markdown-brands.svg")
const NodeJSSVG = require("../assets/fontawesome/node-js-brands.svg")
const NPMSVG = require("../assets/fontawesome/npm-brands.svg")
const PythonSVG = require("../assets/fontawesome/python-brands.svg")
const ReactSVG = require("../assets/fontawesome/react-brands.svg")
const UbuntuSVG = require("../assets/fontawesome/ubuntu-brands.svg")

interface IconProps {
  size?: string
  className?: string
}

const useIconStyle = (props: IconProps, defaultColor?: string) => {
  const { size } = props;
  return {
    width: size || '1.2rem',
    height: size || '1.2rem',
    color: defaultColor || 'white'
  }
}

const useClasses = (props: IconProps) => props.className || ""

export const LinkedInIcon = (props: IconProps) => (
  <LinkedInSVG style={useIconStyle(props, '#2563AC')} className={useClasses(props)} />
)

export const EmailIcon = (props: IconProps) => (
  <EmailSVG style={useIconStyle(props)} className={useClasses(props)} />
)

export const GitHubIcon = (props: IconProps) => (
  <GitHubSVG style={useIconStyle(props, 'white')} className={useClasses(props)} />
)

export const GitlabIcon = (props: IconProps) => (
  <GitlabSVG style={useIconStyle(props,'#F46A25')} className={useClasses(props)} />
)

export const InstagramIcon = (props: IconProps) => (
  <InstagramSVG style={useIconStyle(props, '#F70038')} className={useClasses(props)} />
)

export const TwitterIcon = (props: IconProps) => (
  <TwitterSVG style={useIconStyle(props, '#1C9CEA')} className={useClasses(props)} />
)

export const PayPalIcon = (props: IconProps) => (
  <PayPalSVG style={useIconStyle(props, '#002E82')} className={useClasses(props)} />
)

export const AWSIcon = (props: IconProps) => (
  <AWSSVG style={useIconStyle(props, "#F79400")} className={useClasses(props)} />
)

export const AngularIcon = (props: IconProps) => (
  <AngularSVG style={useIconStyle(props, "#D6002F")} className={useClasses(props)} />
)

export const ReactIcon = (props: IconProps) => (
  <ReactSVG style={useIconStyle(props, "#79D8F7")} className={useClasses(props)} />
)

export const BootstrapIcon = (props: IconProps) => (
  <BootstrapSVG style={useIconStyle(props, "#533B78")} className={useClasses(props)} />
)

export const CSS3Icon = (props: IconProps) => (
  <CSS3SVG style={useIconStyle(props, "#254BDD")} className={useClasses(props)} />
)

export const DigitalOceanIcon = (props: IconProps) => (
  <DigitalOceanSVG style={useIconStyle(props, "#007CF7")} className={useClasses(props)} />
)

export const GitIcon = (props: IconProps) => (
  <GitSVG style={useIconStyle(props, "#E94E31")} className={useClasses(props)} />
)

export const HTML5Icon = (props: IconProps) => (
  <HTML5SVG style={useIconStyle(props, "#F64A1D")} className={useClasses(props)} />
)

export const JavascriptIcon = (props: IconProps) => (
  <JavascriptSVG style={useIconStyle(props, "#F7DB00")} className={useClasses(props)} />
)

export const MarkdownIcon = (props: IconProps) => (
  <MarkdownSVG style={useIconStyle(props, 'white')} className={useClasses(props)} />
)

export const NodeJSIcon = (props: IconProps) => (
  <NodeJSSVG style={useIconStyle(props, "#7FC728")} className={useClasses(props)} />
)

export const NPMIcon = (props: IconProps) => (
  <NPMSVG style={useIconStyle(props, "#C53635")} className={useClasses(props)} />
)

export const PythonIcon = (props: IconProps) => (
  <PythonSVG style={useIconStyle(props, "#356A97")} className={useClasses(props)} />
)

export const UbuntuIcon = (props: IconProps) => (
  <UbuntuSVG style={useIconStyle(props, "#D74614")} className={useClasses(props)} />
)
