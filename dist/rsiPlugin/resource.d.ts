import { BehaviorSubject } from "rxjs";
import { CollectionResponse, ElementResponse, IElement, IResourceUpdate, Service, XObject } from "../";
export declare abstract class Resource {
    protected service: Service;
    elements: Array<BehaviorSubject<IElement>>;
    elementSubscribable?: boolean;
    resourceSubscribable?: boolean;
    protected _change: BehaviorSubject<IResourceUpdate>;
    constructor(service: Service);
    /**
     * Retrieve the resource name in all-lower-case
     *
     * @readonly
     * @type {string}
     * @memberof Service
     */
    readonly name: string;
    /**
     * Listen on this property to get notified on changes at resource level
     *
     * @readonly
     * @type {BehaviorSubject<IResourceUpdate>}
     * @memberof Resource
     */
    readonly change: BehaviorSubject<IResourceUpdate>;
    abstract getResource?(offset?: string | number, limit?: string | number): Promise<CollectionResponse>;
    createElement?(state: {}): Promise<ElementResponse>;
    getElement(elementId: string): Promise<ElementResponse>;
    updateElement?(elementId: string, difference: any): Promise<ElementResponse>;
    deleteElement?(elementId: string): Promise<ElementResponse>;
    getResourceSpec?(): {};
    /**
     * Remove an element from the resource
     *
     * @param {string} elementId id of the element to be removed
     * @memberof Resource
     */
    removeElement(elementId: string): void;
    /**
     * This method adds elements to the resource
     *
     * @param {XObject} data the object to be added
     * @returns {XObject} the completed object added to the resource
     * @memberof Resource
     */
    addElement(data: XObject): XObject;
}
