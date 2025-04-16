// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from '@google/genai';

//   async function main() {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
    const config = {
      responseMimeType: 'application/json',
    };
    const model = 'gemini-2.5-pro-preview-03-25';
    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: `Write a video script for a short 30 second video on the topic Motivation. The video should follow a  realistic style. Break the video down into multiple scenes. 
      For each scene, provide the following in JSON format:
    - imagePrompt: A visual prompt to generate a realistic AI image for the scene
    - contentText: The narration or content for that scene.
    
      Make the tone engaging and visually descriptive. Output only a JSON array of scenes`,
          },
        ],
      },
      {
        role: 'model',
        parts: [
          {
            text: `The user wants a 30-second video script about Motivation in a realistic style.
  The output needs to be a JSON array.
  Each element in the array represents a scene.
  Each scene object must contain:
  - \`imagePrompt\`: A realistic AI image generation prompt for the scene.
  - \`contentText\`: The narration/text for that scene.
  
  The total duration should be around 30 seconds. Let's aim for 3-5 scenes.
  The tone should be engaging and visually descriptive.
  
  **Scene Breakdown Plan:**
  
  *   **Scene 1 (5-7 seconds):** Start with a relatable struggle. Someone looking tired or uninspired. Set the scene of low motivation.
  *   **Scene 2 (7-10 seconds):** Introduce the idea of the "spark." A subtle shift, a moment of realization or a small action being taken.
  *   **Scene 3 (7-10 seconds):** Show the action building. Progress, effort being applied, overcoming a small obstacle. Focus on the *doing*.
  *   **Scene 4 (5-7 seconds):** End on a positive, forward-looking note. A sense of accomplishment or determination for the next step.
  
  **Constraint Checklist & Confidence Score:**
  
  1.  Write a video script: Yes
  2.  Short 30-second video: Yes (Plan estimates ~24-34 seconds)
  3.  Topic: Motivation: Yes
  4.  Realistic style: Yes (Prompts will focus on realism)
  5.  Breakdown into multiple scenes: Yes (4 scenes planned)
  6.  JSON format for each scene: Yes
  7.  \`imagePrompt\` field: Yes
  8.  \`contentText\` field: Yes
  9.  Engaging tone: Yes (Will use active language)
  10. Visually descriptive tone: Yes (Prompts and narration will aim for this)
  11. Output *only* a JSON array: Yes
  
  Confidence Score: 5/5
  
  **Mental Sandbox:**
  
  *   *Initial Idea:* Start with someone climbing a mountain. *Critique:* A bit cliché. Let's try something more everyday and relatable.
  *   *Revised Idea 1:* Someone staring blankly at a laptop screen. *Refinement:* Good start. Then show them closing distracting tabs, maybe taking a deep breath.
  *   *Revised Idea 2:* Someone struggling to get out of bed. *Refinement:* Also relatable. Then show them putting on running shoes.
  *   *Revised Idea 3:* An artist looking at a blank canvas. *Refinement:* Then show a single brush stroke.
  
  Let's go with a mix - starting with general low energy, then focusing on a small, achievable action.
  
  *   **Scene 1:** Close-up, slightly low angle, on a person's face (mid-30s, any gender/ethnicity) slumped over a desk, messy papers, empty coffee cup nearby. Soft, slightly dim morning light filtering through blinds. Expression is tired, uninspired. Realistic photo style.
  *   **Scene 2:** Slightly wider shot. The person takes a slow, deep breath, closes their eyes for a moment, then opens them with slightly more focus. They gently push aside the messy papers, revealing a clean notebook and pen. Natural light, focus sharpens on the notebook. Realistic photo style.
  *   **Scene 3:** Close-up on the hand picking up the pen and writing the first word or sketching the first line in the notebook. Focus on the deliberate action. The background is slightly blurred. Warm, focused lighting. Realistic photo style.
  *   **Scene 4:** Medium shot. The person is now sitting up straighter, looking at their notebook with a hint of a determined smile or focus. Sunlight is a bit brighter now. A sense of quiet progress. Realistic photo style.
  
  **Narration Timing:**
  
  *   Scene 1 (6s): "Feeling stuck? Like the energy just isn't there?"
  *   Scene 2 (8s): "Motivation isn't a lightning bolt. Sometimes, it starts small."
  *   Scene 3 (9s): "A single breath. One simple step. The choice to just *begin*."
  *   Scene 4 (7s): "Find your spark. Take that first step. The rest will follow."
  
  Total estimated time: 30 seconds. Looks good. Now, format as JSON.`,
          },
          {
            text: `\`\`\`json
  [
    {
      "imagePrompt": "Realistic photo, eye-level close-up of a person in their late 20s sitting at a cluttered desk, dimly lit by morning light through window blinds. They are slumped slightly, staring blankly past the camera, looking tired and uninspired. An empty mug sits nearby. Shallow depth of field.",
      "contentText": "(Sound of quiet room tone, maybe distant traffic) Feeling stuck? Like the energy just isn't there?"
    },
    {
      "imagePrompt": "Realistic photo, slightly wider shot. The same person now takes a slow, deep breath, eyes momentarily closed. Their hand gently pushes aside some clutter on the desk, revealing a clean notebook and pen. The light seems slightly brighter. Focus is on the notebook.",
      "contentText": "Motivation isn't some magic switch. Often, it's quieter. It starts with a choice."
    },
    {
      "imagePrompt": "Realistic photo, tight close-up on the person's hand picking up the pen and hovering just above the clean page of the notebook. Knuckles slightly tensed with intention. Warm, focused light on the hand and paper. Background softly blurred.",
      "contentText": "It's found in the *doing*. That tiny first action, no matter how small."
    },
    {
      "imagePrompt": "Realistic photo, medium shot. The person is now sitting up straighter, looking down at the notebook where they've just written a single word or drawn a simple line. A subtle hint of focus or determination in their expression. Natural light illuminates their face more clearly.",
      "contentText": "Take one step. Just one. Ignite that spark. You've got this."
    }
  ]
  \`\`\``,
          },
        ],
      },
      {
        role: 'user',
        parts: [
          {
            text: `INSERT_INPUT_HERE`,
          },
        ],
      },
    ];
  
//     const response = await ai.models.generateContentStream({
//       model,
//       config,
//       contents,
//     });
//     for await (const chunk of response) {
//       console.log(chunk.text);
//     }
//   }
//   main();

// "use strict";
// // To run this code you need to install the following dependencies:
// // npm install @google/genai mime
// // npm install -D @types/node
// var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
//     function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
//     return new (P || (P = Promise))(function (resolve, reject) {
//         function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
//         function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
//         function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
//         step((generator = generator.apply(thisArg, _arguments || [])).next());
//     });
// };
// var __asyncValues = (this && this.__asyncValues) || function (o) {
//     if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
//     var m = o[Symbol.asyncIterator], i;
//     return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
//     function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
//     function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// const genai_1 = require("@google/genai");
// function main() {
//     return __awaiter(this, void 0, void 0, function* () {
//         var _a, e_1, _b, _c;
//         const ai = new genai_1.GoogleGenAI({
//             apiKey: process.env.GEMINI_API_KEY,
//         });
//         const config = {
//             responseMimeType: 'text/plain',
//         };
//         const model = 'gemini-2.5-pro-preview-03-25';
//         const contents = [
//             {
//                 role: 'user',
//                 parts: [
//                     {
//                         text: `Write a video script for a short 30 second video on the topic Motivation. The video should follow a  realistic style. Break the video down into multiple scenes. 
//       For each scene, provide the following in JSON format:
//     - imagePrompt: A visual prompt to generate a realistic AI image for the scene
//     - contentText: The narration or content for that scene.
    
//       Make the tone engaging and visually descriptive. Output only a JSON array of scenes`,
//                     },
//                 ],
//             },
//             {
//                 role: 'model',
//                 parts: [
//                     {
//                         text: `The user wants a 30-second video script about Motivation in a realistic style.
//   The output needs to be a JSON array.
//   Each element in the array represents a scene.
//   Each scene object must contain:
//   - \`imagePrompt\`: A realistic AI image generation prompt for the scene.
//   - \`contentText\`: The narration/text for that scene.
  
//   The total duration should be around 30 seconds. Let's aim for 3-5 scenes.
//   The tone should be engaging and visually descriptive.
  
//   **Scene Breakdown Plan:**
  
//   *   **Scene 1 (5-7 seconds):** Start with a relatable struggle. Someone looking tired or uninspired. Set the scene of low motivation.
//   *   **Scene 2 (7-10 seconds):** Introduce the idea of the "spark." A subtle shift, a moment of realization or a small action being taken.
//   *   **Scene 3 (7-10 seconds):** Show the action building. Progress, effort being applied, overcoming a small obstacle. Focus on the *doing*.
//   *   **Scene 4 (5-7 seconds):** End on a positive, forward-looking note. A sense of accomplishment or determination for the next step.
  
//   **Constraint Checklist & Confidence Score:**
  
//   1.  Write a video script: Yes
//   2.  Short 30-second video: Yes (Plan estimates ~24-34 seconds)
//   3.  Topic: Motivation: Yes
//   4.  Realistic style: Yes (Prompts will focus on realism)
//   5.  Breakdown into multiple scenes: Yes (4 scenes planned)
//   6.  JSON format for each scene: Yes
//   7.  \`imagePrompt\` field: Yes
//   8.  \`contentText\` field: Yes
//   9.  Engaging tone: Yes (Will use active language)
//   10. Visually descriptive tone: Yes (Prompts and narration will aim for this)
//   11. Output *only* a JSON array: Yes
  
//   Confidence Score: 5/5
  
//   **Mental Sandbox:**
  
//   *   *Initial Idea:* Start with someone climbing a mountain. *Critique:* A bit cliché. Let's try something more everyday and relatable.
//   *   *Revised Idea 1:* Someone staring blankly at a laptop screen. *Refinement:* Good start. Then show them closing distracting tabs, maybe taking a deep breath.
//   *   *Revised Idea 2:* Someone struggling to get out of bed. *Refinement:* Also relatable. Then show them putting on running shoes.
//   *   *Revised Idea 3:* An artist looking at a blank canvas. *Refinement:* Then show a single brush stroke.
  
//   Let's go with a mix - starting with general low energy, then focusing on a small, achievable action.
  
//   *   **Scene 1:** Close-up, slightly low angle, on a person's face (mid-30s, any gender/ethnicity) slumped over a desk, messy papers, empty coffee cup nearby. Soft, slightly dim morning light filtering through blinds. Expression is tired, uninspired. Realistic photo style.
//   *   **Scene 2:** Slightly wider shot. The person takes a slow, deep breath, closes their eyes for a moment, then opens them with slightly more focus. They gently push aside the messy papers, revealing a clean notebook and pen. Natural light, focus sharpens on the notebook. Realistic photo style.
//   *   **Scene 3:** Close-up on the hand picking up the pen and writing the first word or sketching the first line in the notebook. Focus on the deliberate action. The background is slightly blurred. Warm, focused lighting. Realistic photo style.
//   *   **Scene 4:** Medium shot. The person is now sitting up straighter, looking at their notebook with a hint of a determined smile or focus. Sunlight is a bit brighter now. A sense of quiet progress. Realistic photo style.
  
//   **Narration Timing:**
  
//   *   Scene 1 (6s): "Feeling stuck? Like the energy just isn't there?"
//   *   Scene 2 (8s): "Motivation isn't a lightning bolt. Sometimes, it starts small."
//   *   Scene 3 (9s): "A single breath. One simple step. The choice to just *begin*."
//   *   Scene 4 (7s): "Find your spark. Take that first step. The rest will follow."
  
//   Total estimated time: 30 seconds. Looks good. Now, format as JSON.`,
//                     },
//                     {
//                         text: `\`\`\`json
//   [
//     {
//       "imagePrompt": "Realistic photo, eye-level close-up of a person in their late 20s sitting at a cluttered desk, dimly lit by morning light through window blinds. They are slumped slightly, staring blankly past the camera, looking tired and uninspired. An empty mug sits nearby. Shallow depth of field.",
//       "contentText": "(Sound of quiet room tone, maybe distant traffic) Feeling stuck? Like the energy just isn't there?"
//     },
//     {
//       "imagePrompt": "Realistic photo, slightly wider shot. The same person now takes a slow, deep breath, eyes momentarily closed. Their hand gently pushes aside some clutter on the desk, revealing a clean notebook and pen. The light seems slightly brighter. Focus is on the notebook.",
//       "contentText": "Motivation isn't some magic switch. Often, it's quieter. It starts with a choice."
//     },
//     {
//       "imagePrompt": "Realistic photo, tight close-up on the person's hand picking up the pen and hovering just above the clean page of the notebook. Knuckles slightly tensed with intention. Warm, focused light on the hand and paper. Background softly blurred.",
//       "contentText": "It's found in the *doing*. That tiny first action, no matter how small."
//     },
//     {
//       "imagePrompt": "Realistic photo, medium shot. The person is now sitting up straighter, looking down at the notebook where they've just written a single word or drawn a simple line. A subtle hint of focus or determination in their expression. Natural light illuminates their face more clearly.",
//       "contentText": "Take one step. Just one. Ignite that spark. You've got this."
//     }
//   ]
//   \`\`\``,
//                     },
//                 ],
//             },
//             {
//                 role: 'user',
//                 parts: [
//                     {
//                         text: `INSERT_INPUT_HERE`,
//                     },
//                 ],
//             },
//         ];
//         const response = yield ai.models.generateContentStream({
//             model,
//             config,
//             contents,
//         });
//         try {
//             for (var _d = true, response_1 = __asyncValues(response), response_1_1; response_1_1 = yield response_1.next(), _a = response_1_1.done, !_a; _d = true) {
//                 _c = response_1_1.value;
//                 _d = false;
//                 const chunk = _c;
//                 console.log(chunk.text);
//             }
//         }
//         catch (e_1_1) { e_1 = { error: e_1_1 }; }
//         finally {
//             try {
//                 if (!_d && !_a && (_b = response_1.return)) yield _b.call(response_1);
//             }
//             finally { if (e_1) throw e_1.error; }
//         }
//     });
// }
// main();
