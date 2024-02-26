export class CreatePostDto{
    tittle: string;
    content: string;
    comments: number;
    likes: number;
    tags: string[];
    userId:string
}