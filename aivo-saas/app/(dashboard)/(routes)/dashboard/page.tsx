import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <p>Dashboard Page (protected)</p>
      <UserButton afterSignOutUrl= "/landing"/>
    </div>
  );
};

export default DashboardPage;
