import '@testing-library/jest-dom';
import { server } from './src/mocks/server';

// Établir le serveur MSW avant tous les tests
beforeAll(() => server.listen());

// Réinitialiser les demandes sur chaque test
afterEach(() => server.resetHandlers());

// Nettoyer le serveur après tous les tests
afterAll(() => server.close());
