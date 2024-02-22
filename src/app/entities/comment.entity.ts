import { Entity } from '../../shared/entities/entity';

export type CommentProps = {
  tittle: string;
  content: string;
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

  get content(): string {
    return this.props.content;
  }
}
