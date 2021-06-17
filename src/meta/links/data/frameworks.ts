import { LinkMeta } from "../types"

const angular: LinkMeta = {
  name: "Angular",
  icon: {
    color: "#D6002F",
    svgPath: "seek-logo/angular.svg",
  },
  href: "https://angular.io/",
}

const bootstrap: LinkMeta = {
  name: "Bootstrap",
  icon: {
    color: "#533B78",
    svgPath: "seek-logo/bootstrap.svg",
  },
  href: "https://getbootstrap.com/docs/",
}

const django: LinkMeta = {
  name: "Django",
  icon: {
    svgPath: "seek-logo/django.svg",
  },
  href: "https://www.djangoproject.com/",
}

const gatsby: LinkMeta = {
  name: "Gatsby",
  icon: {
    color: "#E94E31",
    extraBc: "white",
    extraBcRad: "50%",
    svgPath: "seek-logo/gatsby.svg",
  },
  href: "https://www.gatsbyjs.com/",
}

const ionic: LinkMeta = {
  name: "Ionic",
  icon: {
    color: "#4886F1",
    svgPath: "ionicons/ionic.svg",
    fill: true,
  },
  href: "https://ionicframework.com/",
}

const reactJs: LinkMeta = {
  name: "ReactJS",
  icon: {
    color: "#79D8F7",
    svgPath: "fontawesome/react-brands.svg",
  },
  href: "https://es.reactjs.org/",
}

const reactNative: LinkMeta = {
  name: "React Native",
  icon: {
    color: "#79D8F7",
    svgPath: "fontawesome/react-brands.svg",
  },
  href: "https://reactnative.dev/",
}

const frameworks = [
  angular,
  bootstrap,
  django,
  gatsby,
  ionic,
  reactJs,
  reactNative,
]

export default frameworks
