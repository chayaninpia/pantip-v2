interface Author {
  id: number;
  name: string;
  avatar: Avatar;
  slug: string;
}

interface Avatar {
  original: string;
  large: string;
  medium: string;
  small: string;
}

interface Tag {
  name: string;
  slug: string;
}

export interface PostInfo {
  topic_id: number;
  topic_type: number;
  title: string;
  thumbnail_url: string;
  views_count: number;
  comments_count: number;
  votes_count: number;
  author: Author;
  created_time: string;
  tags: Tag[];
  category: string;
}

export interface PostInfoState {
  postInfos: PostInfo[];
}

export enum PostInfoActionTypes {
  ADD_POST_INFO = "ADD_POST_INFO",
  ADD_ALL_POST_INFO = "ADD_ALL_POST_INFO",
}

export interface AddPostInfoAction {
  type: PostInfoActionTypes.ADD_POST_INFO;
  payload: PostInfo;
}

export interface AddAllPostInfoAction {
  type: PostInfoActionTypes.ADD_ALL_POST_INFO;
  payload: PostInfo[];
}

export type PostInfoAction = AddPostInfoAction | AddAllPostInfoAction;
