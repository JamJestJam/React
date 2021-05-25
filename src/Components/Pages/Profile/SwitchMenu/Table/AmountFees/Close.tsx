import { FC } from "react";
//style
import * as CSS from "../css";
//interface
import { IAmountFeesData } from "./IAmountFees";

const AmountFeesClose: FC<IAmountFeesData> = (props) => {
  return (
    <CSS.ContentS>
      <CSS.TitleS>Amount of fees</CSS.TitleS>
      <CSS.TableS>
        <thead>
          <tr>
            <th>Year</th>
            <th>Cost center</th>
            <th>Total amount</th>
            <th>Law firm</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((val, i) => {
            return (
              <tr key={i}>
                <td>{val.year}</td>
                <td>{val.costCenter}</td>
                <td>{val.totalAmount}{val.currency}</td>
                <td>{val.lawFirm}</td>
              </tr>
            );
          })}
        </tbody>
      </CSS.TableS>
    </CSS.ContentS>
  );
};

export default AmountFeesClose;
