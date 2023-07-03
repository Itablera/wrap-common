import { ResultOrError } from "../types/ResultOrError";
import { BaseEntity } from "./baseEntity";
import * as bson from "bson";

export class ObjectId extends BaseEntity<string> {
    constructor(id?: string) {
        super()
        this.properties.value = id ? id : (new bson.ObjectId())?.toString() || null;
    }
    static create(value?: string): ResultOrError<ObjectId, any> {
        try {
            return ResultOrError.ok(new ObjectId(value))
        } catch (error) {
            return ResultOrError.fail(error)
        }
    }
}