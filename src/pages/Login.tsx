import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/retroui/Button";
import { Input } from "../components/retroui/Input";
import { Checkbox } from "../components/retroui/Checkbox";
import { Text } from "../components/retroui/Text";
import { apiFetch } from "@/lib/api"; 

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
    <div className="min-h-screen bg-violet-600 flex items-center justify-center p-6 font-head">
      <div className="w-full max-w-md bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6">
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-tighter">
            ZeroP
          </h1>
          <p className="mt-2 font-bold text-gray-700">Bem-vindo de volta!</p>
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
            <label className="text-sm">Senha</label>
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
            className="w-full mt-4 justify-center bg-violet-600 text-white hover:bg-violet-700"
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <div className="flex justify-between items-center text-xs font-semibold font-[archivo]">
          <a href="#" className="hover:underline hover:underline-offset-2 font-head">Esqueci a senha</a>
        </div>
      </div>
    </div>
  );
}