# Amazon UI Clone

A high-fidelity frontend clone of the Amazon e-commerce platform, built to demonstrate advanced React concepts, component architecture, and responsive design.


##  Features

- **Authentication System**: Full login and signup flow with mock authentication and state persistence using `localStorage`.
- **E-commerce Core**:
  - **Product Browsing**: Responsive grid layout for products.
  - **Product Details**: Dynamic routing for individual product pages (`/product/:id`).
  - **Shopping Cart**: Add/remove items, update quantities, and real-time subtotal calculation.
  - **Checkout Process**: Mock checkout form with address input and order summary.
- **Responsive Design**: Fully responsive layout optimized for Desktop, Tablet, and Mobile devices.
- **Global State Management**: Powered by React Context API and `useReducer` for robust state handling (Cart & Auth).

##  Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (v18+)
- **Build Tool**: [Vite](https://vitejs.dev/) for lightning-fast HMR and build performance.
- **Routing**: [React Router DOM](https://reactrouter.com/) (v6) for client-side navigation.
- **Styling**: Vanilla CSS3 with CSS Variables for consistent theming and performance.
- **Icons**: [Lucide React](https://lucide.dev/) for modern, lightweight icons.

##  Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/amazon-clone.git
   cd Amazon
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   The app will launch at `http://localhost:5173`.

##  Project Structure

```
src/
├── components/      # Reusable UI components (Header, ProductCard, etc.)
├── context/         # Global State Providers (AuthContext, CartContext)
├── pages/           # Page components (Home, Login, Cart, ProductDetails, Checkout)
├── utils/           # Helper functions and mock data
├── App.jsx          # Main Router configuration
├── main.jsx         # Application entry point
└── index.css        # Global styles and variables
```

##  Accounts (Mock)

You can create any new account using the Sign-Up page. Data is persisted locally in your browser, so you can refresh the page and stay logged in.

## Preview
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b20247c8-2780-4f25-bd93-87e57f0ff4c5" />


