import { PostEntity } from '../../../../app/entities/post.entity';
import { PostsInMemoryRepository } from '../../../../../test/helpers/post-in-memory.repository';
import { UpdatePostUseCase } from '../update-post.use-case';

describe('Update post use case unit tests', () => {
  const repository = new PostsInMemoryRepository();
  const updatePost = new UpdatePostUseCase(repository);

  it('Should throw an error if post not found', () => {
    const newPost = new PostEntity({
      tittle: 'test tittle',
      comments: 10,
      content: 'test content',
      likes: 0,
      tags: ['test tag 1', 'test tag 2'],
      userId: 'testId',
      createdAt: new Date(),
    });

    expect(async () => await updatePost.execute(newPost, '')).rejects.toThrow();
  });

  it('Should throw an error if not has a edit body', () => {
    const newPost = new PostEntity({
      tittle: 'test tittle',
      comments: 10,
      content: 'test content',
      likes: 0,
      tags: ['test tag 1', 'test tag 2'],
      userId: 'testId',
      createdAt: new Date(),
    });

    expect(
      async () => await updatePost.execute(null, newPost.id),
    ).rejects.toThrow();
  });

  it('Should be able to update a post', async () => {
    const firstPost = new PostEntity({
      tittle: 'test tittle',
      comments: 10,
      content: 'test content',
      likes: 0,
      tags: ['test tag 1', 'test tag 2'],
      userId: 'testId',
      createdAt: new Date(),
    });

    repository.posts = [firstPost];

    expect(repository.posts[0].id).toEqual(firstPost.id)
    const newPost = new PostEntity({
      tittle: 'new tittle',
      comments: 12,
      content: 'new content',
      likes: 1,
      tags: ['new test tag 1', 'test tag 2'],
      userId: 'testId',
    });

    newPost.id = firstPost.id

    await updatePost.execute(newPost, newPost.id)

    expect(repository.posts).toHaveLength(1)
    expect(repository.posts[0].tittle).toEqual(newPost.tittle)
    expect(repository.posts[0].comments).toEqual(newPost.comments)
    expect(repository.posts[0].content).toEqual(newPost.content)
    expect(repository.posts[0].likes).toEqual(newPost.likes)
    
  });
});
