import { graphql, useStaticQuery } from "gatsby"

export const usePosts = type => {
  const { allMdx } = useStaticQuery(graphql`
    query AllPosts {
      allMdx (filter: { frontmatter: {type: { eq: "post" }} }) {
        nodes {
          id
          slug
          excerpt(pruneLength: 100)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  `)
  const nodes = allMdx.nodes
  const posts = nodes
    .filter(i => i.frontmatter.type === type)
    .map(node => {
      return {
        id: node.id,
        slug: node.slug,
        date: node.frontmatter.date,
        title: node.frontmatter.title,
        excerpt: node.excerpt,
        image: node.frontmatter.image.childImageSharp.gatsbyImageData,
      }
    })
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      }
      if (a.date > b.date) {
        return -1
      }
      return 0
    })
  return posts
}
