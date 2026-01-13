import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/retroui/Button";
import { Input } from "../components/retroui/Input";
import { Checkbox } from "../components/retroui/Checkbox";
import { Text } from "../components/retroui/Text";
import { apiFetch } from "@/lib/api";
import { Chrome, Apple } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      localStorage.setItem("@ZeroP:token", data.access_token);

      navigate("/dashboard");
    } catch (error: any) {
      alert(error.message || "Falha ao entrar. Verifique os dados.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-violet-400 flex items-center justify-center p-6 font-head">
      <div className="w-full max-w-md bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6">
        <header className="text-left">
          <h1 className="text-4xl font-semibold tracking-tighter">
            ZeroP
          </h1>
          <p className="mt-1 text-sm text-gray-700">Menos papel, mais performance.</p>
        </header>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="text-sm">E-mail</label>
            <Input
              type="email"
              placeholder="admin@crm.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <label className="text-sm font-bold">Senha</label>
              <a
                href="#"
                className="text-sm font-head hover:underline hover:underline-offset-2"
              >
                Esqueci a senha
              </a>
            </div>

            <Input
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox />
            <Text>Lembrar senha</Text>
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full mt-4 justify-center "
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>

        </form>
        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t-2 border-black"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 font-bold text-black">Ou entrar com</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button className="flex items-center justify-center gap-2 border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-bold text-sm">
            <Chrome size={18} /> Google
          </Button>
          <Button className="flex items-center justify-center gap-2 border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-bold text-sm">
            <Apple size={18} /> Apple
          </Button>
        </div>
      </div>
    </div>
  );
}