"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

interface NavItemProps {
  key: string;
  isActive: boolean;
  isExpanded: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

const NavItem = ({
  isActive,
  isExpanded,
  onExpand,
  organization,
}: NavItemProps) => {
  return (
    <AccordionItem
      className='border-none'
      value={organization.id}
    >
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive &&
            !isExpanded &&
            "bg-sky-500/10 text-sky-700"
        )}
      >
        <div className='flex items-center gap-x-2'>
          <div className='w-7 h-7 relative'>
            <Image
              src={organization.imageUrl}
              alt={organization.name}
              fill
              className='object-contain '
            />
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        More info about the {organization.name}
      </AccordionContent>
    </AccordionItem>
  );
};

export default NavItem;
