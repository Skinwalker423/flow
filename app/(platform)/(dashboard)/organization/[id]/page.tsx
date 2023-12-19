import { createBoard } from "@/actions/create-board";

const OrganizationPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  return (
    <form action={createBoard}>
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
