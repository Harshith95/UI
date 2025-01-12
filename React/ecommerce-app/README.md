# High level overview of this application
# E-commerce Application

This project is a microservices-based e-commerce application built with modern technologies. It covers backend and frontend development, testing, and deployment using containerization and CI/CD tools.

## **Features**
1. **Backend**:
   - Microservices architecture.
   - RESTful APIs for authentication, product management, and order processing.
   - Secure user authentication using JWT.
   - Payment gateway integration with Stripe/PayPal.

2. **Frontend**:
   - Built with React and Vite for fast performance.
   - Material UI for a clean, responsive design.
   - State management with React Context API.

3. **DevOps**:
   - Docker for containerization.
   - Jenkins for CI/CD.
   - Nginx as a reverse proxy for serving the frontend.

---

## **System Requirements**
- **Java**: 17+
- **Node.js**: 16+
- **Docker**: 20.10+
- **Jenkins**: 2.346+

---

## **How to Run Locally**

### **Backend**
1. Navigate to the `backend/` folder.
2. Build the services:
   ```bash
   ./mvnw clean package
   
   ecommerce-backend/
   ├── src/
      ├── main/
         ├── java/
               └── com/
                  └── example/
                     └── ecommerce/
                           ├── controller/
                           ├── service/
                           ├── model/
                           ├── repository/
                           └── EcommerceBackendApplication.java
         ├── resources/
               ├── application.properties
               └── static/
   └── pom.xml


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### **Front End**
1. Navigate to the `React/` folder.
   ```bash
    npm create vite@latest ecommerce-app --template react
    cd ecommerce-app
    npm install
    npm run dev
    npm install @mui/material @emotion/react @emotion/styled  - Material UI
    npm install -D vitest @testing-library/react @testing-library/jest-dom @vitejs/plugin-react
    npm install axios react-router-dom  - Axios and Routing component

      frontend/
      src/
      ├── assets/                      # Static assets (images, icons, etc.)
      │   ├── laptop.png
      │   ├── smartphone.png
      │   └── headset.png
      ├── components/                  # Reusable components
      │   ├── Header.tsx
      │   └── ProductCard.tsx
      ├── contexts/                    # Contexts for global state management
      │   ├── CartContext.tsx
      ├── pages/                       # Page components
      │   ├── HomePage.tsx
      │   └── CartPage.tsx
      ├── types/                       # TypeScript type definitions
      │   └── product.ts
      ├── App.tsx                      # Main app component

Basic Features:
Homepage to list products.
Product details page.
Cart page with add/remove functionality.