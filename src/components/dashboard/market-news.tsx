import Link from 'next/link';
import { Newspaper } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { NewsArticle } from '@/types';

type MarketNewsProps = {
  articles: NewsArticle[];
};

export default function MarketNews({ articles }: MarketNewsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Newspaper className="h-5 w-5" />
          Market News
        </CardTitle>
        <CardDescription>
          Latest financial news and data feeds.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[350px]">
          <div className="space-y-4">
            {articles.map((article, index) => (
              <div key={article.id}>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {article.headline}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-muted-foreground">
                      {article.source} &middot; {article.time}
                    </span>
                    <Button variant="link" size="sm" asChild className="p-0 h-auto">
                      <Link href={article.url}>Read more</Link>
                    </Button>
                  </div>
                </div>
                {index < articles.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
