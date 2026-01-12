# BeefGuide: Smart Shopper 🥩

An interactive, bilingual web application designed to help shoppers understand different cuts of beef, their characteristics, and how best to cook them. Features an AI-powered chef that generates custom recipes on the fly using Google's Gemini API.

![BeefGuide Banner](public/vite.svg)

## ✨ Features

- **Interactive Cow Map**: Visually select different parts of the cow to learn about specific cuts.
- **Detailed Profiles**: View bilingual (English/Chinese) descriptions, price levels, and common dishes for every cut.
- **Smart Metrics**: At-a-glance visualization of tenderness, fat content, and cooking difficulty.
- **AI Chef**: Generate custom Western or Asian style recipes for any selected cut using the Gemini 3 Flash model.
- **Responsive Design**: Built with Tailwind CSS to work seamlessly on mobile and desktop.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Lucide React (Icons)
- **AI Integration**: Google GenAI SDK (`@google/genai`)
- **Build & Deploy**: GitHub Actions, GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- A Google Gemini API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/beef-guide.git
   cd beef-guide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your Gemini API Key:
   ```env
   API_KEY=your_google_gemini_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📦 Deployment

This project is configured to automatically deploy to **GitHub Pages** using GitHub Actions.

1. Go to your repository **Settings** > **Secrets and variables** > **Actions**.
2. Create a `New repository secret` named `API_KEY` and paste your Google Gemini API key.
3. Push changes to the `main` branch.
4. The workflow in `.github/workflows/deploy.yml` will build and deploy the site.

## 📝 License

This project is licensed under the MIT License.
