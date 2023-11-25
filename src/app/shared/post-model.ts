export interface PostModel {
  id: number;
  postName: string;
  url: string;
  description: string;
  voteCount: number;
  username: string;
  subclonnitName: string;
  commentCount: number;
  duration: string;
  upVote: boolean;
  downVote: boolean;
}