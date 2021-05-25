import { FC } from "react";
//components
import Input from "Components/Common/Input";
//style
import * as CSS from "../css";
//interface
import IOpen from "../Proposals/IOpen";
//data
import JSON from "Data/databox.json";

const InternalReviewsOpen: FC<IOpen> = (props) => {
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
                <td>
                  <Input
                    id={`data3[${i}].name`}
                    height={19}
                    padding="0"
                    fontSize="16"
                    value={val.name}
                    change={props.handleChange}
                  />
                </td>
                <td>
                  <Input
                    id={`data3[${i}].entity`}
                    height={19}
                    padding="0"
                    fontSize="16"
                    value={val.entity}
                    change={props.handleChange}
                  />
                </td>
                <td>
                  <select
                    defaultValue={val.location}
                    id={`data3[${i}].location`}
                    onChange={props.handleChange}
                  >
                    {JSON.Counties.map((val, i) => {
                      return <option key={i} value={val}>{val}</option>;
                    })}
                  </select>
                </td>
                <td>
                  <select
                    defaultValue={val.expertise}
                    id={`data3[${i}].expertise`}
                    onChange={props.handleChange}
                  >
                    {JSON.Expertise.map((val, i) => {
                      return <option key={i}>{val}</option>;
                    })}
                  </select>
                </td>
                <td>
                  <Input
                    id={`data3[${i}].date`}
                    type="date"
                    height={19}
                    padding="0"
                    fontSize="16"
                    value={val.date}
                    change={props.handleChange}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </CSS.TableS>
    </CSS.ContentS>
  );
};

export default InternalReviewsOpen;
