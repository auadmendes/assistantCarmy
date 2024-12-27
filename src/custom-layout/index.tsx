"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import usersGlobalStore from "@/store/users-store";
import { saveAndGetCurrentUser } from "@/actions/user";
import { SaveUserResponse } from "@/types/response";
import { message, Spin } from "antd";
import { Header } from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

interface CustomLayoutProps {
  children: React.ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { setLoggedInUserData } = usersGlobalStore();

  const [loading, setLoading] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false); // Client-side mounting flag

  const setTitle = (newTitle: string) => {
    document.title = newTitle;
  };

  useEffect(() => {
    // This effect ensures we only set the loading state after the component mounts on the client
    setIsMounted(true);

    const fetchLoggedInUser = async () => {
      setLoading(true);
      const response: SaveUserResponse = await saveAndGetCurrentUser();

      if (response.success && response.data) {
        setLoggedInUserData(response.data);
        setTitle(`Welcome, ${response.data.name}`);
      } else {
        message.error(response.message || "Failed to fetch user data.");
        //router.push("/sign-in"); // Redirect to sign-in if fetching user data fails
      }
      setLoading(false);
    };

    if (!pathname.includes("/sign-in") && !pathname.includes("/sign-up")) {
      fetchLoggedInUser();
    } else {
      setLoading(false);
    }
  }, [pathname, router, setLoggedInUserData]);

  if (!isMounted) {
    // Ensure the component does not render on the server (hydration error fix)
    return null;
  }

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Spin /> {/* Show spinner only on client-side */}
      </div>
    );
  }

  return (
    <div className="w-screen bg-primary min-h-screen">
      <div className="w-screen p-3 flex flex-col">
        <div className="w-full">
          <Header />
        </div>

        <div className="p-1 w-full">{children}</div>
      </div>
      {!pathname.includes("/mechanic") && ( // Conditionally render Footer
      <div>
        <Footer />
      </div>
    )}
    </div>
  );
};

export default CustomLayout;
