import { Dispatch } from "react";

export type ModalState = {
  isReportModalOpen: boolean;
};

type Action = { type: "Report" } | { type: "Alert" };

export function modalReducer(state: ModalState, action: Action) {
  switch (action.type) {
    case "Report":
      return { ...state, isReportModalOpen: !state.isReportModalOpen };
    default:
      throw new Error("Unhandled action");
  }
} // default 꼭 넣어줘야함

export type ModalDispatch = Dispatch<Action>;
