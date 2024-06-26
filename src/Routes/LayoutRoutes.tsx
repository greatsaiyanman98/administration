import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import routes from "./Route";
import useGetUser from "../hook/useGetUser";
import useGetOrg from "../hook/useGetOrg";
import useGetGroup from "../hook/useGetGroup";
import useGetTeammember from "../hook/useGetTeammember";
import useGetSport from "../hook/useGetSport";
import useGetTeam from "../hook/useGetTeam";
import useGetCompetition from "../hook/useGetCompetition";

const LayoutRoutes = () => {
  useGetCompetition();
  useGetUser();
  useGetGroup();
  useGetOrg();
  useGetSport();
  useGetTeam();
  useGetTeammember();

  return (
    <Routes>
      {routes.map(({ path, Component }, i) => (
        <Route element={<Layout />} key={i}>
          <Route path={path} element={Component} />
        </Route>
      ))}
    </Routes>
  );
};

export default LayoutRoutes;
