## Build a Full-Featured AI Email Client with Next.js 14

This comprehensive guide walks you through creating a powerful email client application enhanced with artificial intelligence capabilities. Using Next.js 14 as our foundation, we'll construct a complete full-stack solution from scratch and deploy it to Vercel's hosting platform.

### What We'll Build

In this step-by-step tutorial, you'll learn how to develop:

- A modern email client with an elegant interface
- AI-powered features for email management and composition
- User authentication and account management
- Premium features gated behind a subscription system
- Secure payment processing using Stripe
- Webhook integration for real-time event handling

Whether you're an experienced developer or just starting your journey with Next.js, this project offers valuable insights into building production-ready applications with the latest web technologies.

Get ready to enhance your full-stack development skills as we create a sophisticated application that combines modern UI, artificial intelligence, and seamless payment processing! 🚀

# Technologies and Frameworks

- Next.js
- React
- TypeScript
- Tailwind CSS
- Clerk
- Prisma ORM
- PostgreSQL
- AWS SDK
- OpenAI API
- Stripe
- Axios
- Pinecone
- OpenAI Edge
- Neon Database Serverless
- @tanstack/react-query
- @clerk/nextjs
- clsx
- tailwind-merge

# Installation

Follow the steps below to install and setup the project:

1. **Clone the repository**

   Open your terminal and run the following command:

   ```bash
   git clone https://github.com/yashdubeyy/emailclient.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd emailclient
   ```

3. **Install Node.js**

   The project requires Node.js version 13.4.19 or later. You can download it from [here](https://nodejs.org/en/download/).

4. **Install the required dependencies**

   Run the following command to install all the required dependencies:

   ```bash
   npm install
   ```

   This will install all the dependencies listed in the `package.json` file, including Next.js, React, React DOM, Axios, Stripe, Tailwind CSS, and other specific dependencies such as "@aws-sdk/client-s3" and "@clerk/nextjs".

5. **Setup environment variables**

    Create a `.env` file in the root directory of your project and add the required environment variables. ( reviev .env.example to setup .env)

6. **Run the project**

    Now, you can run the project using the following command:

    ```bash
    npm run dev

      Or 

   npx next dev --port 3001
    ```

    Open [http://localhost:30001](http://localhost:30001) with your browser to see the result.


