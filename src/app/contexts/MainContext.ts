import React from "react";
import { ConfirmationOptions } from "../components/utils/ConfirmationDialog";

// export const DEFAULT_USER : User = {
//     id: "0",
//     fullName: "Kilgore Trout"
// };

export interface IMainContext {
  ask: (options: ConfirmationOptions) => void;
  feedback: {
      success: (message: string) => void,
      error: (message: string) => void,
      warning: (message: string) => void,
      info: (message: string) => void,
  },
  loader: {
      show: () => void,
      hide: () => void,
  }
}

const DEFAULT_CONTEXT_VALUE: IMainContext = {
    ask: (options: ConfirmationOptions) => {},
    feedback: {
        success: (message: string) => {},
        error: (message: string) => {},
        warning: (message: string) => {},
        info: (message: string) => {},
    },
    loader: {
        show: () => {},
        hide: () => {},
    }
};

export default React.createContext(DEFAULT_CONTEXT_VALUE);
