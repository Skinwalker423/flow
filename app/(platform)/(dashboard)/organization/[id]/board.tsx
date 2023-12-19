import { Button } from "@/components/ui/button";
import React from "react";

interface BoardProps {
  id: string;
  title: string;
}

const Board = ({ id, title }: BoardProps) => {
  return (
    <form
      action=''
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
