import { CommentsInMemoryRepository } from '../../../../../test/helpers/comments-in-memory-repository';
import { CommentEntity } from '../../../../app/entities/comment.entity';
import { DeleteCommentUseCase } from '../delete-comment.use-case';
describe('Delete comment use case unit tests', () => {
  const commentRepository = new CommentsInMemoryRepository();
  const deleteComment = new DeleteCommentUseCase(commentRepository);

  it('Should throw an error if comment does not founded', () => {
    expect(() => deleteComment.execute('')).rejects.toThrow();
  });

  it('Should delete a comment', async () => {
    const newComment = new CommentEntity({
      commentContent: 'testContent',
      createdAt: new Date(),
      commentAuthor: 'testId',
      publication: 'testId',
      commentTitle: 'testtitle',
    });

    await commentRepository.postComment(newComment);

    expect(commentRepository.comments).toHaveLength(1);
    expect(commentRepository.comments[0].id).toEqual(newComment.id);

    await deleteComment.execute(newComment.id);

    expect(commentRepository.comments).toHaveLength(0);
  });
});
