import React from 'react'
import { IPost } from '../../../utils/interfaces/posts_interfaces'
import jwtInterceptor from '../../../utils/interceptors/jwtInterceptor'
import { useQuery } from 'react-query'
import Typography from '@mui/material/Typography'
import Tile from '../../organisms/Tile/Tile'
import { Container, StyledTypography } from './Home.styles'

const fetchPosts = async (): Promise<IPost[]> => {
  const response = await jwtInterceptor.get('http://localhost:8000/core/posts')
  return response.data
}

const Home = () => {
  const { data: posts, isLoading, isError } =
    useQuery<IPost[]>('postsFetch', fetchPosts)

  if (isLoading) {
    return <StyledTypography mt={10}>Loading...</StyledTypography>
  }

  if (isError || !posts) {
    return <StyledTypography mt={10}>Error fetching posts</StyledTypography>
  }

  return (
    <Container>
      <Typography variant='h3' mb={4}>Posts</Typography>
      <Tile posts={posts} />
    </Container>
  )
}

export default Home
