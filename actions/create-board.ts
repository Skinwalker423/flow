import { db } from "@/lib/db";

export async function createBoard(formData: FormData) {
  "use server";

  const formTitle = formData.get("title") as string;
  console.log(
    "action triggered. Form data username",
    formTitle
  );

  const res = await db.board.create({
    data: {
      title: formTitle,
    },
  });

  console.log("response after creating a borar", res);
}
