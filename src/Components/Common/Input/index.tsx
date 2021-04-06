import React, { FC, useState } from "react";
import { InputS } from "./css";
import IImput from "./IInput";

const Input: FC<IImput> = (props) => {
    const [State, SetState] = useState({
        Value: props.Value || "",
        Error: "",
    });

    const OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.Change && props.Change(event);

        SetState((prev) => {
            return {
                ...prev,
                Value: event.target.value,
            };
        });
    };

    return (
        <InputS
            value={State.Value}
            type="text"

            BorderColor={props.BorderColor}
            Background={props.Background}
            FontSize={props.FontSize}
            Height={props.Height}
            Width={props.Width}
            Color={props.Color}
            
            onChange={OnChange}
            onFocus={(focusEvent) => props.Focus && props.Focus(focusEvent)}
            onBlur={(focusEvent) => props.Blur && props.Blur(focusEvent)}
        />
    );
};

export default Input;
