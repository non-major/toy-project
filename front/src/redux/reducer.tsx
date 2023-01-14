import { Dispatch } from "react";

export type ModalState = {
  isModalOpen: boolean;
};

type Action = { type: "MODAL TOGGLE" };

export function modalReducer(state: ModalState, action: Action) {
  if (action) {
    return { ...state, isModalOpen: !state.isModalOpen };
  } else {
    throw new Error("Unhandled action");
  }
} // default 꼭 넣어줘야함

export type ModalDispatch = Dispatch<Action>;
