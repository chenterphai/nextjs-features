import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-lg rounded-xl p-4 w-[300px] h-64 flex flex-col space-y-4 items-center">
          <h1>Button</h1>
          <Button label="Follow" className="bg-green-500 text-white px-4 py-2 rounded-xl" />
        </div>
      </div>
    </>
  );
}
