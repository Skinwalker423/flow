"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SideBar from "./sidebar";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  const isOpen = useMobileSidebar((state) => state.isOpen);
  const onClose = useMobileSidebar(
    (state) => state.onClose
  );
  const onOpen = useMobileSidebar((state) => state.onOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) return null;

  return (
    <>
      <Button
        onClick={onOpen}
        className='block md:hidden'
        variant={"ghost"}
        size={"sm"}
      >
        <Menu className='h-4 w-4' />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side={"left"} className='p-2 pt-10'>
          <SideBar storageKey='t-sidebar-mobile-state' />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
