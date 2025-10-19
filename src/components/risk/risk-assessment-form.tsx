'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, ShieldCheck, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { performRiskAssessment } from '@/actions/analysis';
import type { PersonalizedRiskAssessmentOutput } from '@/ai/flows/personalized-risk-assessment';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

const formSchema = z.object({
  portfolioData: z.string().min(10, 'Please provide more detail about your portfolio.'),
  riskTolerance: z.enum(['conservative', 'moderate', 'aggressive']),
  investmentHorizon: z.enum(['short-term', 'medium-term', 'long-term']),
});

const defaultPortfolio = `My portfolio consists of:
- 40% in large-cap tech stocks (e.g., AAPL, MSFT)
- 30% in a diversified S&P 500 ETF
- 15% in international stocks
- 10% in corporate bonds
- 5% in cash and equivalents`;

export default function RiskAssessmentForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedRiskAssessmentOutput | null>(
    null
  );
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      portfolioData: defaultPortfolio,
      riskTolerance: 'moderate',
      investmentHorizon: 'long-term',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    const response = await performRiskAssessment(values);
    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: response.error || 'An unknown error occurred.',
      });
    }
    setIsLoading(false);
  }

  const getRiskLevelBadgeVariant = (
    riskLevel: string
  ): 'default' | 'secondary' | 'destructive' => {
    switch (riskLevel.toLowerCase()) {
      case 'low':
        return 'default';
      case 'medium':
        return 'secondary';
      case 'high':
        return 'destructive';
      default:
        return 'default';
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="portfolioData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portfolio Data</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your portfolio..."
                        className="min-h-[150px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Describe your portfolio holdings, asset allocations, and
                      historical performance.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="riskTolerance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Risk Tolerance</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your risk tolerance" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="conservative">Conservative</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="aggressive">Aggressive</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="investmentHorizon"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Investment Horizon</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your investment horizon" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="short-term">Short-term</SelectItem>
                          <SelectItem value="medium-term">Medium-term</SelectItem>
                          <SelectItem value="long-term">Long-term</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Assess My Risk
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="flex flex-col">
        <CardContent className="flex flex-1 flex-col items-center justify-center p-6 text-center">
          {isLoading ? (
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="text-muted-foreground">AI is analyzing...</p>
            </div>
          ) : result ? (
            <div className="w-full space-y-4 text-left">
              <div>
                <h3 className="font-headline text-lg font-semibold">
                  Risk Score
                </h3>
                <div className="flex items-baseline gap-2">
                  <p className="text-5xl font-bold text-primary">
                    {result.riskScore}
                  </p>
                  <p className="text-muted-foreground">/ 100</p>
                  <Badge
                    variant={getRiskLevelBadgeVariant(result.riskLevel)}
                    className="ml-auto"
                  >
                    {result.riskLevel}
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold">
                  Personalized Insights
                </h3>
                <p className="text-sm text-muted-foreground">
                  {result.insights}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <ShieldCheck className="h-12 w-12 text-muted-foreground" />
              <h3 className="font-headline text-xl font-semibold">
                Your Assessment Appears Here
              </h3>
              <p className="text-muted-foreground">
                Fill out the form to get your AI-powered risk assessment and
                personalized insights.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
