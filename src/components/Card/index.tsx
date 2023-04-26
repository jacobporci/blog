import { ShowResponse } from "@/pages/api/netflix/show/[id]";
import { api } from "@/utils/api";
import { AxiosResponse } from "axios";
import Image from "next/image";
import { useQuery } from "react-query";

interface Props {
  id: string;
}

const fetchCard = async ({ queryKey }: { queryKey: string[] }) => {
  const [_, id] = queryKey;
  try {
    const { data }: AxiosResponse<ShowResponse> = await api.get(
      `/netflix/show/${id}`
    );
    return data.data;
  } catch (error) {
    console.log("error", error);
    throw new Error("Something went wrong");
  }
};
export default function Card({ id }: Props) {
  const { data, isLoading, error } = useQuery(["card", id], fetchCard);

  if (isLoading || error) {
    return (
      <div
        className="text-blue-800 flex items-center justify-center border-2 rounded-xl"
        style={{ height: 300, width: 200 }}
      >
        ...loading...
      </div>
    );
  }
  return data ? (
    <div className="text-blue-800 rounded-xl">
      {/* <h1>{data?.name}</h1> */}
      <Image
        className="rounded-xl"
        src={`${data?.imageSrc}?random=${data?.id}`}
        height={300}
        width={200}
        alt={data?.name}
      />
    </div>
  ) : (
    <>heloo</>
  );
}
