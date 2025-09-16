"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Clock, MessageCircle, Heart } from "lucide-react"

const articles = [
  {
    title: "The Hidden Costs of Leaving Cash Sitting in Your Bank",
    description:
      "As a 20-year-old student living on campus, I have to juggle tuition, rent, and everyday expenses. But no matter how much...",
    url: "https://medium.com/@rajanchavada/the-hidden-costs-of-leaving-cash-sitting-in-your-bank-cff6a3e33901",
    readTime: "5 min read",
    category: "Finance",
    date: "Mar 29",
    claps: 1,
    comments: 1,
    thumbnail: "/financial-chart-graph-money-investment.jpg",
  },
  {
    title: "How Day Trading Mastered My Emotions and Supercharged My Career Success",
    description:
      "My first time day trading with real money wasn't just nerve-wracking—it was soul-shaking. I thought I was in control, but...",
    url: "https://medium.com/@rajanchavada/how-day-trading-mastered-my-emotions-and-supercharged-my-career-success-3008879c998a",
    readTime: "7 min read",
    category: "Career",
    date: "Dec 14, 2024",
    claps: 2,
    comments: 0,
    thumbnail: "/trading-floor-stock-market-celebration-success.jpg",
  },
  {
    title: "Dodging Day Trading Scams: Exploring the Fraudulent Gurus",
    description:
      "If you've wanted to learn day trading, you might be tempted to search 'How to Day Trade' on YouTube or Google, but little to...",
    url: "https://medium.com/@rajanchavada/dodging-day-trading-scams-exploring-the-fraudulent-gurus-341d8641ee27",
    readTime: "6 min read",
    category: "Finance",
    date: "Aug 23, 2024",
    claps: 2,
    comments: 1,
    thumbnail: "/trading-workspace-computer-screens-financial-analy.jpg",
  },
]

export function Articles() {
  return (
    <section id="articles" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Medium Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Sharing insights on finance, trading, and career development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="project-card group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-700 dark:text-purple-100 rounded-full text-sm">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 text-balance group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{article.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{article.date}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            <span>{article.claps}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            <span>{article.comments}</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        asChild
                        size="sm"
                        className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-700 dark:text-purple-100 rounded-full"
                      >
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                          Read Article
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-32 h-24 sm:w-40 sm:h-28 rounded-lg overflow-hidden bg-muted">
                      <img
                        src={article.thumbnail || "/placeholder.svg"}
                        alt={`Thumbnail for ${article.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
