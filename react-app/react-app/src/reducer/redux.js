// Konsep utama:
// 1.

/**
 * 3 Konsep Utama:
 * 1. Store             : menyimpan state dari aplikasi
 * 2. Reducer           : mengubah state berdasarkan action/dispatch
 * 3. Action/Dispatch   : fungsi
 */
const Redux = require("redux");
const initialState = {
  shoes: 0,
};

const ACTIONS = {
  TITIP_SEPATU: "TITIP_SEPATU",
  AMBIL_SEPATU: "AMBIL_SEPATU",
};

/**state:   Jika awal pertama kali dikirimkan ke createStore,
 *          value yang digunakanadalah initialState
 *dispatch:object yang terdiridari property 'type' dan 'payload'
  {
  type: "string";
  payload: "number";
}

action = dispatch
*/

function JonoReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.TITIP_SEPATU:
      return { shoes: state.shoes + action.payload };
    case ACTIONS.AMBIL_SEPATU:
      return {
        shoes: state.shoes - action.payload,
      };
    default:
      return state;
  }
}

const shoeStore = Redux.createStore(JonoReducer);

// Mendapatkan state saat ini / terakhir
console.log("initialState: ", shoeStore.getState());

//Mendapatkan listener untuk memantau perubahan yang terjadi pada state
const unsubscribe = shoeStore.subscribe(() =>
  console.log(shoeStore.getState())
);

//Mengubah state sesuai action type-nya
shoeStore.dispatch({ type: ACTIONS.TITIP_SEPATU, payload: 1 });
shoeStore.dispatch({ type: ACTIONS.TITIP_SEPATU, payload: 3 });
shoeStore.dispatch({ type: ACTIONS.AMBIL_SEPATU, payload: 1 });

//Menghentikan listener
unsubscribe();

shoeStore.dispatch({ type: ACTIONS.AMBIL_SEPATU, payload: 2 });
console.log("state:", shoeStore.getState());

const MapDispatchToProps = (dispatch) => {
  return {
    titipSepatu: (sepatu) =>
      dispatch({ type: ACTIONS.TITIP_SEPATU, payload: sepatu }),
    titipSepatu: (sepatu) =>
      dispatch({ type: ACTIONS.AMBIL_SEPATU, payload: sepatu }),
  };
};

const mapStateToProps = (state) => {
  return state;
};
const commands = MapDispatchToProps(shoeStore.dispatch);
const state = mapStateToProps(shoeStore.getState());
