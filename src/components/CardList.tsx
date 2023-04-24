import { Genre } from "@/pages/api/netflix/genres";
import Card from "./Card";

interface Props {
  data: Array<Genre>;
}
export default function CardList({ data }: Props) {
  return (
    <div>
      {data.map(({ name, shows }) => (
        <div key={name}>
          <h1 className="text-black text-xl font-bold">{name}</h1>
          <div className="flex gap-5">
            {shows.map((id) => (
              <Card key={id} id={id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
