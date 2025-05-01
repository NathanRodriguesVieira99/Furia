'use client';

import type { CardRootProps } from '@/_types';

export const CardRoot = ({ children }: CardRootProps) => {
  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      {children}
    </div>
  );
};
