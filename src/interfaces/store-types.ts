import { Post } from "./moky";
import { User } from "~/interfaces/api-types";

export interface MainStore {
  width: number;
}

export interface UserStore {
  user: User | null;
}

export interface PostStore {
  posts: Post[];
}

export interface RootState {
  mainStore: MainStore;
  userStore: UserStore;
  postStore: PostStore;
}
