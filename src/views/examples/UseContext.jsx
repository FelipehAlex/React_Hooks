import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import { DataContext } from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {
  const context = useContext(DataContext);

  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta,
    });
  }

  const { number, setNumber, text } = useContext(AppContext);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="cert">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>

        <div>
          <button className="btn" onClick={() => addNumber(-1)}>
            -1
          </button>
          <button className="btn" onClick={() => addNumber(+1)}>
            +1
          </button>
        </div>

        <SectionTitle title="Exercicio #02" />
        <div className="center">
          <span className="text">{text}</span>
          <span className="text">{number}</span>
          <div>
            <button className="btn" onClick={() => setNumber(number - 1)}>
              -1
            </button>
            <button className="btn" onClick={() => setNumber(number + 1)}>
              +1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
