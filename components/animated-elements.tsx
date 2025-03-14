"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Animation variants
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// Animated components
export function MotionDiv({
  children,
  className,
  delay = 0,
  ...props
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  [key: string]: any;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionHeading({
  children,
  className,
  delay = 0,
  ...props
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  [key: string]: any;
}) {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={slideIn}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.h1>
  );
}

// New component for skill icons with actual SVG logos
export function SkillIcon({ name }: { name: string }) {
  const renderLogo = () => {
    switch (name) {
      case "GitHub":
        return (
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary">
            <path
              fill="currentColor"
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        );
      // Fix for the Git case and completing the component
      case "Git":
        return (
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary">
            <path
              fill="currentColor"
              d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
            />
          </svg>
        );
      // Add cases for Nest.js and TypeScript
      case "Nest.js":
        return (
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary">
            <path
              fill="currentColor"
              d="M12.0011 0L1.33881 6V18L12.0011 24L22.6634 18V6L12.0011 0ZM19.9989 16.346L12.0011 20.5763L4.00334 16.346V7.65347L12.0011 3.42371L19.9989 7.65347V16.346Z M7.05347 10.3982L11.5261 13.0451V18.3429L7.05347 15.6961V10.3982Z M12.4761 13.0451L16.9488 10.3982V15.6961L12.4761 18.3429V13.0451Z M7.62502 9.50169L12.0011 6.88228L16.3772 9.50169L12.0011 12.1211L7.62502 9.50169Z"
            />
          </svg>
        );
      case "TypeScript":
        return (
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary">
            <path
              fill="currentColor"
              d="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z"
            />
          </svg>
        );
      default:
        // Fallback to first letter if no icon is available
        return (
          <div className="h-8 w-8 flex items-center justify-center text-primary font-bold">
            {name.charAt(0)}
          </div>
        );
    }
  };

  return (
    <div className="p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
      {renderLogo()}
    </div>
  );
}
