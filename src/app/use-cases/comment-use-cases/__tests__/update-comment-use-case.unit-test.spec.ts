import { CommentsInMemoryRepository } from '../../../../../test/helpers/comments-in-memory-repository';
import { CommentEntity } from '../../../../app/entities/comment.entity';
import { UpdateCommentUseCase } from '../update-comment.use-case';

describe('Update comment use case unit tests', () => {
  const commentRepository = new CommentsInMemoryRepository();
  const updateComment = new UpdateCommentUseCase(commentRepository);

  it('Should throw an error if comment not found', () => {
    const newComment = new CommentEntity({
      commentContent: "testContent",
            createdAt: new Date(),
            commentAuthor: "testId",
            publication: "testId",
            commentTitle: "testtitle"
    });

    expect(
      async () => await updateComment.execute(newComment, '', ""),
    ).rejects.toThrow();
  });

  it('Should throw an error if not has a edit body', () => {
    const newComment = new CommentEntity({
      commentContent: "testContent",
      createdAt: new Date(),
      commentAuthor: "testId",
      publication: "testId",
      commentTitle: "testtitle"
    });

    expect(
      async () => await updateComment.execute(null, newComment.id, ""),
    ).rejects.toThrow();
  });

  it('Should be able to update a comment', async () => {
    const firstComment = new CommentEntity({
      commentContent: "testContent",
      createdAt: new Date(),
      commentAuthor: "testId",
      publication: "testId",
      commentTitle: "testtitle"
    });

    commentRepository.comments = [firstComment];

    expect(commentRepository.comments[0].id).toEqual(firstComment.id);
    const newComment = new CommentEntity({
      commentContent: "testContent",
      createdAt: new Date(),
      commentAuthor: "testId",
      publication: "testId",
      commentTitle: "testtitle"
    });

    newComment.id = firstComment.id;

    await updateComment.execute(newComment, newComment.id, "testId");

    expect(commentRepository.comments).toHaveLength(1);
    expect(commentRepository.comments[0].commentTitle).toEqual(newComment.commentTitle);
    expect(commentRepository.comments[0].commentAuthor).toEqual(newComment.commentAuthor);
    expect(commentRepository.comments[0].commentContent).toEqual(newComment.commentContent);
    expect(commentRepository.comments[0].publication).toEqual(newComment.publication);
  });
});
