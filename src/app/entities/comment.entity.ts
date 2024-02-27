import { Entity } from '../../shared/entities/entity';

export type CommentProps = {
  commentTitle: string;
  commentContent: string;
  createdAt?: Date;
  commentAuthor: string;
  publication: string;
};

export class CommentEntity extends Entity<CommentProps> {
  set commentTitle(value: string) {
    this.props.commentTitle = value;
  }

  get commentTitle(): string {
    return this.props.commentTitle;
  }

  set commentContent(value: string) {
    this.props.commentContent = value;
  }

  get commentContent(): string {
    return this.props.commentContent;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }

  get commentAuthor(): string {
    return this.props.commentAuthor;
  }

  get publication(): string {
    return this.props.publication;
  }
}
