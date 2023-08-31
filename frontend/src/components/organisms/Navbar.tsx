import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import {INavbarProps} from '../../utils/interfaces/navbar_interfaces'

const drawerWidth = 240
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Add Post', path: '/addnew' },
  { label: 'Login', path: '/signin' },
  { label: 'Register', path: '/signup' },
]

export default function Navbar(props: INavbarProps) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/' || location.pathname.includes('/details')

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate(item.path)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      {isHomePage && (
        <Box sx={{ position: 'sticky', top: 0, zIndex: 40 }}>
          <CssBaseline />
          <AppBar component='nav'>
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button key={item.label} sx={{ color: '#fff' }} onClick={() => navigate(item.path)}>
                    {item.label}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <Box component='nav'>
            <Drawer
              container={container}
              variant='temporary'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>)}
      <Box>
        {props.children}
      </Box>
    </Box>
  )
}
