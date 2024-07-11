declare module '../api/postdata' {
    export const POST_DATA: Array<{
      name: string;
      profileImage: string;
      username: string;
      postCaption: string;
      imageUrl: string;
      likes: number;
      comments: Array<{ username: string; comment: string }>;
      shares: number;
    }>;
  }
  