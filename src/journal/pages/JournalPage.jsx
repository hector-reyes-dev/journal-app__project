import { PlusIcon } from "@heroicons/react/24/solid";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { ImageGallery } from "../components";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <ImageGallery /> */}
      <NothingSelectedView />
      {/* <NoteView /> */}
      <button className="bg-error text-white p-3 rounded-xl hover:opacity-90 fixed flex items-center right-8 bottom-8">
        <PlusIcon className="text-white w-6" />
        <span className="ml-1">Crear nota</span>
      </button>
    </JournalLayout>
  );
};
