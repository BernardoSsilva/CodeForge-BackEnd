import { BadRequestError } from "../../src/shared/errors/bad-request.error";
import { CommentEntity } from "../../src/app/entities/comment.entity";
import { CommentRepository } from "../../src/app/repositories/comment.repository";
import { NotFoundError } from "../../src/shared/errors/not-found.error";

export class CommentsInMemoryRepository implements CommentRepository{

    public comments: CommentEntity[] = []
    async postComment(comment: CommentEntity): Promise<void> {
        if(!comment){
            throw new BadRequestError('Comment is required')
        }
        await this.comments.push(comment)
    }
    async deleteComment(commentId: string): Promise<void> {
        const deletedCommentIndex = this.comments.findIndex(comment => comment.id === commentId);

        if(deletedCommentIndex < 0){
            throw new NotFoundError('Comment not found');
        }

        await this.comments.splice(deletedCommentIndex, 1)
        
    }
    async getAllComments(): Promise<CommentEntity[]> {
        if(this.comments.length <= 0){
            throw new NotFoundError("comments not found")
        }
        return await this.comments;
    }
    async getCommentById(commentId: string): Promise<CommentEntity> {
        const comment = this.comments.find(comment => comment.id === commentId);

        if(!comment){
            throw new NotFoundError('Comment not found');
        }
        return await comment
    }
    async getAllCommentsByPostId(postId: string): Promise<CommentEntity[]> {
        const allCommentsFromPost = this.comments.filter(comment => comment.postId === postId)
        if(allCommentsFromPost.length <= 0){
            throw new NotFoundError('Comments not found');
        }

        return await allCommentsFromPost
    }
    async getAllCommentsByUserId(userId: string): Promise<CommentEntity[]> {
        const allCommentsFromUser = this.comments.filter(comment => comment.userId == userId)
        if(!allCommentsFromUser){
            throw new NotFoundError('Comments not found');
        };
        return await allCommentsFromUser
    }
    async updateComment(comment: CommentEntity, commentId: string): Promise<void> {
        const updatedComment = await this.comments.findIndex(comment => comment.id == commentId);
        if(updatedComment < 0){
            throw new NotFoundError('Comment not found');
        }

        this.comments[updatedComment] = comment
    }
}