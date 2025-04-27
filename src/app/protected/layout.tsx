import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default ProtectedLayout;
