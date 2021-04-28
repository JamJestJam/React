import React, { FC, useEffect, useRef, useState } from "react";
import * as CSS from "./css";

const Slider: FC = (props) => {
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
            if (move > 0 || move < -maxWidth) return;
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

    const ref = useRef(null);

    useEffect(() => {
        const element: HTMLDivElement =
            ref.current || document.createElement("div");

        console.dir( element.scrollWidth - element.offsetWidth);

        SetState({
            ...State,
            maxWidth: element.scrollWidth - element.offsetWidth + 5,
        });
    }, [ref.current]);

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
