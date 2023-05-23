export interface ITweetForm {
  text: string;
  mediaFiles: (File | null)[];
}

export interface IResTweet {
  tweet: {
    id: number;
    text: string;
  };
}

export interface ITweet {
  id: number;
  text: string;
  mediaFiles: {
    id: number;
    url: string;
  }[];
  author: {
    id: number;
    name: string;
    username: string;
    email: string;
    profileImage: string | null;
    handle: string;
  } | null;
}
