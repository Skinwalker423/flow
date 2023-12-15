"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      >
        {organization.name}
      </AccordionTrigger>
      <AccordionContent>
        More info about the {organization.name}
      </AccordionContent>
    </AccordionItem>
  );
};

export default NavItem;
