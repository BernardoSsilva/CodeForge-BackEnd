import { CommentsInMemoryRepository } from '../../../../../test/helpers/comments-in-memory-repository';
import { CommentEntity } from '../../../../app/entities/comment.entity';
import { GetAllCommentsByUserIdUseCase } from '../get-all-comments-by-user.use-case';

describe('Get all comments from a user use case unit tests', () => {
  const commentRepository = new CommentsInMemoryRepository();
  const getAllCommentsByUser = new GetAllCommentsByUserIdUseCase(
    commentRepository,
  );

  it('Should throw an error if no comments are founded', () => {
    expect(
      async () => await getAllCommentsByUser.execute(null),
    ).rejects.toThrow();
  });

  it('Should be able to found all comments from a user', async () => {
    const newComment = new CommentEntity({
      commentContent: "testContent",
            createdAt: new Date(),
            commentAuthor: "testId",
            publication: "testId",
            commentTitle: "testtitle"
    });

    commentRepository.postComment(newComment);

    const result = await getAllCommentsByUser.execute(newComment.commentAuthor);

    expect(result).toBeDefined()
    expect(result[0]).toEqual(commentRepository.comments[0])
  });
});
