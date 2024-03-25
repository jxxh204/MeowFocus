import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
} from "react";

type Props = {
  disabled?: boolean;
  value: null | number;
  onChange: Dispatch<SetStateAction<string>>;
};

const SelectTimerContext = createContext<null | Props>(null);

const SelectTimerProvider = ({
  children,
  value,
}: {
  children?: ReactNode;
  value: Props;
}) => {
  return (
    <SelectTimerContext.Provider value={value}>
      {children}
    </SelectTimerContext.Provider>
  );
};

const useSelectTimerContext = () => {
  const context = useContext(SelectTimerContext);
  if (!context) console.error("selectTimer context 없음");
  return context;
};

export { SelectTimerProvider, useSelectTimerContext };
