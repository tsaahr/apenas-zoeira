"use client";

import { useState } from "react";
import { Heart, XCircle } from "lucide-react";

export default function PedidoAlice() {
  const [resposta, setResposta] = useState("");
  const [permitido, setPermitido] = useState<boolean | null>(null);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 p-6 text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Alice, você deixa eu ir fazer a prova do meu curso hoje às 18:30? 🥺
      </h1>
      <div className="flex gap-6">
        <button
          className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 flex items-center gap-2"
          onClick={() => {
            setResposta("Muito obrigado, meu amor! ❤️");
            setPermitido(true);
          }}
        >
          <Heart className="w-6 h-6" /> Sim
        </button>
        <button
          className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 flex items-center gap-2"
          onClick={() => {
            setResposta("Tu é muito bbc ein 😭");
            setPermitido(false);
          }}
        >
          <XCircle className="w-6 h-6" /> Não
        </button>
      </div>
      {resposta && (
        <div className="mt-6 text-xl font-bold text-gray-900 flex items-center gap-3">
          {permitido ? <Heart className="w-8 h-8 text-red-500" /> : <XCircle className="w-8 h-8 text-red-500" />}
          <p>{resposta}</p>
        </div>
      )}
    </div>
  );
}
