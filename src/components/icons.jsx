import React from "react"
import PropTypes from "prop-types"

import { LinkExternal } from "@components/social"

const LinkedInSVG = require("@assets/bootstrap-icons/linkedin.svg")
const EmailSVG = require("@assets/bootstrap-icons/envelope-fill.svg")
const WebSVG = require("@assets/bootstrap-icons/globe2.svg")
const GitHubSVG = require("@assets/bootstrap-icons/github.svg")
const GitLabSVG = require("@assets/fontawesome/gitlab-brands.svg")
const InstagramSVG = require("@assets/bootstrap-icons/instagram.svg")
const TwitterSVG = require("@assets/bootstrap-icons/twitter.svg")
const PayPalSVG = require("@assets/seek-logo/paypal.svg")
const AndroidSVG = require("@assets/fontawesome/android-brands.svg")
const AngularSVG = require("@assets/fontawesome/angular-brands.svg")
const AWSSVG = require("@assets/fontawesome/aws-brands.svg")
const BootstrapSVG = require("@assets/fontawesome/bootstrap-brands.svg")
const CSS3SVG = require("@assets/fontawesome/css3-alt-brands.svg")
const DigitalOceanSVG = require("@assets/fontawesome/digital-ocean-brands.svg")
const GitSVG = require("@assets/fontawesome/git-alt-brands.svg")
const GatsbySVG = require("@assets/seek-logo/gatsby.svg")
const FirebaseSVG = require("@assets/seek-logo/firebase.svg")
const HTML5SVG = require("@assets/fontawesome/html5-brands.svg")
const IonicSVG = require("@assets/ionicons/ionic.svg")
const JavascriptSVG = require("@assets/fontawesome/js-square-brands.svg")
const MarkdownSVG = require("@assets/fontawesome/markdown-brands.svg")
const NetlifySVG = require("@assets/seek-logo/netlify.svg")
const NodeJSSVG = require("@assets/fontawesome/node-js-brands.svg")
const NPMSVG = require("@assets/fontawesome/npm-brands.svg")
const PythonSVG = require("@assets/seek-logo/python.svg")
const ReactSVG = require("@assets/fontawesome/react-brands.svg")
const TypescriptSVG = require("@assets/seek-logo/typescript.svg")
const UbuntuSVG = require("@assets/fontawesome/ubuntu-brands.svg")

const iconsSource = [
  {
    name: "Android",
    color: "#3DD985",
    svg: AndroidSVG,
    docs: "https://www.android.com/intl/es_es/"
  },
  {
    name: "Angular",
    color: "#D6002F",
    svg: AngularSVG,
    docs: "https://angular.io/"
  },
  {
    name: "AWS",
    color: "#F79400",
    svg: AWSSVG,
    docs: "https://aws.amazon.com/es/"
  },
  {
    name: "Bootstrap",
    color: "#533B78",
    svg: BootstrapSVG,
    docs: "https://getbootstrap.com/docs/"
  },
  {
    name: "CSS3",
    color: "#254BDD",
    svg: CSS3SVG,
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "DigitalOcean",
    color: "#007CF7",
    svg: DigitalOceanSVG,
    docs: "https://www.digitalocean.com/"
  },
  {
    name: "Email",
    color: "white",
    svg: EmailSVG,
    docs: "https://angelxehg.com/"
  },
  {
    name: "Firebase",
    color: "white",
    svg: FirebaseSVG,
    docs: "https://firebase.google.com/"
  },
  {
    name: "Gatsby",
    color: "#E94E31",
    svg: GatsbySVG,
    docs: "https://www.gatsbyjs.com/"
  },
  {
    name: "Git",
    color: "#E94E31",
    svg: GitSVG,
    docs: "https://git-scm.com/"
  },
  {
    name: "GitHub",
    color: "white",
    svg: GitHubSVG,
    docs: "https://github.com/"
  },
  {
    name: "GitLab",
    color: "#F46A25",
    svg: GitLabSVG,
    docs: "https://gitlab.com/"
  },
  {
    name: "HTML5",
    color: "#F64A1D",
    svg: HTML5SVG,
    docs: "https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5"
  },
  {
    name: "Instagram",
    color: "#F70038",
    svg: InstagramSVG,
    docs: "https://instagram.com/"
  },
  {
    name: "Ionic",
    color: "#4886F1",
    svg: IonicSVG,
    fill: true,
    docs: "https://ionicframework.com/"
  },
  {
    name: "Javascript",
    color: "#F7DB00",
    svg: JavascriptSVG,
    docs: "https://developer.mozilla.org/es/docs/Web/JavaScript"
  },
  {
    name: "LinkedIn",
    color: "#2563AC",
    svg: LinkedInSVG,
    docs: "https://www.linkedin.com/"
  },
  {
    name: "Markdown",
    color: "white",
    svg: MarkdownSVG,
    docs: "https://www.markdownguide.org/"
  },
  {
    name: "Netlify",
    color: "white",
    svg: NetlifySVG,
    docs: "https://www.netlify.com/"
  },
  {
    name: "NodeJS",
    color: "#7FC728",
    svg: NodeJSSVG,
    docs: "https://nodejs.org/"
  },
  {
    name: "NPM",
    color: "#C53635",
    svg: NPMSVG,
    docs: "https://www.npmjs.com/"
  },
  {
    name: "PayPal",
    color: "#002E82",
    svg: PayPalSVG,
    docs: "https://paypal.com/"
  },
  {
    name: "Python",
    color: "white",
    svg: PythonSVG,
    docs: "https://www.python.org/"
  },
  {
    name: "React",
    color: "#79D8F7",
    svg: ReactSVG,
    docs: "https://es.reactjs.org/"
  },
  {
    name: "Twitter",
    color: "#1C9CEA",
    svg: TwitterSVG,
    docs: "https://www.twitter.com/"
  },
  {
    name: "Typescript",
    color: "#356A97",
    svg: TypescriptSVG,
    docs: "https://www.typescriptlang.org/"
  },
  {
    name: "Ubuntu",
    color: "#D74614",
    svg: UbuntuSVG,
    docs: "https://ubuntu.com/"
  },
  {
    name: "Web",
    color: "white",
    svg: WebSVG,
    docs: "https://angelxehg.com/"
  },
]

const availableIcons = iconsSource.map(i => i.name);

const useStyles = (props, defaultColor) => {
  const { size } = props
  return {
    width: size || "1.2rem",
    height: size || "1.2rem",
    color: defaultColor || "white",
  }
}

export const Icon = props => {
  const { name, className } = props
  const classes = className || ""
  const icon = iconsSource.find(i => i.name === name);
  if (!icon) {
    throw new Error(`No se encontró el icono '${name}'`)
  }
  const color = icon.fill ? 'white' : icon.color
  const fill = icon.fill ? icon.color : undefined
  const IconSVG = icon.svg;
  return (
    <IconSVG
      fill={fill}
      style={useStyles(props, color)}
      className={classes}
    />
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(availableIcons).isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
}

export const LinkIcon = (props) => {

  const { name, size, className } = props
  const icon = iconsSource.find(i => i.name === name);
  if (!icon) {
    throw new Error(`No se encontró el icono '${name}'`)
  }
  const to = props.to || icon.docs;
  const title = props.title || icon.name;

  return (
    <LinkExternal to={to} title={title}>
      <Icon name={name} size={size} className={className}/>
    </LinkExternal>
  )

}

LinkIcon.propTypes = {
  name: PropTypes.oneOf(availableIcons).isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
  title: PropTypes.string
}
