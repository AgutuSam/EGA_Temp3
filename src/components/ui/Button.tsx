import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'accent';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
  href?: string;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  href,
  children,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-gradient-to-r from-neon-cyan to-electric-500 text-noir-950 hover:from-electric-500 hover:to-neon-cyan shadow-neon hover:shadow-neon-lg',
    outline: 'border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-noir-950',
    ghost: 'hover:bg-noir-800 hover:text-neon-cyan',
    link: 'underline-offset-4 hover:underline text-neon-cyan',
    accent: 'bg-gradient-to-r from-neon-cyan to-neon-blue text-noir-950 hover:from-neon-blue hover:to-neon-gold shadow-neon hover:shadow-neon-lg'
  };
  const sizes = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-11 px-8 rounded-md'
  };
  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`;
  if (href) {
    return <Link to={href} className={styles}>
          {children}
        </Link>;
  }
  return <button className={styles} ref={ref} {...props}>
        {children}
      </button>;
});
Button.displayName = 'Button';