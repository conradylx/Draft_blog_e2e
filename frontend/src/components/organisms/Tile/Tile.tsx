import * as React from 'react'
import Grid from '@mui/material/Grid'
import { IPost, ITile } from '../../../utils/interfaces/posts_interfaces'
import TileData from '../../molecules/TileData'
import { StyledLink } from './Tile.styles'

export default function Tile({ posts }: ITile) {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent='center' spacing={2}>
          {posts?.map((post: IPost) => (
            <StyledLink to={`/details/${post.id}`} key={post.id}>
              <TileData post={post} />
            </StyledLink>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}