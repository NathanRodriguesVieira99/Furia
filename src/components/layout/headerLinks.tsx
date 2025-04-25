import Link from 'next/link';

export const HeaderLinks = () => {
  return (
    <div className="text-md ml-2 flex w-[100px] gap-4 pr-2 text-yellow-600 sm:text-lg lg:text-lg">
      <Link
        href="#players_section"
        className="hover:text-yellow-500 hover:ease-in-out"
      >
        <h1 className="font-semibold">Jogadores</h1>
      </Link>
      <Link href="#" className="hover:text-yellow-500 hover:ease-in-out">
        <h1 className="font-semibold">Resultados</h1>
      </Link>
    </div>
  );
};
