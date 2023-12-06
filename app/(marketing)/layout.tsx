const layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='bg-slate-400 w-full h-full'>
      <h1>Marketing Layout</h1>
      {children}
    </div>
  );
};

export default layout;
