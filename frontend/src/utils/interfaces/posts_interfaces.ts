export interface IPostDetailsProps {
  post: IPost;
}

export interface ITile {
  posts: IPost[] | []
}

export interface IPost extends ICreatePost {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface ICreatePost {
  id?: number;
  title: string;
  content: string
}

export interface ISanitizeContent {
  content: string
}