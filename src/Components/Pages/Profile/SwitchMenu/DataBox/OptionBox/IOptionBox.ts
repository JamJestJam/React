import React from 'react';

export default interface IOptionBox {
    value: string;
    posibleOptions: string[];
    id?: string;
    name?: string;

    onChange?: (a: React.ChangeEvent<HTMLSelectElement>) => void;
    onFocus?: (a: React.FocusEvent<HTMLSelectElement>) => void;
    onBlur?: (a: React.FocusEvent<HTMLSelectElement>) => void;
}