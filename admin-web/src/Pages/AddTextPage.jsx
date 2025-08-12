import React, { useState } from "react";
import { useTexts } from "../Contexts/TextsContext";
import { v4 as uuidv4 } from "uuid";

function AddTextPage() {
  const { addText } = useTexts();
  const [titleText, setTitleText] = useState("");
  const [hebrewTextToShow, setHebrewTextToShow] = useState("");
  const [hebrewTextToRead, setHebrewTextToRead] = useState("");
  const [dictionaryJson, setDictionaryJson] = useState("{}");

  const handleAdd = async () => {
    let dictionary;
    try {
      dictionary = JSON.parse(dictionaryJson);
    } catch {
      alert("המילון אינו בפורמט JSON תקין");
      return;
    }

    const newId = uuidv4(); // מייצר ID אוטומטי

    await addText(newId, {
      titleText,
      hebrewTextToShow,
      hebrewTextToRead,
      dictionary,
    });

    alert("הטקסט נוסף בהצלחה!");
    setTitleText("");
    setHebrewTextToShow("");
    setHebrewTextToRead("");
    setDictionaryJson("{}");
  };

  return (
    <div style={{
      padding: 20,
      maxWidth: 700,
      margin: "0 auto",
      background: "#fefefe",
      borderRadius: 12,
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      direction: "rtl"
    }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>➕ הוספת טקסט חדש</h2>

      <label style={{ fontWeight: "bold" }}>כותרת:</label>
      <input
        value={titleText}
        onChange={(e) => setTitleText(e.target.value)}
        style={{
          width: "100%",
          padding: 8,
          marginBottom: 15,
          borderRadius: 6,
          border: "1px solid #ccc"
        }}
      />

      <label style={{ fontWeight: "bold" }}>טקסט להצגה:</label>
      <textarea
        value={hebrewTextToShow}
        onChange={(e) => setHebrewTextToShow(e.target.value)}
        style={{
          width: "100%",
          padding: 8,
          marginBottom: 15,
          borderRadius: 6,
          border: "1px solid #ccc"
        }}
        rows={4}
      />

      <label style={{ fontWeight: "bold" }}>טקסט להקראה:</label>
      <textarea
        value={hebrewTextToRead}
        onChange={(e) => setHebrewTextToRead(e.target.value)}
        style={{
          width: "100%",
          padding: 8,
          marginBottom: 15,
          borderRadius: 6,
          border: "1px solid #ccc"
        }}
        rows={4}
      />

      <label style={{ fontWeight: "bold" }}>מילון (JSON):</label>
      <textarea
        value={dictionaryJson}
        onChange={(e) => setDictionaryJson(e.target.value)}
        style={{
          width: "100%",
          padding: 8,
          marginBottom: 20,
          borderRadius: 6,
          border: "1px solid #ccc",
          fontFamily: "monospace"
        }}
        rows={6}
      />

      <button
        onClick={handleAdd}
        style={{
          width: "100%",
          padding: 12,
          border: "none",
          borderRadius: 6,
          background: "#4CAF50",
          color: "#fff",
          fontSize: 16,
          cursor: "pointer"
        }}
      >
        שמור
      </button>
    </div>
  );
}

export default AddTextPage;
