import { getValidatorErrorMessages } from "@/commons/index";

export const TodoRegisterOptions = {
  ...getValidatorErrorMessages("todoTitle", "", ["required"]),
};
