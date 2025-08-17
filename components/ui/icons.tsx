// Export all icon-related components and utilities
export { SvgIcon } from './svg-icon';
export { InlineSvgIcon } from './inline-svg-icon';
export type { SvgIconProps } from './svg-icon';
export type { InlineSvgIconProps } from './inline-svg-icon';

// Re-export icon library utilities
export {
  ICON_NAMES,
  ICON_METADATA,
  Icons,
  getIconPath,
  getIconMetadata,
  getIconsByCategory,
  getIconCategories,
  type IconName,
} from '@/lib/icons';
