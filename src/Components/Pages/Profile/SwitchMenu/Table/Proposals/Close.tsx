import { FC } from "react";
//style
import * as CSS from "../css";
//interface
import { IProposalsData } from "./IProposals";

const ProposalsClose: FC<IProposalsData> = (props) => {
  return (
    <CSS.ContentS>
      <CSS.TitleS>Proposals</CSS.TitleS>
      <CSS.TableS>
        <thead>
          <tr>
            <th>Name</th>
            <th>Entity</th>
            <th>Location</th>
            <th>Expertise</th>
            <th>Data</th>
            <th>Firm</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((val, i) => {
            return (
              <tr key={i}>
                <td>{val.name}</td>
                <td>{val.entity}</td>
                <td>{val.location}</td>
                <td>{val.expertise}</td>
                <td>{val.date}</td>
                <td>{val.firm}</td>
              </tr>
            );
          })}
        </tbody>
      </CSS.TableS>
      <CSS.SeeMore>See more proposals</CSS.SeeMore>
    </CSS.ContentS>
  );
};

export default ProposalsClose;
