import { Plus } from "lucide-react";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className='fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center'>
      <div className='flex items-center gap-x-4'>
        <div className='hidden md:flex'>
          <Logo />
        </div>
        <Button
          size={"sm"}
          className='rounded-sm hidden md:block h-auto py-1.5 px-2'
        >
          Create Org
        </Button>
        <Button
          size={"sm"}
          className='rounded-sm block md:hidden h-auto py-1.5 px-2'
        >
          <Plus />
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
