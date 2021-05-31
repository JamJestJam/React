//icons
import administration from "./Icons/administration.svg";
import image_editing from "./Icons/image-editing.svg";
import publications from "./Icons/publications.svg";
import arrow_down from "./Icons/arrow-down.svg";
import ecosystem from "./Icons/ecosystem.svg";
import entities2 from "./Icons/entities2.svg";
import user_plus from "./Icons/user-plus.svg";
import broadcast from "./Icons/broadcast.svg";
import comments from "./Icons/comments.svg";
import entities from "./Icons/entities.svg";
import settings from "./Icons/settings.svg";
import collapse from "./Icons/collapse.svg";
import calendar from "./Icons/calendar.svg";
import network from "./Icons/network.svg";
import privacy from "./Icons/privacy.svg";
import diagram from "./Icons/diagram.svg";
import house2 from "./Icons/house2.svg";
import logout from "./Icons/logout.svg";
import people from "./Icons/people.svg";
import search from "./Icons/search.svg";
import expand from "./Icons/expand.svg";
import mosaic from "./Icons/mosaic.svg";
import filter from "./Icons/filter.svg";
import house from "./Icons/house.svg";
import share from "./Icons/share.svg";
import logo from "./Icons/logo.svg";
import bell from "./Icons/bell.svg";
import plus from "./Icons/plus.svg";
import book from "./Icons/book.svg";
import edit from "./Icons/edit.svg";
import exit from "./Icons/exit.svg";
import list from "./Icons/list.svg";
import more from "./Icons/more.svg";
import sort from "./Icons/sort.svg";
import cog from "./Icons/cog.svg";
import rec from "./Icons/rec.svg";

export enum IconType {
  administration = 0,
  image_editing = 20,
  publications = 1,
  arrow_down = 2,
  broadcast = 21,
  ecosystem = 3,
  entities2 = 4,
  user_plus = 5,
  collapse = 28,
  calendar = 34,
  comments = 6,
  entities = 7,
  settings = 8,
  privacy = 10,
  diagram = 35,
  network = 9,
  people = 11,
  house2 = 12,
  logout = 13,
  search = 14,
  mosaic = 26,
  expand = 27,
  filter = 32,
  share = 29,
  house = 15,
  sort = 33,
  plus = 16,
  bell = 17,
  logo = 18,
  book = 22,
  edit = 23,
  exit = 24,
  list = 25,
  more = 31,
  cog = 19,
  rec = 30,
}

export const GetIcon = (type: IconType): string => {
  switch (type) {
    case IconType.administration:
      return administration;
    case IconType.image_editing:
      return image_editing;
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
    case IconType.collapse:
      return collapse;
    case IconType.broadcast:
      return broadcast;
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
    case IconType.expand:
      return expand;
    case IconType.house:
      return house;
    case IconType.plus:
      return plus;
    case IconType.bell:
      return bell;
    case IconType.logo:
      return logo;
    case IconType.book:
      return book;
    case IconType.edit:
      return edit;
    case IconType.exit:
      return exit;
    case IconType.cog:
      return cog;
    case IconType.mosaic:
      return mosaic;
    case IconType.list:
      return list;
    case IconType.share:
      return share;
    case IconType.rec:
      return rec;
    case IconType.more:
      return more;
    case IconType.filter:
      return filter;
    case IconType.sort:
      return sort;
    case IconType.diagram:
      return diagram;
    case IconType.calendar:
      return calendar;
  }
};
