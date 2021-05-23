import React from 'react';

export default interface IOptionBox {
    value: string;
    posibleOptions: string[];
    id?: string;
    name?: string;

    Change?: (a: React.ChangeEvent<HTMLSelectElement>) => void;
    Focus?: (a: React.FocusEvent<HTMLSelectElement>) => void;
    Blur?: (a: React.FocusEvent<HTMLSelectElement>) => void;
}