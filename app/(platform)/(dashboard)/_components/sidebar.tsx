"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import {
  useOrganization,
  useOrganizationList,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import NavItem, { Organization } from "./navitem";

interface SideBarProps {
  storageKey?: string;
}

const SideBar = ({
  storageKey = "t-sidebar-state",
}: SideBarProps) => {
  const [expanded, setExpanded] = useLocalStorage<
    Record<string, any>
  >(storageKey, {});

  const {
    organization: activeOrganization,
    isLoaded: isLoadedOrg,
  } = useOrganization();
  const { userMemberships, isLoaded: isLoadedOrgList } =
    useOrganizationList({
      userMemberships: {
        infinite: true,
      },
    });

  const defaultAccordianValue = Object.keys(
    expanded
  ).reduce((acc: string[], key) => {
    if (expanded[key]) {
      acc.push(key);
    }

    return acc;
  }, []);

  if (
    !isLoadedOrg ||
    !isLoadedOrgList ||
    userMemberships.isLoading
  ) {
    return (
      <>
        <div>
          <Skeleton />
        </div>
      </>
    );
  }

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  return (
    <>
      <div className='font-medium text-xs flex items-center mb-1'>
        <span className='p1-4'>Workspaces</span>
        <Button
          asChild
          type='button'
          size={"icon"}
          variant={"ghost"}
          className='ml-auto'
        >
          <Link href={"/select-org"}>
            <Plus className='h-4 w-4' />
          </Link>
        </Button>
      </div>
      <Accordion
        type='multiple'
        defaultValue={defaultAccordianValue}
        className='space-y-2'
      >
        {userMemberships.data.map(({ organization }) => {
          return (
            <NavItem
              key={organization.id}
              isActive={
                organization.id === activeOrganization?.id
              }
              isExpanded={expanded[organization.id]}
              organization={organization as Organization}
              onExpand={onExpand}
            />
          );
        })}
      </Accordion>
    </>
  );
};

export default SideBar;
