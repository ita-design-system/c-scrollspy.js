---
title: Carrousel
description: Utilisation du callback anchor pour réaliser un carrousel
layout: libdoc/page-split
category: Exemples
order: 20
---

```html
<ul>
    <li id="foo1" c-scrollspy="anchor">1</li>
    <li id="foo2" c-scrollspy="anchor">2</li>
    <li id="foo3" c-scrollspy="anchor">3</li>
    <li id="foo4" c-scrollspy="anchor">4</li>
    <li id="foo5" c-scrollspy="anchor">5</li>
    <li id="foo6" c-scrollspy="anchor">6</li>
</ul>
<nav>
    <a href="#foo1">1</a>
    <a href="#foo2">2</a>
    <a href="#foo3">3</a>
    <a href="#foo4">4</a>
    <a href="#foo5">5</a>
    <a href="#foo6">6</a>
</nav>

<!-- DEMO ONLY -->
<style>
    body {
        padding: var(--ita-spacing-4);
        color: var(--ita-color-primary-800);
        font-family: var(--ita-font-family-mono);
        font-size: 1rem;
        line-height: 1.5rem;
        padding-bottom: 150vh;
    }
    nav {
        text-align: center
    }
    ul {
        list-style: none;
        padding: 1em;
        margin: 0 auto;
        display: flex;
        gap: 1em;
        width: 100%;
        overflow: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        box-sizing: border-box;
        border: 2px solid var(--ita-color-primary-500);
        background-color: var(--ita-color-primary-100);
    }
    li {
        aspect-ratio: 2;
        min-width: 80%;
        max-width: 80%;
        scroll-snap-align: start;
        display: flex;
        align-items: center;
        justify-content: center;
        scroll-margin-top: 100vh;
        scroll-margin-left: 1em;
        border: 2px solid var(--ita-color-primary-500);
        background-color: var(--ita-color-primary-200);
    }
    a {
        color: var(--ita-color-primary-700);
        text-decoration: none;
    }
    a.active {
        opacity: 0.3;
    }
</style>
```
{:.playground title="Exemple avec un carrousel"}