import { Todo } from "..";
import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
  updateRequest,
} from "./base.api";

const basePrefix = "todo/";
export const getTodoList = async () => {
  const response = await getRequest<Todo[]>(basePrefix);

  return response;
};

export const addTodo = async (item: { todo: string }) => {
  const response = await postRequest<Todo>(basePrefix, {
    data: item,
  });

  return response;
};

export const markTodoComplete = async (id: number) => {
  const response = await patchRequest<Todo>(basePrefix + id + "/mark-complete");

  return response;
};

export const removeTodo = async (id: number) => {
  const response = await deleteRequest(basePrefix + id);

  return response;
};
