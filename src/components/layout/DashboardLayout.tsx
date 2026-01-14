import { type ReactNode } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LayoutDashboard, Users, Package, LogOut, Settings } from "lucide-react";
import { Button } from "../retroui/Button";
import { Text } from "../retroui/Text";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("@ZeroP:token");
    navigate("/");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "Clientes", path: "/customers" },
    { icon: Package, label: "Produtos", path: "/products" },
    { icon: Settings, label: "Configurações", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-[#f0f0f0] flex font-head">
      <aside className="w-64 bg-white border-r-4 border-black flex flex-col">
        <div className="p-6 border-b-4 border-black">
          <Text as="h3" className="font-black uppercase tracking-tighter">ZeroP</Text>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 p-3 border-2 border-transparent hover:border-black hover:bg-violet-400 transition-all font-bold uppercase text-sm"
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t-4 border-black">
          <Button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-3 border-2 border-black"
          >
            <LogOut size={20} />
            Sair
          </Button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-21 bg-white border-b-4 border-black flex items-center justify-between px-8">
          <Text as="h2" className="font-bold uppercase">Visão Geral</Text>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border-2 border-black bg-yellow-400 rounded-full" />
            <span className="font-bold">Admin</span>
          </div>
        </header>

        <div className="p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}