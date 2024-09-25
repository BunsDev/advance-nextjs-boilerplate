"use server";

import { insertShoutSchema } from "@/drizzle/schema/shout";
import { protectedProcedure } from "@/features/shouts/procedures/protected";
import { createShoutUseCase } from "@/features/shouts/use-cases/shout";
import { revalidatePath } from "next/cache";

export const createShoutAction = protectedProcedure
  .input(insertShoutSchema)
  .handler(async ({ input, ctx }) => {
    try {
      await createShoutUseCase(ctx.user.id, input);
      revalidatePath("/shouts");
    } catch (error) {
      throw error;
    }
  });
