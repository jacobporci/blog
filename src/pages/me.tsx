import { List } from "@/components/List";

export default function Me() {
  return (
    <List
      items={[
        {
          title: "Samsung",
          description: "Junior Software Engineer",
          content: "Junior Software Engineer",
          theme: "dark",
        },
        {
          title: "Emapta/Whispir",
          description: "Mid-level Software Engineer",
          content: "Mid-level Software Engineer",
          theme: "dark",
        },
        {
          title: "MadeNeat",
          description: "Software Developer",
          content: "Software Developer",
          theme: "dark",
        },
      ]}
    />
  );
}
