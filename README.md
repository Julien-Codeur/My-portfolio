# Portfolio — Julien Pito

Portfolio personnel de **PITO TILARI Essoron Julien** (`Julien Codeur`) : développeur web & mobile basé à Lomé, Togo.

## Stack

- React 18 + TypeScript
- Vite + Vitest
- Emotion (thème **Ink & Lagoon**)
- Framer Motion
- EmailJS (formulaire de contact)
- Typographie : Syne + IBM Plex Sans

## Identité visuelle

Direction claire et éditoriale (fond pierre, encre, accent lagon) — volontairement hors des looks « portfolio dark / glow / purple ».

## Démarrage

```bash
cp .env.example .env   # renseigner EmailJS
npm install
npm run dev
```

## Variables d'environnement

| Variable                   | Description          |
| -------------------------- | -------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | Service EmailJS      |
| `VITE_EMAILJS_TEMPLATE_ID` | Template EmailJS     |
| `VITE_EMAILJS_PUBLIC_KEY`  | Clé publique EmailJS |

## Contenu éditable

Les textes et projets sont centralisés dans `src/data/` :

| Fichier       | Contenu                                     |
| ------------- | ------------------------------------------- |
| `site.ts`     | Identité, contact, réseaux, navigation      |
| `projects.ts` | Projets (résumé, problème, approche, liens) |
| `skills.ts`   | Compétences par catégorie                   |

Pour lier un dépôt ou une démo précise, renseigne `githubUrl` / `liveUrl` dans `projects.ts`.

## Structure

```
src/
  components/   # UI
  data/         # Contenu
  styles/       # Thème Emotion
  test/         # Helpers de test
public/images/  # Médias (JPEG + WebP)
```

## Scripts

| Commande               | Description               |
| ---------------------- | ------------------------- |
| `npm run dev`          | Serveur de développement  |
| `npm run build`        | Typecheck + build Vite    |
| `npm run test`         | Tests Vitest              |
| `npm run lint`         | ESLint                    |
| `npm run format`       | Prettier (écriture)       |
| `npm run format:check` | Prettier (CI)             |
| `npm run images:webp`  | Génère les variantes WebP |
| `npm run preview`      | Prévisualisation du build |

## Qualité

CI GitHub Actions (`.github/workflows/ci.yml`) : lint, format, tests, build.
