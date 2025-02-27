---
title: "Building a Blog with Svelte and Mdsvex"
description: "This post is about my experience creating the 'blog' portion of my personal website using alternate methods and Svelte, SvelteKit, TS, and Mdsvex along with the challenges I faced."
date: '2025-2-5'
categories:
    - Svelte
    - Sveltekit
    - TypeScript
    - Mdsvex
    - Web Development
published: true
---

# Challenges and Learning Experiences in Building my Blog

Creating a blog with Svelte and Markdown was quite the adventure. Stepping into the world of Svelte and SvelteKit was like diving into a new ocean. I'd previously dipped my toes into React, but Svelte's simplicity and elegance were a refreshing change. However, with new territories come new challenges, and understanding the intricacies of Svelte's multi-page routing was one of them. My initial website was a simple one-pager, and venturing into a more complex structure demanded a deeper dive.

My first thought was to manage my blog posts using JSON files. This was a familiar approach, as I had already used JSON arrays to display projects and languages on my site. But when I toyed with the idea of opening blog posts on separate pages, it became clear that multiple JSON files would quickly become cumbersome and inefficient.

Markdown files emerged as the solution – lightweight, familiar, and straightforward to format. Their inherent organization made them ideal for storing metadata like titles, publication dates, and content snippets. This metadata was crucial to me; I envisioned a seamless system where completing a blog post instantly updated its display. This led me to Mdsvex, a tool that bridges Markdown and Svelte.

## Exploring Mdsvex and Metadata
Navigating Mdsvex was an entirely new journey. The concept of .svx files was particularly puzzling. They seemed like advanced Markdown, especially when paired with SvelteKit components, but their rendering quirks baffled me. Only when named +page.svx did they function as intended, hinting at their special relationship with Svelte's routing system.

The documentation provided a foundation, but I often found myself scouring the internet for practical insights. Most resources fell short of offering the solutions I needed, prompting me to take matters into my own hands.

## Building an API for Blog Management
With the absence of ready-made solutions, I embarked on developing an internal API. This turned out to be a pivotal decision for managing my blog's infrastructure. The API efficiently reads the directory containing my Markdown blog posts, extracting and displaying the necessary metadata. This setup not only streamlines the display of blog cards on the main blog page but also facilitates individualized post displays through a [slug] folder structure.

## Future Directions and Reflections
While TailwindCSS is another new tool I've experimented with, my affection for vanilla CSS remains strong. Its flexibility and clarity suit my style, but I remain open to revisiting Tailwind as my projects evolve.

In retrospect, building this blog has been a blend of trial, error, and gradual mastery. Each challenge has contributed to my growing familiarity with Svelte and its ecosystem. As I continue to develop and refine, I'm eager to explore further possibilities and perhaps share further insights into my journey with TailwindCSS and beyond.
