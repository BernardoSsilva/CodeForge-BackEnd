import { Entity } from '../../shared/entities/entity';

export type PostProps = {
  tittle: string;
  content: string;
  comments: number;
  likes: number;
  tags: string[];
  createdAt: Date;
  userId:string
};

export class PostEntity extends Entity<PostProps> {
  set tittle(value: string) {
    this.props.tittle = value;
  }
  get tittle(): string {
    return this.props.tittle;
  }

  set content(value: string) {
    this.props.content = value;
  }
  get content(): string {
    return this.props.content;
  }
  set comments(value: number) {
    this.props.comments = value;
  }
  get comments(): number {
    return this.props.comments;
  }
  set likes(value: number) {
    this.props.likes = value;
  }
  get likes(): number {
    return this.props.likes;
  }
  set tags(value: string[]) {
    this.props.tags = value;
  }
  get tags(): string[] {
    return this.props.tags;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }

  get userId():string{
    return this.props.userId
  }

  set userId(value:string){
    this.props.userId = value
  }
}
