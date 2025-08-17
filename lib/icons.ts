/**
 * Icon system for easy import and use of SVG icons
 * This file provides type-safe access to all available icons
 */

// Define all available icons as a const object for type safety
export const ICON_NAMES = {
  ADVICE: 'advice',
  BLUE_TRIANGLE: 'blue-triangle-icon',
  YELLOW_TRIANGLE: 'yellow-triangle-icon',
  BUBBLE_BG: 'bubble-bg-icon',
  CALENDAR: 'calendar',
  FRAME: 'Frame',
  HERO_MAP: 'hero_map_icon',
  IDENTIFICATION: 'identification',
  INTERNET: 'internet',
  LIGHT_BULB: 'light-bulb-icon',
  OUR_MISSION: 'our-mission-icon',
  OUR_VISION: 'our-vision-icon',
  PERFORMANCE_REVIEW: 'performance-review',
  SATISFACTION: 'satisfaction',
  TRON_LEGACY: 'tron-legacy-image',
} as const;

// Create a type from the icon names
export type IconName = typeof ICON_NAMES[keyof typeof ICON_NAMES];

// Icon metadata for better developer experience
export const ICON_METADATA = {
  [ICON_NAMES.ADVICE]: {
    name: 'Advice',
    description: 'Professional advice and consultation icon',
    category: 'services',
    defaultSize: { width: 56, height: 57 },
  },
  [ICON_NAMES.BLUE_TRIANGLE]: {
    name: 'Blue Triangle',
    description: 'Decorative blue triangle element',
    category: 'decorative',
    defaultSize: { width: 24, height: 24 },
  },
    [ICON_NAMES.YELLOW_TRIANGLE]: {
        name: 'Yellow Triangle',
        description: 'Decorative yellow triangle element',
        category: 'decorative',
        defaultSize: { width: 112, height: 127 },
    },
  [ICON_NAMES.BUBBLE_BG]: {
    name: 'Bubble Background',
    description: 'Background bubble decoration',
    category: 'decorative',
    defaultSize: { width: 24, height: 24 },
  },
  [ICON_NAMES.CALENDAR]: {
    name: 'Calendar',
    description: 'Calendar and scheduling icon',
    category: 'ui',
    defaultSize: { width: 24, height: 24 },
  },
  [ICON_NAMES.FRAME]: {
    name: 'Frame',
    description: 'Frame or border element',
    category: 'ui',
    defaultSize: { width: 24, height: 24 },
  },
  [ICON_NAMES.HERO_MAP]: {
    name: 'Hero Map',
    description: 'Map icon for hero sections',
    category: 'hero',
    defaultSize: { width: 24, height: 24 },
  },
  [ICON_NAMES.IDENTIFICATION]: {
    name: 'Identification',
    description: 'ID and identification services icon',
    category: 'services',
    defaultSize: { width: 24, height: 24 },
  },
  [ICON_NAMES.INTERNET]: {
    name: 'Internet',
    description: 'Internet and web services icon',
    category: 'services',
    defaultSize: { width: 24, height: 24 },
  },
  [ICON_NAMES.LIGHT_BULB]: {
    name: 'Light Bulb',
    description: 'Ideas and innovation icon',
    category: 'concepts',
    defaultSize: { width: 24, height: 24 },
  },
  [ICON_NAMES.OUR_MISSION]: {
    name: 'Our Mission',
    description: 'Mission statement icon',
    category: 'company',
    defaultSize: { width: 24, height: 24 },
  },
  [ICON_NAMES.OUR_VISION]: {
    name: 'Our Vision',
    description: 'Vision statement icon',
    category: 'company',
    defaultSize: { width: 24, height: 24 },
  },
  [ICON_NAMES.PERFORMANCE_REVIEW]: {
    name: 'Performance Review',
    description: 'Performance evaluation icon',
    category: 'services',
    defaultSize: { width: 24, height: 24 },
  },
  [ICON_NAMES.SATISFACTION]: {
    name: 'Satisfaction',
    description: 'Customer satisfaction icon',
    category: 'services',
    defaultSize: { width: 24, height: 24 },
  },
  [ICON_NAMES.TRON_LEGACY]: {
    name: 'Tron Legacy',
    description: 'Futuristic design element',
    category: 'decorative',
    defaultSize: { width: 24, height: 24 },
  },
} as const;

// Helper function to get icon path
export const getIconPath = (iconName: IconName): string => {
  return `/icons/${iconName}.svg`;
};

// Helper function to get icon metadata
export const getIconMetadata = (iconName: IconName) => {
  return ICON_METADATA[iconName];
};

// Helper function to get all icons by category
export const getIconsByCategory = (category: string) => {
  return Object.entries(ICON_METADATA)
    .filter(([_, metadata]) => metadata.category === category)
    .map(([iconName]) => iconName as IconName);
};

// Helper function to get all available categories
export const getIconCategories = () => {
  const categories = Object.values(ICON_METADATA).map(metadata => metadata.category);
  return [...new Set(categories)];
};

// Export all icons for convenience
export const Icons = ICON_NAMES;
