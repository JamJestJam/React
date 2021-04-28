import administration from './Icons/administration.svg';
import publications from './Icons/publications.svg';
import arrow_down from './Icons/arrow-down.svg';
import ecosystem from './Icons/ecosystem.svg';
import entities2 from './Icons/entities2.svg';
import user_plus from './Icons/user-plus.svg';
import comments from './Icons/comments.svg';
import entities from './Icons/entities.svg';
import settings from './Icons/settings.svg';
import network from './Icons/network.svg';
import privacy from './Icons/privacy.svg';
import house2 from './Icons/house2.svg';
import logout from './Icons/logout.svg';
import people from './Icons/people.svg';
import search from './Icons/search.svg';
import house from './Icons/house.svg';
import logo from './Icons/logo.svg';
import bell from './Icons/bell.svg';
import plus from './Icons/plus.svg';
import cog from './Icons/cog.svg';

export enum IconType {
  administration = 0,
  publications = 1,
  arrow_down = 2,
  ecosystem = 3,
  entities2 = 4,
  user_plus = 5,
  comments = 6,
  entities = 7,
  settings = 8,
  network = 9,
  privacy = 10,
  people = 11,
  house2 = 12,
  logout = 13,
  search = 14,
  house = 15,
  plus = 16,
  bell = 17,
  logo = 18,
  cog = 19,
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
