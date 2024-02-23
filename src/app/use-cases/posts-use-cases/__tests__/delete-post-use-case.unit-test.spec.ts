import { PostEntity } from '../../../../app/entities/post.entity';
import { PostsInMemoryRepository } from '../../../../../test/helpers/post-in-memory.repository';
import { DeletePostUseCase } from '../delete-post.use-case';

describe('Delete posts use case unit tests', () => {
  const postRepository = new PostsInMemoryRepository();
  const deletePost = new DeletePostUseCase(postRepository);

  it('Should throw an error if post does not founded', () => {
    expect(() => deletePost.execute('')).rejects.toThrow();
  });

  it('Should delete a post', async () => {
    const newPost = new PostEntity({
      tittle: 'test tittle',
      comments: 10,
      content: 'test content',
      likes: 0,
      tags: ['test tag 1', 'test tag 2'],
      userId: 'testId',
      createdAt: new Date(),
    });

    await postRepository.createPost(newPost);

    expect(postRepository.posts).toHaveLength(1);
    expect(postRepository.posts[0].id).toEqual(newPost.id);

    await deletePost.execute(newPost.id);

    expect(postRepository.posts).toHaveLength(0);
  });
});
