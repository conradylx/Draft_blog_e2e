import * as React from 'react'
import { useContext, useState } from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Copyright from '../atoms/Copyright'
import { useNavigate } from 'react-router-dom'
import { AuthContext, IAuthContextProps } from '../../contexts/AuthContext'
import { styled } from '@mui/material'
import logo from '../../assets/logo.svg'

const ImageBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '-40px 0',
})

const Image = styled('img')({
  width: '60%',
})

const CopyrightStyled = styled(Copyright)({
  marginTop: 40,
  marginBottom: 40,
})

export default function SignUp() {
  const navigate = useNavigate()
  const { signUp, error } = useContext(AuthContext) as IAuthContextProps
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const username = data.get('username') as string
    const password = data.get('password') as string

    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please fill in all fields.')
    } else {
      setErrorMessage('')
      const payload = { username, password }
      await signUp(payload)
      if (!error) navigate('/signin')
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ImageBox>
          <Image src={logo} alt='Logo' />
        </ImageBox>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='username'
                label='Username'
                name='username'
                autoComplete='username'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
              />
            </Grid>
          </Grid>
          {errorMessage && (
            <Typography variant='body2' color='error' sx={{ mt: 2 }}>
              {errorMessage}
            </Typography>
          )}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link href='/signin' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CopyrightStyled />
    </Container>
  )
}
