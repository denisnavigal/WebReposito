import React from 'react';
import { Shield, Swords, Heart, Target, ScrollText, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-950">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
            className="w-full h-full object-cover opacity-20"
            alt="Background pattern"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-green-400 mb-6">Piccolo</h1>
          <p className="text-xl md:text-2xl text-green-200 max-w-2xl mx-auto">
            El Guerrero Namekiano que pasó de ser un temible enemigo a convertirse en uno de los
            protectores más nobles de la Tierra
          </p>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={<Shield className="w-8 h-8 text-green-400" />}
            title="Defensa"
            value="95/100"
          />
          <StatCard
            icon={<Swords className="w-8 h-8 text-green-400" />}
            title="Poder"
            value="88/100"
          />
          <StatCard
            icon={<Heart className="w-8 h-8 text-green-400" />}
            title="Regeneración"
            value="92/100"
          />
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 px-4 bg-green-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">Historia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1534447677768-be436bb09401"
                alt="Symbolic representation"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6 text-green-100">
              <p>
                Piccolo comenzó como la reencarnación de Piccolo Daimaku, jurando venganza contra Goku.
                Sin embargo, su destino cambió drásticamente al convertirse en el mentor de Gohan.
              </p>
              <p>
                A través de los años, Piccolo ha demostrado una evolución extraordinaria, tanto en poder
                como en carácter, convirtiéndose en uno de los guerreros Z más sabios y estratégicos.
              </p>
              <p>
                Su capacidad de fusión con otros Namekianos y su inquebrantable lealtad hacia sus
                aliados lo han convertido en un pilar fundamental en la defensa de la Tierra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Abilities Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AbilityCard
              icon={<Target className="w-6 h-6" />}
              title="Makankosappo"
              description="Técnica especial de rayo perforante que requiere concentración"
            />
            <AbilityCard
              icon={<ScrollText className="w-6 h-6" />}
              title="Regeneración"
              description="Capacidad de regenerar partes de su cuerpo dañadas en batalla"
            />
            <AbilityCard
              icon={<Users className="w-6 h-6" />}
              title="Fusión Namekiana"
              description="Poder para fusionarse con otros Namekianos y aumentar su fuerza"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-green-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>© Dragon Ball Universe - Piccolo Character Profile</p>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="bg-green-900/50 p-6 rounded-lg shadow-xl border border-green-700">
      <div className="flex items-center justify-between mb-4">
        {icon}
        <span className="text-2xl font-bold text-green-400">{value}</span>
      </div>
      <h3 className="text-xl font-semibold text-green-200">{title}</h3>
    </div>
  );
}

function AbilityCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-green-900/50 p-6 rounded-lg shadow-xl border border-green-700 hover:bg-green-800/50 transition-colors">
      <div className="text-green-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-green-300 mb-2">{title}</h3>
      <p className="text-green-100">{description}</p>
    </div>
  );
}

export default App;