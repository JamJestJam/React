import React, { FC } from "react";
import { IconsEnumSvg } from "../../Common/Icon/IconsEnum";
import SmallIcon from "../../Common/Icon/SmallIcon/SmallIcon";

const PageList: FC = () => {
    return (
        <div>
            <ol>
                <li>
                    <SmallIcon image={IconsEnumSvg.house} alt="missing"/>
                    Home
                </li>
                <li>
                    <SmallIcon image={IconsEnumSvg.house} alt="missing"/>
                    Strona jeden
                </li>
                <li>
                    <SmallIcon image={IconsEnumSvg.house} alt="missing"/>
                    Strona dwa
                </li>
                <li>
                    <SmallIcon image={IconsEnumSvg.house} alt="missing"/>
                    Strona trzy
                </li>
            </ol>
        </div>
    );
};

export default PageList;
