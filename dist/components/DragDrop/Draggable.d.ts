import React, { ReactElement } from "react";
import { DragDropEvent } from "./DragDropContext";
export interface DraggableProps {
    payload: any;
    deadzone?: number;
    onStart?: (event: DragDropEvent) => void;
    onMove?: (event: DragDropEvent) => void;
    onEnd?: (event: DragDropEvent) => void;
    children: ReactElement;
}
export declare const Draggable: React.ForwardRefExoticComponent<DraggableProps & React.RefAttributes<HTMLElement>>;
