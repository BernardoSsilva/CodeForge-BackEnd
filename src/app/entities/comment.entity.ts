import { Entity } from '../../shared/entities/entity';

export type CommentProps = {
  tittle: string;
  content: string;
  createdAt:Date;
  userId:string;
  postId:string;
};

export class CommentEntity extends Entity<CommentProps> {
  set tittle(value: string) {
    this.props.tittle = value;
  }

  get tittle(): string {
    return this.props.tittle;
  }

  set content(value: string) {
    this.props.content = value;
  }

  set userId(value: string) {
    this.props.userId = value;
  }

  set postId(value: string) {
    this.props.postId = value;
  }

  get content(): string {
    return this.props.content;
  }
  get createdAt():Date{
    return this.props.createdAt
  }

  get userId():string{
    return this.props.userId
  }

  get postId():string{
    return this.props.postId
  }
}
