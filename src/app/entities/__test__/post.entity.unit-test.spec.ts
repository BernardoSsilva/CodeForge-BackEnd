import { PostEntity } from '../post.entity';

describe('Post entity unit tests', () => {
  it('Should be able to create a new post entity', () => {
    const newPost = new PostEntity({
      tittle: 'test tittle',
      comments: 10,
      content: 'test content',
      likes: 0,
      tags: ['test tag 1', 'test tag 2'],
      userId: 'testId',
      createdAt: new Date(),
    });

    expect(newPost.tittle).toEqual('test tittle');
    expect(newPost.content).toEqual('test content');
    expect(newPost.comments).toEqual(10);
    expect(newPost.likes).toEqual(0);
    expect(newPost.userId).toEqual('testId');
    expect(newPost.tags).toEqual(['test tag 1', 'test tag 2']);
    expect(newPost.createdAt).toBeInstanceOf(Date);
    expect(newPost.id).toBeDefined();
  });
});
