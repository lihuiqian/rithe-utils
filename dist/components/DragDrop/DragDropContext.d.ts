import React, { ReactNode } from "react";
export interface DragDropEvent {
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
    deltaX: number;
    deltaY: number;
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
    target: EventTarget | null;
    sourceTarget: EventTarget | null;
    sourceRect: DOMRect;
}
export declare type DragDropType = 'drag' | 'move' | 'drop';
export declare type DragDropNext = (type: DragDropType, event: DragDropEvent, payload: any) => void;
export declare class DragDropObserver {
    private _payload;
    private _subscribers;
    constructor();
    start(event: DragDropEvent, payload: any): void;
    move(event: DragDropEvent): void;
    end(event: DragDropEvent): void;
    private _publish;
    subscribe(next: DragDropNext): void;
    unsubscribe(next: DragDropNext): void;
}
export declare const DragDropContext: React.Context<DragDropObserver>;
export declare const useDragDropObserver: () => DragDropObserver;
export declare const DragDropProvider: ({ children }: {
    children: ReactNode | ReactNode[];
}) => JSX.Element;
