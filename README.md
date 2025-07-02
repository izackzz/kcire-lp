# Agência Kcire – Landing Page & E‑commerce Ecosystem

> **Inovação & Credibilidade** em cada pixel. Este repositório contém todo o código‑fonte da landing page e dos módulos de e‑commerce que apresentam o ecossistema digital da Agência Kcire.

---

## ✨ Visão Geral

A Kcire cria **sites, lojas virtuais e identidades visuais** que combinam design ousado com engenharia de conversão. Esta landing page serve como vitrine dos nossos diferenciais – velocidade, acessibilidade e performance – e também como base escalável para futuros projetos.

### Objetivos do Projeto

- Comunicar, de forma direta, o posicionamento e os serviços da Kcire.
- Demonstrar autoridade por meio de cases, depoimentos e métricas.
- Coletar leads qualificados via CTA de contato.
- Ser o ponto de partida para projetos de clientes: fácil de clonar e adaptar.

---

## 🛠️ Tech Stack

| Camada          | Ferramenta                | Motivo                                  |
| --------------- | ------------------------- | --------------------------------------- |
| **Front‑end**   | **Next.js** 15 / React 18 | Roteamento híbrido, rendering otimizado |
|                 | **TypeScript**            | Tipagem estática → menos bugs           |
|                 | **Tailwind CSS**          | Produtividade + design consistente      |
| **Animações**   | Framer Motion / Gsap      | Scroll reveal & micro‑interações        |
| **Hospedagem**  | Vercel (Preview)          | CI/CD automático                        |
| **Lint/Format** | ESLint, Prettier          | Código limpo                            |

> **Nota**: O layout foi inspirado em paleta neon (roxo + verde‑água) para reforçar o tom futurista da marca.

---

## 🚀 Funcionalidades Principais

1. **Hero dinâmico** com badge & CTA destacado.
2. **Scroll text inquisitivo** (IntersectionObserver) reforçando dor e solução.
3. **Processo em 3 passos** animado com ícones.
4. **Carrossel de cases** e **depoimentos**.

---

## 🏃‍♂️ Começando

### Pré‑requisitos

- **Node.js** >= 18
- **npm** (ou pnpm/yarn)

```bash
# 1. Clone o repo
$ git clone https://github.com/***/kcire-lp.git
$ cd kcire-lp

# 2. Instale dependências
$ npm install

# 3. Inicie em dev
$ npm dev

# 4. Acesse http://localhost:3000
```

### Variáveis de Ambiente

Crie `.env.local`:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SENDGRID_API_KEY=************************
EMAIL_TO=contato@kcire.agency
```

---

## 📦 Scripts

| Comando     | Ação                        |
| ----------- | --------------------------- |
| `npm dev`   | Ambiente de desenvolvimento |
| `npm build` | Build de produção           |
| `npm start` | Servir build local          |
| `npm lint`  | ESLint                      |
| `npm test`  | Testes unitários            |

---

## 🗺️ Roadmap

- ***

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua branch (`git checkout -b feat/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: Minha nova feature'`)
4. Push (`git push origin feat/nova-feature`)
5. Abra um Pull Request

---

## 🔒 Licença

MIT © 2024 Agência Kcire

---

## 📫 Contato

Para dúvidas ou propostas: **[contato@kcire.agency](mailto:contato@kcire.agency)**
