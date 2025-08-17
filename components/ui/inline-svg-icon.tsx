import React from 'react';
import { cn } from '@/lib/utils';
import { IconName, getIconPath, getIconMetadata } from '@/lib/icons';

export interface InlineSvgIconProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The name of the icon to display */
  name: IconName;
  /** Custom size for the icon. If not provided, uses the icon's default size */
  size?: number | { width: number; height: number };
  /** Additional CSS classes */
  className?: string;
  /** Color override for the icon (affects fill and stroke) */
  color?: string;
}

/**
 * Inline SVG Icon component that dynamically imports and renders SVG content
 * This allows for better styling control and performance compared to img tags
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <InlineSvgIcon name="advice" />
 * 
 * // With custom color
 * <InlineSvgIcon name="calendar" color="currentColor" />
 * 
 * // With custom size and styling
 * <InlineSvgIcon 
 *   name="light-bulb-icon" 
 *   size={32} 
 *   className="text-blue-500 hover:text-blue-600" 
 * />
 * ```
 */
export const InlineSvgIcon: React.FC<InlineSvgIconProps> = ({
  name,
  size,
  className,
  color,
  ...props
}) => {
  const [svgContent, setSvgContent] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  const iconPath = getIconPath(name);
  const metadata = getIconMetadata(name);
  
  // Determine icon dimensions
  const iconSize = React.useMemo(() => {
    if (typeof size === 'number') {
      return { width: size, height: size };
    }
    if (size && typeof size === 'object') {
      return size;
    }
    return metadata.defaultSize;
  }, [size, metadata.defaultSize]);

  // Load SVG content
  React.useEffect(() => {
    const loadSvg = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        
        const response = await fetch(iconPath);
        if (!response.ok) {
          throw new Error(`Failed to load icon: ${response.statusText}`);
        }
        
        let svgText = await response.text();
        
        // Apply color override if specified
        if (color) {
          svgText = svgText.replace(/fill="[^"]*"/g, `fill="${color}"`);
          svgText = svgText.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
        }
        
        setSvgContent(svgText);
      } catch (error) {
        console.error(`Error loading SVG icon "${name}":`, error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadSvg();
  }, [iconPath, name, color]);

  // Loading state
  if (isLoading) {
    return (
      <div
        className={cn(
          'inline-block bg-gray-200 animate-pulse rounded',
          className
        )}
        style={{
          width: iconSize.width,
          height: iconSize.height,
        }}
        role="img"
        aria-label={`Loading ${metadata.name} icon`}
      />
    );
  }

  // Error state
  if (hasError || !svgContent) {
    return (
      <div
        className={cn(
          'inline-flex items-center justify-center bg-gray-100 border border-gray-300 rounded text-gray-400 text-xs',
          className
        )}
        style={{
          width: iconSize.width,
          height: iconSize.height,
        }}
        role="img"
        aria-label={`Error loading ${metadata.name} icon`}
      >
        ?
      </div>
    );
  }

  return (
    <div
      className={cn('inline-block', className)}
      style={{
        width: iconSize.width,
        height: iconSize.height,
      }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      role="img"
      aria-label={metadata.name}
      {...props}
    />
  );
};

export default InlineSvgIcon;
