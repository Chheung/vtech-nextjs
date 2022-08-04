import { NextPage } from "next";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Todo } from "@/commons";
import styles from "@/styles/Home.module.css";
import InputWithValidator from "@/components/InputWithValidator";
import TodoBanner from "@/components/Pages/Home/TodoBanner";
import { TodoRegisterOptions } from "@/validators/TodoValidator";

const Home: NextPage = () => {
  const formRegisterOptions = TodoRegisterOptions;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [todoList, settodoList] = useState<Todo[]>([]);

  const onSubmit = (data: any) => {
    if (!data) return;

    settodoList([{ todo: data.todoTitle }, ...todoList]);
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl">Todo list</h1>
      <div className={styles.todoForm + " flex mt-5"}>
        <form
          id="todoForm"
          className="w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="todoTitle"
            control={control}
            defaultValue=""
            rules={formRegisterOptions.todoTitle}
            render={({ field }) => (
              <InputWithValidator {...field} error={errors.todoTitle} />
            )}
          />
        </form>

        <button
          className={
            styles.addButton +
            " mt-2 ml-2 px-10 bg-blue-400 text-white bg-rounded rounded-lg"
          }
          type="submit"
          form="todoForm"
        >
          Add
        </button>
      </div>
      {todoList.reverse().map((item) => {
        return (
          <div key={item.todo}>
            <TodoBanner item={item}></TodoBanner>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
