import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../../../app/repositories/user.repository";
import { UserEntity } from "src/app/entities/user.entity";
import { PrismaService } from "../prisma.service";
import { UserMapper } from "../mappers/user.mapper";

@Injectable()
export class PrismaUserRepository implements UserRepository{

    constructor(private prisma: PrismaService){}
    async findAllUsers(): Promise<UserEntity[]> {
        try{
            const result = await this.prisma.user.findMany()
            return result.map(user => UserMapper.toDomain(user))
        }
        catch{
            throw new Error
        }
    }
    findUserById(id: string): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    registerUser(user: UserEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateUser(user: Partial<UserEntity>, userId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getByEmail(email: string): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    getByLogin(login: string): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
}