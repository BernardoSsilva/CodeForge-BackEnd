import { CommentEntity } from '../comment.entity';

describe('Comment entity unit test', () => {
  it('Should be able to create a new comment entity', () => {
    const newComment = new CommentEntity({
      commentTitle: 'test title',
      commentContent: 'test content',
      createdAt: new Date(),
      publication: 'testId',
      commentAuthor: 'testId',
    });

    expect(newComment.commentTitle).toEqual('test title');
    expect(newComment.commentContent).toEqual('test content');
    expect(newComment.publication).toEqual('testId');
    expect(newComment.commentAuthor).toEqual('testId');
    expect(newComment.createdAt).toBeInstanceOf(Date);
    expect(newComment.id).toBeDefined();
  });
});
