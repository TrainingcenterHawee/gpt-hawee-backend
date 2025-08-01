import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  const { user_input } = req.body;

  const response = await openai.responses.create({
    prompt: {
      id: "pmpt_687fc20204a881908446e39d9774e84405829effef0635e6",  // Prompt của Tre
      version: "8"
    },
    messages: [
      { role: "user", content: user_input }
    ]
  });

  const reply = response.choices?.[0]?.message?.content || "Không có phản hồi.";
  res.status(200).json({ reply });
}
