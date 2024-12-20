const redux = require('redux');

const etatInitial = {
    compteur: 0
};

const reducer = (state = etatInitial, action) => {
    switch (action.type) {
        case 'INCREMENTER':      
            return { ...state, compteur: state.compteur + 1 };
        case 'DECREMENTER':      
            return { ...state, compteur: state.compteur - 1 };
        default:
            return state;
    }
}

const store = redux.createStore(reducer);    

console.log(store.getState());  // Affiche : { compteur: 0 }

store.dispatch({ type: 'INCREMENTER' }); // { compteur: 1 }
console.log(store.getState());
store.dispatch({ type: 'INCREMENTER' }); // { compteur: 2 }
console.log(store.getState());

store.dispatch({ type: 'DECREMENTER' }); // { compteur: 1 }
console.log(store.getState());
store.dispatch({ type: 'DECREMENTER' }); // { compteur: 0 }
console.log(store.getState());