import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Root() {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading ...</p>} */}
        <Outlet />
        {/** defines where the content of child routes should be rendered */}
      </main>
    </>
  );
}
