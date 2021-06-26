import { RefObject, SyntheticEvent } from "react";
declare function usePopover(ref?: RefObject<HTMLElement>): {
    open: boolean;
    anchorEl: HTMLElement | null;
    onOpen: (e: SyntheticEvent<HTMLElement>) => void;
    onClose: () => void;
    onSwitch: (e: SyntheticEvent<HTMLElement>) => void;
};
export default usePopover;
