import { createStore } from "redux";
import uniqid from "uniqid";

export const initialState = {
  lockers: [
    {
      shoes: 0,
      id: uniqid(),
      isClosed: false,
    },
  ],
};

export const LOCKER_ACTIONS = {
  PUT_SHOES: "PUT_SHOES",
  TAKE_SHOES: "TAKE_SHOES",
  ADD_SHOES: "ADD_SHOES",
  CLOSE_LOCKER: "CLOSE_LOCKER",
  OPEN_LOCKER: "OPEN_LOCKER",
};

/**
 *
 * @param {lockers} state
 * @param {type, payload} action
 *
 */

export function lockerReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOCKER_ACTIONS.PUT_SHOES:
      return {
        // lockers: [...state.lockers, payload],
        lockers: state.lockers.map((locker) => {
          if (locker.id === payload.id) {
            return {
              id: locker.id,
              shoes: locker.shoes + 1,
            };
          }
          return locker;
        }),
      };

    case LOCKER_ACTIONS.TAKE_SHOES:
      return {
        // lockers: state.lockers.filter((shoe, index) => payload !== index),
        lockers: state.lockers.map((locker) => {
          if (locker.id === payload.id) {
            return {
              id: locker.id,
              shoes: locker.shoes - 1,
              isClosed: false,
            };
          }
          return locker;
        }),
      };
    case LOCKER_ACTIONS.ADD_SHOES:
      const temp = {
        shoes: 0,
        id: uniqid(),
        isClosed: false,
      };
      return {
        // lockers: state.lockers.filter((shoe, index) => payload !== index),
        lockers: [...state.lockers, temp],
      };
    default:
      return state;

    case LOCKER_ACTIONS.CLOSE_LOCKER:
      return {
        // lockers: state.lockers.filter((shoe, index) => payload !== index),
        lockers: state.lockers.map((locker) => {
          if (locker.id === payload.id) {
            return {
              id: locker.id,
              shoes: locker.shoes,
              isClosed: true,
            };
          }
          return locker;
        }),
      };
    case LOCKER_ACTIONS.OPEN_LOCKER:
      return {
        // lockers: state.lockers.filter((shoe, index) => payload !== index),
        lockers: state.lockers.map((locker) => {
          if (locker.id === payload.id) {
            return {
              id: locker.id,
              shoes: locker.shoes,
              isClosed: false,
            };
          }
          return locker;
        }),
      };
  }
}

export const lockerStore = createStore(lockerReducer);
