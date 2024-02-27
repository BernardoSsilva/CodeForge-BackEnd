import { CommentsInMemoryRepository } from '../../../../../test/helpers/comments-in-memory-repository';
import { GetAllCommentsFromPostUseCase } from '../get-all-comments-from-post.use-case';
import { CommentEntity } from '../../../../app/entities/comment.entity';

describe('Get all comments from a publication use case unit tests', () => {
  const commentRepository = new CommentsInMemoryRepository();
  const getAllCommentsFromPublication = new GetAllCommentsFromPostUseCase(
    commentRepository,
  );

  it('Should return a error if no comments are found', () => {
    expect(
      async () => await getAllCommentsFromPublication.execute(''),
    ).rejects.toThrow();
  });

  it('Should return all comments from a publication', async () => {
    const newComment = new CommentEntity({
      commentContent: "testContent",
      createdAt: new Date(),
      commentAuthor: "testId",
      publication: "testId",
      commentTitle: "testtitle"
    });

    commentRepository.postComment(newComment)
    const result = await getAllCommentsFromPublication.execute(newComment.publication)

    expect(result).toBeDefined()
    expect(newComment.id).toEqual(commentRepository.comments[0].id)
  });
});
