import { HeaderLinks } from './headerLinks';
import { HeaderLogo } from './headerLogo';

export const Header = () => {
  return (
    <header className="container mx-auto w-[100%]">
      <div className="flex items-center justify-center gap-28">
        <HeaderLinks />
        <HeaderLogo />
      </div>
    </header>
  );
};
