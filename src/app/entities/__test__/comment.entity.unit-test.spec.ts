import { CommentEntity } from '../comment.entity';

describe('Comment entity unit test', () => {
  it('Should be able to create a new comment entity', () => {
    const newComment = new CommentEntity({
      tittle: 'test tittle',
      content: 'test content',
      createdAt: new Date(),
    });

    expect(newComment.tittle).toEqual('test tittle');
    expect(newComment.content).toEqual('test content');
    expect(newComment.createdAt).toBeInstanceOf(Date);
    expect(newComment.id).toBeDefined();
  });
});
