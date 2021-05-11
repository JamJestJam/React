import React, { FC, useEffect, useRef, useState } from "react";
//style
import * as CSS from "./css";
//functions
import * as F from "./function";

const Slider: FC = (props) => {
    const ref = useRef(null);
    const [state, setState] = useState({
        moving: false,
        move: false,
        maxWidth: 0,
        padding: 5,
        transform: 0,
    });
    function start(even: React.MouseEvent<HTMLDivElement>) {
        F.stopProp(even);
        setState({ ...state, moving: true });
    }
    const move = (event: React.MouseEvent) => {
        F.stopProp(event);

        if (state.moving) {
            const calcmove = F.calcMove(state, event.movementX);
            setState({
                ...state,
                transform: calcmove,
                move: true
            });
        }
    };

    const stop = (event: React.MouseEvent) => {
        F.stopProp(event);

        if (state.moving) setState({ ...state, moving: false, move: false });
    };

    const select = () => {
        return false;
    };

    useEffect(() => {
        const element: HTMLDivElement =
            ref.current || document.createElement("div");

        setState({
            ...state,
            maxWidth: element.scrollWidth - element.offsetWidth + state.padding,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);

    return (
        <CSS.SliderS
            onSelectCapture={select}
            onMouseDown={start}
            onMouseLeave={stop}
            onMouseMove={move}
            onSelect={select}
            onMouseUp={stop}
            style={{
                transform: "translateX(" + state.transform + "px)",
            }}
        >
            <CSS.ContentS moving={state.move} ref={ref}>{props.children}</CSS.ContentS>
        </CSS.SliderS>
    );
};

export default Slider;
