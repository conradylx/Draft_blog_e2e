import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/views/SignIn";
import { AuthContextProvider } from "./contexts/AuthContext";
import SignUp from "./components/views/SignUp";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./components/views/Home/Home";
import Navbar from "./components/organisms/Navbar/Navbar";
import PostDetails from "./components/molecules/PostDetails/PostDetails";
import PrivateRoute from "./utils/PrivateRoute";
import AddPost from "./components/organisms/AddPost/AddPost";

const queryClient = new QueryClient();

function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar>
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/addpost" element={<AddPost />} />
              <Route
                path="/details/:pk"
                element={
                  <PrivateRoute>
                    <PostDetails />
                  </PrivateRoute>
                }
              />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Navbar>
        </Router>
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;
