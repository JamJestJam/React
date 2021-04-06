import React, { FC, useState } from "react";
import Input from "..";
import BoxIcon from "../../Icon/Boxing";
import { IconSize } from "../../Icon/IconSize";
import { IconType } from "../../Icon/IconType";
import { FieldS, LabelS } from "./css";
import ISearch from "./ISearch";

const Search: FC<ISearch> = (props) => {
    const [State, SetState] = useState({
        Focus: false,
        Value: props.Value || "",
    });

    const InputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        SetState({
            ...State,
            Focus: true,
        });
    };

    const InputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        SetState({
            ...State,
            Focus: false,
        });
    };

    const InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        SetState({
            ...State,
            Value: event.target.value,
        });
    };

    return (
        <FieldS>
            <Input
                BorderColor={props.BorderColor}
                Background={props.Background}
                FontSize={props.FontSize}
                Height={props.Height}
                Width={props.Width}
                Color={props.Color}
                Value={State.Value}

                Blur={InputBlur}
                Focus={InputFocus}
                Change={InputChange}
            />
            <LabelS Focus={State.Focus || State.Value.length > 0}>
                {props.Label}
            </LabelS>
            <BoxIcon IconSize={IconSize.Small} IconType={IconType.search} Alt="Szukaj"/>
        </FieldS>
    );
};

export default Search;
