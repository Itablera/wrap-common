
export type Targets = 'root' | 'account' | 'user' | 'group' | 'provider' | 'service' | 'license' | 'app' | 'domain';
export type Operations = 'create' | 'read' | 'update' | 'delete' | 'find' | 'findOne' | 'connect' | 'disconnect'
export type Status = 'none' | 'active' | 'inactive' | 'error' | 'failure' | 'partial' | 'pending' | 'paused' | 'success'
export type LogTypes = 'none' | 'message' | 'warning' | 'partial' | 'error'
export type Services = 'MrbService' | 'GSuiteService' | 'O365Service' | 'AzureService' | 'ArrowService' | 'NameSRSService';
export type ContentTypes = 'none' | 'domain' | 'file' | 'document' | 'message' | 'contact' | 'order' | 'serviceConfiguration' | 'service' | 'license' | 'app';

export type OperationPath = `${Targets}.${Operations}` | `custom.${string}` | 'callback';
//Se till att denna inte används i controller
