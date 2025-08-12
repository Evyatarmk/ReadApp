import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTexts } from "../Contexts/TextsContext";

function TextDetails() {
  const { id } = useParams();
  const { getTextById } = useTexts();
  
  const [textData, setTextData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchText = async () => {
      setLoading(true);
      const data = await getTextById(id);
      setTextData(data);
      setLoading(false);
    };
    fetchText();
  }, [id, getTextById]);

  if (loading) {
    return <p>טוען נתונים...</p>;
  }

  if (!textData) {
    return <p>הטקסט לא נמצא.</p>;
  }

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h2>{textData.titleText}</h2>

      <p>
        <strong>טקסט להצגה:</strong> {textData.hebrewTextToShow}
      </p>
      <p>
        <strong>טקסט להקראה:</strong> {textData.hebrewTextToRead}
      </p>

      <h3>📖 מילון</h3>
      <pre style={{ background: "#f8f8f8", padding: 10 }}>
        {JSON.stringify(textData.dictionary, null, 2)}
      </pre>
    </div>
  );
}

export default TextDetails;
