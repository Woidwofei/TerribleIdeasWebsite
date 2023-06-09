async function getTerribleIdea() {
  const prompt = "Give me a terrible idea:";
  const apiKey = "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";
  const url = "https://api.openai.com/v1/engines/davinci-codex/completions";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer
"Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.8,
    }),
  });

  const data = await response.json();
  return data.choices[0].text.trim();
}

document.getElementById("terrible-idea-button").addEventListener("click", async () => {
  const idea = await getTerribleIdea();
  document.getElementById("terrible-idea-display").innerText = idea;
});
