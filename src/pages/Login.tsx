import { Button } from "../components/retroui/Button"
import { Input } from "../components/retroui/Input"
import { Checkbox } from "../components/retroui/Checkbox"
import { Text } from "../components/retroui/Text"

export default function Login() {
  return (
    <div className="min-h-screen bg-violet-600 flex items-center justify-center p-6 font-head]">
      <div className="w-full max-w-md bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6">
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-tighter ">
            ZeroP
          </h1>
          <p className="mt-2 font-bold text-gray-700">Bem-vindo de volta!</p>
        </header>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm">E-mail</label>
            <Input
              type="email"
              placeholder="admin@crm.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm">Senha</label>
            <Input
              type="password"
              placeholder="••••••••"
            />
          </div>
          <div className="flex gap-2 ">
            <Checkbox />
            <Text>Lembrar senha</Text>
          </div>
          <Button type="submit" className="w-full mt-4 justify-center bg-violet-600 text-white hover:bg-violet-700">Entrar</Button>
        </form>

        <div className="flex justify-between items-center text-xs font-semibold font-[archivo]">
          <a href="#" className="hover:underline hover:underline-offset-2 font-head">Esqueci a senha</a>
         {/*  <span className="text-gray-400">v.1.0.0</span> */}
        </div>
      </div>
    </div>
  )
}