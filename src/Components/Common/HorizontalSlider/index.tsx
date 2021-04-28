import React, { FC, useEffect, useRef, useState } from "react";
import * as CSS from "./css";

const padding = 5;

const Slider: FC = (props) => {
    const ref = useRef(null);
    const [State, SetState] = useState({
        move: false,
        maxWidth: 0,
        transform: 0,
    });

    const start = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();

        SetState({
            ...State,
            move: true,
        });
    };

    const move = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();

        if (State.move) {
            const move = State.transform + event.movementX;
            const maxWidth = State.maxWidth;
            if (move > padding || move < -maxWidth) return;
            SetState({
                ...State,
                transform: move,
            });
        }
    };

    const end = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();

        if (State.move) {
            SetState({
                ...State,
                move: false,
            });
        }
    };

    const select = () => {
        return false;
    };

    useEffect(() => {
        const element: HTMLDivElement =
            ref.current || document.createElement("div");

        SetState({
            ...State,
            maxWidth: element.scrollWidth - element.offsetWidth + padding,
        });
    }, [ref]);

    return (
        <CSS.SliderS
            onSelectCapture={select}
            onMouseDown={start}
            onMouseLeave={end}
            onMouseMove={move}
            onSelect={select}
            onMouseUp={end}
            style={{ transform: "translateX(" + State.transform + "px)" }}
        >
            <CSS.ContentS ref={ref}>{props.children}</CSS.ContentS>
        </CSS.SliderS>
    );
};

export default Slider;
