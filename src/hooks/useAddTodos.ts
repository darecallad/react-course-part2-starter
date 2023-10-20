import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import { CONST_QUERY_KEY } from "../constants";
import APIClient from "../service/apiClient";
interface AddTodoContext {
  previousTodo: Todo[];
}

const apiClient = new APIClient<Todo>("/todos");
const useAddTodos = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: apiClient.post,

    onMutate: (newTodo: Todo) => {
      const previousTodo =
        queryClient.getQueryData<Todo[]>(CONST_QUERY_KEY) || [];
      queryClient.setQueryData<Todo[]>(CONST_QUERY_KEY, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { previousTodo };
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CONST_QUERY_KEY, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CONST_QUERY_KEY, context.previousTodo);
    },
  });
};

export default useAddTodos;
