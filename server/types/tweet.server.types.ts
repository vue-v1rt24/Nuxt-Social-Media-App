export interface IFileImage {
  [key: string]: {
    size: number;
    filepath: string;
    newFilename: string;
    mimetype: string;
    mtime: string;
    originalFilename: string;
  };
}

export interface IForm {
  fields: {
    text: string;
  };
  files: IFileImage;
}

export interface ITweet {
  text: string;
  authorId: number;
}

export interface IFileCreate {
  url: string;
  userId: number;
  tweetId: number;
}
