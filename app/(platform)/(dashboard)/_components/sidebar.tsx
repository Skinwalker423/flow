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

  const defaultAccordianValue = Object.keys(expanded).map(
    (key) => {
      if (expanded[key]) {
        return key;
      }
    }
  );

  if (
    !isLoadedOrg ||
    !isLoadedOrgList ||
    userMemberships.isLoading
  ) {
    return (
      <>
        <Skeleton />
      </>
    );
  }

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  return <div>SideBar</div>;
};

export default SideBar;
