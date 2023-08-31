import React from 'react'
import { useParams } from 'react-router-dom'
import { IPost } from '../../../utils/interfaces/posts_interfaces'
import { useQuery } from 'react-query'
import jwtInterceptor from '../../../utils/interceptors/jwtInterceptor'
import Typography from '@mui/material/Typography'
import { Container, StyledTypography } from './PostDetails.styles'

const fetchSinglePost = async (postPk: number) => {
  const response = await jwtInterceptor.get(`http://localhost:8000/core/posts/${postPk}`)
  return response.data
}

const PostDetails = () => {
  const { pk } = useParams() as { pk: string }
  const postPk = parseInt(pk)

  const { data, isLoading } =
    useQuery<IPost>('fetchPost', () => fetchSinglePost(postPk))

  if (isLoading) return <StyledTypography mt={10}>Loading...</StyledTypography>
  if (!data) return <Typography>Post not found</Typography>

  return (
    <Container>
      <Typography variant='h5' mt={2} mb={4}>Fetched data for ID: {pk}</Typography>
      <Typography variant='h3'>Title: {data.title}</Typography>
      <Typography>{data.content}</Typography>
      xxx
    </Container>
  )
}

export default PostDetails
