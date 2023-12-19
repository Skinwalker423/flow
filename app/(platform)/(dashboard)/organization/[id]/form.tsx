"use client";

import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

const Form = () => {
  return (
    <form action={createBoard}>
      <input
        className='px-4 py-2 border border-blue-500'
        type='text'
        name='title'
        id='title'
        placeholder='enter board title'
      />
      <Button type='submit' variant={"primary"}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
