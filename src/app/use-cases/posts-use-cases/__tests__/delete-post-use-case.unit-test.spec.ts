import { PostEntity } from '../../../../app/entities/post.entity';
import { PostsInMemoryRepository } from '../../../../../test/helpers/post-in-memory.repository';
import { DeletePostUseCase } from '../delete-post.use-case';

describe('Delete posts use case unit tests', () => {
  const postRepository = new PostsInMemoryRepository();
  const deletePost = new DeletePostUseCase(postRepository);

  it('Should throw an error if post does not founded', () => {
    expect(() => deletePost.execute('', 'testId')).rejects.toThrow();
  });

  it('Should delete a post', async () => {
    const newPost = new PostEntity({
      postTitle: 'test title',
      postContent: 'test content',
      postLikes: 0,
      postTags: ['test tag 1', 'test tag 2'],
      userId: 'testId',
      createdAt: new Date(),
    });

    await postRepository.createPost(newPost);

    expect(postRepository.posts).toHaveLength(1);
    expect(postRepository.posts[0].id).toEqual(newPost.id);

    await deletePost.execute(newPost.id, 'testId');

    expect(postRepository.posts).toHaveLength(0);
  });
});
