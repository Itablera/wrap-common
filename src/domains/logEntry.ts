import { ResultOrError } from "../types/ResultOrError";
import { ILog } from "../types/ILog";
import { BaseDomain, DomainAsObject } from "./baseDomain";

export type LogEntryAsObject = DomainAsObject<LogEntry>;

export class LogEntry<StackType = unknown> extends BaseDomain<ILog<StackType>> {
    get type() {
        return this.properties.type;
    }
    get message() {
        return this.properties.message;
    }
    get date() {
        return this.properties.date;
    }
    get stack() {
        return this.properties.stack;
    }
    static create<StackType = unknown>(object?: ILog<StackType>): ResultOrError<LogEntry<StackType>, any> {
        return ResultOrError.ok(new LogEntry(object));
    }
}