'use server';

/**
 * @fileOverview An AI agent to analyze a user's portfolio and provide a risk score and personalized insights.
 *
 * - getPersonalizedRiskAssessment - A function that handles the risk assessment process.
 * - PersonalizedRiskAssessmentInput - The input type for the getPersonalizedRiskAssessment function.
 * - PersonalizedRiskAssessmentOutput - The return type for the getPersonalizedRiskAssessment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRiskAssessmentInputSchema = z.object({
  portfolioData: z
    .string()
    .describe(
      'The portfolio data, including holdings, asset allocations, and historical performance.'
    ),
  riskTolerance: z
    .string()
    .describe(
      'The user risk tolerance, including if they are aggressive, moderate, or conservative.'
    ),
  investmentHorizon: z
    .string()
    .describe(
      'The investment time horizon, including if they are short, medium, or long term.'
    ),
});
export type PersonalizedRiskAssessmentInput = z.infer<
  typeof PersonalizedRiskAssessmentInputSchema
>;

const PersonalizedRiskAssessmentOutputSchema = z.object({
  riskScore: z
    .number()
    .describe('A risk score from 0 to 100, with higher scores indicating higher risk.'),
  riskLevel: z
    .string()
    .describe(
      'The risk level, including if the portfolio is low, medium, or high risk.'
    ),
  insights: z
    .string()
    .describe(
      'Personalized insights and recommendations for managing portfolio risk.'
    ),
});
export type PersonalizedRiskAssessmentOutput = z.infer<
  typeof PersonalizedRiskAssessmentOutputSchema
>;

export async function getPersonalizedRiskAssessment(
  input: PersonalizedRiskAssessmentInput
): Promise<PersonalizedRiskAssessmentOutput> {
  return personalizedRiskAssessmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRiskAssessmentPrompt',
  input: {schema: PersonalizedRiskAssessmentInputSchema},
  output: {schema: PersonalizedRiskAssessmentOutputSchema},
  prompt: `You are an AI financial analyst specializing in risk assessment.

You will analyze the user's portfolio and provide a risk score and personalized insights.

Use the following information about the user's portfolio:

Portfolio Data: {{{portfolioData}}}
Risk Tolerance: {{{riskTolerance}}}
Investment Horizon: {{{investmentHorizon}}}

Based on this information, generate a risk score from 0 to 100, and determine the risk level of the portfolio. Also, provide personalized insights and recommendations for managing portfolio risk.

Output in JSON format. Do not include any additional text other than the JSON. Ensure the JSON is parseable.
`, config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  }
});

const personalizedRiskAssessmentFlow = ai.defineFlow(
  {
    name: 'personalizedRiskAssessmentFlow',
    inputSchema: PersonalizedRiskAssessmentInputSchema,
    outputSchema: PersonalizedRiskAssessmentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
