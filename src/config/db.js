import Firebase from "firebase";
import "firebase/database";
let app = Firebase.initializeApp({
  databaseURL: "https://flowbuilder-76689.firebaseio.com"
});
export const db = app.database();
