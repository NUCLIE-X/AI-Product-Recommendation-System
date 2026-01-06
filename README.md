# AI Product Recommendation System

A simple React-based AI product recommendation system demonstrating safe and constrained AI API integration with clean frontend architecture.

---

## Project Overview

| Item | Description |
|----|------------|
| Frontend | React (Vite) |
| AI Integration | OpenAI API (Chat Completions) |
| Input | Natural language user preference |
| Output | Filtered product recommendations |
| Error Handling | Graceful fallback on API failure |

---

## Features

| Feature | Status |
|------|--------|
| Product list rendering | ✅ |
| User preference input | ✅ |
| AI-based recommendations | ✅ |
| Dataset-constrained AI output | ✅ |
| API failure handling | ✅ |
| Environment-based secrets | ✅ |

---

## Project Structure

| Path | Purpose |
|----|--------|
| `src/App.jsx` | Main UI logic |
| `src/main.jsx` | React entry point |
| `src/products.js` | Static product dataset |
| `src/services/aiService.js` | AI API integration |
| `public/` | Static assets |
| `index.html` | HTML entry |
| `vite.config.js` | Vite configuration |

---

## How It Works

| Step | Description |
|----|------------|
| 1 | User enters a preference (e.g. "phone under $500") |
| 2 | Preference + product list sent to AI |
| 3 | AI constrained to recommend only from dataset |
| 4 | Response parsed and filtered |
| 5 | UI updates with recommendations |

---

## Environment Setup

| Variable | Purpose |
|-------|--------|
| `VITE_OPENAI_API_KEY` | OpenAI API key (local only) |

> The `.env` file is **not committed** to the repository.

---

## Running Locally

| Command | Purpose |
|------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |

---

## Notes

- API rate limits depend on the OpenAI account
- The application handles API failures gracefully
- UI remains functional even without AI availability

---

## Status

✔ Completed  
✔ Ready for evaluation  
✔ Manual upload verified
