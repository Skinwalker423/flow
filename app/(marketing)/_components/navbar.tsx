import Logo from "@/components/Logo";

export const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center'>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full'>
        <Logo />
      </div>
    </nav>
  );
};
