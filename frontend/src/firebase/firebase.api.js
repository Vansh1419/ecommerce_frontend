import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase.config";

export const registerUser = async (uid, user) => {
  try {
    const userDoc = doc(db, "users", uid);
    const storedUser = await setDoc(userDoc, { ...user, uid });
    return storedUser;
  } catch (error) {
    return new Error(error.message);
  }
};
