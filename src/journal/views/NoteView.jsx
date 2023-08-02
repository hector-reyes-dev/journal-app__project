import { FolderArrowDownIcon } from "@heroicons/react/24/outline";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-2">
        <span className="font-light">28 de agosto, 2023</span>
        <button className="flex p-2 items-center text-primary">
          <FolderArrowDownIcon className="mr-2 w-6" />
          <span className="font-bold">Guardar</span>
        </button>
      </div>
      <div>
        <label htmlFor="title-area">Título</label>
        <textarea
          id="title-area"
          rows={1}
          style={{ resize: "none" }}
          className="w-full mb-2 p-2 rounded border-0"
          placeholder="Ingrese un titulo"
        ></textarea>
        <label htmlFor="description-area">Descripción</label>
        <textarea
          id="description-area"
          rows={3}
          className="w-full mb-2 p-2 rounded border-0"
          placeholder="Ingrese una Descripción"
        ></textarea>
      </div>

      <ImageGallery />
    </section>
  );
};
