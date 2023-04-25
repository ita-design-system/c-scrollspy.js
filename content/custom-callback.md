---
title: Callbacks personnalisés
description: Exemples c-scrollspy avec callbacks personnalisés
layout: libdoc/page-split
category: Exemples
order: 10
---

```html
<section c-scrollspy="mostSimple">
    <h2>Callback personnalisé mostSimple</h2>
    <p>Ce callback personnalisé appelé "mostSimple" retourne un simple console.log(data) de l'IntersectionObserver (voir la console).</p>
    <p>Si les options ne sont pas spécifiées, comme sur cet exemple, cScrollspy utilise les options du callback anchor.</p>
</section>

<section c-scrollspy="multipleThesholds">
    <h2>Callback personnalisé multipleThesholds</h2>
    <p>Ce callback personnalisé appelé "multipleThesholds" modifie la couleur de l'arrière-plan à chaque seuil.</p>
</section>

<section c-scrollspy="multipleThesholds">
    <h2>Callback personnalisé multipleThesholds seconde instance</h2>
    <p>Modifie la couleur de l'arrière-plan à chaque seuil.</p>
</section>

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
        display: flex;
        flex-wrap: wrap;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: var(--ita-color-primary-500);
    }
    nav a {
        color: var(--ita-color-neutral-100);
        padding: 1em 2em;
        font-size: var(--ita-font-size-4);
        text-transform: uppercase;
        text-decoration: none;
    }
    a.active {
        color: var(--ita-color-primary-900);
    }
    a.active-2 {
        color: var(--ita-color-support-warning-500);
    }
    a.active-3 {
        color: var(--ita-color-support-danger-500);
    }
    section {
        height: 130vh;
        padding: 3em;
        background-color: var(--ita-color-primary-100);
        margin-bottom: 3em;
        scroll-margin-top: 40px;
    }
</style>
```
{:.playground title="Exemple de callbacks personnalisés"}