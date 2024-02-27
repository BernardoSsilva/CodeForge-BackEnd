import { PostEntity } from '../../../../app/entities/post.entity';
import { PostsInMemoryRepository } from '../../../../../test/helpers/post-in-memory.repository';
import { FindPostByIdUseCase } from '../find-post-by-id.use-case';

describe('Find post bt id use case unit tests', () => {
  const repository = new PostsInMemoryRepository();
  const findPostById = new FindPostByIdUseCase(repository);

  it('Should throw a error if post not found', () => {
    expect(() => findPostById.execute('')).rejects.toThrow();
  });

  it('Should be able to get a post by id', async () => {
    const newPost = new PostEntity({
      postTitle: 'test title',
      postContent: 'test content',
      postLikes: 0,
      postTags: ['test tag 1', 'test tag 2'],
      userId: 'testId',
      createdAt: new Date(),
    });

    repository.posts = [newPost]

    const result = await findPostById.execute(newPost.id)

    expect(result).toBeDefined()
    expect(result.id).toEqual(repository.posts[0].id)
  });
});
