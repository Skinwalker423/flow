import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

const OrganizationPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const boards = await db.board.findMany({});
  console.log("boards", boards);

  return (
    <div className='flex flex-col gap-2'>
      <form action={createBoard}>
        <input
          className='px-4 py-2 border border-blue-500'
          type='text'
          name='title'
          id='title'
          placeholder='enter board title'
        />
        <input
          className='hidden'
          type='text'
          name='orgId'
          id='orgId'
          value={params.id}
          readOnly
        />
        <Button type='submit' variant={"primary"}>
          Submit
        </Button>
      </form>
      <div className='space-y-2'>
        {boards.map((board) => {
          return (
            <div key={board.id}>Title: {board.title}</div>
          );
        })}
      </div>
    </div>
  );
};

export default OrganizationPage;
