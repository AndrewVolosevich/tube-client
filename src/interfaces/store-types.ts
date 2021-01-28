import { Post } from "./moky";

export interface CountStore {
  count: number;
}

export interface PostStore {
  posts: Post[];
}

export interface RootState {
  countStore: CountStore;
  postStore: PostStore;
}
