import { PostEntity } from '../../../entities/post.entity';
import { PostsInMemoryRepository } from '../../../../../test/helpers/post-in-memory.repository';
import { FindAllPostsUseCase } from '../find-all-posts.use-case';

describe('Find all posts use case unit tests', () => {
  const repository = new PostsInMemoryRepository();
  const findAllPosts = new FindAllPostsUseCase(repository);

  it('Should throw an error if no one post exists', () => {
    expect(async () => await findAllPosts.execute()).rejects.toThrow();
  });

  it('Should be able to find posts', async () => {
    const newPost = new PostEntity({
      tittle: 'test tittle',
      comments: 10,
      content: 'test content',
      likes: 0,
      tags: ['test tag 1', 'test tag 2'],
      userId: 'testId',
      createdAt: new Date(),
    });

    repository.posts = [newPost];

    const result = await findAllPosts.execute();
    expect(result).toBeDefined();
    expect(result).toHaveLength(1);
  });
});
