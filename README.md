# Connect Grid: Digital Marketing Agency
[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/HhmedHesham/generated-app-20250928-223112)
Connect Grid is a visually stunning, professional marketing agency website designed to showcase digital marketing services, build brand credibility, and generate leads. The application is a multi-page, multi-lingual (English & Arabic with RTL support) single-page application (SPA) built with React and TypeScript. It features a clean, minimalist design aesthetic, leveraging a sophisticated blue color palette with gradient accents and fluid animations powered by Framer Motion.
## ✨ Key Features
-   **Multi-Lingual Support**: Full internationalization for English (default) and Arabic (RTL).
-   **Dynamic Theming**: Seamlessly switch between light and dark modes.
-   **Fully Responsive**: A mobile-first design that looks great on all devices.
-   **Modern Animations**: Smooth and engaging user interactions powered by Framer Motion.
-   **SEO Optimized**: Comprehensive SEO implementation using React Helmet Async for meta tags and schema.
-   **Functional Contact Form**: Integrated with EmailJS for lead generation.
-   **Component-Based Architecture**: Built with a scalable and maintainable structure using Shadcn UI.
## 🚀 Technology Stack
-   **Framework**: React, Vite
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **UI Components**: Shadcn UI
-   **Animations**: Framer Motion
-   **Routing**: React Router DOM
-   **State Management**: Zustand
-   **Internationalization**: React i18next
-   **Form Handling**: React Hook Form with Zod for validation
-   **Icons**: Lucide React
-   **Deployment**: Cloudflare Workers
## 🏁 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites
-   [Node.js](https://nodejs.org/en/) (v18 or later)
-   [Bun](https://bun.sh/) package manager
### Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/connectgrid_agency_website.git
    cd connectgrid_agency_website
    ```
2.  **Install dependencies:**
    ```bash
    bun install
    ```
3.  **Environment Variables:**
    Create a `.env` file in the root of the project and add your environment-specific keys. This is necessary for services like EmailJS.
    ```
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```
## 💻 Development
To start the local development server, run the following command:
```bash
bun run dev
```
This will start the application on `http://localhost:3000` (or the next available port). The server supports hot-reloading.
### Available Scripts
-   `bun run dev`: Starts the development server.
-   `bun run build`: Builds the application for production.
-   `bun run lint`: Lints the codebase using ESLint.
-   `bun run deploy`: Deploys the application to Cloudflare Workers.
## 📦 Building for Production
To create a production-ready build of the application, run:
```bash
bun run build
```
This command bundles the application and outputs the static files to the `dist` directory, ready for deployment.
## ☁️ Deployment
This project is configured for seamless deployment to **Cloudflare Pages**.
### Deploy with a Click
[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/HhmedHesham/generated-app-20250928-223112)
### Manual Deployment with Wrangler
1.  **Login to Cloudflare:**
    If you haven't already, authenticate with your Cloudflare account.
    ```bash
    bunx wrangler login
    ```
2.  **Deploy the application:**
    Run the deploy script from the root of your project.
    ```bash
    bun run deploy
    ```
Wrangler will build and deploy your application. After deployment, you will receive a URL where your site is live.
## 📄 License
This project is licensed under the MIT License. See the `LICENSE` file for details.
