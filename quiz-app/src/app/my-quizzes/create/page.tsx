"use client";

import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import Input from "@/components/ui/SideInput";
import { v4 as uuidv4 } from "uuid";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/SideSelect";

type QuestionType = "multiple_choice" | "true_false";

type QuestionFormData = {
  id: string;
  type: QuestionType;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  rightAnswer: string;
};

type QuizFormData = {
  title: string;
  theme: string;
  questions: QuestionFormData[];
};

const CreateQuiz = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<QuizFormData>({
    defaultValues: { questions: [] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<QuizFormData> = (data) => {
    console.log("Quiz Data:", data);
  };

  return (
    <div className="flex flex-col mt-5 items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-[500px]">
        <h3 className="text-lg font-semibold">Quiz</h3>
        <div className="border-l-slate-700 border-l-2 p-5 my-2 rounded bg-gray-900 w-full mt-4 shadow-xl">
          <Input label="Title" id="title" {...register("title", { required: "Title is required" })} />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

          <Input label="Theme" id="theme" {...register("theme", { required: "Theme is required" })} />
          {errors.theme && <p className="text-red-500 text-sm">{errors.theme.message}</p>}
        </div>
        <h3 className="text-lg font-semibold">Questions</h3>
        {fields.map((field, index) => (
          <div key={field.id} className="border-l-dark border-l-2 p-5 my-2 rounded bg-gray-900 w-full shadow-xl">
            <label  className="block mb-2 text-sm font-medium text-white">Question {index+1}</label>
            <textarea
              maxLength={200}
              className="w-full h-32 block p-2.5 mb-4 resize-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              {...register(`questions.${index}.question`, { required: "Question is required" })}
            />
            <Input label="A" {...register(`questions.${index}.option1`, { required: "Is required" })} />
            <Input label="B" {...register(`questions.${index}.option2`, { required: "Is required" })} />
            <Input label="C" {...register(`questions.${index}.option3`, { required: "Is required" })} />
            <Input label="D" {...register(`questions.${index}.option4`, { required: "Is required" })} />
            <Select label="Right Answer" fields={['Option A', 'Option B', 'Option C', 'Option D']}{...register(`questions.${index}.rightAnswer`, { required: "Right answer is required" })} />
            <button type="button" onClick={() => remove(index)} className="text-red-500 mt-2 self-end">
              Remove Question
            </button>
          </div>
        ))}

        {fields.length < 15 && (
          <button
            type="button"
            onClick={() =>
              append({
                id: uuidv4(),
                type: "multiple_choice",
                question: "",
                option1: "",
                option2: "",
                option3: "",
                option4: "",
                rightAnswer: "",
              })
            }
            className="bg-green-500 text-white px-4 py-2 rounded mt-2"
          >
            Add Question
          </button>
        )}

        <Button type="submit" label={"Create Quiz"} />
      </form>
    </div>
  );
};

export default CreateQuiz;