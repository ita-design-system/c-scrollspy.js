---
title: c-scrollspy.js
description: Documentation de la librairie c-scrollspy.js dédiée à la détection de la position d’un élément DOM dans la fenêtre de visualisation
layout: libdoc_page.liquid
permalink: index.html
date: git Last Modified
---
[![Netlify Status](https://api.netlify.com/api/v1/badges/4646b91d-dbc1-47ce-b82a-a0acba13cb05/deploy-status)](https://app.netlify.com/projects/c-scrollspyjs/deploys)

{% include 'sandbox' path: '/sandboxes/1/index.html', title: 'Démo' %}

## Installation

Il est recommandé de placer les fichiers dans cet ordre avant la balise fin de body.

### En local

```html foo
<script src="/path/to/c-scrollspy.js"></script> <!-- obligatoire -->
<script src="/path/to/c-scrollspy-callbacks.js"></script> <!-- optionnel -->
```

### Sur CDN

Via [https://www.jsdelivr.com/](https://www.jsdelivr.com/)

Version la plus récente:

```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-scrollspy.js@main/assets/c-scrollspy.js
```

Version la plus récente minifiée:

```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-scrollspy.js@main/assets/c-scrollspy.min.js
```

Typologie avec numéro de version:

```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-scrollspy.js@<TAG_VERSION>/assets/c-scrollspy.js
```

Typologie numéro de version + minification automatique:

```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-scrollspy.js@<TAG_VERSION>/assets/c-scrollspy.min.js
```

Exemple v0.1.0:

```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-scrollspy.js@0.1.0/assets/c-scrollspy.js
https://cdn.jsdelivr.net/gh/ita-design-system/c-scrollspy.js@0.1.0/assets/c-scrollspy.min.js
```

## Usage

c-scrollspy fonctionne avec [l'API de IntersectionObserver](https://developer.mozilla.org/fr/docs/Web/API/IntersectionObserver) et déclenche des callbacks selon les seuils de passages spécifiés dans la vue. Spécifier le nom du callback dans l'attribut `c-scrollspy="NAME_OF_THE_CALLBACK"`. c-scrollspy est livré avec un callback nommé `anchor` (le cas le plus courant). Il est possible de créer et d'utiliser vos propres callbacks.

**Chaque callback dispose de ses propres paramètres**

## Callback anchor

Avec le callback `anchor` (toujours inclus dans c-scrollspy.js), lorsque l'élément passe dans la fenêtre de visualisation, la classe des liens qui pointent vers cet élément est remplacée par "active". 

**L'attribut id est obligatoire sur l'élément observé**

Il est possible de spécifier la classe de remplacement avec l'attribut `data-active-class="..."`

```html
<a  href="#section-description"
    class="classe-test-1 classe-test-2">
    Description
</a>
<a  href="#section-livraison"
    class="autre-classe">
    Livraison
</a>
<a  href="#section-financement">
    Financement
</a>

<section id="section-description" c-scrollspy="anchors">
    <h2>Description</h2>
    <p>Par défaut, lorsque cet élément passe dans la vue, la classe des liens qui pointent vers celle-ci sont remplacées par "active".</p>
</section>

<section id="section-livraison" c-scrollspy="anchors">
    <h2>Livraison</h2>
    <p>Défiler vers le bas pour visualiser les bascules de classes au passage des sections dans la vue.</p>
    <p>Par défaut, lorsque cette section passe dans la vue, la classe des liens qui pointent vers celle-ci sont remplacées par "active".</p>
</section>

<section id="section-financement"
    c-scrollspy="anchors" 
    data-active-class="active-2 active-3">
    <h2>Financement</h2>
    <p>Section avec classes personnalisées. Lorsque cette section est dans la vue, la classe des liens qui pointent vers celle-ci sont remplacées par la valeur de l'attribut data-active-class. Ici "active-2 active-3"</p>
</section>
```

## Callback personnalisé

L'objet cScrollspyCallbacks est disponible quand c-scrollspy.js est instancié sur le document. Vous pouvez écrire et utiliser vos propres callbacks en fonction de vos besoins.

```javascript
// Minimal
cScrollspyCallbacks.myCustomCallbackName = {
    /**
    * CALLBACK
    * CALLBACK METHOD
    * @arg {(object)} data event data returned by intersectonObserver
    */
    callback: function(data) {
        console.log('myCustomCallbackName', data);
        // Your own stuff here
    }
}
```

Exemple de callback simple avec options personnalisées: [démo](/content/custom-callback.md)

```javascript
// Simple callback avec thresholds personnalisés
// Arrière-plan variable
cScrollspyCallbacks.multipleThesholds = {
    options: {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    },
    /**
    * CALLBACK
    * CALLBACK METHOD
    * @arg {(object)} data event data returned by intersectonObserver
    */
    callback: function(data) {
        data.forEach(function(obj) {
            // console.log('multipleThesholds', obj.intersectionRatio);
            obj.target.style.transition = 'background-color 200ms';
            obj.target.style.backgroundColor = 'rgba(180, 200, 220, '+obj.intersectionRatio+')';
        })
    }
}
```

## Méthode update

Indispensable pour démarrer l'application, instancie les IntersectionObserver, s'exécute automatiquement sur le `DOMReady` et peut être invoqué à tout moment, à chaque changement de DOM.

```javascript
cScrollspy.update();
```

## API

Toutes les instances de c-scrollspy sont placées dans `cScrollspy.instances[ID_DE_L_INSTANCE]`. `ID_DE_L_INSTANCE` est l'id de l'élément s'il est présent, s'il est absent, c-scrollspy applique un id préfixé de `cspy_` suivi de l'index de l'instance.

```javascript
// Élément DOM traqué
cScrollspy.instances[ID_DE_L_INSTANCE].el;
// Méthodes IntersectionObserver
cScrollspy.instances[ID_DE_L_INSTANCE].io;
```
