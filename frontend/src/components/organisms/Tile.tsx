import * as React from 'react'
import Grid from '@mui/material/Grid'
import { IPost, ITile } from '../../utils/interfaces/posts_interfaces'
import PostDetails from '../molecules/PostDetails'
import Box from '@mui/material/Box'

export default function Tile({ posts }: ITile) {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent='center' spacing={2}>
          {posts?.map((post: IPost) => (
            <Box key={post.id} >
              <PostDetails post={post} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}