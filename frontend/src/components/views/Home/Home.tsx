import React from 'react'
import { IPost } from '../../../utils/interfaces/posts_interfaces'
import jwtInterceptor from '../../../utils/interceptors/jwtInterceptor'
import { useQuery } from 'react-query'
import Typography from '@mui/material/Typography'
import Tile from '../../organisms/Tile'
import { Container } from './Home.styles'

const fetchPosts = async (): Promise<IPost[]> => {
  const response = await jwtInterceptor.get('http://localhost:8000/core/posts')
  return response.data
}

const Home = () => {
  const { data: posts, isLoading, isError } =
    useQuery<IPost[]>('postsFetch', fetchPosts)

  if (isLoading) {
    return <Container>Loading...</Container>
  }

  if (isError || !posts) {
    return <Container>Error fetching posts</Container>
  }

  return (
    <Container>
      <Typography variant='h3' mb={4}>Posts</Typography>
      <Tile posts={posts} />
    </Container>
  )
}

export default Home
