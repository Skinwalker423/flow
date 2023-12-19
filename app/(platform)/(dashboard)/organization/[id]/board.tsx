import { Button } from "@/components/ui/button";
import { deleteBoard } from "@/actions/delete-board";

interface BoardProps {
  id: string;
  title: string;
  orgId: string;
}

const Board = ({ id, title, orgId }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(
    null,
    id,
    orgId
  );
  return (
    <form
      action={deleteBoardWithId}
      className='flex gap-2 items-center py-2 px-4 w-full justify-between bg-neutral-100 text-blue-900'
    >
      <p>Title: {title}</p>
      <Button
        variant={"destructive"}
        type='submit'
        size={"sm"}
      >
        Delete
      </Button>
    </form>
  );
};

export default Board;
