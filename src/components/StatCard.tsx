import React from 'react';

// --- Utility Icons (Industry standard to define internal placeholders or use imported ones) ---

// Placeholder for Arrow Up icon (if not using an icon library like @heroicons/react)
const ArrowUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
  </svg>
);

// Placeholder for Arrow Down icon
const ArrowDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
  </svg>
);

// --- Component Interface ---

interface StatCardProps {
  /** The descriptive label for the metric */
  title: string;
  /** The main numeric or formatted value */
  value: string | number;
  /** An accompanying icon (e.g., from Lucide or Heroicons) */
  icon: React.ReactNode;
  /** Optional unit (e.g., '$', 'M', '%') */
  unit?: string;
  /** Optional percentage change used for trend display (e.g., 5.2 or -1.8) */
  change?: number;
  /** Optional descriptive text displayed in the footer */
  description?: string;
  /** Additional custom class names for the card container */
  className?: string;
}

// --- Component Definition ---

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  unit = '',
  change,
  description,
  className = '',
}) => {
  const isPositive = change !== undefined && change > 0;
  const isNegative = change !== undefined && change < 0;

  // Format the change text, showing absolute value and always one decimal place
  const changeText = change !== undefined ? `${Math.abs(change).toFixed(1)}%` : '';

  // Determine trend styling
  let trendClasses = 'text-gray-500 bg-gray-100';
  let TrendIcon: React.FC<React.SVGProps<SVGSVGElement>> | null = null;

  if (isPositive) {
    trendClasses = 'text-green-700 bg-green-100';
    TrendIcon = ArrowUp;
  } else if (isNegative) {
    trendClasses = 'text-red-700 bg-red-100';
    TrendIcon = ArrowDown;
  }

  return (
    <div
      className={`bg-white shadow-lg rounded-xl p-6 flex flex-col transition duration-300 transform hover:shadow-2xl border border-gray-50 ${className}`}
    >
      {/* Top Section: Title and Icon */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          {title}
        </h3>
        {/* Icon container */}
        <div className="p-3 rounded-full bg-blue-100 text-blue-600 shadow-md">
          {/* We assume the passed icon prop is correctly sized (e.g., w-5 h-5) */}
          {icon}
        </div>
      </div>

      {/* Middle Section: Main Value */}
      <div className="flex items-end mb-4">
        <span className="text-4xl font-extrabold text-gray-900 leading-none">
          {value}
        </span>
        {unit && (
          <span className="ml-2 text-lg font-semibold text-gray-500">
            {unit}
          </span>
        )}
      </div>

      {/* Bottom Section: Trend and Description */}
      <div className="pt-3 border-t border-gray-100 min-h-[3rem]">
        {change !== undefined ? (
          <div className="flex items-center space-x-3">
            {/* Trend Indicator */}
            <span
              className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${trendClasses}`}
            >
              {TrendIcon && <TrendIcon className="mr-1 mt-0.5" />}
              {changeText}
            </span>
            {/* Description */}
            {description && (
              <p className="text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
                {description}
              </p>
            )}
          </div>
        ) : (
          description && (
            <p className="text-sm text-gray-500">
              {description}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default StatCard;