import React, { createContext, useState } from 'react'
import axios from 'axios'
import { IPost, IPostsContextProps, IPostsContextProviderProps } from '../utils/interfaces/posts_interfaces'

const PostsContext = createContext<IPostsContextProps | null>(null)

const PostsContextProvider: React.FC<IPostsContextProviderProps> = ({ children }) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchPosts = async (): Promise<void | IPost[]> => {
    setLoading(true)
    try {
      const response = await axios.get<IPost[]>('http://localhost:8000/core/posts/')
      setLoading(false)
      return response.data
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <PostsContext.Provider value={{ error, loading, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}

export { PostsContext, PostsContextProvider }
