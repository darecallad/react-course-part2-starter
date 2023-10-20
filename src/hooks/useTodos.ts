import { useQuery } from "@tanstack/react-query";
import { CONST_QUERY_KEY } from "../constants";
import todoService, { Todo } from "../service/todoService";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CONST_QUERY_KEY,
    queryFn: todoService.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
