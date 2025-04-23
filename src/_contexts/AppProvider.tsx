// componente criado para por todos os providers de contexts para o layout não ficar poluído
'use client';

import ReactQueryProviders from './providers/react-query-provider';

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReactQueryProviders>{children}</ReactQueryProviders>
    </>
  );
}
