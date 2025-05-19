import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
          variant === 'primary'
            ? 'bg-primary text-primary-foreground shadow hover:bg-primary/90'
            : variant === 'secondary'
            ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            : 'border border-input bg-background hover:bg-accent'
        } ${
          size === 'sm'
            ? 'h-9 rounded-md px-3 py-2 text-sm'
            : size === 'lg'
            ? 'h-11 rounded-md px-8 text-lg'
            : 'h-10 rounded-md px-4 py-2'
        } ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
