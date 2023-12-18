import { OrganizationProfile } from "@clerk/nextjs";

const OrganizationIdSettingsPage = ({
  params,
}: {
  params: { id: string };
}) => {
  console.log("params", params);

  return (
    <div className='w-full'>
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              width: "100%",
              boxShadow: "none",
            },
            card: {
              border: "1px solid #e5e5e5",
              boxShadow: "none",
              width: "100%",
            },
          },
        }}
      />
    </div>
  );
};

export default OrganizationIdSettingsPage;
