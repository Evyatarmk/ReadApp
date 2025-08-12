import React, { useState, useEffect } from "react";
import { useTexts } from "../Contexts/TextsContext";
import { useParams } from "react-router-dom";

function EditTextPage() {
  const { id } = useParams();
  const { loading, updateText, getTextById } = useTexts();

  const [titleText, setTitleText] = useState("");
  const [hebrewTextToShow, setHebrewTextToShow] = useState("");
  const [hebrewTextToRead, setHebrewTextToRead] = useState("");
  const [dictionaryJson, setDictionaryJson] = useState("{}");

  useEffect(() => {
    const fetchText = async () => {
      const textData = await getTextById(id);
      if (textData) {
        setTitleText(textData.titleText || "");
        setHebrewTextToShow(textData.hebrewTextToShow || "");
        setHebrewTextToRead(textData.hebrewTextToRead || "");
        setDictionaryJson(JSON.stringify(textData.dictionary || {}, null, 2));
      }
    };
    fetchText();
  }, [id, getTextById]);

  const handleUpdate = async () => {
    let dictionary;
    try {
      dictionary = JSON.parse(dictionaryJson);
    } catch {
      alert("המילון אינו בפורמט JSON תקין");
      return;
    }

    await updateText(id, {
      titleText,
      hebrewTextToShow,
      hebrewTextToRead,
      dictionary,
    });

    alert("עודכן בהצלחה!");
  };

  if (loading) {
    return <p>טוען נתונים...</p>;
  }

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h2>✏ עריכת טקסט</h2>

      <label>כותרת:</label>
      <input
        value={titleText}
        onChange={(e) => setTitleText(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <label>טקסט להצגה:</label>
      <textarea
        value={hebrewTextToShow}
        onChange={(e) => setHebrewTextToShow(e.target.value)}
        rows={4}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <label>טקסט להקראה:</label>
      <textarea
        value={hebrewTextToRead}
        onChange={(e) => setHebrewTextToRead(e.target.value)}
        rows={4}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <label>מילון (JSON):</label>
      <textarea
        value={dictionaryJson}
        onChange={(e) => setDictionaryJson(e.target.value)}
        rows={6}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <button onClick={handleUpdate}>עדכן</button>
    </div>
  );
}

export default EditTextPage;
