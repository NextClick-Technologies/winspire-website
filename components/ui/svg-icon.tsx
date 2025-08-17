import React from 'react';
import { cn } from '@/lib/utils';
import { IconName, getIconPath, getIconMetadata } from '@/lib/icons';

export interface SvgIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** The name of the icon to display */
  name: IconName;
  /** Custom size for the icon. If not provided, uses the icon's default size */
  size?: number | { width: number; height: number };
  /** Additional CSS classes */
  className?: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Whether to use the icon's original colors or inherit from parent */
  preserveColors?: boolean;
}

/**
 * SVG Icon component for displaying icons from the project's icon library
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <SvgIcon name="advice" />
 * 
 * // With custom size
 * <SvgIcon name="calendar" size={32} />
 * 
 * // With custom styling
 * <SvgIcon name="light-bulb-icon" className="text-blue-500" size={24} />
 * 
 * // Preserve original colors
 * <SvgIcon name="our-mission-icon" preserveColors />
 * ```
 */
export const SvgIcon: React.FC<SvgIconProps> = ({
  name,
  size,
  className,
  alt,
  preserveColors = true,
  ...props
}) => {
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

  // Generate alt text if not provided
  const iconAlt = alt || `${metadata.name} icon`;

  return (
    <img
      src={iconPath}
      alt={iconAlt}
      width={iconSize.width}
      height={iconSize.height}
      className={cn(
        'inline-block',
        !preserveColors && 'filter-none', // You can add filters here if needed
        className
      )}
      {...props}
    />
  );
};

export default SvgIcon;