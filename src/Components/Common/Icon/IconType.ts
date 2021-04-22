import administration from "./Icons/administration.svg";
import arrow_down from "./Icons/arrow-down.svg";
import bell from "./Icons/bell.svg";
import cog from "./Icons/cog.svg";
import comments from "./Icons/comments.svg";
import ecosystem from "./Icons/ecosystem.svg";
import entities from "./Icons/entities.svg";
import entities2 from "./Icons/entities2.svg";
import house from "./Icons/house.svg";
import house2 from "./Icons/house2.svg";
import logo from "./Icons/logo.svg";
import logout from "./Icons/logout.svg";
import network from "./Icons/network.svg";
import people from "./Icons/people.svg";
import plus from "./Icons/plus.svg";
import privacy from "./Icons/privacy.svg";
import publications from "./Icons/publications.svg";
import search from "./Icons/search.svg";
import settings from "./Icons/settings.svg";
import user_plus from "./Icons/user-plus.svg";

export enum IconType {
    administration,
    publications,
    arrow_down,
    ecosystem,
    entities2,
    user_plus,
    comments,
    entities,
    settings,
    network,
    privacy,
    people,
    house2,
    logout,
    search,
    house,
    plus,
    bell,
    logo,
    cog,
}

export const GetIcon = (type: IconType): string => {
    switch (type) {
        case IconType.administration:
            return administration;
        case IconType.publications:
            return publications;
        case IconType.arrow_down:
            return arrow_down;
        case IconType.ecosystem:
            return ecosystem;
        case IconType.entities2:
            return entities2;
        case IconType.user_plus:
            return user_plus;
        case IconType.comments:
            return comments;
        case IconType.entities:
            return entities;
        case IconType.settings:
            return settings;
        case IconType.network:
            return network;
        case IconType.privacy:
            return privacy;
        case IconType.people:
            return people;
        case IconType.house2:
            return house2;
        case IconType.logout:
            return logout;
        case IconType.search:
            return search;
        case IconType.house:
            return house;
        case IconType.plus:
            return plus;
        case IconType.bell:
            return bell;
        case IconType.logo:
            return logo;
        case IconType.cog:
            return cog;
    }
};
