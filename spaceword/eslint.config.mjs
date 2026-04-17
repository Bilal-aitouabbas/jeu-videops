import globals from "globals"; //fichier fait avec la commande "npm init @eslint/config@latest" en remplissant le questionnaire 
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
]);
