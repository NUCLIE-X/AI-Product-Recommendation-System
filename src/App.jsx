import { useState } from "react";
import products from "./products";
import { getRecommendations } from "./services/aiService";

function App() {
  const [input, setInput] = useState("");
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRecommend = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setError("");

    try {
      const names = await getRecommendations(input, products);
      const filtered = products.filter(p => names.includes(p.name));
      setRecommended(filtered);
    } catch {
      setError("Failed to get recommendations");
      setRecommended([]);
    } finally {
      setLoading(false);
    }
  };

  const displayList = recommended.length ? recommended : products;

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>AI Product Recommendation System</h2>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="e.g. phone under $500"
        style={{ width: "100%", padding: 8 }}
      />

      <button onClick={handleRecommend} disabled={loading} style={{ marginTop: 10 }}>
        {loading ? "Loading..." : "Get Recommendations"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h3 style={{ marginTop: 20 }}>Products</h3>
      <ul>
        {displayList.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong> – ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
