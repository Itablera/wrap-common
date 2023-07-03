import { LogTypes } from "../enums";

export interface ILog<StackType = unknown> {
    type?: LogTypes;
    message?: string;
    date?: Date;
    stack?: StackType;
}
