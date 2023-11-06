/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AppData = createContext();

const Context = ({ children }) => {
  const [peso, setPeso] = useState(4);
  const [percento, setPercento] = useState(50);
  const [umido, setUmido] = useState(0);
  const [secco, setSecco] = useState(0);

  const impostaCibi = () => {
    const ciboTotale = peso * 40;
    const quantoSecco = parseInt(((ciboTotale / 3) * percento) / 100);
    const quantoUmido = parseInt((ciboTotale * (100 - percento)) / 100);
    setSecco(quantoSecco);
    setUmido(quantoUmido);
  };

  return (
    <AppData.Provider
      value={{
        peso,
        setPeso,
        percento,
        setPercento,
        impostaCibi,
        secco,
        umido,
      }}
    >
      {children}
    </AppData.Provider>
  );
};

export const useData = () => useContext(AppData);

export default Context;
