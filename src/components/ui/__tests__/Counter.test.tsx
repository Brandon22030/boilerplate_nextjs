import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Counter } from '../Counter';
import { useCounterStore } from '../../store/counterStore';

// Mock du store Zustand
const mockStore = {
  count: 0,
  increment: jest.fn(),
  decrement: jest.fn(),
  reset: jest.fn(),
  isLoading: false,
  setLoading: jest.fn(),
};

// Création d'un mock pour Zustand
jest.mock('../../store/counterStore', () => ({
  useCounterStore: jest.fn().mockReturnValue(mockStore),
}));

describe('Counter Component', () => {
  beforeEach(() => {
    // Réinitialiser les mocks avant chaque test
    jest.clearAllMocks();
  });

  it('should render with initial count', () => {
    render(<Counter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should increment count when increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(incrementButton);
    expect(mockStore.increment).toHaveBeenCalledTimes(1);
  });

  it('should decrement count when decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: '-' });
    fireEvent.click(decrementButton);
    expect(mockStore.decrement).toHaveBeenCalledTimes(1);
  });

  it('should reset count when reset button is clicked', () => {
    render(<Counter />);
    const resetButton = screen.getByRole('button', { name: 'Reset' });
    fireEvent.click(resetButton);
    expect(mockStore.reset).toHaveBeenCalledTimes(1);
  });

  it('should show loading state when isLoading is true', () => {
    // Mettre isLoading à true dans le mock
    mockStore.isLoading = true;
    render(<Counter />);
    
    // Vérifier que les boutons sont désactivés
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toBeDisabled();
    });

    // Vérifier que le texte de chargement est affiché
    expect(screen.getByText('...')).toBeInTheDocument();
  });

  it('should update count display when count changes', async () => {
    render(<Counter />);
    
    // Simuler un changement de count
    mockStore.count = 5;
    await waitFor(() => {
      expect(screen.getByText('5')).toBeInTheDocument();
    });
  });
});
