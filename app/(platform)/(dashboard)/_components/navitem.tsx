"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import {
  Activity,
  CreditCard,
  Layout,
  Settings,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

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
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      label: "Boards",
      icon: <Layout className='h-4 w-4 mr-2' />,
      href: `/organization/${organization.id}`,
    },
    {
      label: "Activity",
      icon: <Activity className='h-4 w-4 mr-2' />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: "Settings",
      icon: <Settings className='h-4 w-4 mr-2' />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: "Billing",
      icon: <CreditCard className='h-4 w-4 mr-2' />,
      href: `/organization/${organization.id}/billing`,
    },
  ];

  const handleOnClick = (href: string) => {
    router.push(href);
  };

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
              sizes='(max-width: 28px)'
              className='object-cover rounded-sm'
            />
          </div>
          <span className='text-sm font-medium'>
            {organization.name}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className='pt-1 text-neutral-700'>
        {routes.map(({ href, label, icon }) => {
          return (
            <Button
              className={cn(
                "w-full font-normal justify-start pl-10 mb-1",
                pathname === href &&
                  "bg-sky-500/10 text-sky-700"
              )}
              type='button'
              size={"sm"}
              variant={"ghost"}
              key={href}
              onClick={() => handleOnClick(href)}
            >
              {icon}
              {label}
            </Button>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
};

NavItem.Skeleton = function SkeletonNavItem() {
  return (
    <div className='flex items-center gap-x-2'>
      <div className='w-10 h-10 relative shrink'>
        <Skeleton className='h-full w-full absolute' />
      </div>
      <Skeleton className='h-10 w-full' />
    </div>
  );
};

export default NavItem;
