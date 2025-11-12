// src/components/GlassButton.tsx
"use client";

import React, { forwardRef } from "react";
import GlassSurface from "./GlassSurface"; // adjust path if needed

type Variant = "primary" | "ghost";
type Size = "sm" | "md" | "lg";

export interface BaseProps {
  variant?: Variant;
  size?: Size;
  children?: React.ReactNode;
  href?: string; // if provided, renders an anchor
  useGlass?: boolean;
  glassProps?: Partial<React.ComponentProps<typeof GlassSurface>>;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

/**
 * Combine HTML attributes for button and anchor so consumers can pass through props.
 * We make all of them optional and use them in the rest param.
 */
export type GlassButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-1 py-1 text-base rounded-full",
  lg: "px-8 py-4 text-lg rounded-full",
};

const variantClasses: Record<Variant, string> = {
  primary: " text-white",
  ghost: "text-gray-200 hover:backdrop-blur-lg",
};

type BaseButtonProps = GlassButtonProps & { asAnchor?: boolean };

const BaseButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, BaseButtonProps>(
  (props, ref) => {
    const {
      variant = "primary",
      size = "md",
      children,
      href,
      onClick,
      className = "",
      disabled = false,
      ariaLabel,
      asAnchor = false,
      ...rest
    } = props;

    const classes = [
      sizeClasses[size],
      variantClasses[variant],
      "font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if (href || asAnchor) {
      const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          aria-label={ariaLabel}
          className={classes}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        disabled={disabled}
        aria-label={ariaLabel}
        className={classes}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
);

BaseButton.displayName = "BaseButton";

/**
 * GlassButton optionally wraps the BaseButton in a GlassSurface.
 */
const GlassButton: React.FC<GlassButtonProps> = ({ useGlass = false, glassProps = {}, ...rest }) => {
  const content = <BaseButton {...(rest as BaseButtonProps)} />;

  if (!useGlass) return content;

  // glassProps is Partial<...>. We assert to the component props type so we can spread it without `any`.
  const fullGlassProps = glassProps as React.ComponentProps<typeof GlassSurface>;

  return (
    <GlassSurface
      // sensible defaults for buttons; can be overridden via glassProps
      borderRadius={9999}
      borderWidth={0.06}
      blur={8}
      opacity={0.82}
      brightness={45}
      saturation={1.2}
      className="inline-flex p-0"
      style={{ display: "inline-flex" }}
      {...fullGlassProps}
    >
      {content}
    </GlassSurface>
  );
};

export default GlassButton;
