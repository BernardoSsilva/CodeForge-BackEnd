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
      comments: 0,
      content: 'test content',
      createdAt: new Date(),
      likes: 0,
      tags:["test tag1", "test tag 2"],
      tittle:"testTitle",
      userId:"testId"
    });

    await createPost.execute(newPost)

    expect(repository.posts).toHaveLength(1)
    expect(repository.posts[0].id).toEqual(newPost.id)
  });
});
