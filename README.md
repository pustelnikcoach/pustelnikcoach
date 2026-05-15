# Tvůj web — návod

Ahoj Petisi. Tenhle web spravuješ **přes Claude Code**. Stačí mu napsat česky, co chceš změnit, a on to udělá. Pak to bude na webu za ~1 minutu.

## Jak začít

1. Otevři **Terminal** (nebo iTerm)
2. Napiš:
   ```
   cd ~/cesta/k/pustelnikcoach
   ```
   (kam jsi naklonoval repo — řekne ti Luke při onboardingu)
3. Napiš:
   ```
   claude
   ```
   (spustí Claude Code v tomhle projektu)
4. Napiš mu, co chceš změnit (viz příklady níže)

---

## Co můžeš říct Claude Code — příklady

### Změnit cenu

> *"Změň cenu balíčku Hybrid Pro z 4390 na 4590"*
>
> *"Zvedni cenu osobního tréninku na 650 korun"*

### Přidat nového klienta do výsledků

> *"Přidej nového klienta. Jmenuje se Tomáš Novák, shodil z 95 na 78 kilo za 6 měsíců. Citát: 'Konečně mám systém, ke kterému se vracím.' Fotku ti za chvilku pošlu."*

Pak fotku přetáhni do okna Claude Code a napiš:

> *"Tady je ta fotka pro Tomáše"*

Claude ji uloží na správné místo.

### Vyměnit fotku

> *"Tady je nová fotka mě do hero sekce"*  (přetáhni soubor)

### Změnit text na webu

> *"V sekci O mně přepiš tu pasáž o Elements gymu — už tam netrénuju 2 roky, jenom v Orchardu"*
>
> *"Změň hlavní nadpis na 'Trenér, který tě bere vážně'"*

### Přidat balíček

> *"Přidej nový balíček 'Hybrid Starter' za 2 990 měsíc. Online komunikace, 1 osobní konzultace, 1 osobní trénink, tréninkový plán, suplementace."*

### Odebrat klienta z výsledků

> *"Smaž z výsledků Dominika, už nechce být na webu"*

### Změnit kontakt

> *"Změň můj telefon na 777 888 999"*
>
> *"Přidej do footru taky odkaz na YouTube: youtube.com/@petis"*

---

## Co Claude Code NEDĚLÁ sám od sebe

Pro tohle musí Luke (web ti dělal):

- Změna designu (barvy, fonty, layout)
- Úprava formuláře (přidat/odebrat krok)
- Změna logiky e-mailů
- Připojení vlastní domény

Když si nejsi jistý, **zeptej se Claude Code**:

> *"Můžeš změnit tohle, nebo mám napsat Lukovi?"*

Odpoví ti rovnou.

---

## Jak otestovat, že web funguje

1. Otevři `pustelnikcoach.vercel.app`
2. Vyplň formulář (klidně s falešnými údaji)
3. Do 1 minuty by ti měl přijít e-mail na `petrpustelnikcoach@gmail.com`
4. A klient (ty s falešným e-mailem) dostane autoresponder

---

## Pokud něco nefunguje

1. **Web je rozbitý** → napiš v Claude Code: *"Web se nenačítá, co se stalo?"*
2. **Formulář neposílá e-maily** → kontaktuj Luka
3. **Něco vypadá divně** → screenshot + *"Co je tohle?"* do Claude Code

---

## Kontakt na podporu

**Luke Přibyla** — web ti postavil
*(kontakt doplnit při předání)*
