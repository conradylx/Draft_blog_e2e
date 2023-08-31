import * as React from 'react'
import { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { INavbarProps } from '../../../utils/interfaces/navbar_interfaces'
import { useLocation } from 'react-router-dom'
import { AuthContext, IAuthContextProps } from '../../../contexts/AuthContext'
import { StyledLink } from './Navbar.styles'

export default function Navbar({ children }: INavbarProps) {
  const location = useLocation()
  const { signOut } = useContext(AuthContext) as IAuthContextProps
  const isHomePage = location.pathname === '/' || location.pathname.includes('/details')

  return (
    <>
      {isHomePage &&
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <StyledLink href="/" variant="body1" mr={2}>Home</StyledLink>
              <StyledLink href="#" variant="body1">Add Post</StyledLink>
            </Typography>
            <StyledLink href="/signin" variant="body1" onClick={signOut}>Logout</StyledLink>
          </Toolbar>
        </AppBar>
      </Box>}
      {children}
    </>
  )
}
