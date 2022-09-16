import { createStore } from "redux";
import uniqid from "uniqid";

export const initialState = {
  counters: [
    {
      id: uniqid(),
      count: 0,
    },
  ],
};

export const CounterActions = {
  ADD_COUNTER: "ADD",
  DELETE_COUNTER: "DEL",
  INCREMENT: "INCR",
  DECREMENT: "DECR",
};
/**
 * Peserta:
 * 1. Mathilda
 * 2. Nael
 * 3. Yugi
 * 4. Rani
 * 5. Gabriel
 * 6. Ainun
 * 7. Rachmawan
 * 8. Ari
 *
 * Buatlah component yang menampilkan sejumlah card counter
 * Card counter dapat ditambahkan dan dihapus secara dinamis, button add dan delete.
 * Setiap card counter memiliki fungsi increment (button increment) dan decrement (button decrement).
 * Setiap count yang mencapai angka 20, akan mendisable button increment.
 * Setiap count yang mencapai angka -10, akan mendisable button decrement.
 */

/**
 *
 * @param {counters} state
 * @param {type, payload} action
 *
 */

export function counterReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CounterActions.DELETE_COUNTER:
      // const countersTemp = [...state.counters];
      // const res = countersTemp.splice(payload, 1);
      // console.log("state.counters: ", state.counters);
      // //   console.log("payload", payload);
      // const result = state.counters.splice(payload, 1);
      return {
        counters: state.counters.filter((counter) => payload !== counter.id),
        // counters: res,
        // lockers: [...state.lockers, payload],
        // counters: state.counters.map((counter) => {
        //   if (counter.id !== payload.id) {
        //     return {
        //       id: counter.id,
        //       count: counter.count,
        //     };
        //   }
        // }),
      };

    //   counters: state.counters.splice
    case CounterActions.ADD_COUNTER:
      const temp = {
        id: uniqid(),
        count: 0,
      };
      return {
        // lockers: state.lockers.filter((shoe, index) => payload !== index),
        counters: [...state.counters, temp],
      };
    default:
      return state;

    case CounterActions.INCREMENT:
      return {
        // lockers: state.lockers.filter((shoe, index) => payload !== index),
        counters: state.counters.map((counter) => {
          if (counter.id === payload.id) {
            return {
              id: counter.id,
              count: counter.count + 1,
            };
          }
          return counter;
        }),
      };
    case CounterActions.DECREMENT:
      return {
        // lockers: state.lockers.filter((shoe, index) => payload !== index),
        counters: state.counters.map((counter) => {
          if (counter.id === payload.id) {
            return {
              id: counter.id,
              count: counter.count - 1,
            };
          }
          return counter;
        }),
      };
  }
}

export const counterStore = createStore(counterReducer);
