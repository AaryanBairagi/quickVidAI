import { getVideoScript } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    console.log("Prompt received:", prompt);

    const responseText = await getVideoScript(prompt);
    console.log("Response from Gemini:", responseText);

    return NextResponse.json({ result: responseText });
  } catch (error) {
    console.error("Error in get-video-script route:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" });
  }
}

// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { NextResponse } from "next/server";

// // Initialize Gemini once
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-pro" });
// const chatSession = model.startChat();

// export async function POST(req) {
//   try {
//     const { prompt } = await req.json();
//     console.log("Prompt received:", prompt);

//     // Get response from Gemini
//     const result = await chatSession.sendMessage(prompt);
//     const response = await result.response;
//     const text = await response.text();
//     console.log("Raw response:", text);

//     // Try parsing JSON if it's in array form
//     let parsed;
//     try {
//       parsed = JSON.parse(text);
//     } catch (err) {
//       console.warn("Response is not valid JSON, returning raw text.");
//       parsed = text;
//     }

//     return NextResponse.json({ result: parsed });
//   } catch (error) {
//     console.error("Error in get-video-script route:", error);
//     return NextResponse.json({ error: error.message || "Internal Server Error" });
//   }
// }
