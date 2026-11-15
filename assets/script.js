// ==================== DATA KATALOG LAYANAN ====================
const SERVICES_DATA = [
  {
    id: 'wedding',
    title: 'Wedding Documentation',
    serviceOption: 'Wedding Documentation',
    icon: 'heart',
    priceStart: 'Mulai Rp 3.500.000',
    desc: 'Liputan penuh akad nikah hingga resepsi dengan pendekatan candid-editorial, menangkap emosi sakral keluarga dan pasangan.',
    features: ['2 Fotografer Utama', 'Unlimited Shoot & All Files', 'Cetak Album Eksklusif + Flashdisk'],
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prewedding',
    title: 'Pre-Wedding Session',
    serviceOption: 'Pre-Wedding Session',
    icon: 'sparkles',
    priceStart: 'Mulai Rp 1.800.000',
    desc: 'Sesi pemotretan konsep outdoor maupun indoor studio dengan arahan gaya sinematik dan konsultasi moodboard kostum.',
    features: ['Konsep 2 Tema / Lokasi', '40 Foto High-End Retouch', 'Cetak Frame Kanvas 16R'],
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wisuda',
    title: 'Wisuda & Personal Portrait',
    serviceOption: 'Wisuda & Personal Portrait',
    icon: 'graduation-cap',
    priceStart: 'Mulai Rp 750.000',
    desc: 'Abadikan pencapaian kelulusan bersama keluarga dan sahabat dengan pencahayaan tajam dan tone warna bersih.',
    features: ['Durasi 2 Jam Sesi Outdoor/Studio', '25 Foto Edit Warna & Kulit', 'File Google Drive Cepat 2x24 Jam'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'produk',
    title: 'Produk & Commercial Brand',
    serviceOption: 'Produk & Commercial Brand',
    icon: 'shopping-bag',
    priceStart: 'Mulai Rp 1.200.000',
    desc: 'Foto katalog e-commerce, lookbook fashion, hingga food & beverage dengan penataan lighting studio profesional.',
    features: ['Set Properti & Studio Lighting', 'High-Resolution Siap Cetak & Sosmed', 'Revisi Tone Warna 2x'],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'event',
    title: 'Corporate & Music Event',
    serviceOption: 'Corporate & Music Event',
    icon: 'aperture',
    priceStart: 'Mulai Rp 1.500.000',
    desc: 'Dokumentasi seminar, konser musik, peluncuran produk, dan acara komunitas dengan kecepatan kirim foto untuk kebutuhan pers.',
    features: ['Same-Day Highlight 15 Foto', 'Liputan Panggung & Tamu VIP', 'Full Dokumentasi Google Drive'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
  }
];

// ==================== DATA PORTOFOLIO ====================
const PORTFOLIO_DATA = [
  {
    title: 'The Vow of Nadya & Dimas',
    category: 'Wedding',
    serviceOption: 'Wedding Documentation',
    desc: 'Intimate Garden Wedding — Jember',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Golden Hour at Savana',
    category: 'Pre-Wedding',
    serviceOption: 'Pre-Wedding Session',
    desc: 'Outdoor Editorial Session — Bromo',
    image: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Chronograph Minimalist Series',
    category: 'Produk',
    serviceOption: 'Produk & Commercial Brand',
    desc: 'Commercial Studio Lighting — Katalog Jam Tangan',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Cum Laude Celebration',
    category: 'Wisuda',
    serviceOption: 'Wisuda & Personal Portrait',
    desc: 'Outdoor Campus Portrait — Universitas Jember',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Midnight Symphony Stage',
    category: 'Event',
    serviceOption: 'Corporate & Music Event',
    desc: 'Live Concert Documentation — Surabaya',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Timeless Monochromatic Love',
    category: 'Pre-Wedding',
    serviceOption: 'Pre-Wedding Session',
    desc: 'Indoor Classic Studio Concept',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=80'
  }
];

// ==================== DATA TESTIMONI ====================
const TESTIMONIALS_DATA = [
  {
    name: 'Nabila & Farhan',
    category: 'Wedding',
    date: 'Oktober 2026',
    quote: 'Mas Arka dan tim benar-benar bikin kami nyaman sepanjang acara. Kami berdua sebenarnya kaku kalau difoto, tapi arahannya natural banget dan hasil tone warnanya mewah seperti majalah!',
    photo: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Clarissa Putri, S.Ked',
    category: 'Wisuda',
    date: 'September 2026',
    quote: 'Sesi wisuda bareng keluarga jadi seru banget. Hasil fotonya keluar cepat kurang dari 3 hari dan semua foto keluarga tajam serta pencahayaannya pas meski cuaca sempat mendung.',
    photo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Kopi Senja Roastery',
    category: 'Produk',
    date: 'Agustus 2026',
    quote: 'Penjualan katalog online kami naik signifikan setelah foto produk dikerjakan Lumina Visual. Detail tekstur biji kopi dan pencahayaan kemasannya sangat presisi.',
    photo: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Rendra & Tania',
    category: 'Pre-Wedding',
    date: 'Juli 2026',
    quote: 'Dari awal diskusi moodboard sampai eksekusi di Bromo semuanya terorganisir rapi. Timnya sangat sabar menunggu momen golden hour terbaik.',
    photo: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Aurelia Skincare',
    category: 'Produk',
    date: 'Juni 2026',
    quote: 'Suka banget sama konsep lighting-nya yang clean dan elegan. Komunikasi revisi juga cepat dan profesional.',
    photo: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Bagas & Siska',
    category: 'Wedding',
    date: 'Mei 2026',
    quote: 'Album fisiknya tebal, cetakannya tajam, dan file Google Drive-nya tersusun rapi per sesi acara. Sangat recommended!',
    photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'
  }
];

// ==================== DATA PAKET & ADD-ONS ORDER ====================
const PACKAGES_DATA = [
  {
    id: 'basic',
    name: 'Basic Session',
    price: 850000,
    duration: '2 Jam Pemotretan',
    badge: 'Cocok untuk Wisuda / Portrait',
    features: [
      '1 Fotografer Profesional',
      '25 Foto High-End Retouch',
      'Semua File Original via Google Drive',
      '1 Lokasi Pemotretan'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Session',
    price: 1800000,
    duration: '4 Jam Pemotretan',
    badge: 'Paling Populer',
    popular: true,
    features: [
      '1 Fotografer Utama + 1 Asisten Lighting',
      '60 Foto High-End Retouch',
      'Semua File Original via Google Drive',
      'Cetak 10 Foto 5R + Frame Minimalis',
      'Maksimal 2 Lokasi / Konsep'
    ]
  },
  {
    id: 'exclusive',
    name: 'Exclusive Full-Day',
    price: 3800000,
    duration: '8 Jam (Full Day)',
    badge: 'Terbaik untuk Wedding & Brand',
    features: [
      '2 Fotografer Profesional',
      '150+ Foto High-End Retouch',
      'Magazine Photobook Eksklusif 20 Hal',
      'Flashdisk Kayu Custom + All Files',
      'Prioritas Editing 3 Hari Kerja'
    ]
  }
];

const ADDONS_DATA = [
  { id: 'drone', label: 'Dokumentasi Drone Aerial', price: 650000 },
  { id: 'mua', label: 'Make-Up Artist (MUA) Partner', price: 500000 },
  { id: 'album', label: 'Cetak Photobook Eksklusif', price: 450000 },
  { id: 'express', label: 'Express Editing 24 Jam', price: 350000 }
];

// ==================== STATE APLIKASI ====================
let selectedPackageId = 'standard';
let selectedAddons = new Set();

// ==================== NAVIGASI MULTI-HALAMAN ====================
function navigateTo(pageName, preselectedService = null) {
  document.querySelectorAll('.page-view').forEach(section => {
    section.classList.add('hidden');
    section.classList.remove('active');
  });

  const targetPage = document.getElementById(`page-${pageName}`);
  if (targetPage) {
    targetPage.classList.remove('hidden');
    targetPage.classList.add('active');
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.nav === pageName) {
      link.classList.add('active');
      link.classList.remove('text-muted');
    } else {
      link.classList.remove('active');
      link.classList.add('text-muted');
    }
  });

  if (pageName === 'order' && preselectedService) {
    const selectEl = document.getElementById('service-type');
    if (selectEl) {
      selectEl.value = preselectedService;
      updateOrderSummary();
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  lucide.createIcons();
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

// ==================== RENDER LAYANAN ====================
function renderServices() {
  const grid = document.getElementById('services-grid');
  grid.innerHTML = SERVICES_DATA.map(service => `
    <div class="group rounded-3xl bg-charcoal border border-white/10 overflow-hidden hover:border-gold/50 transition flex flex-col justify-between">
      <div>
        <div class="relative h-52 overflow-hidden">
          <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent"></div>
          <span class="absolute bottom-3 left-5 px-3 py-1 rounded-full bg-obsidian/80 backdrop-blur-md border border-gold/30 text-gold text-xs font-semibold">
            ${service.priceStart}
          </span>
        </div>
        <div class="p-6">
          <div class="flex items-center gap-2.5 text-gold mb-2">
            <i data-lucide="${service.icon}" class="w-4 h-4"></i>
            <span class="text-xs uppercase tracking-widest font-semibold">Layanan</span>
          </div>
          <h3 class="font-serif text-2xl font-semibold text-ivory">${service.title}</h3>
          <p class="text-xs text-muted mt-2 leading-relaxed">${service.desc}</p>
          <ul class="mt-4 space-y-1.5 border-t border-white/10 pt-4">
            ${service.features.map(f => `
              <li class="text-xs text-ivory/90 flex items-center gap-2">
                <i data-lucide="check" class="w-3.5 h-3.5 text-gold shrink-0"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
      <div class="px-6 pb-6">
        <button onclick="navigateTo('order', '${service.serviceOption}')" class="w-full py-3 rounded-xl bg-surface border border-white/10 text-ivory text-xs font-semibold hover:bg-gold hover:text-obsidian hover:border-gold transition flex items-center justify-center gap-2">
          <span>Pesan Layanan Ini</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join('');
}

// ==================== RENDER PORTOFOLIO & FILTER ====================
function renderPortfolio(filter = 'all') {
  const grid = document.getElementById('portfolio-grid');
  const filtered = filter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category === filter);

  grid.innerHTML = filtered.map((item, idx) => `
    <div onclick="openLightbox(${PORTFOLIO_DATA.indexOf(item)})" class="group relative rounded-2xl overflow-hidden bg-surface border border-white/10 aspect-[4/3] cursor-pointer">
      <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      <div class="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-80 group-hover:opacity-95 transition"></div>
      <div class="absolute top-4 left-4">
        <span class="px-3 py-1 rounded-full bg-obsidian/70 backdrop-blur-md border border-white/15 text-[11px] font-medium text-gold">
          ${item.category}
        </span>
      </div>
      <div class="absolute bottom-4 inset-x-4 flex items-end justify-between">
        <div>
          <h4 class="font-serif text-xl font-semibold text-ivory">${item.title}</h4>
          <p class="text-xs text-muted mt-0.5">${item.desc}</p>
        </div>
        <span class="w-9 h-9 rounded-full bg-gold text-obsidian flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <i data-lucide="maximize-2" class="w-4 h-4"></i>
        </span>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

function setupPortfolioFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active', 'bg-gold', 'text-obsidian', 'font-semibold');
        b.classList.add('bg-surface', 'text-muted', 'font-medium');
      });
      btn.classList.add('active', 'bg-gold', 'text-obsidian', 'font-semibold');
      btn.classList.remove('bg-surface', 'text-muted', 'font-medium');
      renderPortfolio(btn.dataset.filter);
    });
  });
}

// ==================== LIGHTBOX ====================
function openLightbox(index) {
  const item = PORTFOLIO_DATA[index];
  if (!item) return;
  document.getElementById('lightbox-img').src = item.image;
  document.getElementById('lightbox-category').textContent = item.category;
  document.getElementById('lightbox-title').textContent = item.title;
  document.getElementById('lightbox-desc').textContent = item.desc;

  const orderBtn = document.getElementById('lightbox-order-btn');
  orderBtn.onclick = () => {
    closeLightbox();
    navigateTo('order', item.serviceOption);
  };

  document.getElementById('lightbox-modal').classList.remove('hidden');
  lucide.createIcons();
}

function closeLightbox() {
  document.getElementById('lightbox-modal').classList.add('hidden');
}

// ==================== RENDER TESTIMONI ====================
function renderTestimonials(filter = 'all') {
  const grid = document.getElementById('testimonials-grid');
  const filtered = filter === 'all'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(t => t.category === filter);

  grid.innerHTML = filtered.map(item => `
    <div class="rounded-3xl bg-charcoal border border-white/10 overflow-hidden flex flex-col justify-between">
      <div>
        <div class="h-44 overflow-hidden relative">
          <img src="${item.photo}" alt="Hasil Foto ${item.name}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
          <span class="absolute top-3 right-3 px-3 py-1 rounded-full bg-obsidian/80 backdrop-blur-md border border-gold/30 text-[11px] font-semibold text-gold">
            ${item.category}
          </span>
        </div>
        <div class="p-6">
          <div class="flex items-center gap-1 text-gold mb-3">
            <i data-lucide="star" class="w-3.5 h-3.5 fill-gold"></i>
            <i data-lucide="star" class="w-3.5 h-3.5 fill-gold"></i>
            <i data-lucide="star" class="w-3.5 h-3.5 fill-gold"></i>
            <i data-lucide="star" class="w-3.5 h-3.5 fill-gold"></i>
            <i data-lucide="star" class="w-3.5 h-3.5 fill-gold"></i>
          </div>
          <p class="text-sm text-ivory/90 leading-relaxed italic">“${item.quote}”</p>
        </div>
      </div>
      <div class="px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between">
        <div>
          <p class="text-sm font-semibold text-ivory">${item.name}</p>
          <p class="text-xs text-muted">${item.date}</p>
        </div>
        <i data-lucide="quote" class="w-5 h-5 text-gold/40"></i>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

function setupTestimonialFilters() {
  document.querySelectorAll('.tfilter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tfilter-btn').forEach(b => {
        b.classList.remove('active', 'bg-gold', 'text-obsidian', 'font-semibold');
        b.classList.add('bg-surface', 'text-muted', 'font-medium');
      });
      btn.classList.add('active', 'bg-gold', 'text-obsidian', 'font-semibold');
      btn.classList.remove('bg-surface', 'text-muted', 'font-medium');
      renderTestimonials(btn.dataset.tfilter);
    });
  });
}

// ==================== HALAMAN ORDER & KALKULASI HARGA ====================
function formatRupiah(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

function renderPackages() {
  const grid = document.getElementById('packages-grid');
  grid.innerHTML = PACKAGES_DATA.map(pkg => {
    const isSelected = pkg.id === selectedPackageId;
    return `
      <div onclick="selectPackage('${pkg.id}')" class="cursor-pointer rounded-3xl p-6 sm:p-7 border transition flex flex-col justify-between ${
        isSelected
          ? 'bg-charcoal border-gold shadow-xl shadow-gold/10'
          : 'bg-charcoal/60 border-white/10 hover:border-white/30'
      }">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="px-3 py-1 rounded-full text-[11px] font-semibold ${
              pkg.popular ? 'bg-gold text-obsidian' : 'bg-surface text-gold border border-gold/30'
            }">
              ${pkg.badge}
            </span>
            <div class="w-5 h-5 rounded-full border flex items-center justify-center ${
              isSelected ? 'border-gold bg-gold text-obsidian' : 'border-white/30'
            }">
              ${isSelected ? '<i data-lucide="check" class="w-3.5 h-3.5"></i>' : ''}
            </div>
          </div>
          <h3 class="font-serif text-2xl font-semibold text-ivory">${pkg.name}</h3>
          <p class="text-xs text-muted mt-0.5">${pkg.duration}</p>
          <p class="font-serif text-3xl font-bold text-gold mt-4">${formatRupiah(pkg.price)}</p>

          <ul class="mt-5 pt-5 border-t border-white/10 space-y-2.5">
            ${pkg.features.map(f => `
              <li class="text-xs text-ivory/90 flex items-start gap-2">
                <i data-lucide="check" class="w-3.5 h-3.5 text-gold shrink-0 mt-0.5"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <button type="button" class="mt-6 w-full py-2.5 rounded-xl text-xs font-semibold transition ${
          isSelected
            ? 'bg-gold text-obsidian'
            : 'bg-surface text-ivory border border-white/10 hover:border-gold'
        }">
          ${isSelected ? 'Paket Terpilih' : 'Pilih Paket Ini'}
        </button>
      </div>
    `;
  }).join('');
  lucide.createIcons();
}

function selectPackage(pkgId) {
  selectedPackageId = pkgId;
  renderPackages();
  updateOrderSummary();
}

function renderAddons() {
  const container = document.getElementById('addons-list');
  container.innerHTML = ADDONS_DATA.map(addon => `
    <label class="cursor-pointer p-3.5 rounded-xl bg-surface border border-white/10 hover:border-gold/50 transition flex items-center justify-between gap-3">
      <div class="flex items-center gap-2.5">
        <input type="checkbox" value="${addon.id}" onchange="toggleAddon('${addon.id}')" class="w-4 h-4 accent-[#D4AF37] rounded" />
        <span class="text-xs text-ivory font-medium">${addon.label}</span>
      </div>
      <span class="text-xs text-gold font-semibold shrink-0">+${formatRupiah(addon.price)}</span>
    </label>
  `).join('');
}

function toggleAddon(addonId) {
  if (selectedAddons.has(addonId)) {
    selectedAddons.delete(addonId);
  } else {
    selectedAddons.add(addonId);
  }
  updateOrderSummary();
}

function updateOrderSummary() {
  const pkg = PACKAGES_DATA.find(p => p.id === selectedPackageId) || PACKAGES_DATA[1];
  const serviceType = document.getElementById('service-type')?.value || 'Wedding Documentation';
  const shootDate = document.getElementById('shoot-date')?.value;

  document.getElementById('summary-package-name').textContent = pkg.name;
  document.getElementById('summary-service').textContent = serviceType;
  document.getElementById('summary-date').textContent = shootDate
    ? new Date(shootDate).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : 'Belum dipilih';
  document.getElementById('summary-base-price').textContent = formatRupiah(pkg.price);

  let addonsTotal = 0;
  const addonsContainer = document.getElementById('summary-addons-container');
  addonsContainer.innerHTML = '';

  selectedAddons.forEach(id => {
    const addon = ADDONS_DATA.find(a => a.id === id);
    if (addon) {
      addonsTotal += addon.price;
      addonsContainer.innerHTML += `
        <div class="flex justify-between text-xs">
          <span class="text-muted">+ ${addon.label}</span>
          <span class="text-ivory">${formatRupiah(addon.price)}</span>
        </div>
      `;
    }
  });

  const grandTotal = pkg.price + addonsTotal;
  const dpAmount = Math.round(grandTotal * 0.3);

  document.getElementById('summary-total').textContent = formatRupiah(grandTotal);
  document.getElementById('summary-dp').textContent = formatRupiah(dpAmount);
}

// ==================== SUBMIT FORM BOOKING ====================
function handleBookingSubmit(event) {
  event.preventDefault();

  const clientName = document.getElementById('client-name').value.trim();
  const clientWa = document.getElementById('client-wa').value.trim();
  const serviceType = document.getElementById('service-type').value;
  const shootDate = document.getElementById('shoot-date').value;
  const shootTime = document.getElementById('shoot-time').value;
  const shootLocation = document.getElementById('shoot-location').value.trim();
  const shootNotes = document.getElementById('shoot-notes').value.trim();

  const pkg = PACKAGES_DATA.find(p => p.id === selectedPackageId) || PACKAGES_DATA[1];
  let addonsTotal = 0;
  const addonNames = [];
  selectedAddons.forEach(id => {
    const addon = ADDONS_DATA.find(a => a.id === id);
    if (addon) {
      addonsTotal += addon.price;
      addonNames.push(addon.label);
    }
  });

  const grandTotal = pkg.price + addonsTotal;
  const dpAmount = Math.round(grandTotal * 0.3);
  const formattedDate = new Date(shootDate).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  document.getElementById('invoice-details').innerHTML = `
    <div class="flex justify-between"><span class="text-muted">Nama Klien:</span><span class="font-semibold">${clientName}</span></div>
    <div class="flex justify-between"><span class="text-muted">Layanan:</span><span>${serviceType}</span></div>
    <div class="flex justify-between"><span class="text-muted">Paket:</span><span class="text-gold font-semibold">${pkg.name}</span></div>
    <div class="flex justify-between"><span class="text-muted">Jadwal:</span><span>${formattedDate} (${shootTime} WIB)</span></div>
    <div class="flex justify-between"><span class="text-muted">Lokasi:</span><span>${shootLocation}</span></div>
    ${addonNames.length ? `<div class="flex justify-between"><span class="text-muted">Add-ons:</span><span class="text-right">${addonNames.join(', ')}</span></div>` : ''}
    <div class="pt-2 border-t border-white/10 flex justify-between text-sm font-bold">
      <span>Total Estimasi:</span><span class="text-gold">${formatRupiah(grandTotal)}</span>
    </div>
    <div class="flex justify-between text-xs">
      <span class="text-muted">DP Pengunci Jadwal (30%):</span><span class="font-semibold">${formatRupiah(dpAmount)}</span>
    </div>
  `;

  const waMessage = `Halo Admin Lumina Visual, saya ingin konfirmasi booking pemotretan:\n\n` +
    `*Nama:* ${clientName}\n` +
    `*No. WA:* ${clientWa}\n` +
    `*Layanan:* ${serviceType}\n` +
    `*Paket:* ${pkg.name} (${formatRupiah(pkg.price)})\n` +
    `*Tanggal & Jam:* ${formattedDate}, Pukul ${shootTime} WIB\n` +
    `*Lokasi:* ${shootLocation}\n` +
    `*Add-ons:* ${addonNames.length ? addonNames.join(', ') : '-'}\n` +
    `*Catatan:* ${shootNotes || '-'}\n\n` +
    `*Total Estimasi:* ${formatRupiah(grandTotal)}\n` +
    `*DP (30%):* ${formatRupiah(dpAmount)}\n\n` +
    `Mohon info ketersediaan jadwalnya. Terima kasih!`;

  const adminPhone = '6281234567890';
  document.getElementById('wa-confirm-link').href = `https://wa.me/${adminPhone}?text=${encodeURIComponent(waMessage)}`;

  document.getElementById('order-modal').classList.remove('hidden');
  lucide.createIcons();
}

function closeOrderModal() {
  document.getElementById('order-modal').classList.add('hidden');
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderPortfolio();
  setupPortfolioFilters();
  renderTestimonials();
  setupTestimonialFilters();
  renderPackages();
  renderAddons();
  updateOrderSummary();

  const dateInput = document.getElementById('shoot-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  lucide.createIcons();
});
