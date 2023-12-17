"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  const isOpen = useMobileSidebar((state) => state.isOpen);
  const onClose = useMobileSidebar(
    (state) => state.onClose
  );
  const onOpen = useMobileSidebar((state) => state.onOpen);

  return <div className='bg-red-500'>MobileSidebar</div>;
};

export default MobileSidebar;
