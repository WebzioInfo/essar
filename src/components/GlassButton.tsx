"use client";

import React, { forwardRef } from "react";
import GlassSurface from "./GlassSurface";

type Variant = "primary" | "ghost";
type Size = "sm" | "md" | "lg";

export interface BaseProps {
  variant?: Variant;
  size?: Size;
  children?: React.ReactNode;
  href?: string;
  useGlass?: boolean;
  glassProps?: Partial<React.ComponentProps<typeof GlassSurface>>;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  width?: number | string;
  height?: number | string;
}

export type GlassButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-6 py-3 text-base rounded-full",
  lg: "px-8 py-4 text-lg rounded-full",
};

const variantClasses: Record<Variant, string> = {
  primary: "text-white",
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
      width,
      height,
      ...rest
    } = props;

    const classes = [
      sizeClasses[size],
      variantClasses[variant],
      "font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const style: React.CSSProperties = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
    };

    if (href || asAnchor) {
      const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          aria-label={ariaLabel}
          className={classes}
          style={style}
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
        style={style}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
);

BaseButton.displayName = "BaseButton";

const GlassButton: React.FC<GlassButtonProps> = ({
  useGlass = false,
  glassProps = {},
  width,
  height,
  ...rest
}) => {
  const content = <BaseButton width={width} height={height} {...(rest as BaseButtonProps)} />;

  if (!useGlass) return content;

  const fullGlassProps = glassProps as React.ComponentProps<typeof GlassSurface>;

  return (
    <GlassSurface
      borderRadius={9999}
      borderWidth={0.06}
      blur={8}
      opacity={0.82}
      brightness={45}
      saturation={1.2}
      width={width}
      height={height}
      className="inline-flex p-0"
      style={{
        display: "inline-flex",
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
      {...fullGlassProps}
    >
      {content}
    </GlassSurface>
  );
};

export default GlassButton;
