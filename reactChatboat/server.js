const express = require("express");
const cors = require("cors");
const { OpenAIApi, Configuration } = require("openai"); // Ensure correct import
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3005;
const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error("OpenAI API key is missing.");
}

// Create a configuration object for the OpenAI API
const configuration = new Configuration({
  apiKey: apiKey, // Use the apiKey directly
});

// Create an instance of OpenAIApi
const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(express.json());

app.post("/chatbot", async (req, res) => {
  const { question } = req.body;
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: question },
      ],
      max_tokens: 300,
    });
    res.send(response.data.choices[0].message.content);
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    res.status(500).send("An error occurred while communicating with OpenAI.");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
