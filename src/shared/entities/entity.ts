import { randomUUID } from "crypto";

export abstract class Entity<Props = any> {
    public id:string;
    public props:Props
    constructor(props:Props, id?:string) {
        this.id = id || randomUUID()
        this.props = props
    }
}