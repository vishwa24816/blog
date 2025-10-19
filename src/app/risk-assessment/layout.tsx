import AppSidebar from '@/components/layout/app-sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export default function RiskAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex min-h-screen w-full flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
