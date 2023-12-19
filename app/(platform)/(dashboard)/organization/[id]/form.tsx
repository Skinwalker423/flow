"use client";

import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

const Form = () => {
  const initialState = {
    message: null,
    errors: {},
  };
  const [state, dispatch] = useFormState(
    createBoard,
    initialState
  );
  return (
    <form action={dispatch}>
      <input
        className='px-4 py-2 border border-blue-500'
        type='text'
        name='title'
        id='title'
        placeholder='enter board title'
      />
      {state?.errors?.title ? (
        <div>
          {state.errors.title.map((error: string) => (
            <p key={error} className='text-red-600'>
              {error}
            </p>
          ))}
        </div>
      ) : null}
      <Button type='submit' variant={"primary"}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
