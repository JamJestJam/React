import Input from "Components/Common/Input";
import React, { FC } from "react";
//style
import * as CSS from "../css";
//interface
import IOpen from "./IOpen";

const AmountFeesOpen: FC<IOpen> = (props) => {
  const year = new Date().getFullYear();

  return (
    <CSS.ContentS>
      <CSS.TitleS>Amount of fees</CSS.TitleS>
      <CSS.TableS>
        <thead>
          <tr>
            <th>Year</th>
            <th>Cost center</th>
            <th colSpan={2}>Total amount</th>
            <th>Law firm</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((val, i) => {
            return (
              <tr key={i}>
                <td>
                  <select defaultValue={val.year} id={`data4[${i}].year`}>
                    {[...Array(40)].map((val, i) => {
                      return (
                        <option value={year - i} key={i}>
                          {year - i}
                        </option>
                      );
                    })}
                  </select>
                </td>
                <td>
                  <Input
                    id={`data4[${i}].costCenter`}
                    height={19}
                    padding="0"
                    fontSize="16"
                    value={val.costCenter}
                    change={props.handleChange}
                  />
                </td>
                <td>
                  <Input
                    id={`data4[${i}].totalAmount`}
                    type="number"
                    height={19}
                    padding="0"
                    fontSize="16"
                    value={val.totalAmount}
                    change={props.handleChange}
                  />
                </td>
                <td>
                  <select
                    defaultValue={val.currency}
                    id={`data4[${i}].currency`}
                    onChange={props.handleChange}
                  >
                    <option value="$">USD</option>
                    <option value="€">EUR</option>
                    <option value="¥">JPY</option>
                    <option value="£">GBP</option>
                    <option value="$">AUD</option>
                    <option value="fr">CHF</option>
                    <option value="kr">SEK</option>
                    <option value="zł">PLN</option>
                  </select>
                </td>
                <td>
                <Input
                    id={`data4[${i}].lawFirm`}
                    height={19}
                    padding="0"
                    fontSize="16"
                    value={val.lawFirm}
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

export default AmountFeesOpen;
