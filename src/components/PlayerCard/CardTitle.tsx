import type { CardTitleProps } from '@/_types';

export const CardTitle = ({ title }: CardTitleProps) => {
  return (
    <div className="mt-2 tracking-wide text-white">
      <h1 className="text-lg leading-6 font-semibold">{title}</h1>
    </div>
  );
};
