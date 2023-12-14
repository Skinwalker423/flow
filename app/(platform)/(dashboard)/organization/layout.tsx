const OrganizationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className='w-full h-full pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto'>
      <div className='w-64 shrink-0 bg-red-400 hidden md:block'>
        {/* sidebar */}
      </div>
      {children}
    </main>
  );
};

export default OrganizationLayout;
