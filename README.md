# Portfolio Mifid ADOYI GADO

Site personnel de Mifid ADOYI GADO, business developer à Lomé, Togo.
Bilingue français et anglais, déployé sur Netlify.

## Démarrer en local

```bash
pnpm install
npx next dev
```

Le site tourne sur http://localhost:3000.

## Construire le site

```bash
npx next build
```

La construction produit le dossier `out/`, un site entièrement statique.
C'est ce dossier que Netlify publie.

> Utiliser `npx next build` plutôt que `pnpm build` : pnpm effectue au préalable
> une vérification de dépendances qui échoue sur ce projet à cause de paquets
> dont les scripts d'installation ne sont pas approuvés, alors qu'aucun d'eux
> n'est nécessaire à la construction.

Pour prévisualiser le site construit exactement comme Netlify le servira :

```bash
node serveur-local.mjs
```

## Organisation

| Chemin | Contenu |
|---|---|
| `src/lib/translations.ts` | **Tout le contenu du site**, français et anglais. C'est ici qu'on écrit. |
| `src/components/` | Les sections de la page : Hero, About, Experience, Skills, Portfolio, Testimonials, Contact. |
| `src/components/ui/` | Composants shadcn/ui, à ne pas modifier à la main. |
| `public/images/experiences/` | Photos des missions. |
| `public/CV_ADOYI_GADO_MIFID.pdf` | CV téléchargeable depuis le bouton du hero. |
| `netlify.toml` | Commande de construction et dossier publié. |

## Formulaire de contact

Le formulaire utilise **Netlify Forms**. Il est détecté à la construction grâce
aux attributs `data-netlify="true"` et au champ caché `form-name`, présents dans
`src/components/Contact.tsx`. Les messages arrivent dans l'onglet *Forms* du
tableau de bord Netlify, et par email si une notification y est configurée.

Un champ piège (`bot-field`), invisible pour un humain, filtre les robots.

## Contenu : règles tenues

- Aucun pourcentage de compétence auto-attribué.
- Les chiffres annoncés sont ceux qui peuvent être justifiés, et ils sont
  identiques entre le site, le CV et LinkedIn.
- Les citations des recommandations sont reproduites telles que leurs auteurs
  les ont écrites, et ne sont jamais réécrites.
