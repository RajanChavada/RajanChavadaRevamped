"use client";

import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollRevealCard } from "@/components/ui/scroll-reveal-card";
import { Clock, ArrowRight } from "lucide-react";

interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    image?: string;
    category?: string;
    readTime?: string;
}

export function BlogPostList({ posts }: { posts: BlogPost[] }) {
    if (posts.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">
                    No posts yet. Check back soon!
                </p>
                <p className="text-sm text-muted-foreground">
                    In the meantime, check out my{" "}
                    <a
                        href="https://medium.com/@rajanchavada"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                        Medium articles
                    </a>
                </p>
            </div>
        );
    }

    return (
        <>
            {posts.map((post, index) => (
                <ScrollRevealCard key={post.slug} delay={index * 0.12}>
                    <Link href={`/blog/${post.slug}`}>
                        <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                            <CardContent className="p-4 sm:p-6">
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                    <div className="flex-1 order-2 sm:order-1">
                                        {/* Category badge */}
                                        {post.category && (
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-700 dark:text-purple-100 rounded-full text-sm">
                                                    {post.category}
                                                </span>
                                            </div>
                                        )}

                                        {/* Title */}
                                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 text-balance group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                            {post.title}
                                        </h2>

                                        {/* Description */}
                                        <p className="text-muted-foreground mb-4 text-pretty leading-relaxed text-sm sm:text-base line-clamp-2">
                                            {post.description}
                                        </p>

                                        {/* Meta info */}
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                                                <span>
                                                    {format(new Date(post.date), "MMM dd, yyyy")}
                                                </span>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-3 w-3" />
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </div>

                                            <Button
                                                size="sm"
                                                className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-700 dark:text-purple-100 rounded-full w-fit"
                                            >
                                                Read Article
                                                <ArrowRight className="ml-2 h-3 w-3" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Thumbnail */}
                                    {post.image && (
                                        <div className="flex-shrink-0 order-1 sm:order-2">
                                            <div className="w-full h-48 sm:w-32 sm:h-24 lg:w-40 lg:h-28 rounded-lg overflow-hidden bg-muted">
                                                <img
                                                    src={post.image}
                                                    alt={`Thumbnail for ${post.title}`}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                </ScrollRevealCard>
            ))}
        </>
    );
}
