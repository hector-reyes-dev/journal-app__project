import { BookmarkIcon } from "@heroicons/react/24/outline";

export const SideBar = () => {
  return (
    <aside className="w-1/4 m-2 p-4 h-screen block bg-white rounded-lg">
      <h6 className="text-lg font-bold mb-4">Carol Nataly</h6>
      <hr />
      <ul>
        {["Enero", "Febrero", "Marzo", "Abril"].map((text) => (
          <li key={text}>
            <button className="flex mt-4 items-start">
              <BookmarkIcon className="mr-2 mt-2 text-purple w-8" />
              <div className="flex flex-col items-start">
                <span className="font-bold">{text}</span>
                <span className="text-sm text-left">
                  Ad officia aute mollit elit laborum consequat.
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};
