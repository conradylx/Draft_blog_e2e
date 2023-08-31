import React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { IPostDetailsProps } from '../../utils/interfaces/posts_interfaces'

const TileData = ({ post }: IPostDetailsProps) => {
  return (
    <Box key={post.id} m={1} sx={{ boxShadow: 3, padding: 4 }}>
      <Typography variant='h5'>{post.title}</Typography>
      <Typography>{post.content}</Typography>
    </Box>
  )
}

export default TileData
