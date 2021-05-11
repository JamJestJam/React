import React, { FC } from "react";
//style
import * as CSS from "./css";
//conponent
import ButtonPagination from "./ButtonPagination";
//interface
import IPagination from "./IPagination";

const Paggination: FC<IPagination> = (p) => {
  const s1 = p.current - 1;
  const s2 = p.current - 2;
  const s3 = p.current - 3;

  const b1 = p.current + 1;
  const b2 = p.current + 2;
  const b3 = p.current + 3;

  return (
    <CSS.PagginationS>
      <ButtonPagination
        cur={p.current}
        set={p.current - 1}
        change={p.change}
        text={"Previous"}
        disable={p.current === p.min}
      />

      {p.min !== p.current ? (
        <ButtonPagination
          cur={p.current}
          set={p.min}
          change={p.change}
          text={p.min}
          disable={false}
        />
      ) : (
        <></>
      )}

      {s3 - 1 > p.min ? <div>...</div> : <></>}

      {s3 > p.min ? (
        <ButtonPagination
          cur={p.current}
          set={s3}
          change={p.change}
          text={s3}
          disable={false}
        />
      ) : (
        <></>
      )}

      {s2 > p.min ? (
        <ButtonPagination
          cur={p.current}
          set={s2}
          change={p.change}
          text={s2}
          disable={false}
        />
      ) : (
        <></>
      )}

      {s1 > p.min ? (
        <ButtonPagination
          cur={p.current}
          set={s1}
          change={p.change}
          text={s1}
          disable={false}
        />
      ) : (
        <></>
      )}

      <ButtonPagination
        cur={p.current}
        set={p.current}
        change={p.change}
        text={p.current}
        disable={p.current === p.min}
      />

      {b1 < p.max ? (
        <ButtonPagination
          cur={p.current}
          set={b1}
          change={p.change}
          text={b1}
          disable={false}
        />
      ) : (
        <></>
      )}

      {b2 < p.max ? (
        <ButtonPagination
          cur={p.current}
          set={b2}
          change={p.change}
          text={b2}
          disable={false}
        />
      ) : (
        <></>
      )}

      {b3 < p.max ? (
        <ButtonPagination
          cur={p.current}
          set={b3}
          change={p.change}
          text={b3}
          disable={false}
        />
      ) : (
        <></>
      )}

      {b3 + 1 < p.max ? <div>...</div> : <></>}

      {p.current !== p.max ? (
        <ButtonPagination
          cur={p.current}
          set={p.max}
          change={p.change}
          text={p.max}
          disable={false}
        />
      ) : (
        <></>
      )}

      <ButtonPagination
        cur={p.current}
        set={p.current + 1}
        change={p.change}
        text={"Next"}
        disable={p.current === p.max}
      />
    </CSS.PagginationS>
  );
};

export default Paggination;
