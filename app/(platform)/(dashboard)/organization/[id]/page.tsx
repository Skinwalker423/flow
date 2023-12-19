import { db } from "@/lib/db";

const OrganizationPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  async function create(formData: FormData) {
    "use server";

    const userName = formData.get("title");
    console.log(
      "action triggered. Form data username",
      userName
    );

      db.board.create({
        data: {
          title: 
        }
      })

  }

  return (
    <form action={create}>
      <input
        className='px-4 py-2 border border-blue-500'
        type='text'
        name='title'
        id='title'
        placeholder='enter board title'
      />
    </form>
  );
};

export default OrganizationPage;
