import { redirect } from "next/navigation";
import LandingPage from "./landingPage/page";
import Boards from "./boards/page";

export default function Home() {
  return <LandingPage />;
}
