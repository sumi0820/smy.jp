import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const Date = styled.p`
  display: inline-block;
`



const PostDetails = props => {
  return (
    <Wrapper>
      <Date> Published on {props.date}</Date>
    </Wrapper>
  )
}

export default PostDetails
