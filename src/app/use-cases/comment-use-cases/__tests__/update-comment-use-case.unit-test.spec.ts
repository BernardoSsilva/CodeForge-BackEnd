import { CommentsInMemoryRepository } from '../../../../../test/helpers/comments-in-memory-repository';
import { CommentEntity } from '../../../../app/entities/comment.entity';
import { UpdateCommentUseCase } from '../update-comment.use-case';

describe('Update comment use case unit tests', () => {
  const commentRepository = new CommentsInMemoryRepository();
  const updateComment = new UpdateCommentUseCase(commentRepository);

  it('Should throw an error if comment not found', () => {
    const newComment = new CommentEntity({
      content: 'testContent',
      createdAt: new Date(),
      postId: 'testId',
      userId: 'testId',
      tittle: 'testTittle',
    });

    expect(
      async () => await updateComment.execute(newComment, ''),
    ).rejects.toThrow();
  });

  it('Should throw an error if not has a edit body', () => {
    const newComment = new CommentEntity({
      content: 'testContent',
      createdAt: new Date(),
      postId: 'testId',
      userId: 'testId',
      tittle: 'testTittle',
    });

    expect(
      async () => await updateComment.execute(null, newComment.id),
    ).rejects.toThrow();
  });

  it('Should be able to update a comment', async () => {
    const firstComment = new CommentEntity({
      content: 'testContent',
      createdAt: new Date(),
      postId: 'testId',
      userId: 'testId',
      tittle: 'testTittle',
    });

    commentRepository.comments = [firstComment];

    expect(commentRepository.comments[0].id).toEqual(firstComment.id);
    const newComment = new CommentEntity({
      content: 'testContent',
      createdAt: new Date(),
      postId: 'testId',
      userId: 'testId',
      tittle: 'testTittle',
    });

    newComment.id = firstComment.id;

    await updateComment.execute(newComment, newComment.id);

    expect(commentRepository.comments).toHaveLength(1);
    expect(commentRepository.comments[0].tittle).toEqual(newComment.tittle);
    expect(commentRepository.comments[0].userId).toEqual(newComment.userId);
    expect(commentRepository.comments[0].content).toEqual(newComment.content);
    expect(commentRepository.comments[0].postId).toEqual(newComment.postId);
  });
});
