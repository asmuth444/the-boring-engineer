/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 150,
          minHeight: 150,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '12px 14px',
          marginRight: '14px'
        }}
      >
        <a href={`https://twitter.com/${social.twitter}`}><FontAwesomeIcon icon={faTwitter}/></a>
        <a style={{ padding: '0px 10px' }} href={`https://github.com/${social.twitter}`}><FontAwesomeIcon icon={faGithub}/></a>
        <a href={`mailto:${social.twitter}@gmail.com`}><FontAwesomeIcon icon={faMailBulk}/></a>
      </div>
      <p style={{ textAlign: 'center' }}>
        Written by <strong>{author}</strong> who still trying to figure out how to release his boredom into the internet
      </p>
    </div>
  )
};

export default Bio
