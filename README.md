# **AI-Driven Personal Finance Advisor - FinanceMat**

This project demonstrates building **FinanceMat**, an AI-powered personal finance advisor application designed to help users manage their budgets, track expenses, and receive smart financial advice. The app is built using **Next.js**, **TailwindCSS**, **Shard CN**, and integrated with **OpenAI API** for intelligent recommendations.

---

## **Features**

- **AI-Powered Financial Insights**:
  - Provides real-time, personalized financial advice based on user data.
  - Integrates OpenAI's GPT-4 for advanced AI-driven analytics.

- **Budget Management**:
  - Create, manage, and track budgets with custom categories and emojis.
  - Visual charts and summaries of expenses.

- **Expense Tracking**:
  - Log and view expense details with dynamic categorization.
  - Real-time updates to budgets and expense lists.

- **User Authentication**:
  - Secure sign-in and sign-up functionality powered by **Clerk**.

- **Interactive Dashboard**:
  - Centralized hub displaying budgets, expenses, income streams, and financial advice.

---

## **Tech Stack**

- **Frontend**: Next.js 13 with TailwindCSS and Shard CN for responsive UI.
- **Backend**: Prisma ORM with PostgreSQL for robust database management.
- **Authentication**: Clerk for user authentication and session management.
- **AI Integration**: OpenAI API for generating financial advice.
- **Charts**: Recharts for interactive data visualization.

---

## **Directory Structure**

```bash
├── app
│   ├── components
│   ├── pages
│   ├── styles
│   ├── utils
├── prisma
│   └── schema.prisma
├── public
│   └── assets
├── constants
├── types
├── README.md
└── package.json
```

---

## **Setup and Installation**

### **Prerequisites**

1. **Node.js**: Version 16 or above.
2. **PostgreSQL**: Database for storing user and app data.
3. **API Keys**:
   - OpenAI API Key: Obtain from [OpenAI](https://platform.openai.com/).
   - Clerk API Key: Obtain from [Clerk](https://clerk.dev).

### **Steps**

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/financemat.git
   cd financemat
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory and include:

     ```env
     NEXT_PUBLIC_CLERK_API_KEY=your_clerk_api_key
     OPENAI_API_KEY=your_openai_api_key
     DATABASE_URL=your_postgres_connection_string
     ```

4. Initialize Prisma:

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. Run the application:

   ```bash
   npm run dev
   ```

6. Access the app at `http://localhost:3000`.

---

## **How It Works**

### **Core Workflow**

1. **Budget and Expense Management**:
   - Users create budgets and track expenses under categories.
   - Budgets and expenses are stored in PostgreSQL via Prisma ORM.

2. **AI Financial Advice**:
   - OpenAI analyzes budget and expense data to provide actionable insights.

3. **Interactive Charts**:
   - Recharts visualize user spending patterns and budget allocations.

4. **Authentication**:
   - Secure sign-in and session handling via Clerk.

---

## **Deployment**

1. **Build for Production**:

   ```bash
   npm run build
   ```

2. **Deploy**:
   - Host on Vercel, AWS, or another platform.
   - Configure `.env` for the production environment.

---

## **Future Enhancements**

- Introduce multi-currency support.
- Add advanced analytics for better financial forecasting.
- Implement a subscription-based model for premium features.

---

## **Contributing**

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---
