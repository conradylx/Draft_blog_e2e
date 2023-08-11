import React, { createContext, ReactNode, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export interface IPostsContextProps {
  error: boolean;
  loading: boolean;
  fetchPosts: () => Promise<void | Post[]>;
}

interface IPostsContextProviderProps {
  children: ReactNode;
}

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

const PostsContext = createContext<IPostsContextProps | null>(null);

const PostsContextProvider: React.FC<IPostsContextProviderProps> = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async (): Promise<void | Post[]> => {
    setLoading(true);
    try {
      const response = await axios.get<Post[]>('http://localhost:8000/core/posts/');
      setLoading(false);
      return response.data;
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <PostsContext.Provider value={{ error, loading, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export { PostsContext, PostsContextProvider };
