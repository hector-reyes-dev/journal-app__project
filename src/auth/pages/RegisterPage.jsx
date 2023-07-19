import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form>
        <div className="w-full text-secondary flex flex-col gap-4">
          <label className="flex flex-col">
            Nombre completo:
            <input
              id="name"
              type="text"
              placeholder="Carol Nataly"
              className="border p-1 rounded"
            />
          </label>
          <label className="flex flex-col">
            Correo:
            <input
              id="email"
              type="email"
              placeholder="correo@gmail.com"
              className="border p-1 rounded"
            />
          </label>
          <label className="flex flex-col">
            Contraseña:
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              className="border p-1 rounded"
            />
          </label>
          <div className="flex flex-col items-center gap-2 mt-2">
            <button className="w-full bg-secondary text-white rounded p-2">
              <Link to="/auth/register">Crear cuenta</Link>
            </button>
            <p className="text-sm">
              ¿Ya tienes una cuenta?
              <Link to="/auth/login" className="font-semibold ml-2">
                Ingresar
              </Link>
            </p>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};
