import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Dashboard() {
  const stats = [
    { label: "Clientes Ativos", value: "128", color: "bg-blue-400" },
    { label: "Vendas (Mês)", value: "R$ 12.450", color: "bg-green-400" },
    { label: "Pendências", value: "12", color: "bg-orange-400" },
  ];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${stat.color}`}
          >
            <p className="font-bold uppercase text-sm opacity-80">{stat.label}</p>
            <p className="text-4xl font-black mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="text-xl font-bold uppercase mb-4">Atividade Recente</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 border-2 border-black flex justify-between items-center bg-gray-50">
              <span className="font-bold text-sm">Novo cliente cadastrado: João Silva</span>
              <span className="text-xs font-bold text-gray-500">Há 2 horas</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}