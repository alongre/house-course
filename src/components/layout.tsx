import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";
import { useAuth } from "src/auth/useAuth";

const Layout: FunctionComponent = (props) => {
  const { user, authenticated, logout } = useAuth();
  return (
    <div className="bg-gray-900 max-w-screen-2xl mx-auto text-white">
      <nav className="bg-gray-800" style={{ height: "64px" }}>
        <div className="px-6 flex items-center justify-between h-16">
          <Link href="/">
            <a>
              <img src="/home-color.svg" alt="home" className="inline w-6" />
            </a>
          </Link>
          {authenticated ? (
            <>
              <Link href="/houses/add">
                <a>Add House</a>
              </Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link href="/auth">
              <a>Login/ Signup</a>
            </Link>
          )}
        </div>
      </nav>
      <main style={{ minHeight: "calc(100vh - 64px)" }}>{props.children}</main>
    </div>
  );
};

export default Layout;
