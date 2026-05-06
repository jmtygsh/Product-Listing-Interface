# Product Listing Interface

A clean, responsive e-commerce product listing interface built with Vanilla JavaScript, HTML, and CSS. It dynamically fetches product data from a public API and displays it in a modern grid layout.

## Features

- **Dynamic Data Fetching**: Retrieves random product data asynchronously from [FreeAPI](https://api.freeapi.app/api/v1/public/randomproducts).
- **Responsive Grid Layout**: Utilizes CSS Grid to ensure the product cards adapt perfectly to any screen size (desktop, tablet, and mobile).
- **Modern UI Design**: Features a clean card-based design with hover effects, discount badges, and responsive typography.
- **Light/Dark Mode Support**: Automatically adapts to the user's system preferences using CSS `@media (prefers-color-scheme: dark)`.
- **Vanilla JavaScript**: Built without heavy frontend frameworks, relying entirely on modern ES6+ features (Modules, Async/Await, Template Literals).

## Tech Stack

- **HTML5**
- **CSS3** (Variables, Flexbox, Grid)
- **Vanilla JavaScript** (DOM Manipulation, Fetch API)
- **Vite** (Next Generation Frontend Tooling)

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd "Product Listing Interface"
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

### Development

To start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open the provided local URL (usually `http://localhost:5173/` or similar) in your browser to view the application.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The compiled assets will be generated in the `dist` folder, ready to be deployed to any static hosting service.

## Project Structure

- `index.html`: The main HTML entry point.
- `src/main.js`: Contains the core logic for fetching data, generating HTML dynamically, and rendering the product grid.
- `src/data.js`: Handles the API request to fetch the product data.
- `src/style.css`: Contains all the styling rules, including CSS variables for theming and responsive media queries.
