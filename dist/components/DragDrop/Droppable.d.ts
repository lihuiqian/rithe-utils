import React, { ReactElement } from "react";
import { DragDropEvent } from "./DragDropContext";
export interface DroppableProps {
    onEnter?: (event: DragDropEvent, payload: any) => void;
    onOver?: (event: DragDropEvent, payload: any) => void;
    onLeave?: (event: DragDropEvent, payload: any) => void;
    onDrop?: (event: DragDropEvent, payload: any) => void;
    children: ReactElement;
}
export declare const Droppable: React.ForwardRefExoticComponent<DroppableProps & React.RefAttributes<HTMLElement>>;
