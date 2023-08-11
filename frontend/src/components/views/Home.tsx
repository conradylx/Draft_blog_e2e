import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import { IPostsContextProps, PostsContext } from '../../contexts/PostsContext';

const Home = () => {
  const { fetchPosts, loading, error } = useContext(PostsContext) as IPostsContextProps;

  const waitForFetch = async() => {
    return await fetchPosts
  }

  useEffect(() => {
    const x = waitForFetch();
    console.log(x)
  }, []);

  if (loading) {
    return <Box>
      'Loading...'
    </Box>
  }

  return (
    <Box>
      {error ? (
        <Box>Error occurred while fetching posts.</Box>
      ) : (
        <Box>Posts fetched successfully.</Box>
      )}
    </Box>
  );
};

export default Home;
