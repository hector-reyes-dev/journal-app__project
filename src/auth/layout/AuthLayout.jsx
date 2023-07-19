import PropTypes from "prop-types";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary p-4">
      <section className="shadow-lg bg-white p-4 rounded-md w-4/5 md:w-1/3">
        <p className="text-xl font-bold mb-4">{title}</p>
        {children}
      </section>
    </div>
  );
};

AuthLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
