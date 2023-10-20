import { useQuery } from "@tanstack/react-query";
import { CONST_QUERY_KEY } from "../constants";
import APIClient from "../service/apiClient";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const apiClient = new APIClient<Todo>("/todos");
const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CONST_QUERY_KEY,
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
