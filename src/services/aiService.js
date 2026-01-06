export async function getRecommendations(userInput, products) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    console.error("Missing OpenAI API key");
    return [];
  }

  const prompt =
    "You are a product recommendation engine.\n" +
    "You must recommend products ONLY from the list provided.\n" +
    "Do NOT suggest products outside the list.\n" +
    "Do NOT explain your reasoning.\n\n" +
    'User preference:\n"' + userInput + '"\n\n' +
    "Available products:\n" +
    JSON.stringify(products) +
    "\n\n" +
    "Return the result strictly as a JSON array of product names.\n" +
    "If no product matches, return an empty array.";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + apiKey
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0
      })
    });

    const data = await response.json();

    if (!response.ok || !data.choices || !data.choices[0]) {
      console.error("OpenAI error:", data);
      return [];
    }

    return JSON.parse(data.choices[0].message.content);
  } catch (err) {
    console.error("AI request failed:", err);
    return [];
  }
}
