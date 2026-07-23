'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'md', asChild = false, className, ...props }, ref) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glowy-blue focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      default: 'bg-glowy-blue text-white hover:bg-blue-600 hover:shadow-glow',
      outline: 'border-2 border-glowy-blue text-glowy-blue hover:bg-glowy-blue hover:text-white',
      ghost: 'text-glowy-blue hover:bg-glowy-blue/10',
      danger: 'bg-red-600 text-white hover:bg-red-700',
    };

    const sizes = {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`;

    if (asChild) {
      return (
        <Link href="#" ref={ref as any} className={buttonClass} {...(props as any)}>
          {props.children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={buttonClass} {...props}>
        {props.children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };