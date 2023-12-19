"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Minimum length must be 3 characters",
  }),
});

export async function createBoard(
  previousState: State,
  formData: FormData
) {
  "use server";

  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields",
    };
  }

  const { title } = validatedFields.data;
  try {
    const res = await db.board.create({
      data: {
        title,
      },
    });
  } catch (error: any) {
    return {
      message: `Problem creating board, ${error.message}`,
    };
  }

  revalidatePath(
    `/organization/org_2ZNSC1WBQLzDpPd6L3117fWlmug`
  );
  redirect(`/organization/org_2ZNSC1WBQLzDpPd6L3117fWlmug`);
}
