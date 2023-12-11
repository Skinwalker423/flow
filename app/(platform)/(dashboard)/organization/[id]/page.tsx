import React from "react";

const OrganizationPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  return (
    <div>
      <h3>OrganizationPage id: {params.id}</h3>
    </div>
  );
};

export default OrganizationPage;
