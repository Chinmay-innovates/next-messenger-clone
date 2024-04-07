import Sidebar from "@/app/components/sidebar/Sidebar";
import getUsers from "../actions/getUsers";
import UserList from "./components/UserList";

export default async function UserLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers()
  return (
    <Sidebar>
      <div className="h-full">
        {children}
        
        <UserList  items={users}/>
        </div>
    </Sidebar>
  );
}
