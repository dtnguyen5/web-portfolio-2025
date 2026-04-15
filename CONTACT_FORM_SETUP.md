# Bezpečný kontaktní formulář - Nastavení

## Přehled

Tento formulář implementuje moderní přístup k bezpečnému odesílání e-mailů s použitím:
- **Next.js App Router** pro server a client stranu
- **Resend** pro spolehlivé odesílání e-mailů
- **react-hook-form** pro správu formuláře na klientovi
- **Zod** pro validaci schématu
- **Tailwind CSS** pro styling
- **Honeypot** pole pro ochranu před spamem

## Instalace balíčků

Balíčky jsou již nainstalovány. Pokud potřebujete znovu nainstalovat:

```bash
npm install resend react-hook-form zod @hookform/resolvers
```

## Konfiguraci prostředí

### 1. Resend API klíč

Zaregistrujte se na [Resend.com](https://resend.com) a získejte API klíč.

Přidejte do `.env.local` souboru:

```env
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL=your-email@example.com
```

### 2. Doménový e-mail (doporučeno)

Pro produkci nastavte vlastní doménu v Resend:
- Ověřte doménu v Resend
- Změňte v souboru `/src/app/api/send-email/route.ts`:

```typescript
from: 'noreply@vase-domena.cz' // Vašeho e-mailu správce
```

## Struktura souborů

```
src/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts          # Server Action pro odesílání
│   └── contacts/
│       └── page.tsx              # Kontaktní stránka
├── components/
│   └── ContactForm.tsx           # React komponenta formuláře
└── lib/
    └── validations.ts            # Zod schéma a typy
```

## Jak to funguje

### 1. Validace (Zod schema)
- Pole **name**: 2-100 znaků
- Pole **email**: Validní e-mailová adresa
- Pole **message**: 10-5000 znaků
- Pole **honeypot**: Musí být prázdné (detekce botů)

### 2. Klientská strana (react-hook-form)
- Validace dat před odesláním
- Zobrazování chyb u jednotlivých polí
- Automatické resetování po úspěšném odeslání
- Zákaz odesílání během procesu

### 3. Serverová strana (API route)
- Další ověření dat pomocí Zod
- Kontrola honeypot pole
- HTML escaping pro bezpečnost
- Odesílání e-mailu přes Resend

### 4. Bezpečnost
- **Honeypot pole**: Neviditelné pole, které by mělo zůstat prázdné. Boti ho vyplní.
- **HTML escaping**: Všechny uživatelské vstupy jsou escapovány v e-mailu
- **Validace na obou stranách**: Klient i server
- **Rate limiting**: Doporučeno přidat v produkci

## Stylování

Formulář používá Tailwind CSS. Pro přizpůsobení:

1. Otevřete `/src/components/ContactForm.tsx`
2. Upravte className hodnoty
3. Barvy jsou v Tailwind konfiguraci (`tailwind.config.ts`)

## Testování

### Lokální vývoj

```bash
npm run dev
```

Jděte na `http://localhost:3000/contacts`

### Testovací e-mail

Resend poskytuje testovací e-mailovou adresu pro vývojování:
```
delivered@resend.dev
```

## Chyby a řešení

### "RESEND_API_KEY is not defined"
- Zkontrolujte `.env.local` soubor
- Ujistěte se, že klíč je zkopírován správně
- Restartujte dev server po přidání env proměnné

### Formulář se neodesílá
- Otevřete DevTools → Network → Zkontrolujte request na `/api/send-email`
- Zkontrolujte Chrome Console pro chyby
- Ověřte, že `RESEND_API_KEY` je nastavený

### E-maily nejdou do inboxu, jdou do spamu
- Ověřte doménu v Resend
- Přidejte SPF, DKIM, DMARC záznamy
- Používejte vlastní e-mailem místo `noreply@resend.dev`

## Produkční nasazení

### Vor nasazením zkontrolujte:

1. **API klíč**: Nastavte v environment proměnných hostingu
2. **E-mail adresa**: Aktualizujte v `.env`
3. **Doména**: Ověřte v Resend
4. **Rate limiting**: Přidejte ochranu (např. Upstash Redis)
5. **Error handling**: Zaprotokolujte chyby do monitorovacího systému

### Příklad rate limiting s Upstash:

```typescript
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"),
});

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for");
  const { success } = await ratelimit.limit(ip);
  
  if (!success) {
    return NextResponse.json(
      { error: "Příliš mnoho pokusů" },
      { status: 429 }
    );
  }
  
  // ... zbytek kódu
}
```

## Užitečné odkazy

- [Resend Documentation](https://resend.com/docs)
- [react-hook-form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [Tailwind CSS](https://tailwindcss.com/)

## Podpora

Pokud máte otázky nebo problémy, zkontrolujte konzoli v prohlížeči a server logs.
