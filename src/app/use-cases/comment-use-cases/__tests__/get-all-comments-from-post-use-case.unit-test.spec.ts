import { CommentsInMemoryRepository } from '../../../../../test/helpers/comments-in-memory-repository';
import { FindAllImagesFromPostUseCase } from '../get-all-comments-from-post.use-case';
import { CommentEntity } from '../../../../app/entities/comment.entity';

describe('Get all comments from a publication use case unit tests', () => {
  const commentRepository = new CommentsInMemoryRepository();
  const getAllCommentsFromPublication = new FindAllImagesFromPostUseCase(
    commentRepository,
  );

  it('Should return a error if no comments are found', () => {
    expect(
      async () => await getAllCommentsFromPublication.execute(''),
    ).rejects.toThrow();
  });

  it('Should return all comments from a publication', async () => {
    const newComment = new CommentEntity({
      content: 'testContent',
      createdAt: new Date(),
      postId: 'testId',
      userId: 'testId',
      tittle: 'testTittle',
    });

    commentRepository.postComment(newComment)
    const result = await getAllCommentsFromPublication.execute(newComment.postId)

    expect(result).toBeDefined()
    expect(newComment.id).toEqual(commentRepository.comments[0].id)
  });
});
