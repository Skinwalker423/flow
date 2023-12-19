"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Minimum length must be 3 characters",
  }),
});

export async function createBoard(formData: FormData) {
  "use server";

  const orgId = formData.get("orgId");

  const { title } = CreateBoard.parse({
    title: formData.get("title"),
  });
  console.log(
    "action triggered. Form data board title",
    title
  );
  console.log("orgId", orgId);

  const res = await db.board.create({
    data: {
      title,
    },
  });

  revalidatePath(`/organization/${orgId}`);

  console.log("response after creating a borar", res);
}
