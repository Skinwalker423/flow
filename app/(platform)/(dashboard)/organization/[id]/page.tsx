import React from "react";
import { clerkClient } from "@clerk/nextjs";

const OrganizationPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const organization =
    await clerkClient.organizations.getOrganization({
      organizationId: params.id,
    });

  console.log("org details", organization);
  return <div>OrganizationPage id: {params.id}</div>;
};

export default OrganizationPage;
