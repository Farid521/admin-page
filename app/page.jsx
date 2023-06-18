"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [value, setValue] = useState({
    bodyPart: "",
    equipment: "",
    gifUrl: "",
    id: "",
    name: "",
    target: "",
  });

  // const { push } = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const jsonData = JSON.stringify(value); // Mengubah value menjadi JSON
      await fetch("https://happy-puce-ox.cyclic.app/mainPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });
     
    } catch (err) {
      console.log(err);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main>
      <nav className="w-full h-14 pb-1 bg-sky-600 flex justify-around items-center font-sans text-3xl">
        <a href="" className="font-semibold">
          Data
        </a>
        <a href="" className="font-semibold">
          Test
        </a>
      </nav>
      <form
        method="post"
        className="max-w-xl mx-auto mt-14"
        onSubmit={submitHandler}
      >
        <div className="mb-6">
          <input
            type="text"
            name="bodyPart"
            placeholder="body part"
            value={value.bodyPart}
            onChange={changeHandler}
            required
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            name="equipment"
            placeholder="equipment"
            value={value.equipment}
            onChange={changeHandler}
            required
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            name="gifUrl"
            placeholder="gifUrl"
            value={value.gifUrl}
            onChange={changeHandler}
            required
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            name="id"
            placeholder="id"
            value={value.id}
            onChange={changeHandler}
            required
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={value.name}
            onChange={changeHandler}
            required
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            name="target"
            placeholder="target"
            value={value.target}
            onChange={changeHandler}
            required
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="submit-button px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
