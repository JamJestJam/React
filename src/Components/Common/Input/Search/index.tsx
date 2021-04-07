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
        props.Focus && props.Focus(event);

        SetState({
            ...State,
            Focus: true,
        });
    };

    const InputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        props.Blur && props.Blur(event);

        SetState({
            ...State,
            Focus: false,
        });
    };

    const InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.Change && props.Change(event);

        SetState({
            ...State,
            Value: event.target.value,
        });
    };

    return (
        <FieldS Focus={State.Focus} Border={props.Border}>
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
            <LabelS Focus={State.Focus || State.Value.length > 0} FontSize={(props.FontSize || "18")}>
                {props.Label}
            </LabelS>
            {
                props.Button &&
                <BoxIcon IconSize={IconSize.Small} IconType={IconType.search} Alt="Szukaj"/>
            }
        </FieldS>
    );
};

export default Search;
