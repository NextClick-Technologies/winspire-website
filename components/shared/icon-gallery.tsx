import React from 'react';
import { 
  SvgIcon, 
  InlineSvgIcon, 
  Icons, 
  getIconCategories, 
  getIconsByCategory,
  getIconMetadata,
  type IconName 
} from './icons';

/**
 * Icon Gallery component - demonstrates all available icons
 * This is useful for development and design reference
 */
export const IconGallery: React.FC = () => {
  const categories = getIconCategories();

  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Icon Gallery</h2>
        <p className="text-gray-600 mb-6">
          All available icons in the project, organized by category.
        </p>
      </div>

      {categories.map((category) => {
        const categoryIcons = getIconsByCategory(category);
        
        return (
          <div key={category} className="space-y-4">
            <h3 className="text-lg font-semibold capitalize text-gray-800 border-b pb-2">
              {category} Icons
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {categoryIcons.map((iconName) => {
                const metadata = getIconMetadata(iconName as IconName);
                
                return (
                  <div 
                    key={iconName}
                    className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="mb-2">
                      <SvgIcon 
                        name={iconName as IconName} 
                        size={48}
                        className="mx-auto"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900 mb-1">
                        {metadata.name}
                      </p>
                      <p className="text-xs text-gray-500 mb-1">
                        {iconName}
                      </p>
                      <p className="text-xs text-gray-400">
                        {metadata.defaultSize.width}×{metadata.defaultSize.height}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

/**
 * Icon Usage Examples component - shows different ways to use icons
 */
export const IconUsageExamples: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Icon Usage Examples</h2>
        <p className="text-gray-600 mb-6">
          Different ways to use icons in your components.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Usage</h3>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <SvgIcon name={Icons.ADVICE} />
          <SvgIcon name={Icons.CALENDAR} />
          <SvgIcon name={Icons.LIGHT_BULB} />
          <code className="text-sm bg-white px-2 py-1 rounded">
            {'<SvgIcon name={Icons.ADVICE} />'}
          </code>
        </div>
      </div>

      {/* Custom Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Sizes</h3>
        <div className="space-y-4">
          {/* Size prop with numbers */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium mb-3">Using size prop (square):</p>
            <div className="flex items-center gap-4 mb-2">
              <SvgIcon name={Icons.LIGHT_BULB} size={16} />
              <SvgIcon name={Icons.LIGHT_BULB} size={24} />
              <SvgIcon name={Icons.LIGHT_BULB} size={32} />
              <SvgIcon name={Icons.LIGHT_BULB} size={48} />
              <SvgIcon name={Icons.LIGHT_BULB} size={64} />
            </div>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              {'<SvgIcon name={Icons.LIGHT_BULB} size={16|24|32|48|64} />'}
            </code>
          </div>

          {/* Size prop with object */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium mb-3">Using size prop (custom dimensions):</p>
            <div className="flex items-center gap-4 mb-2">
              <SvgIcon name={Icons.ADVICE} size={{ width: 32, height: 24 }} />
              <SvgIcon name={Icons.ADVICE} size={{ width: 48, height: 32 }} />
              <SvgIcon name={Icons.ADVICE} size={{ width: 64, height: 40 }} />
            </div>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              {'<SvgIcon name={Icons.ADVICE} size={{ width: 48, height: 32 }} />'}
            </code>
          </div>

          {/* CSS Classes */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium mb-3">Using CSS classes (Tailwind):</p>
            <div className="flex items-center gap-4 mb-2">
              <SvgIcon name={Icons.CALENDAR} className="w-4 h-4" />
              <SvgIcon name={Icons.CALENDAR} className="w-6 h-6" />
              <SvgIcon name={Icons.CALENDAR} className="w-8 h-8" />
              <SvgIcon name={Icons.CALENDAR} className="w-12 h-12" />
              <SvgIcon name={Icons.CALENDAR} className="w-16 h-16" />
            </div>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              {'<SvgIcon name={Icons.CALENDAR} className="w-8 h-8" />'}
            </code>
          </div>

          {/* Responsive Sizes */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium mb-3">Responsive sizing:</p>
            <div className="flex items-center gap-4 mb-2">
              <SvgIcon 
                name={Icons.OUR_MISSION} 
                className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" 
              />
              <span className="text-sm text-gray-600">Resize window to see effect</span>
            </div>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              {'<SvgIcon name={Icons.OUR_MISSION} className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />'}
            </code>
          </div>

          {/* Common Use Cases */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium mb-3">Common size use cases:</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <SvgIcon name={Icons.CALENDAR} size={14} />
                <span className="text-sm">Button icons (14-16px)</span>
              </div>
              <div className="flex items-center gap-3">
                <SvgIcon name={Icons.ADVICE} size={20} />
                <span className="text-sm">Navigation icons (18-20px)</span>
              </div>
              <div className="flex items-center gap-3">
                <SvgIcon name={Icons.OUR_MISSION} size={24} />
                <span className="text-sm">Card headers (24px)</span>
              </div>
              <div className="flex items-center gap-3">
                <SvgIcon name={Icons.LIGHT_BULB} size={32} />
                <span className="text-sm">Feature icons (32px)</span>
              </div>
              <div className="flex items-center gap-3">
                <SvgIcon name={Icons.HERO_MAP} size={48} />
                <span className="text-sm">Hero sections (48px+)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With Custom Styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Custom Styling</h3>
        <div className="space-y-4">
          {/* Visual Effects */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium mb-3">Visual effects:</p>
            <div className="flex items-center gap-4 mb-2">
              <SvgIcon 
                name={Icons.SATISFACTION} 
                size={32}
                className="opacity-50" 
              />
              <SvgIcon 
                name={Icons.SATISFACTION} 
                size={32}
                className="hover:scale-110 transition-transform cursor-pointer" 
              />
              <SvgIcon 
                name={Icons.SATISFACTION} 
                size={32}
                className="filter grayscale hover:grayscale-0 transition-all cursor-pointer" 
              />
              <SvgIcon 
                name={Icons.SATISFACTION} 
                size={32}
                className="hover:rotate-12 transition-transform cursor-pointer" 
              />
            </div>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              {'<SvgIcon className="hover:scale-110 transition-transform" />'}
            </code>
          </div>

          {/* Size Priority Demo */}
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm font-medium mb-3 text-red-800">Size priority (CSS overrides size prop):</p>
            <div className="flex items-center gap-4 mb-2">
              <SvgIcon 
                name={Icons.ADVICE} 
                size={24}           // This will be ignored
                className="w-12 h-12" // This will be used (48px)
              />
              <span className="text-sm text-red-700">CSS classes have higher priority than size prop</span>
            </div>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              {'<SvgIcon size={24} className="w-12 h-12" /> // Uses 48px (w-12 h-12)'}
            </code>
          </div>
        </div>
      </div>

      {/* Inline SVG (for better control) */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Inline SVG (with color control)</h3>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <InlineSvgIcon 
            name={Icons.OUR_MISSION} 
            size={32}
            color="currentColor"
            className="text-blue-500"
          />
          <InlineSvgIcon 
            name={Icons.OUR_MISSION} 
            size={32}
            color="currentColor"
            className="text-green-500"
          />
          <InlineSvgIcon 
            name={Icons.OUR_MISSION} 
            size={32}
            color="currentColor"
            className="text-red-500"
          />
          <code className="text-sm bg-white px-2 py-1 rounded">
            {'<InlineSvgIcon name={Icons.OUR_MISSION} color="currentColor" />'}
          </code>
        </div>
      </div>

      {/* In Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">In Buttons</h3>
        <div className="space-y-4">
          {/* Different button sizes */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium mb-3">Button sizes:</p>
            <div className="flex gap-4 mb-2">
              <button className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                <SvgIcon name={Icons.CALENDAR} size={12} />
                Small
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                <SvgIcon name={Icons.CALENDAR} size={14} />
                Medium
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                <SvgIcon name={Icons.CALENDAR} size={16} />
                Large
              </button>
              <button className="flex items-center gap-3 px-6 py-3 text-lg bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                <SvgIcon name={Icons.CALENDAR} size={20} />
                XL
              </button>
            </div>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              {'<SvgIcon name={Icons.CALENDAR} size={16} />'}
            </code>
          </div>

          {/* Icon-only buttons */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium mb-3">Icon-only buttons:</p>
            <div className="flex gap-2 mb-2">
              <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors">
                <SvgIcon name={Icons.ADVICE} size={16} />
              </button>
              <button className="p-3 bg-green-500 hover:bg-green-600 text-white rounded transition-colors">
                <SvgIcon name={Icons.SATISFACTION} size={18} />
              </button>
              <button className="p-2 border border-gray-300 hover:bg-gray-50 rounded transition-colors">
                <SvgIcon name={Icons.OUR_MISSION} size={16} />
              </button>
            </div>
          </div>

          {/* Different button styles */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium mb-3">Different styles:</p>
            <div className="flex gap-4 mb-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                <SvgIcon name={Icons.CALENDAR} size={16} />
                Schedule Meeting
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                <SvgIcon name={Icons.ADVICE} size={16} />
                Get Advice
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded hover:from-purple-600 hover:to-pink-600 transition-all">
                <SvgIcon name={Icons.LIGHT_BULB} size={16} />
                Ideas
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* In Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">In Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Icons.OUR_MISSION, title: 'Our Mission', desc: 'Learn about our mission' },
            { icon: Icons.OUR_VISION, title: 'Our Vision', desc: 'Discover our vision' },
            { icon: Icons.SATISFACTION, title: 'Satisfaction', desc: 'Customer satisfaction' },
          ].map((item, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <SvgIcon name={item.icon} size={24} className="mr-3" />
                <h4 className="font-semibold">{item.title}</h4>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconGallery;
