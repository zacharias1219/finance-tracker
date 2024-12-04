// utils/getFinancialAdvice.js
import OpenAI from "openai";

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

// Function to fetch user-specific data (mocked for this example)

// Function to generate personalized financial advice
interface FinancialData {
    totalBudget: number;
    totalIncome: number;
    totalSpend: number;
}

interface ChatCompletion {
    choices: {
        message: {
            content: string | null;
        };
    }[];
}

const getFinancialAdvice = async (
    totalBudget: FinancialData['totalBudget'],
    totalIncome: FinancialData['totalIncome'],
    totalSpend: FinancialData['totalSpend']
): Promise<string> => {
    console.log(totalBudget, totalIncome, totalSpend);
    try {
        const userPrompt = `
            Based on the following financial data:
            - Total Budget: ${totalBudget} USD 
            - Expenses: ${totalSpend} USD 
            - Incomes: ${totalIncome} USD
            Provide detailed financial advice in 2 sentence to help the user manage their finances more effectively.
        `;

        // Send the prompt to the OpenAI API
        const chatCompletion: ChatCompletion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: userPrompt }],
        });

        // Process and return the response
        const advice = chatCompletion.choices[0].message.content;

        console.log(advice);
        return advice ?? "No advice available at this moment.";
    } catch (error) {
        console.error("Error fetching financial advice:", error);
        return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
    }
};

export default getFinancialAdvice;