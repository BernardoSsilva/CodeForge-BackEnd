import { PostEntity } from '../post.entity';

describe('Post entity unit tests', () => {
  it('Should be able to create a new post entity', () => {
    const newPost = new PostEntity({
      postTitle: 'test title',
      postContent: 'test content',
      postLikes: 0,
      postTags: ['test tag 1', 'test tag 2'],
      userId: 'testId',
      createdAt: new Date(),
    });

    expect(newPost.postTitle).toEqual('test title');
    expect(newPost.postContent).toEqual('test content');
    expect(newPost.postLikes).toEqual(0);
    expect(newPost.userId).toEqual('testId');
    expect(newPost.postTags).toEqual(['test tag 1', 'test tag 2']);
    expect(newPost.createdAt).toBeInstanceOf(Date);
    expect(newPost.id).toBeDefined();
  });
});
