import React from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../../../utils/interfaces/posts_interfaces";
import { useQuery } from "react-query";
import jwtInterceptor from "../../../utils/interceptors/jwtInterceptor";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SanitizeContent from "../../atoms/SanitizeContent";

const fetchSinglePost = async (postPk: number) => {
  const response = await jwtInterceptor.get(
    `http://localhost:8000/core/posts/${postPk}`
  );
  return response.data;
};

const PostDetails = () => {
  const { pk } = useParams() as { pk: string };
  const postPk = parseInt(pk);

  const { data, isLoading } = useQuery<IPost>("fetchPost", () =>
    fetchSinglePost(postPk)
  );

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "24px" }}>
        {isLoading ? (
          <Box textAlign="center" p={4}>
            <Typography variant="h5">Loading...</Typography>
          </Box>
        ) : !data ? (
          <Typography variant="h5">Post not found</Typography>
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              {data.title}
            </Typography>
            <SanitizeContent content={data.content} />
          </>
        )}
      </Paper>
    </Container>
  );
};

export default PostDetails;
