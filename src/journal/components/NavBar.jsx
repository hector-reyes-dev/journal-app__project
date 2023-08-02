import {
  Bars3BottomLeftIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";

export const NavBar = () => {
  return (
    <nav className="px-8 mx-2 py-2 flex items-center justify-between bg-primary rounded-lg">
      <div className="flex gap-4">
        <Bars3BottomLeftIcon className="mr-2 text-white w-6" />
        <h3 className="text-white font-bold text-lg">JournalApp</h3>
      </div>
      <ArrowRightOnRectangleIcon className="mr-2 text-error w-6" />
    </nav>
  );
};
