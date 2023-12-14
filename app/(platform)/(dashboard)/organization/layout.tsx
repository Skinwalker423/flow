const OrganizationPage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className='bg-red-500 w-full h-full pt-20 md:pt-24 px-4'>
      {children}
    </main>
  );
};

export default OrganizationPage;
