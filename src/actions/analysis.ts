'use server';

import {
  getPersonalizedRiskAssessment,
  PersonalizedRiskAssessmentInput,
} from '@/ai/flows/personalized-risk-assessment';
import {
  generatePortfolioAnalysisReport,
  GeneratePortfolioAnalysisReportInput,
} from '@/ai/flows/generate-portfolio-analysis-report';

export async function performRiskAssessment(
  input: PersonalizedRiskAssessmentInput
) {
  try {
    const result = await getPersonalizedRiskAssessment(input);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to perform risk assessment.' };
  }
}

export async function generateAnalysisReport(
  input: GeneratePortfolioAnalysisReportInput
) {
  try {
    const result = await generatePortfolioAnalysisReport(input);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to generate analysis report.' };
  }
}
