import * as React from "react";
import { useContext } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { AuthContext, IAuthContextProps } from "../../contexts/AuthContext";
import { Alert, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import logo from "../../assets/logo.svg";
import Copyright from "../atoms/Copyright";

const ImageBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "-40px 0",
});

const Image = styled("img")({
  width: "60%",
});

const CopyrightStyled = styled(Copyright)({
  marginTop: 40,
  marginBottom: 40,
});

export default function SignIn() {
  const navigate = useNavigate();
  const { signIn, error } = useContext(AuthContext) as IAuthContextProps;
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      username: data.get("username") as string,
      password: data.get("password") as string,
    };
    if ((payload.username !== "" || payload.password) !== "") {
      await signIn(payload);
      const token = Cookies.get("access_token");
      if (token) {
        navigate("/");
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ImageBox>
          <Image src={logo} alt="Logo" />
        </ImageBox>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {error ? (
            <Alert severity="error">Error while trying to sign in</Alert>
          ) : null}
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CopyrightStyled />
    </Container>
  );
}
