import type { CardDescriptionProps } from '@/_types';

export const CardDescription = ({ description }: CardDescriptionProps) => {
  return (
    <div className="mt-4 text-white">
      <p>{description}</p>
    </div>
  );
};
