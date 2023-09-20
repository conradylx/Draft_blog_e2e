import SignIn from "../../components/views/SignIn";
import SignUp from "../../components/views/SignUp";
import { AuthContextProvider } from "../AuthContext";
import { fireEvent, render, screen, waitFor } from "../../utils/testUtils";

test("should sign in user", async () => {
  render(
    <AuthContextProvider>
      <SignIn />
    </AuthContextProvider>
  );

  fireEvent.click(screen.getByText("Sign In"));

  await waitFor(() => {
    expect("Sign in").toBeTruthy();
  });
});

test("should sign up user", async () => {
  render(
    <AuthContextProvider>
      <SignUp />
    </AuthContextProvider>
  );

  fireEvent.click(screen.getByText("Sign Up"));

  await waitFor(() => {
    expect("Sign up").toBeTruthy();
  });
});
