import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

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
