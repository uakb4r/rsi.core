import { Service } from "./";
export declare class SchemaPlugin extends Service {
    name: string;
    Elements: any[];
    elementKeyMap: any;
    model: any;
    schema: any;
    data: any;
    resourceMap: any;
    pluginDir: string;
    protected constructor();
    init(): void;
    onReady(): void;
    readData(): void;
    readSchema(): void;
    updateUris(data: any): void;
}
