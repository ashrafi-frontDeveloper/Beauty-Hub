import { Outlet } from "react-router";
import Sidebar from "../common/Sidebar/Sidebar"

export default function AppLayout() {
  return (
        <main>
            <Sidebar />
            <section className="container mx-auto  py-4" id="content">
                <Outlet />
            </section>
        </main>
  )
}