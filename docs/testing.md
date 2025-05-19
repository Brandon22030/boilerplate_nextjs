# 🧪 Documentation des Tests

## 📝 Structure des tests
Les tests sont organisés dans des dossiers `__tests__` à côté des composants qu'ils testent. Par exemple :
```
src/
├── components/
│   ├── ui/
│   │   ├── Counter.tsx
│   │   └── __tests__/
│   │       └── Counter.test.tsx
│   └── ...
└── ...
```

## 🚀 Exemple de test
```typescript
// Counter.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from '../Counter';

describe('Counter Component', () => {
  it('should render with initial count', () => {
    render(<Counter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should increment count when increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(incrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
```

## 📊 Rapport de couverture
Le rapport de couverture est généré dans le dossier `coverage/` et montre :
- Pourcentage de couverture des fichiers
- Lignes non couvertes
- Instructions non couvertes
- Branches non couvertes

## 📋 Bonnes pratiques

1. **Organisation des tests**
   - Un fichier de test par composant
   - Tests unitaires pour les composants
   - Tests d'intégration pour les fonctionnalités

2. **Types de tests**
   - Tests unitaires pour les fonctions
   - Tests de rendu pour les composants
   - Tests d'interaction pour les fonctionnalités

3. **Conventions**
   - Nom des fichiers : `ComponentName.test.tsx`
   - Structure des tests : `describe()`, `it()`
   - Utilisation de `fireEvent` pour les interactions
   - Utilisation de `screen` pour les assertions

## 🚀 Exemple complet
```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with default props', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```
