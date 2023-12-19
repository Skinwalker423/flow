import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Form from "./form";

const OrganizationPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const boards = await db.board.findMany({});
  console.log("boards", boards);

  return (
    <div className='flex flex-col gap-2'>
      <Form />
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
