import { ReactNode } from "react";

export function Button({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <button className={\`rounded px-4 py-2 font-semibold \${className}\`}>
      {children}
    </button>
  );
}