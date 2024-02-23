import { PostsInMemoryRepository } from '../../../../../test/helpers/post-in-memory.repository';
import { PostEntity } from '../../../entities/post.entity';
import { FindAllPostsFromUserUseCase } from '../find-all-posts-from-user.use-case';

describe('Find all posts from user use case unit tests', () => {
  const repository = new PostsInMemoryRepository();
  const findAllPostsFromUser = new FindAllPostsFromUserUseCase(repository);

  it('Should throw an error if no one post exists', () => {
    expect(async () => await findAllPostsFromUser.execute("")).rejects.toThrow();
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

    const result = await findAllPostsFromUser.execute("testId");
    expect(result).toBeDefined();
    expect(result).toHaveLength(1);
  });
});
