export class CreatePostDto{
    postTitle: string;
    postContent: string;
    postLikes: number;
    postTags: string[];
    userId:string
}