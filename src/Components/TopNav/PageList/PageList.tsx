import React, { FC } from "react";
import SmallIcon from "../../Common/Icon/SmallIcon/SmallIcon";

const PageList: FC = () => {
    return (
        <div>
            <ol>
                <li>
                    <SmallIcon />
                    Home
                </li>
                <li>
                    <SmallIcon />
                    Strona jeden
                </li>
                <li>
                    <SmallIcon />
                    Strona dwa
                </li>
                <li>
                    <SmallIcon />
                    Strona trzy
                </li>
            </ol>
        </div>
    );
};

export default PageList;
