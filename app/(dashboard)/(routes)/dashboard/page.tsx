import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
        DashboardPage (Protected)
        <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default DashboardPage;
