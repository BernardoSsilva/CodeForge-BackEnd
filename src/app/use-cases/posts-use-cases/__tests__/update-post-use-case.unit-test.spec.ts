import { PostEntity } from '../../../../app/entities/post.entity';
import { PostsInMemoryRepository } from '../../../../../test/helpers/post-in-memory.repository';
import { UpdatePostUseCase } from '../update-post.use-case';

describe('Update post use case unit tests', () => {
  const repository = new PostsInMemoryRepository();
  const updatePost = new UpdatePostUseCase(repository);

  it('Should throw an error if post not found', () => {
    const newPost = new PostEntity({
      postTitle: 'test title',
      postContent: 'test content',
      postLikes: 0,
      postTags: ['test tag 1', 'test tag 2'],
      userId: 'testId',
      createdAt: new Date(),
    });

    expect(async () => await updatePost.execute(newPost, '', "")).rejects.toThrow();
  });

  it('Should throw an error if not has a edit body', () => {
    const newPost = new PostEntity({
      postTitle: 'test title',
      postContent: 'test content',
      postLikes: 0,
      postTags: ['test tag 1', 'test tag 2'],
      userId: 'testId',
      createdAt: new Date(),
    });

    expect(
      async () => await updatePost.execute(null, newPost.id, null),
    ).rejects.toThrow();
  });

  it('Should be able to update a post', async () => {
    const firstPost = new PostEntity({
      postTitle: 'test title',
      postContent: 'test content',
      postLikes: 0,
      postTags: ['test tag 1', 'test tag 2'],
      userId: 'testId',
      createdAt: new Date(),
    });

    repository.posts = [firstPost];

    expect(repository.posts[0].id).toEqual(firstPost.id)
    const newPost = new PostEntity({
      postTitle: 'test title',
      postContent: 'test content',
      postLikes: 0,
      postTags: ['test tag 1', 'test tag 2'],
      userId: 'testId',
      createdAt: new Date(),
    });

    newPost.id = firstPost.id

    await updatePost.execute(newPost, newPost.id, "testId")

    expect(repository.posts).toHaveLength(1)
    expect(repository.posts[0].postTitle).toEqual(newPost.postTitle)
    expect(repository.posts[0].postContent).toEqual(newPost.postContent)
    expect(repository.posts[0].postLikes).toEqual(newPost.postLikes)
    
  });
});
