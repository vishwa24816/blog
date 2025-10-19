import AppHeader from '@/components/layout/app-header';
import RiskAssessmentForm from '@/components/risk/risk-assessment-form';

export default function RiskAssessmentPage() {
  return (
    <>
      <AppHeader title="AI Risk Assessment" />
      <main className="flex-1 p-4 md:p-8">
        <RiskAssessmentForm />
      </main>
    </>
  );
}
