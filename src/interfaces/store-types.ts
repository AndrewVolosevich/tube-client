import { Post } from "./moky";

export interface MainStore {
  width: number;
}

export interface PostStore {
  posts: Post[];
}

export interface RootState {
  mainStore: MainStore;
  postStore: PostStore;
}
