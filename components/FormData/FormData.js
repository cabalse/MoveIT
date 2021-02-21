import { createContext, useContext, useReducer } from "react";

const FormDataStateContext = createContext();
const FormDataDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const FormDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <FormDataDispatchContext.Provider value={dispatch}>
      <FormDataStateContext.Provider value={state}>
        {children}
      </FormDataStateContext.Provider>
    </FormDataDispatchContext.Provider>
  );
};

export const useFormData = () => useContext(FormDataStateContext);
export const useDispatchFormData = () => useContext(FormDataDispatchContext);
