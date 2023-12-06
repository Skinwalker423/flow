const MarketingLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='bg-slate-100 w-full h-full'>
      {/* navbar */}
      <main className='pt-40 pb-20 bg-slate-100'>
        {children}
      </main>
      {/* footer */}
    </div>
  );
};

export default MarketingLayout;
