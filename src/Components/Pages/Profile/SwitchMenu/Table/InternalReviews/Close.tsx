import { FC } from "react";
//style
import * as CSS from "../css";
//interface
import { IInternalData } from "./IInternalReviews";

const InternalReviewsClose: FC<IInternalData> = (props) => {
  return (
    <CSS.ContentS>
      <CSS.TitleS>Internal reviews</CSS.TitleS>
      <CSS.TableS>
        <thead>
          <tr>
            <th>Name</th>
            <th>Entity</th>
            <th>Location</th>
            <th>Expertise</th>
            <th>Data</th>
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
              </tr>
            );
          })}
        </tbody>
      </CSS.TableS>
      <CSS.SeeMore>See more Reviews</CSS.SeeMore>
    </CSS.ContentS>
  );
};

export default InternalReviewsClose;
