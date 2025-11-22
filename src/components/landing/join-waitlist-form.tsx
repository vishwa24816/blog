
'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function JoinWaitlistForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Waitlist form submitted');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto flex items-center gap-2 p-1.5 border rounded-lg bg-background/50"
    >
      <Input
        type="email"
        placeholder="Enter your email"
        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent flex-1"
        required
      />
      <Button
        type="submit"
        className="bg-gradient-to-r from-chart-2 to-chart-4 text-white"
      >
        Join Waitlist
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}
