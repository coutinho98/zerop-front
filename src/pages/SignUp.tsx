import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/retroui/Button";
import { Input } from "../components/retroui/Input";
import { apiFetch } from "@/lib/api";
import { Chrome, Apple, ArrowLeft } from "lucide-react";

export default function SignUp() {
    const [formData, setFormData] = useState({
        businessName: "",
        businessType: "PET_STORE",
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSignUp(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        try {
            await apiFetch("/auth/signup", {
                method: "POST",
                body: JSON.stringify(formData),
            });

            alert("Conta criada com sucesso! Agora faça seu login.");
            navigate("/");
        } catch (error: any) {
            alert(error.message || "Erro ao criar conta.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-violet-400 flex items-center justify-center p-6 font-head">
            <div className="w-full max-w-md bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6">
                <header className="text-left">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-1 cursor-pointer text-xs font-bold mb-4 hover:underline hover:underline-offset-4 hover:text-violet-600 transition-colors"
                    >
                        <ArrowLeft size={14} /> Voltar ao login
                    </button>
                    <h1 className="text-4xl font-semibold tracking-tighter">
                        ZeroP
                    </h1>
                    <p className="mt-1 text-sm text-gray-700">Menos papel, mais performance.</p>
                </header>

                <form className="space-y-4" onSubmit={handleSignUp}>
                    <div className="space-y-2">
                        <label className="text-sm font-bold">Nome da Empresa</label>
                        <Input
                            placeholder="Ex: Pet Shop Astral"
                            required
                            value={formData.businessName}
                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold">Tipo de Negócio</label>
                        <select
                            className="w-full border-2 border-black p-2 bg-white font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none outline-none transition-all"
                            value={formData.businessType}
                            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        >
                            <option value="PET_STORE">Pet Shop</option>
                            <option value="GYM">Academia</option>
                            <option value="OTHER">Outro</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold">E-mail</label>
                        <Input
                            type="email"
                            placeholder="admin@empresa.com"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold">Senha</label>
                        <Input
                            type="password"
                            placeholder="••••••••"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 justify-center "
                    >
                        {loading ? "Criando conta..." : "Criar minha conta"}
                    </Button>
                </form>

                <div className="relative my-2">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t-2 border-black"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 font-bold text-black">Ou criar com</span>
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