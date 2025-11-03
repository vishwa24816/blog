
'use client';

import AppHeader from '@/components/layout/app-header';
import RiskAssessmentForm from '@/components/risk/risk-assessment-form';

export default function RiskAssessmentPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AppHeader title="Risk Assessment" />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">AI-Powered Risk Analysis</h1>
          <p className="text-muted-foreground">
            Get a personalized risk assessment for your investment portfolio
            using our advanced AI tool.
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6">
          <RiskAssessmentForm />
        </div>
      </main>
    </div>
  );
}
