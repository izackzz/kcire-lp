export default function TestColorsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-6 p-8 bg-kcire-1 text-kcire-w">
      <h1 className="text-4xl font-bold">Teste de Cores kcire</h1>

      <div className="w-full max-w-md space-y-4">
        <div className="p-4 rounded bg-kcire-1 text-kcire-w">bg-kcire-1 / text-kcire-w</div>
        <div className="p-4 rounded bg-kcire-2 text-kcire-w">bg-kcire-2 / text-white</div>
        <div className="p-4 rounded bg-kcire-3 text-white">bg-kcire-3 / text-white</div>
        <div className="p-4 rounded bg-kcire-4 text-white">bg-kcire-4 / text-white</div>
        <div className="p-4 rounded bg-white text-kcire-4 border border-kcire-2">
          bg-white / text-kcire-4 / border-kcire-2
        </div>
      </div>
    </main>
  )
}
