// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview Generates a portfolio analysis report based on the current performance of a simulated portfolio.
 *
 * - generatePortfolioAnalysisReport - A function that generates the portfolio analysis report.
 * - GeneratePortfolioAnalysisReportInput - The input type for the generatePortfolioAnalysisReport function.
 * - GeneratePortfolioAnalysisReportOutput - The return type for the generatePortfolioAnalysisReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePortfolioAnalysisReportInputSchema = z.object({
  portfolioData: z.string().describe('The current performance data of the simulated portfolio.'),
});
export type GeneratePortfolioAnalysisReportInput = z.infer<typeof GeneratePortfolioAnalysisReportInputSchema>;

const GeneratePortfolioAnalysisReportOutputSchema = z.object({
  report: z.string().describe('The generated portfolio analysis report.'),
});
export type GeneratePortfolioAnalysisReportOutput = z.infer<typeof GeneratePortfolioAnalysisReportOutputSchema>;

export async function generatePortfolioAnalysisReport(input: GeneratePortfolioAnalysisReportInput): Promise<GeneratePortfolioAnalysisReportOutput> {
  return generatePortfolioAnalysisReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioAnalysisReportPrompt',
  input: {schema: GeneratePortfolioAnalysisReportInputSchema},
  output: {schema: GeneratePortfolioAnalysisReportOutputSchema},
  prompt: `You are an AI portfolio analyst. Analyze the current performance of the simulated portfolio and generate a report.

Portfolio Data: {{{portfolioData}}}

Report:`,
});

const generatePortfolioAnalysisReportFlow = ai.defineFlow(
  {
    name: 'generatePortfolioAnalysisReportFlow',
    inputSchema: GeneratePortfolioAnalysisReportInputSchema,
    outputSchema: GeneratePortfolioAnalysisReportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
