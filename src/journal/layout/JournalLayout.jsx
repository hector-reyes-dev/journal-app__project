import PropTypes from "prop-types";
import { NavBar, SideBar } from "../components";

export const JournalLayout = ({ children }) => {
  return (
    <div className="w-full bg-slate-100 p-2">
      <NavBar />
      <div className="flex">
        <SideBar />
        <main className="w-2/3 flex-grow p-4">
          {/* toolbar */}

          {children}
        </main>
      </div>
    </div>
  );
};

JournalLayout.propTypes = {
  children: PropTypes.node,
};
