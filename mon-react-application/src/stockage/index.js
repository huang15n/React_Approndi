import { createSlice, configureStore } from "@reduxjs/toolkit";

// Crée un slice pour l'état "stockage"
const stockageSlice = createSlice({
  name: "stockage",  // Nom du slice
  initialState: {
    compteur: 0,     // Initialiser le compteur à 0
    visible: true,   // Initialiser la visibilité à true
  },
  reducers: {
    // Définir des reducers (actions qui modifient l'état)
    INCREMENTER_CINQ(state) {
      state.compteur += 5;  // Incrémente le compteur de 5
    },
    CHANGER_VISIBLE(state) {
      state.visible = !state.visible;  // Change la visibilité (true -> false, false -> true)
    },
  },
});

// Configurer le store en utilisant le slice
const store = configureStore({
  reducer: stockageSlice.reducer,  // Utiliser le reducer généré par createSlice
});

// Exporter les actions pour les utiliser dans les composants
export const compteurActions = stockageSlice.actions;

export default store;
