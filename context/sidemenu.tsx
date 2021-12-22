import React, {useState, useContext} from 'react';

interface Props {
  children: React.ReactNode;
}

interface ISidemenuContext {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
}

const defaultState: ISidemenuContext = {
  open: true,
  setOpen: () => {},
  toggle: () => {}
}

const SidemenuContext = React.createContext<ISidemenuContext>(defaultState);

const SidemenuContextProvider = ({children}: Props) => {
  const [open, setOpen] = useState<boolean>(defaultState.open);

  const toggle = () => setOpen(open => !open)

  return (
    <SidemenuContext.Provider value={{open, setOpen, toggle}}>
      {children}
    </SidemenuContext.Provider>
  );
};

export const useSidemenu = () => {
  const store = useContext(SidemenuContext);

  return store;
};

export default SidemenuContextProvider;
