import { Link } from 'react-router-dom';
import { useTexts } from '../Contexts/TextsContext';

function Texts() {
   const { texts, loading } = useTexts();
  if (loading) {
    return <p>טוען נתונים...</p>;
  }

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
      <h2>כל הטקסטים</h2>
      {texts.length === 0 ? (
        <p>אין נתונים להצגה.</p>
      ) : (
        texts.map((item) => (
         <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: 15,
              marginBottom: 15,
              borderRadius: 8
            }}
          >
            <h3>{item.titleText}</h3>
            <Link to={`/text/${item.id}`}>📖 מעבר לדף המלא</Link>
            <Link to={`/edit/${item.id}`}>✏ ערוך</Link>

          </div>
        ))
      )}
    </div>
  );
}

export default Texts;