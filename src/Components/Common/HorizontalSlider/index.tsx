import React, { FC, useState } from "react";
import { SliderS } from "./css";

const Slider: FC = (props) => {
    const [State, SetState] = useState({
        move: false,
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
            const maxWidth = 500;
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

    return (
        <SliderS
            onSelectCapture={select}
            onMouseDown={start}
            onMouseLeave={end}
            onMouseMove={move}
            onSelect={select}
            onMouseUp={end}
            style={{ transform: "translateX(" + State.transform + "px)" }}
        >
            {props.children}
        </SliderS>
    );
};

export default Slider;
