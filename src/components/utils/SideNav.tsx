import { NavLink } from "react-router-dom";

export function SideNav() {
  return (
    <>
      <nav className={"p-4 border-solid border-r-2"}>
        <NavLink
          className={({ isActive }) => {
            return `block m-5 hover:text-amber-300 hover:underline ${
              isActive ? "text-yellow-400" : "text-white"
            }`;
          }}
          to={`./side-nav`}
        >
          Side Nav
        </NavLink>
      </nav>
    </>
  );
}
