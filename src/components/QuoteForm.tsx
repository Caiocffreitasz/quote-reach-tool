import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { waHref } from "@/lib/business";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(80),
  phone: z.string().trim().min(8, "Informe um telefone válido").max(20),
  device: z.string().trim().min(2, "Selecione o tipo de aparelho").max(40),
  problem: z.string().trim().min(5, "Descreva o problema").max(500),
});

export function QuoteForm({ id = "orcamento" }: { id?: string }) {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      device: String(fd.get("device") ?? ""),
      problem: String(fd.get("problem") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Preencha todos os campos");
      return;
    }
    setLoading(true);
    const msg = `Olá! Meu nome é ${parsed.data.name}.\nAparelho: ${parsed.data.device}\nProblema: ${parsed.data.problem}\nTelefone: ${parsed.data.phone}`;
    window.open(waHref(msg), "_blank", "noopener");
    setTimeout(() => {
      setLoading(false);
      toast.success("Pedido enviado! Estamos abrindo o WhatsApp.");
      (e.target as HTMLFormElement).reset();
    }, 400);
  };

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="brutal-card p-6 sm:p-8 flex flex-col gap-4"
      aria-label="Formulário de orçamento"
    >
      <div>
        <h3 className="text-2xl sm:text-3xl">Pedir orçamento</h3>
        <p className="text-sm font-semibold text-chassis-dark mt-1 normal-case tracking-normal">
          Preencha os dados e entraremos em contato pelo WhatsApp.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Nome" name="name" placeholder="Seu nome" />
        <Field label="Telefone" name="phone" placeholder="(12) 98765-4321" type="tel" />
      </div>

      <div>
        <label htmlFor="device" className="block text-xs font-black uppercase tracking-widest mb-1.5">Aparelho</label>
        <select
          id="device"
          name="device"
          required
          aria-label="Aparelho"
          className="w-full bg-white border-2 border-grip rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-4 focus:ring-tool"
          defaultValue=""
        >
          <option value="" disabled>Selecione…</option>
          <option>Notebook</option>
          <option>Smartphone</option>
          <option>Tablet</option>
          <option>Outro</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-black uppercase tracking-widest mb-1.5">Problema</label>
        <textarea
          name="problem"
          required
          rows={4}
          maxLength={500}
          placeholder="Ex.: Tela quebrada, não liga, bateria não carrega…"
          className="w-full bg-white border-2 border-grip rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-4 focus:ring-tool resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-tool border-4 border-grip rounded-xl px-6 py-4 font-black uppercase tracking-wider text-lg shadow-brutal hover:translate-y-[3px] hover:shadow-brutal-sm active:translate-y-[6px] active:shadow-none transition-all disabled:opacity-60"
      >
        {loading ? "Enviando…" : "Enviar pelo WhatsApp"}
      </button>
      <p className="text-xs text-chassis-dark normal-case tracking-normal text-center font-semibold">
        Ao enviar, você será redirecionado para o WhatsApp.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-black uppercase tracking-widest mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full bg-white border-2 border-grip rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-4 focus:ring-tool"
      />
    </div>
  );
}
