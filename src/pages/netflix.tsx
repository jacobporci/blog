import { api } from "@/utils/api";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { GenresResponse } from "./api/netflix/genres";
import CardList from "@/components/CardList";

const fetchGenres = async () => {
  try {
    const { data }: AxiosResponse<GenresResponse> = await api.get(
      `/netflix/genres`
    );
    return data.data;
  } catch (error) {
    console.log("error", error);
    throw new Error("Something went wrong");
  }
};

export default function Netflix() {
  const { data, isLoading } = useQuery(["netflix"], fetchGenres);
  return (
    <div className="px-20 py-5">
      {isLoading ? <div>...loading</div> : data && <CardList data={data} />}
    </div>
  );
}
