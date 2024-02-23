import { CommentsInMemoryRepository } from '../../../../../test/helpers/comments-in-memory-repository';
import { CommentEntity } from '../../../../app/entities/comment.entity';
import { GetAllCommentsByUserIdUseCae } from '../get-all-comments-by-user.use-case';

describe('Get all comments from a user use case unit tests', () => {
  const commentRepository = new CommentsInMemoryRepository();
  const getAllCommentsByUser = new GetAllCommentsByUserIdUseCae(
    commentRepository,
  );

  it('Should throw an error if no comments are founded', () => {
    expect(
      async () => await getAllCommentsByUser.execute(null),
    ).rejects.toThrow();
  });

  it('Should be able to found all comments from a user', async () => {
    const newComment = new CommentEntity({
      content: 'testContent',
      createdAt: new Date(),
      postId: 'testId',
      userId: 'testId',
      tittle: 'testTittle',
    });

    commentRepository.postComment(newComment);

    const result = await getAllCommentsByUser.execute(newComment.userId);

    expect(result).toBeDefined()
    expect(result[0]).toEqual(commentRepository.comments[0])
  });
});
