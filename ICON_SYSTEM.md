# Icon System Documentation

This project includes a comprehensive, type-safe icon system that makes it easy to use SVG icons throughout your components.

## Available Icons

The following icons are available in the `/public/icons/` directory:

- `advice` - Professional advice and consultation
- `blue-triangle-icon` - Decorative blue triangle element
- `bubble-bg-icon` - Background bubble decoration
- `calendar` - Calendar and scheduling
- `Frame` - Frame or border element
- `hero_map_icon` - Map icon for hero sections
- `identification` - ID and identification services
- `internet` - Internet and web services
- `light-bulb-icon` - Ideas and innovation
- `our-mission-icon` - Mission statement
- `our-vision-icon` - Vision statement
- `performance-review` - Performance evaluation
- `satisfaction` - Customer satisfaction
- `tron-legacy-image` - Futuristic design element

## Components

### SvgIcon

The basic icon component that displays SVG icons as `<img>` elements.

```tsx
import { SvgIcon, Icons } from '@/components/ui/icons';

// Basic usage
<SvgIcon name={Icons.ADVICE} />

// With custom size
<SvgIcon name={Icons.CALENDAR} size={32} />

// With custom styling
<SvgIcon 
  name={Icons.LIGHT_BULB} 
  size={24} 
  className="opacity-75 hover:opacity-100" 
/>
```

### InlineSvgIcon

Advanced icon component that loads and inlines SVG content for better styling control.

```tsx
import { InlineSvgIcon, Icons } from '@/components/ui/icons';

// Basic usage
<InlineSvgIcon name={Icons.OUR_MISSION} />

// With color control
<InlineSvgIcon 
  name={Icons.OUR_VISION} 
  color="currentColor" 
  className="text-blue-500" 
/>

// With custom size and styling
<InlineSvgIcon 
  name={Icons.SATISFACTION} 
  size={32} 
  className="hover:scale-110 transition-transform" 
/>
```

## Icon Sizing

### 1. Using the `size` prop (Recommended)

#### Single number (creates square icon):
```tsx
// Small icons (12-16px) - for buttons, inline text
<SvgIcon name={Icons.CALENDAR} size={14} />

// Medium icons (20-24px) - for navigation, card headers  
<SvgIcon name={Icons.ADVICE} size={24} />

// Large icons (32-48px) - for features, hero sections
<SvgIcon name={Icons.LIGHT_BULB} size={48} />

// Extra large icons (64px+) - for decorative elements
<SvgIcon name={Icons.OUR_MISSION} size={96} />
```

#### Object with width and height (for non-square icons):
```tsx
// Custom dimensions
<SvgIcon 
  name={Icons.ADVICE} 
  size={{ width: 32, height: 24 }} 
/>

// Wide banner-style icon
<SvgIcon 
  name={Icons.HERO_MAP} 
  size={{ width: 120, height: 40 }} 
/>
```

### 2. Using CSS classes with `className`

```tsx
// Using Tailwind classes (recommended)
<SvgIcon name={Icons.ADVICE} className="w-4 h-4" />    // 16x16px
<SvgIcon name={Icons.ADVICE} className="w-6 h-6" />    // 24x24px  
<SvgIcon name={Icons.ADVICE} className="w-8 h-8" />    // 32x32px
<SvgIcon name={Icons.ADVICE} className="w-12 h-12" />  // 48x48px
<SvgIcon name={Icons.ADVICE} className="w-16 h-16" />  // 64x64px

// Custom CSS class
<SvgIcon name={Icons.ADVICE} className="icon-large" />
```

### 3. Responsive sizing

```tsx
// Responsive icons that scale with screen size
<SvgIcon 
  name={Icons.LIGHT_BULB} 
  className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" 
/>

// Mix size prop with responsive overrides
<SvgIcon 
  name={Icons.ADVICE} 
  size={20}
  className="md:w-8 md:h-8 lg:w-10 lg:h-10" 
/>
```

### 4. Default sizes

```tsx
// Uses the icon's predefined default size
<SvgIcon name={Icons.ADVICE} />

// Check an icon's default size:
import { getIconMetadata } from '@/components/ui/icons';
const metadata = getIconMetadata(Icons.ADVICE);
console.log(metadata.defaultSize); // { width: 56, height: 57 }
```

### 5. Size priority and override behavior

When multiple sizing methods are used, this is the priority order:

1. **CSS classes** (highest priority) - `className="w-8 h-8"`
2. **`size` prop** - `size={24}`
3. **Default size from metadata** (lowest priority)

```tsx
// CSS class overrides size prop
<SvgIcon 
  name={Icons.ADVICE} 
  size={24}              // This will be ignored
  className="w-16 h-16"  // This will be used (64x64px)
/>
```

### 6. Common size use cases

| Use Case | Recommended Size | Example |
|----------|------------------|---------|
| Button icons | 12-16px | `<SvgIcon name={Icons.CALENDAR} size={14} />` |
| Navigation icons | 18-20px | `<SvgIcon name={Icons.OUR_MISSION} size={18} />` |
| Card headers | 20-24px | `<SvgIcon name={Icons.ADVICE} size={24} />` |
| Feature sections | 32-40px | `<SvgIcon name={Icons.SATISFACTION} size={36} />` |
| Hero sections | 48-96px | `<SvgIcon name={Icons.LIGHT_BULB} size={72} />` |
| Background decoration | 96px+ | `<SvgIcon name={Icons.BUBBLE_BG} size={128} />` |

```tsx
// Button icons (12-16px)
<button>
  <SvgIcon name={Icons.CALENDAR} size={14} />
  Schedule
</button>

// Navigation icons (18-20px)
<nav>
  <SvgIcon name={Icons.OUR_MISSION} size={18} />
</nav>

// Card header icons (24px)
<div className="card-header">
  <SvgIcon name={Icons.ADVICE} size={24} />
  <h3>Get Professional Advice</h3>
</div>

// Feature section icons (32-40px)
<div className="feature">
  <SvgIcon name={Icons.SATISFACTION} size={36} />
  <h4>Customer Satisfaction</h4>
</div>

// Hero section icons (48-96px)
<div className="hero">
  <SvgIcon name={Icons.LIGHT_BULB} size={72} />
  <h1>Innovative Solutions</h1>
</div>

// Decorative background icons (96px+)
<SvgIcon 
  name={Icons.BUBBLE_BG} 
  size={128} 
  className="absolute opacity-10" 
/>
```

## Props Reference

### SvgIcon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | - | **Required.** The name of the icon to display |
| `size` | `number \| {width: number, height: number}` | Icon's default size | Custom size for the icon |
| `className` | `string` | - | Additional CSS classes |
| `alt` | `string` | Generated from icon name | Alt text for accessibility |
| `preserveColors` | `boolean` | `true` | Whether to preserve original colors |

### InlineSvgIcon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | - | **Required.** The name of the icon to display |
| `size` | `number \| {width: number, height: number}` | Icon's default size | Custom size for the icon |
| `className` | `string` | - | Additional CSS classes |
| `color` | `string` | - | Color override for fill and stroke |

## Utilities

### Icon Constants

```tsx
import { Icons, ICON_NAMES } from '@/components/ui/icons';

// Use the Icons object for better autocomplete
<SvgIcon name={Icons.ADVICE} />

// Or use ICON_NAMES directly
<SvgIcon name={ICON_NAMES.ADVICE} />
```

### Helper Functions

```tsx
import { 
  getIconPath, 
  getIconMetadata, 
  getIconsByCategory, 
  getIconCategories 
} from '@/components/ui/icons';

// Get icon file path
const iconPath = getIconPath('advice'); // '/icons/advice.svg'

// Get icon metadata
const metadata = getIconMetadata('advice');
console.log(metadata.name); // 'Advice'
console.log(metadata.category); // 'services'
console.log(metadata.defaultSize); // { width: 56, height: 57 }

// Get icons by category
const serviceIcons = getIconsByCategory('services');
// ['advice', 'identification', 'internet', 'performance-review', 'satisfaction']

// Get all categories
const categories = getIconCategories();
// ['services', 'decorative', 'ui', 'hero', 'concepts', 'company']
```

## Usage Examples

### Sizing Examples

```tsx
// Small button icons (12-16px)
<button className="text-sm">
  <SvgIcon name={Icons.CALENDAR} size={14} />
  Book Now
</button>

// Medium navigation icons (18-24px)
<nav>
  <SvgIcon name={Icons.OUR_MISSION} size={20} />
  <span>About Us</span>
</nav>

// Large feature icons (32-48px)
<div className="feature-card">
  <SvgIcon name={Icons.LIGHT_BULB} size={40} />
  <h3>Innovation</h3>
</div>

// Responsive sizing
<SvgIcon 
  name={Icons.ADVICE} 
  className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" 
/>

// Custom dimensions for banners
<SvgIcon 
  name={Icons.HERO_MAP} 
  size={{ width: 200, height: 60 }} 
/>
```

### In Buttons

```tsx
// Different button sizes with appropriate icon sizes
<button className="flex items-center gap-1 px-2 py-1 text-xs">
  <SvgIcon name={Icons.CALENDAR} size={12} />
  Tiny
</button>

<button className="flex items-center gap-2 px-3 py-2 text-sm">
  <SvgIcon name={Icons.CALENDAR} size={14} />
  Small
</button>

<button className="flex items-center gap-2 px-4 py-2">
  <SvgIcon name={Icons.CALENDAR} size={16} />
  Medium
</button>

<button className="flex items-center gap-3 px-6 py-3 text-lg">
  <SvgIcon name={Icons.CALENDAR} size={20} />
  Large
</button>

// Icon-only buttons
<button className="p-2 rounded-full">
  <SvgIcon name={Icons.ADVICE} size={18} />
</button>
```

### In Cards

```tsx
// Small card with header icon
<div className="p-4 border rounded">
  <div className="flex items-center gap-2 mb-3">
    <SvgIcon name={Icons.OUR_MISSION} size={20} />
    <h4 className="font-medium">Our Mission</h4>
  </div>
  <p>Learn about our mission and values.</p>
</div>

// Feature card with large icon
<div className="p-6 text-center">
  <SvgIcon name={Icons.SATISFACTION} size={48} className="mx-auto mb-4" />
  <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
  <p>We prioritize your satisfaction above all.</p>
</div>

// Grid of service cards
{[
  { icon: Icons.ADVICE, title: 'Professional Advice' },
  { icon: Icons.IDENTIFICATION, title: 'ID Services' },
  { icon: Icons.INTERNET, title: 'Web Solutions' },
].map((service, index) => (
  <div key={index} className="p-4 hover:shadow-lg transition-shadow">
    <SvgIcon name={service.icon} size={32} className="mb-3" />
    <h4>{service.title}</h4>
  </div>
))}
```

### With Animations and Effects

```tsx
// Hover animations
<SvgIcon 
  name={Icons.LIGHT_BULB} 
  size={32}
  className="hover:scale-110 hover:rotate-12 transition-transform cursor-pointer" 
/>

// Loading states
<SvgIcon 
  name={Icons.CALENDAR} 
  size={24}
  className="animate-pulse opacity-50" 
/>

// Interactive states
<SvgIcon 
  name={Icons.SATISFACTION} 
  size={28}
  className="hover:text-green-500 transition-colors" 
/>

// Background decorations
<div className="relative">
  <SvgIcon 
    name={Icons.BUBBLE_BG} 
    size={200}
    className="absolute top-0 right-0 opacity-10 -z-10" 
  />
  <div className="relative z-10">
    <h1>Content with background decoration</h1>
  </div>
</div>
```

### Color Control (InlineSvgIcon)

```tsx
// Theme-aware icons
<InlineSvgIcon 
  name={Icons.OUR_VISION} 
  color="currentColor"
  className="text-blue-500 dark:text-blue-400" 
/>

// Status-based colors
<InlineSvgIcon 
  name={Icons.SATISFACTION} 
  color="currentColor"
  className="text-green-500" // Success
/>

<InlineSvgIcon 
  name={Icons.PERFORMANCE_REVIEW} 
  color="currentColor"
  className="text-yellow-500" // Warning
/>

// Gradient effects (requires custom CSS)
<InlineSvgIcon 
  name={Icons.LIGHT_BULB} 
  className="icon-gradient" // Custom gradient class
/>
```

```tsx
<SvgIcon 
  name={Icons.LIGHT_BULB} 
  size={32}
  className="hover:scale-110 transition-transform cursor-pointer" 
/>
```

### With Color Control (InlineSvgIcon)

```tsx
<InlineSvgIcon 
  name={Icons.SATISFACTION} 
  color="currentColor"
  className="text-green-500 hover:text-green-600" 
/>
```

## Type Safety

The icon system is fully type-safe. TypeScript will autocomplete available icon names and catch typos:

```tsx
// ✅ Valid - TypeScript autocomplete works
<SvgIcon name={Icons.ADVICE} />

// ❌ Invalid - TypeScript error
<SvgIcon name="invalid-icon" />
```

## Adding New Icons

1. Add your SVG file to `/public/icons/`
2. Update `ICON_NAMES` in `/lib/icons.ts`
3. Add metadata in `ICON_METADATA`
4. The icon will be automatically available with full type safety

## Development Tools

### Icon Gallery

View all available icons during development:

```tsx
import { IconGallery, IconUsageExamples } from '@/components/ui/icon-gallery';

// Show all icons organized by category
<IconGallery />

// Show usage examples
<IconUsageExamples />
```

## Performance Considerations

- **SvgIcon**: Faster initial render, good for simple use cases
- **InlineSvgIcon**: Better for styling control and color manipulation, slight loading overhead

Choose based on your needs:
- Use `SvgIcon` for most cases
- Use `InlineSvgIcon` when you need color control or advanced styling

## Accessibility

Both components automatically include:
- Proper `alt` text or `aria-label`
- `role="img"` where appropriate
- Loading and error states for `InlineSvgIcon`
