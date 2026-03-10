/* =============================================
   Expat.GH — Main JavaScript
   ============================================= */

/* ---- ARTICLE DATA ---- */
const ARTICLES = {
  remit: {
    cat: 'Finance · Breaking',
    gradient: 'linear-gradient(135deg,#0d2818,#1a1a0a)',
    title: 'African Diaspora Remittances Hit $100B Record — But Fees Still Swallow 8% Per Transfer',
    meta: '<strong>By Kwame Asante</strong> · March 10, 2026 · 6 min read',
    body: `
      <p>The African diaspora sent a record $100 billion home in 2024, surpassing foreign direct investment and official development aid combined. Yet the World Bank reports the average cost of sending $200 to sub-Saharan Africa remains 8.2% — more than double the 3% UN Sustainable Development Goal target.</p>
      <p>That gap costs African families an estimated <strong>$8 billion every year</strong>. The money doesn't disappear — it flows to banks, legacy transfer operators, and currency desks that have faced little competitive pressure for decades.</p>
      <p>Fintech challengers like Lemfi, Chipper Cash, and Grey Finance have entered the space with mobile-first products designed specifically for African corridors. But legacy operators still control ~60% of volume.</p>
      <p><strong>What you should do now:</strong> Compare your current provider against at least two alternatives before your next transfer. A 2% difference on a $500 monthly send saves $120/year — over $1,000 in a decade.</p>
    `
  },
  visa: {
    cat: 'Visa & Travel',
    gradient: 'linear-gradient(135deg,#1a1200,#0d0d1a)',
    title: 'UAE Launches 10-Year Golden Visa for African Professionals — Full Requirements',
    meta: '<strong>By Sarah Mensah-Bonsu</strong> · March 9, 2026 · 4 min read',
    body: `
      <p>The United Arab Emirates has expanded its Golden Visa program to specifically include skilled professionals from African nations. Engineers, doctors, researchers, and entrepreneurs can now apply for 10-year residency with <strong>no employer sponsorship required</strong>.</p>
      <p>To qualify, applicants need a monthly salary of at least AED 30,000 (~$8,200), a valid UAE employment contract, or proof of business ownership with a minimum capital of AED 500,000.</p>
      <p>Applications are processed through the ICA Smart Services portal. Processing time averages 30 business days. This is a significant shift from the traditional UAE work permit model that tied workers to specific employers.</p>
      <p><strong>Action step:</strong> Gather your salary certificates, employment contract, and passport before applying. The portal can be found at smartservices.ica.gov.ae.</p>
    `
  },
  tax: {
    cat: 'Finance',
    gradient: 'linear-gradient(135deg,#1a0000,#0d0d0d)',
    title: "South Africa's Expat Tax 2026: What Changed and What You Must File Now",
    meta: '<strong>By Thomas Dlamini</strong> · March 9, 2026 · 5 min read',
    body: `
      <p>SARS is now actively auditing non-resident accounts for the first time since the 2020 policy change. South African tax residents living abroad must file an annual return and either prove tax residency in another country, or formally cease SA tax residency.</p>
      <p>Penalties for non-filing: up to <strong>20% of outstanding tax plus interest</strong>. SARS has signed data-sharing agreements with 65 countries — income concealment is increasingly difficult.</p>
      <p>If you earn over R1.25 million abroad annually, the exemption that previously applied has now tightened significantly. Get specialist advice immediately.</p>
      <p><strong>Immediate action:</strong> If you haven't filed since 2020, consult a registered SA tax practitioner. The voluntary disclosure program still offers reduced penalties for self-reporting.</p>
    `
  },
  bank: {
    cat: 'Finance',
    gradient: 'linear-gradient(135deg,#0d1520,#0d0d0d)',
    title: 'The 5 Cheapest Ways to Send Money to Africa in 2026 — Ranked by Real Total Cost',
    meta: '<strong>AfriDiaspora Staff</strong> · March 9, 2026 · 5 min read',
    body: `
      <p>We sent $200 to Ghana, Nigeria, and Kenya using 12 different services and measured total cost — including both fees AND exchange rate margin.</p>
      <p><strong>1. Lemfi</strong> — Average total cost: 1.4%. No transfer fees, interbank rate. Best for UK/Canada to West Africa.<br>
      <strong>2. Grey Finance</strong> — 1.8%. Strong for Nigeria. USD/GBP/EUR accounts included.<br>
      <strong>3. Chipper Cash</strong> — 2.1%. Best mobile UX. Pan-African coverage.<br>
      <strong>4. Wise</strong> — 2.8%. Transparent, reliable. Best for South Africa and Kenya.<br>
      <strong>5. WorldRemit</strong> — 3.5%. Widest cash pickup network for recipients without bank accounts.</p>
      <p>The worst performer: a major UK high-street bank charged an average of <strong>9.4%</strong> total cost. If you're still sending through a bank, you are leaving significant money on the table every single month.</p>
    `
  },
  uk: {
    cat: 'Expat Life · UK',
    gradient: 'linear-gradient(135deg,#08080f,#0d0d0d)',
    title: 'UK Immigration Changes 2026: What African Families Must Act On Now',
    meta: '<strong>By Adaeze Okafor</strong> · March 8, 2026 · 5 min read',
    body: `
      <p><strong>Skilled Worker visa salary threshold:</strong> Raised to £38,700 for most roles (up from £26,200), effective April 2026. Care sector roles have a separate track.</p>
      <p><strong>Family visas:</strong> The minimum income to sponsor a spouse/partner is now £29,000, rising to £38,700 by 2027. Thousands of pending applications are directly affected.</p>
      <p><strong>Graduate visa:</strong> Duration reduced from 2 years to 18 months for most degrees. STEM postgraduate students retain 2 years.</p>
      <p><strong>Settlement (ILR):</strong> The 5-year continuous residence requirement remains. Absences above 180 days in any 12-month period reset the clock — track this carefully if you travel frequently to Africa.</p>
    `
  },
  kenya: {
    cat: 'Visa & Travel',
    gradient: 'linear-gradient(135deg,#1a0d00,#0d0d0d)',
    title: "Kenya's Digital Nomad Visa Is Open: Who Qualifies, What It Costs, How to Apply",
    meta: '<strong>By Wanjiru Kamau</strong> · March 8, 2026 · 4 min read',
    body: `
      <p>Kenya's 12-month Digital Nomad Visa launched in January 2026. It targets remote workers, freelancers, and online entrepreneurs working for foreign clients or employers.</p>
      <p>Requirements: proof of remote employment or freelance contracts, <strong>monthly income of at least $1,500 USD</strong>, valid health insurance, and a clean criminal record. The application is entirely online through the eCitizen portal.</p>
      <p>The visa allows multiple entries, no work permit required for foreign-source income, and can be renewed. It does not automatically grant Kenyan tax residency — get written confirmation of your tax status from KRA.</p>
      <p>Nairobi's Westlands and Kilimani neighborhoods have strong coworking infrastructure, reliable fiber internet, and an active expat community.</p>
    `
  },
  invest: {
    cat: 'Business',
    gradient: 'linear-gradient(135deg,#0a1a0a,#0d0d0d)',
    title: 'Real Estate vs. Stocks: How the African Diaspora Is Building Wealth in 2026',
    meta: '<strong>By Kofi Asare</strong> · March 7, 2026 · 6 min read',
    body: `
      <p>A survey of 1,200 diaspora investors across UK, US, and Canada reveals the split: 47% invest in African real estate, 38% in host-country stocks/ETFs, and 15% run both strategies in parallel.</p>
      <p><strong>Real estate back home:</strong> Primary appeal is tangibility, family utility, and long-term appreciation. Risk: illiquidity and currency devaluation eroding returns when converted.</p>
      <p><strong>Stocks and ETFs in host country:</strong> Higher liquidity, tax-advantaged accounts (ISA, 401k, TFSA), and compounding. Risk: volatility and no physical asset.</p>
      <p>The highest-net-worth respondents consistently ran both — max out tax-advantaged accounts first, then allocate 20–30% to Africa real estate or business equity. <strong>Never invest in African real estate money you'll need within 5 years.</strong></p>
    `
  },
  identity: {
    cat: 'Culture · Identity',
    gradient: 'linear-gradient(135deg,#1a0820,#0d0d0d)',
    title: "'I Don't Belong Here or There': The Mental Health Toll of Life Between Two Worlds",
    meta: '<strong>By Dr. Abena Osei</strong> · March 7, 2026 · 8 min read',
    body: `
      <p>Therapists working with African diaspora communities describe a recurring pattern: high external achievement masking deep internal ambiguity about identity, belonging, and purpose. The expectation to be "the successful one" for family back home compounds chronic stress.</p>
      <p>Clinical psychologist Dr. Abena Osei-Mensah describes "diaspora guilt" — a persistent feeling that success abroad is somehow a betrayal of those left behind. It manifests as overwork, financial over-giving, and difficulty setting limits.</p>
      <p><strong>What actually helps:</strong> Community with other diaspora Africans, therapy with culturally competent practitioners, and explicitly separating financial obligations from emotional identity. You are allowed to build a life where you are without it meaning you've abandoned where you came from.</p>
    `
  },
  biz: {
    cat: 'Business',
    gradient: 'linear-gradient(135deg,#0a1a00,#0d0d0d)',
    title: 'How Ghanaian Diaspora Entrepreneurs Are Building UK-to-Accra Businesses That Work',
    meta: '<strong>By Ama Owusu</strong> · March 6, 2026 · 7 min read',
    body: `
      <p>A growing wave of Ghanaian entrepreneurs in the UK run dual-jurisdiction businesses — UK Ltd company for credibility, payment processing, and investor access; Ghana operations for cost efficiency and local relationships.</p>
      <p>The model typically involves a UK Ltd as parent entity, with a Ghana-registered subsidiary handling local operations. Common sectors: agricultural exports, tech services, real estate, and logistics.</p>
      <p>The Ghana Investment Promotion Centre (GIPC) now offers a diaspora window with expedited registration processing.</p>
      <p><strong>Key risk: transfer pricing.</strong> HMRC and GRA both scrutinize intercompany transactions. Get accountants in both jurisdictions from day one — this is not optional.</p>
    `
  },
  health: {
    cat: 'Health',
    gradient: 'linear-gradient(135deg,#0a1a14,#0d0d0d)',
    title: 'Best Health Insurance Plans for African Expats in Europe — 2026 Full Comparison',
    meta: '<strong>AfriDiaspora Staff</strong> · March 5, 2026 · 4 min read',
    body: `
      <p>Standard European health insurance does not cover you in Africa. Medical evacuation from sub-Saharan Africa to Europe can cost <strong>$80,000–$150,000</strong> without coverage — this is not a theoretical risk.</p>
      <p>For those in national health systems (UK NHS, Germany GKV), supplemental private insurance focuses on dental, optical, and faster specialist access. For contribution-based systems (France, Netherlands), ensuring you're properly registered is the priority first.</p>
      <p><strong>Top-rated plans for African expats:</strong> Cigna Global, Allianz Care, and Foyer Global Health have the strongest networks and claims reputation for the Africa-Europe corridor. Compare plans at open enrollment — don't auto-renew.</p>
    `
  },
  food: {
    cat: 'Culture · Food',
    gradient: 'linear-gradient(135deg,#1a0800,#0d0d0d)',
    title: 'African Restaurants Abroad Are Becoming Serious Businesses — 8 Diaspora Success Stories',
    meta: '<strong>By Fatou Diallo</strong> · March 4, 2026 · 5 min read',
    body: `
      <p>From jollof rice pop-ups in East London to suya spots that became full restaurants in Toronto, African cuisine is going mainstream — and diaspora entrepreneurs are building serious businesses around it.</p>
      <p>Common success patterns: start with catering or pop-ups to validate demand before committing to fixed costs, build social media audiences before opening physical locations, and franchise within the diaspora community rather than to outside investors.</p>
      <p>The biggest challenge remains consistency and scale — replicating recipes that were never formally written down, and training non-family staff in traditional cooking methods. The entrepreneurs who cracked this are growing fastest.</p>
    `
  }
};

/* ---- MODAL ---- */
function openModal(key) {
  const a = ARTICLES[key];
  if (!a) return;

  document.getElementById('modalInner').innerHTML = `
    <div class="modal-hero">
      <svg class="modal-hero-bg" viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${extractColor(a.gradient, 0)}"/>
            <stop offset="100%" stop-color="${extractColor(a.gradient, 1)}"/>
          </linearGradient>
        </defs>
        <rect width="720" height="200" fill="url(#mg)"/>
      </svg>
    </div>
    <div class="modal-content">
      <div class="cat">${a.cat}</div>
      <h2>${a.title}</h2>
      <div class="meta">${a.meta}</div>
      <div class="modal-body">${a.body}</div>
    </div>
  `;

  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalBg(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

function extractColor(gradient, index) {
  const colors = gradient.match(/#[0-9a-fA-F]{3,6}/g);
  return colors ? (colors[index] || colors[0]) : '#111';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ---- TABS ---- */
function switchTab(el, cat) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  if (cat !== 'all') toast(`Showing: ${el.textContent}`);
}

/* ---- COUNTRY FILTER ---- */
function selectCtry(el) {
  document.querySelectorAll('.ctry-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  toast(`Filtering by ${el.textContent}`);
}

/* ---- NEWSLETTER ---- */
function handleNL() {
  const el = document.getElementById('nlEmail');
  if (!el) return;
  const v = el.value.trim();
  if (!v || !v.includes('@')) {
    toast('Please enter a valid email address.');
    return;
  }
  el.value = '';
  toast('✓ Subscribed! Watch your inbox every Tuesday.');
}

/* ---- POLL ---- */
function handleVote() {
  const combos = [[34,42,24],[28,52,20],[45,35,20],[40,38,22],[36,44,20]];
  const r = combos[Math.floor(Math.random() * combos.length)];
  ['p1','p2','p3'].forEach((id, i) => {
    const bar = document.getElementById(id);
    const lbl = document.getElementById(id + 'v');
    if (bar) bar.style.width = r[i] + '%';
    if (lbl) lbl.textContent = r[i] + '%';
  });
  toast('✓ Your vote has been recorded!');
}

/* ---- SEARCH ---- */
function handleSearch(e) {
  if (e.key === 'Enter') {
    const q = document.getElementById('searchInput')?.value.trim();
    if (q) toast(`Searching for: "${q}"… (Search coming soon)`);
  }
}

/* ---- MOBILE MENU ---- */
function toggleMobileMenu() {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('open');
}

/* ---- TOAST ---- */
let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}
