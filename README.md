# AI Product Recommendation System

This project is a simple AI-powered product recommendation system built using React.  
It demonstrates how to integrate an external AI API into a frontend application and use the AI’s response to filter and recommend products based on user preferences.

The goal of this project is to showcase clean frontend development, AI API integration, and safe handling of real-world API limitations.

---

## Features

- React-based single-page application
- Static product dataset rendered in the UI
- User input for natural-language preferences (e.g. "phone under $500")
- AI-powered recommendations constrained strictly to the given product list
- Graceful handling of API errors and rate limits
- Environment-variable-based API key handling (no secrets in code)

---

## Tech Stack

- React (Vite)
- JavaScript
- OpenAI API (Chat Completions)
- Fetch API

---

## Project Structure

.
├── src
│   ├── products.js
│   ├── services
│   │   └── aiService.js
│   ├── App.jsx
│   └── main.jsx
├── public
├── .env (local only, not committed)
├── package.json
├── vite.config.js
└── README.md

---

## How It Works

1. The user enters a preference in natural language.
2. The product list and user preference are sent to the AI API.
3. The AI is explicitly instructed to recommend only from the provided product list.
4. The response is parsed and used to filter products in the UI.
5. If the AI API fails or is rate-limited, the app falls back safely without crashing.

---

## Environment Setup

Create a `.env` file in the project root:

VITE_OPENAI_API_KEY=your_openai_api_key_here

Do not commit this file to GitHub.

---

## Running the Project Locally

1. Install dependencies:
   npm install

2. Start the development server:
   npm run dev

3. Open the app in the browser:
   http://localhost:5173

---

## Error Handling

- Missing API key: handled gracefully
- API rate limits or credit exhaustion: handled gracefully
- Invalid AI responses: safely ignored

The UI always remains functional.

---

## Notes

This project focuses on integration and correctness rather than UI complexity.  
API availability depends on OpenAI account limits and is outside the scope of the implementation.

---

## Status

Completed and ready for evaluation.
