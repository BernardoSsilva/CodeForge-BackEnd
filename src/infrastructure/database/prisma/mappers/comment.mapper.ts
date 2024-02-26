import { Comment as PrismaComment } from "@prisma/client";
import { CommentEntity } from "src/app/entities/comment.entity";


export class CommentMapper{
    static toDomain(comment:PrismaComment){
        const commentEntity = new CommentEntity(comment)
        return commentEntity
    }
}