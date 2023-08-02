import { StarIcon } from "@heroicons/react/24/outline";

export const NothingSelectedView = () => {
  return (
    <div className="h-5/6 flex flex-col items-center justify-center bg-primary rounded-lg">
      <StarIcon className="mb-2 text-white w-8" />
      <p className="text-lg text-white">Selecciona o crea una entrada</p>
    </div>
  );
};
