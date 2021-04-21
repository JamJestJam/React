import React, { FC, useState } from "react";
import { SliderS } from "./css";

const Slider: FC = (props) => {
    const [State, SetState] = useState({
        move: false,
        transform: 0
    });

    const start=(event: React.MouseEvent<HTMLDivElement>)=>{
        SetState({
            ...State,
            move: true
        });
    }

    const move=(event: React.MouseEvent<HTMLDivElement>)=>{
        if(State.move){
            console.log(1);
        }
    }

    const end=(event: React.MouseEvent<HTMLDivElement>)=>{
        if(State.move){
            console.log(2);

            SetState({
                ...State,
                move: false
            });
        }
    }

    const select=()=>{
        return false;
    }

    return (
        <SliderS onMouseDown={start} onMouseMove={move} onMouseUp={end} onSelect={select} onSelectCapture={select} onMouseLeave={end}>
            {props.children}
        </SliderS>
    );
};

export default Slider;
