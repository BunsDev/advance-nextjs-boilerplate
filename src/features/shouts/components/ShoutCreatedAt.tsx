import { formatDate } from "@/features/shouts/utils/";
import { getDateFnsLocale } from "@/utils/getDateFnsLocale";
import { format } from "date-fns";
import { FC } from "react";

type ShoutCreatedAtProps = {
  createdAt: Date;
  formatter?: "distanceToNow" | "full";
};

const ShoutCreatedAt: FC<ShoutCreatedAtProps> = async ({
  createdAt,
  formatter = "distanceToNow",
}) => {
  const date = new Date(createdAt);
  const locale = await getDateFnsLocale();
  let time;

  if (formatter === "distanceToNow") {
    time = formatDate(date, locale);
  }

  if (formatter === "full") {
    time = format(date, "p · MMM d, yyyy", { locale });
  }

  return <span className="text-sm font-light text-foreground/60">{time}</span>;
};

export default ShoutCreatedAt;
