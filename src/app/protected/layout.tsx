import { Header } from '@/components/layout/header';

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="">{children}</main>
    </>
  );
};

export default ProtectedLayout;
