import { CommentsInMemoryRepository } from '../../../../../test/helpers/comments-in-memory-repository';
import { CommentEntity } from '../../../../app/entities/comment.entity';
import { GetCommentByIdUseCase } from '../get-comment-by-id.use-case';

describe('Get all users use cases unit tests', () => {
  const commentRepository = new CommentsInMemoryRepository();
  const getCommentById = new GetCommentByIdUseCase(commentRepository);

  it('Should throw an error if has no comments', () => {
    expect(async () => await getCommentById.execute('')).rejects.toThrow();
  });

  it('Should be able to find all comments', async () => {
    const newComment = new CommentEntity({
      commentContent: "testContent",
      createdAt: new Date(),
      commentAuthor: "testId",
      publication: "testId",
      commentTitle: "testtitle"
    });

    await commentRepository.postComment(newComment);

    const result = await getCommentById.execute(newComment.id);
    expect(result).toBeDefined;
    expect(result).toEqual(commentRepository.comments[0]);
  });
});
