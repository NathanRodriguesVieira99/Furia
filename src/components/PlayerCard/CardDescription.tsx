interface CardDescriptionProps {
  description: string;
}

export const CardDescription = ({ description }: CardDescriptionProps) => {
  return (
    <div className="mt-4 text-white">
      <p>{description}</p>
    </div>
  );
};
