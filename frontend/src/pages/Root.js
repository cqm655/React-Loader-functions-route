import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Root() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />{" "}
        {/** defines where the content of child routes should be rendered */}
      </main>
    </>
  );
}
