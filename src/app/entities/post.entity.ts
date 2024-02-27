import { Entity } from '../../shared/entities/entity';

export type PostProps = {
  postTitle: string;
  postContent: string;
  postLikes: number;
  postTags: string[];
  createdAt?: Date;
  userId: string;
};

export class PostEntity extends Entity<PostProps> {
  set postTitle(value: string) {
    this.props.postTitle = value;
  }
  get postTitle(): string {
    return this.props.postTitle;
  }

  set postContent(value: string) {
    this.props.postContent = value;
  }
  get postContent(): string {
    return this.props.postContent;
  }
  set postLikes(value: number) {
    this.props.postLikes = value;
  }
  get postLikes(): number {
    return this.props.postLikes;
  }
  set postTags(value: string[]) {
    this.props.postTags = value;
  }
  get postTags(): string[] {
    return this.props.postTags;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }

  get userId(): string {
    return this.props.userId;
  }

  set userId(value: string) {
    this.props.userId = value;
  }
}
