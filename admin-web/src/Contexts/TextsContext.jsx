import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, setDoc,doc} from "firebase/firestore";

const TextsContext = createContext();

export function TextsProvider({ children }) {
  const [texts, setTexts] = useState([]);
  const [loading, setLoading] = useState(true);
const getTextById=(id)=>{
  return texts.find((t) => t.id === id);

}
  const fetchTexts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "texts"));
      const textsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTexts(textsData);
    } catch (error) {
      console.error("שגיאה בשליפת הטקסטים:", error);
    } finally {
      setLoading(false);
    }
  };
 const addText = async (id, data) => {
    await setDoc(doc(db, "texts", id), data);
    await fetchTexts();
  };

  const updateText = async (id, data) => {
    await setDoc(doc(db, "texts", id), data, { merge: true });
    await fetchTexts();
  };
  useEffect(() => {
    fetchTexts();
  }, []);

  return (
    <TextsContext.Provider value={{ texts, loading, fetchTexts ,getTextById,addText,updateText}}>
      {children}
    </TextsContext.Provider>
  );
}

export function useTexts() {
  return useContext(TextsContext);
}
