import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDetails from '../components/PostDetails'
import SEO from '../components/SEO'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faPocket } from "@fortawesome/free-brands-svg-icons"

import styled from 'styled-components'
import {
  TwitterShareButton,
  PocketShareButton,
} from 'react-share';


const Share = styled.div`
display: flex;
justify-content: flex-end;
padding: 1.5em 0 2em;
background: linear-gradient(0deg, #1da1f2, ${rgba("#1DA1F2", 0.7)});
    text-shadow: 0 1px 1px #1b98e4;
    box-shadow: 0 2px 8px -1px rgba(0, 0, 0, 0.1),
      0 2px 10px -1px ${rgba("#1DA1F2", 0.6)};
`

const twitterIcon = <FontAwesomeIcon icon={faTwitter} size="lg"/> 
const pocketIcon = <FontAwesomeIcon icon={faPocket} size="lg"/> 


const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDate,
    tags,
  } = data.contentfulPost
  const postNode = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next



  

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Hero title={title} image={heroImage} height={'50vh'} />

      <Container>
        {tags && <TagList tags={tags} />}
        <PostDetails
          date={publishDate}
        />
        <PageBody body={body} />
        <PostLinks previous={previous} next={next} />

        <Share>

         <TwitterShareButton title={title} via="sumiya0820" url={config.siteUrl}>
           Share on {twitterIcon}  
          </TwitterShareButton>
          <PocketShareButton title={title} via="sumiya0820" url={config.siteUrl}>
           {pocketIcon}  
          </PocketShareButton>
           
         </Share>

      </Container>



    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "DD MMM YYYY")
      publishDateISO: publishDate(formatString: "DD MMM YYYY")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate