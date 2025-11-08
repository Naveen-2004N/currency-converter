# React Currency Converter

This is a web application that provides real-time currency conversion. It is built using React and styled with Tailwind CSS. The project's core logic is centered around a custom React hook that fetches live exchange rates from an external API, demonstrating a clean and modular approach to handling asynchronous data and state in React.

![Screenshot of the currency converter application](Screenshot%202025-11-09%20001348.png)

## ✨ Features

* **Real-time Exchange Rates:** Fetches up-to-date conversion rates from the [Currency API](https://github.com/fawazahmed0/currency-api).
* **Dynamic Currency Selection:** Automatically populates "From" and "To" currency dropdowns based on the data retrieved from the API.
* **Swap Currencies:** A dedicated "swap" button allows the user to instantly interchange the "From" and "To" currency selections and their corresponding amounts.
* **Reusable Components:** Built with a modular `InputBox` component, making the UI clean and manageable.
* **Custom Hook:** Encapsulates all data-fetching logic within a custom `useCurrencyInfo` hook for better separation of concerns.
* **Modern Styling:** A responsive and visually appealing interface styled with Tailwind CSS, featuring a backdrop blur effect.
* **Accessibility:** Uses the `useId` hook to connect labels and inputs for better screen reader support.

## 🛠️ Tech Stack

* **Framework:** [React 19](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Linting:** [ESLint](https://eslint.org/)
* **API:** [Fawaz Ahmed's Currency API (Latest)](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need [Node.js](https://nodejs.org/) (version 18 or newer) and `npm` installed on your computer.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/01customHook.git](https://github.com/your-username/01customHook.git)
    cd 01customHook
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or the next available port).

## 📂 Project Structure

The project follows a standard Vite + React structure, with key logic organized into `components` and `Hooks`.
