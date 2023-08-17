import { ReactNode } from 'react'

export interface IPostDetailsProps {
  post: IPost;
}

export interface ITile {
  posts: IPost[] | []
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface IPostsContextProps {
  error: boolean;
  loading: boolean;
  fetchPosts: () => Promise<void | IPost[]>;
}

export interface IPostsContextProviderProps {
  children: ReactNode;
}