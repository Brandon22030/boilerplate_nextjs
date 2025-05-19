# Next.js Boilerplate

Ce boilerplate Next.js est une base solide pour démarrer vos projets React/Next.js avec TypeScript. Il inclut toutes les configurations nécessaires pour un développement moderne et efficace.

## 🚀 Fonctionnalités

- 📦 TypeScript prêt à l'emploi avec configuration optimisée
- 🎨 Tailwind CSS avec configuration personnalisée
- 🧹 ESLint + Prettier pour la qualité du code
- 📁 Structure de projet organisée
- 🔒 Configuration de sécurité
- 🧪 Tests avec Jest
- 🌓 Support du thème sombre
- 🔍 React Query pour la gestion des données
- 🔔 Notifications avec Toaster
- 🔄 Gestion d'état avec Zustand
- 🔗 Routage avec Next.js 13+
- 📱 Responsive design
- 🎯 Optimisation des performances

## 📁 Structure du projet

```
src/
├── app/              # Pages Next.js
│   ├── layout.tsx    # Layout principal de l'application
│   ├── page.tsx      # Page d'accueil
│   └── api/          # Routes API
├── components/       # Composants réutilisables
│   ├── ui/          # Composants UI de base (Button, Card, etc.)
│   ├── common/      # Composants communs
│   └── features/    # Composants spécifiques à des fonctionnalités
├── hooks/           # Hooks personnalisés
│   ├── useAuth.ts   # Gestion de l'authentification
│   ├── useTheme.ts  # Gestion du thème
│   └── useApi.ts    # Hooks pour les appels API
├── lib/             # Utilitaires et configurations
│   ├── utils.ts     # Fonctions utilitaires
│   ├── api.ts       # Configuration API
│   └── config.ts    # Configuration globale
├── styles/          # Styles globaux
│   └── globals.css  # Styles globaux
└── types/           # Types TypeScript
    ├── index.ts     # Types globaux
    └── components/  # Types spécifiques aux composants
```

## 📁 Détail des dossiers

### `app/`
- Contient toutes les pages de l'application
- Utilise le nouveau système de routing de Next.js 13+
- Chaque dossier représente une route
- Peut contenir des sous-routes

### `components/`
- Composants réutilisables de l'application
- Organisés par type de composant
- Chaque composant a sa propre interface TypeScript
- Les composants UI de base sont prêts à l'emploi

### `hooks/`
- Hooks personnalisés pour les fonctionnalités communes
- Gestion de l'état
- Gestion des effets secondaires
- Intégration avec React Query

### `lib/`
- Fonctions utilitaires
- Configuration globale
- Intégration avec les services externes
- Gestion des erreurs

### `styles/`
- Configuration Tailwind CSS
- Styles globaux
- Variables CSS
- Animations

### `types/`
- Définitions de types TypeScript
- Interfaces pour les composants
- Types pour les API
- Types globaux

## 🛠️ Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-repo/nextjs-boilerplate.git
```

2. Installez les dépendances :
```bash
npm install
```

3. Configuration de l'environnement :
   - Copiez le fichier `.env.example` en `.env`
   - Configurez vos variables d'environnement
   - Variables importantes à configurer :
     - NEXT_PUBLIC_API_URL : URL de l'API
     - NEXT_PUBLIC_APP_NAME : Nom de l'application

4. Lancez le serveur de développement :
```bash
npm run dev
```

5. Vérifiez que tout fonctionne :
   - Ouvrez http://localhost:3000 dans votre navigateur
   - Testez le changement de thème
   - Vérifiez que les composants UI sont fonctionnels

## 🧪 Tests

Pour exécuter les tests :
```bash
npm test
```

Pour exécuter les tests en mode watch :
```bash
npm run test:watch
```

Pour générer le rapport de couverture :
```bash
npm run test:coverage
```

## 🚀 Déploiement

Le projet est prêt pour le déploiement sur Vercel. Assurez-vous d'avoir configuré toutes les variables d'environnement nécessaires.

### Configuration Vercel
1. Créez un nouveau projet sur Vercel
2. Connectez votre repository GitHub
3. Configurez les variables d'environnement dans les settings de Vercel
4. Déployez automatiquement avec les webhooks GitHub

## 📝 Conventions

### Nommage
- Components : PascalCase (ex: Button, Card)
- Hooks : usePascalCase (ex: useTheme, useAuth)
- Types : PascalCase (ex: User, Product)
- Fichiers : kebab-case (ex: button.tsx, use-theme.ts)

### Structure des composants
```typescript
// Exemple de structure d'un composant
export interface ComponentProps {
  // Props ici
}

export function Component({ props }: ComponentProps) {
  // Logique du composant
  return (
    // JSX
  );
}
```

### Organisation
- Placez les composants UI de base dans `components/ui/`
- Les composants spécifiques à une fonctionnalité dans `components/features/`
- Les composants communs dans `components/common/`
- Les hooks dans `hooks/` selon leur utilité

## 📚 Documentation

### 📚 Zustand
Zustand est une bibliothèque légère et performante pour la gestion d'état global dans vos applications React/Next.js. Elle offre :

- **Simplicité**
  - API minimaliste et facile à comprendre
  - Pas de boilerplate complexe
  - Performances optimisées

- **Installation**
```bash
npm install zustand
```

- **Exemple d'utilisation**
```typescript
// Création d'un store
import create from 'zustand'

interface CounterStore {
  count: number
  increment: () => void
  decrement: () => void
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

// Utilisation dans un composant
function Counter() {
  const { count, increment, decrement } = useCounterStore()
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}
```

- **Avantages**
  - Taille minuscule (seulement 3.5KB)
  - Pas de dépendances externes
  - Support natif de TypeScript
  - Facile à tester
  - Intégration simple avec React

### 📚 React Query
React Query (TanStack Query) est une bibliothèque essentielle pour la gestion des données dans votre application. Elle offre :

- **Gestion des données**
  - Cache automatique des données
  - Récupération intelligente des données
  - Mise à jour automatique
  - Réhydratation du cache côté client

- **Hooks principaux**
  - `useQuery` : Pour la récupération de données
  - `useMutation` : Pour la modification de données
  - `useInfiniteQuery` : Pour la pagination

- **Exemple d'utilisation**
```typescript
// Récupération de données
const { data, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: () => fetch('/api/users'),
});

// Modification de données
const mutation = useMutation({
  mutationFn: (newUser) => createUser(newUser),
  onSuccess: () => {
    // Rafraîchir les données après modification
    queryClient.invalidateQueries({ queryKey: ['users'] });
  },
});
```

- **Avantages**
  - Performances optimisées avec le cache
  - Gestion automatique des états (loading, error, success)
  - Compatible avec Next.js et TypeScript
  - Support hors ligne

### 📚 Autres bibliothèques
- [Next.js](https://nextjs.org)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Jest](https://jestjs.io)
- [Next-themes](https://github.com/pacocoursey/next-themes)
- [Sonner](https://sonner.vercel.app)

## 🤝 Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

Avant de contribuer :
1. Lisez les conventions de code
2. Vérifiez que votre code passe les tests
3. Assurez-vous que votre code est typé avec TypeScript
4. Documentez votre code
5. Ajoutez des tests si nécessaire

## 🧪 Tests

Pour exécuter les tests :
```bash
npm test
```

Pour exécuter les tests en mode watch :
```bash
npm run test:watch
```

Pour générer le rapport de couverture :
```bash
npm run test:coverage
```

Pour plus de détails sur la structure et les bonnes pratiques des tests, consultez la [documentation détaillée des tests](./docs/testing.md).

## 🚀 Déploiement

Le projet est prêt pour le déploiement sur Vercel. Assurez-vous d'avoir configuré toutes les variables d'environnement nécessaires.

## 📝 Conventions

- Utilisez TypeScript pour tous les nouveaux fichiers
- Suivez les conventions de nommage :
  - Components : PascalCase
  - Hooks : usePascalCase
  - Types : PascalCase
- Respectez les règles ESLint et Prettier

## 📚 Documentation

- [Next.js](https://nextjs.org)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Jest](https://jestjs.io)
- [React Query](https://react-query.tanstack.com)

## 🤝 Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.
