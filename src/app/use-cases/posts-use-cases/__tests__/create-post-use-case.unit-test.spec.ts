import { PostEntity } from '../../../../app/entities/post.entity';
import { PostsInMemoryRepository } from '../../../../../test/helpers/post-in-memory.repository';
import { CreatePostUseCase } from '../create-post.use-case';

describe('Create Post use case unit tests', () => {
  const repository = new PostsInMemoryRepository();
  const createPost = new CreatePostUseCase(repository);

  it("Should throw error if don't have sent post", () => {
    expect(() => createPost.execute(null)).rejects.toThrow();
  });

  it('Should be able to create a new post ', async () => {
    const newPost = new PostEntity({
      postTitle: 'test title',
      postContent: 'test content',
      postLikes: 0,
      postTags: ['test tag 1', 'test tag 2'],
      userId: 'testId',
      createdAt: new Date(),
    });

    await createPost.execute(newPost);
    newPost.id = repository.posts[0].id;
    expect(repository.posts).toHaveLength(1);
    expect(repository.posts[0].id).toEqual(newPost.id);
  });
});
