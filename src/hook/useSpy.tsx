import {useCallback, useRef, useState} from "react";


type ScrollDirection = 'UP' | 'DOWN';

export const useSpyElem = (elemHeight: number) => {
    const ref = useRef<HTMLDivElement>(null)

    const [marginTop, setMarginTop] = useState(0);

    const prevScrollTop = useRef(0);
    const prevDirection = useRef<ScrollDirection>('DOWN');

    const transitionPoint = useRef(elemHeight);

    const onScroll = useCallback(() => {

    }, [elemHeight])
}
