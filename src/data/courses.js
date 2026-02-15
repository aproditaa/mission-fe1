export const courses = [
  {
    id: 1,
    title: "Big 4 Auditor Financial Analyst",
    category: "Bidang Studi",
    subCategory: "Bisnis Manajemen",
    desc: "Course ini membantu profesional audit dan accounting yang ingin bertransisi ke peran financial analyst dengan memahami perbedaan mindset, cara membaca laporan keuangan secara strategis, serta kemampuan membuat financial model dan insight bisnis yang relevan untuk pengambilan keputusan di perusahaan modern.",
    mentor: "Reynald Fabian",
    role: "Senior Accountant di Gojek",
    modul: "12",
    duration: "360 Menit",
    mentorBio: "Reynald berpengalaman dalam financial reporting, budgeting, dan performance analysis di industri teknologi, serta aktif berkolaborasi dengan tim bisnis untuk menerjemahkan data keuangan menjadi strategi operasional dan pertumbuhan.",
    duration: 3,
    isDiscount: false,
    price: "Rp 450K",
    rating: "3.5 (86)",
    image: "/course-images/bg1.png",
    avatar: "/course-images/avatar-1.png",
    syllabus: [
      {
        groupTitle: "Fundamental Transition",
        items: ["Mindset shift: Auditor → Analyst", "Financial storytelling", "Business vs Compliance perspective"]
      },
      {
        groupTitle: "Practical Analyst Skills",
        items: ["Financial modeling basics", "KPI & performance metrics", "Case study tech company"]
      }
    ],
    reviews: [
      { 
        name: "Dimas Prakoso", 
        batch: "Alumni Batch 12", 
        role: "Financial Planning Analyst di Astra International", 
        comment: "Course ini mengubah cara pandangku terhadap laporan keuangan. Aku jadi lebih paham bagaimana angka digunakan untuk strategi bisnis, bukan sekadar compliance. Insight tentang financial modeling sangat membantu di pekerjaanku sekarang." 
      },
      { 
        name: "Laras Widyaningrum", 
        batch: "Alumni Batch 15", 
        role: "Business Analyst di Tiket.com", 
        comment: "Materinya relevan banget untuk transisi karier. Framework KPI dan performance analysis yang diajarkan bikin aku lebih percaya diri saat diskusi dengan tim finance dan product." 
      }
    ]
  },
  {
    id: 2,
    title: "Data Analytics with Excel & SQL",
    category: "Bidang Studi",
    subCategory: "Digital & Teknologi",
    desc: "Course ini dirancang untuk pemula yang ingin memahami dasar data analytics menggunakan Excel dan SQL, mulai dari data cleaning, eksplorasi data, hingga menghasilkan insight yang dapat digunakan untuk kebutuhan bisnis, marketing, maupun pengambilan keputusan berbasis data.",
    mentor: "Dita Safira",
    role: "Senior Data Analyst di Bukalapak",
    modul: "12",
    duration: "360 Menit",
    mentorBio: "Dita berfokus pada analisis perilaku pengguna dan business intelligence, serta berpengalaman mengolah data skala besar untuk membantu tim produk dan marketing menentukan strategi berbasis data.",
    duration: 4,
    isDiscount: true,
    price: "Rp 500K",
    originalPrice: "Rp 900K",
    rating: "4.5 (86)",
    image: "/course-images/bg2.png",
    avatar: "/course-images/avatar-2.png",
    syllabus: [
      {
        groupTitle: "Data Foundations",
        items: ["Intro to Data Analytics", "Excel for analysis", "Data cleaning techniques"]
      },
      {
        groupTitle: "SQL & Insights",
        items: ["SQL query essentials", "Data visualization", "Business case study"]
      }
    ],
    reviews: [
      { 
        name: "Rizal Fadillah", 
        batch: "Alumni Batch 8", 
        role: "Junior Data Analyst di Blibli", 
        comment: "Penjelasan SQL di course ini sangat clear untuk pemula. Latihan kasusnya membantu aku memahami cara kerja analisis data di dunia nyata, dan jadi bekal penting saat interview kerja." 
      },
      { 
        name: "Monica Evelyn", 
        batch: "Alumni Batch 10", 
        role: "Marketing Data Specialist di Sociolla", 
        comment: "Sekarang aku bisa mengolah dan membaca data campaign sendiri. Skill Excel & SQL yang kupelajari di sini bikin proses kerja jauh lebih efisien." 
      }
    ]
  },
  {
    id: 3,
    title: "Startup Business Fundamentals",
    category: "Bidang Studi",
    subCategory: "Bisnis Manajemen",
    desc: "Course ini membahas fondasi penting dalam membangun dan menjalankan startup, mulai dari validasi ide, memahami market fit, menyusun model bisnis, hingga strategi monetisasi dan scaling yang realistis di ekosistem bisnis digital.",
    mentor: "Hanif Al-Fauzi",
    role: "Startup Advisor di Endeavor Indonesia",
    modul: "12",
    duration: "360 Menit",
    mentorBio: "Hanif aktif membimbing founder dan startup growth-stage dalam merancang strategi bisnis, menghadapi tantangan scaling, serta mengoptimalkan peluang pertumbuhan.",
    duration: 3,
    isDiscount: false,
    price: "Rp 700K",
    rating: "3.5 (86)",
    image: "/course-images/bg3.png",
    avatar: "/course-images/avatar-3.png",
    syllabus: [
      {
        groupTitle: "Business Basics",
        items: ["Idea validation", "Market fit", "Business model canvas"]
      },
      {
        groupTitle: "Growth Strategy",
        items: ["Monetization strategy", "Scaling challenges", "Startup case study"]
      }
    ],
    reviews: [
      { name: "Kevin Santoso", batch: "Alumni Batch 5", role: "Co-Founder SaaS HR Platform", comment: "Course ini membantu kami memvalidasi ide bisnis sebelum scaling. Materi tentang business model & monetization sangat aplikatif untuk founder tahap awal." },
      { name: "Sinta Maharani", batch: "Alumni Batch 7", role: "Business Development di Startup Fintech", comment: "Aku jadi lebih memahami bagaimana startup menyusun strategi growth dan revenue. Ilmunya langsung kepakai di role BD-ku sekarang." }
    ]
  },
  {
    id: 4,
    title: "Digital Project Management",
    category: "Bidang Studi",
    subCategory: "Bisnis Manajemen",
    desc: "Course ini memberikan pemahaman praktis tentang cara mengelola project digital secara efektif, termasuk mengatur timeline, mengelola stakeholder, memahami workflow agile, serta menangani risiko dan perubahan dalam lingkungan kerja yang dinamis.",
    mentor: "Faiza Chantika",
    role: "Digital Project Manager di Telkom Indonesia",
    modul: "12",
    duration: "360 Menit",
    mentorBio: "Faiza memimpin berbagai project transformasi digital lintas tim dan divisi, dengan fokus pada eksekusi, koordinasi, dan delivery yang tepat waktu.",
    duration: 8,
    isDiscount: false,
    price: "Rp 300K",
    rating: "3.5 (86)",
    image: "/course-images/bg4.png",
    avatar: "/course-images/avatar-4.png",
    syllabus: [
      {
        groupTitle: "Project Essentials",
        items: ["Project lifecycle", "Scope & timeline", "Stakeholder management"]
      },
      {
        groupTitle: "Agile & Execution",
        items: ["Agile vs Waterfall", "Sprint & backlog", "Handling project crisis"]
      }
    ],
    reviews: [
      { name: "Arga Saputra", batch: "Alumni Batch 9", role: "PMO Officer di Bank Mandiri", comment: "Materi agile & stakeholder management di course ini sangat relate dengan pekerjaanku. Aku jadi lebih terstruktur dalam mengelola timeline project." },
      { name: "Nabila Kencana", batch: "Alumni Batch 11", role: "Digital Ops Lead di Startup Logistics", comment: "Course ini membantu banget dalam koordinasi lintas tim. Sekarang workflow project jadi lebih rapi dan minim miskomunikasi." }
    ]
  },
  {
    id: 5,
    title: "Front-End Web Development",
    category: "Bidang Studi",
    subCategory: "Digital & Teknologi",
    desc: "Course ini membantu peserta memahami dasar front-end development mulai dari HTML, CSS, hingga konsep UI modern, sehingga mampu membangun tampilan website yang responsif, rapi, dan sesuai standar industri digital.",
    mentor: "Pradipta Farras",
    role: "Front-End Engineer di Traveloka",
    modul: "12",
    duration: "360 Menit",
    mentorBio: "Pradipta berfokus pada pengembangan UI performance dan scalable design system untuk produk digital dengan jutaan pengguna.",
    duration: 4,
    isDiscount: true,
    price: "Rp 500K",
    originalPrice: "Rp 900K",
    rating: "3.5 (86)",
    image: "/course-images/bg5.png",
    avatar: "/course-images/avatar-5.png",
    syllabus: [
      {
        groupTitle: "Web Basics",
        items: ["HTML structure", "CSS styling", "Responsive layout"]
      },
      {
        groupTitle: "Modern Front-End",
        items: ["UI components", "Basic JavaScript", "Mini project"]
      }
    ],
    reviews: [
      { name: "Yoga Pratama", batch: "Alumni Batch 14", role: "Junior Front-End Developer di Digital Agency", comment: "Materinya beginner friendly dan mudah dipraktikkan. Aku jadi lebih paham struktur HTML & styling CSS untuk kebutuhan project klien." },
      { name: "Caca Amelia", batch: "Alumni Batch 16", role: "Front-End Developer (Former UI Designer)", comment: "Course ini bantu aku bridging skill design ke coding. Sekarang aku bisa slicing design sendiri tanpa bergantung penuh ke developer." }
    ]
  },
  {
    id: 6,
    title: "Social Media Specialist",
    category: "Bidang Studi",
    subCategory: "Pemasaran",
    desc: "Course ini membahas strategi pembuatan konten, memahami algoritma platform, membangun branding digital, serta cara membaca analytics untuk meningkatkan performa dan pertumbuhan akun bisnis maupun personal.",
    mentor: "Taufik Farand",
    role: "Social Media Manager di Tokopedia",
    modul: "12",
    duration: "360 Menit",
    mentorBio: "Taufik berpengalaman dalam merancang strategi konten, campaign digital, dan optimasi performa social media untuk brand dengan jutaan audiens.",
    duration: 4,
    isDiscount: false,
    price: "Rp 300K",
    rating: "3.9 (86)",
    image: "/course-images/bg6.png",
    avatar: "/course-images/avatar-6.png",
    syllabus: [
      {
        groupTitle: "Content Strategy",
        items: ["Audience persona", "Content planning", "Platform behavior"]
      },
      {
        groupTitle: "Performance & Growth",
        items: ["Analytics basics", "Growth tactics", "Campaign strategy"]
      }
    ],
    reviews: [
      { name: "Nindy Larasati", batch: "Alumni Batch 6", role: "Social Media Strategist di Beauty Brand", comment: "Insight tentang content strategy & analytics sangat membantu performa campaign. Engagement rate akun brand kami meningkat setelah menerapkan ilmunya." },
      { name: "Rizky Adnan", batch: "Alumni Batch 8", role: "Content Lead di Startup F&B", comment: "Aku jadi lebih paham cara membaca performa konten dan optimasi strategi. Dampaknya terasa di growth & reach social media brand kami." }
    ]
  },
  {
    id: 7,
    title: "Personal Branding Playbook",
    category: "Bidang Studi",
    subCategory: "Pengembangan Diri",
    desc: "Course ini membantu peserta membangun positioning diri yang kuat, memahami value unik yang dimiliki, serta mengoptimalkan kehadiran profesional di platform digital agar lebih kredibel dan standout.",
    mentor: "Galih Azzam",
    role: "Personal Branding Consultant di Glints",
    modul: "12",
    duration: "360 Menit",
    mentorBio: "Galih fokus membantu profesional dan fresh graduate dalam menyusun personal positioning, career narrative, dan digital presence.",
    duration: 5,
    isDiscount: false,
    price: "Rp 300K",
    rating: "3.5 (86)",
    image: "/course-images/bg7.png",
    avatar: "/course-images/avatar-7.png",
    syllabus: [
      { groupTitle: "Self Positioning", items: ["Identifying personal value", "Career narrative", "Personal differentiation"] },
      { groupTitle: "Digital Presence", items: ["Optimizing LinkedIn", "Profile strategy", "Visibility & credibility"] }
    ],
    reviews: [
      { name: "Shavira Anindya", batch: "Alumni Batch 4", role: "Career Consultant di TopKarir", comment: "Course ini membantu aku menyusun positioning diri dan komunikasi value profesional. Optimasi LinkedIn yang diajarkan berdampak langsung ke kredibilitas karierku." },
      { name: "Derry Satwika", batch: "Alumni Batch 6", role: "Management Trainee di Unilever Indonesia", comment: "Materinya membantu banget dalam menyusun personal narrative di CV & LinkedIn. Aku jadi lebih standout saat proses seleksi MT." }
    ]
  },
  {
    id: 8,
    title: "Confident Communication",
    category: "Bidang Studi",
    subCategory: "Pengembangan Diri",
    desc: "Course ini dirancang untuk meningkatkan rasa percaya diri dalam komunikasi profesional, membantu peserta menyampaikan ide secara jelas, terstruktur, dan meyakinkan di berbagai situasi kerja.",
    mentor: "Zalfah Kalyana",
    role: "Lead Communication Coach di Ruangguru",
    modul: "12",
    duration: "360 Menit",
    mentorBio: "Zalfah berpengalaman melatih komunikasi profesional, public speaking, dan confidence building untuk individu maupun tim.",
    duration: 3,
    isDiscount: false,
    price: "Rp 300K",
    rating: "3.5 (86)",
    image: "/course-images/bg8.png",
    avatar: "/course-images/avatar-8.png",
    syllabus: [
      { groupTitle: "Confidence Building", items: ["Overcoming self-doubt", "Speaking presence", "Managing nervousness"] },
      { groupTitle: "Communication Skills", items: ["Structured speaking", "Persuasive delivery", "Workplace scenarios"] }
    ],
    reviews: [
      { name: "Nadine Paramitha", batch: "Alumni Batch 13", role: "HR Business Partner di Tiket.com", comment: "Teknik komunikasi yang diajarkan sangat praktis untuk dunia kerja. Aku jadi lebih percaya diri saat presentasi dan diskusi dengan stakeholder." },
      { name: "Bagas Ramadhan", batch: "Alumni Batch 9", role: "Team Lead Customer Experience di Kredivo", comment: "Course ini membantu aku memperbaiki struktur bicara & leadership presence. Komunikasi ke tim jadi lebih efektif." }
    ]
  },
  {
    id: 9,
    title: "Meta & Google Ads",
    category: "Bidang Studi",
    subCategory: "Pemasaran",
    desc: "Course ini membahas dasar hingga strategi lanjutan dalam menjalankan iklan digital menggunakan Meta Ads dan Google Ads, termasuk targeting, budgeting, optimasi performa, dan scaling campaign.",
    mentor: "Alexander Nicho",
    role: "Growth Marketing Lead di Shopee",
    modul: "12",
    duration: "360 Menit",
    mentorBio: "Alexander berpengalaman mengelola campaign performance marketing skala besar dengan fokus pada acquisition, optimization, dan ROI growth.",
    duration: 9,
    isDiscount: true,
    price: "Rp 300K",
    originalPrice: "Rp 900K",
    rating: "5.0 (86)",
    image: "/course-images/bg9.png",
    avatar: "/course-images/avatar-9.png",
    syllabus: [
      { groupTitle: "Ads Fundamentals", items: ["Platform overview", "Audience targeting", "Budgeting strategy"] },
      { groupTitle: "Optimization & Scaling", items: ["Performance analysis", "A/B testing", "Scaling winning ads"] }
    ],
    reviews: [
      { name: "Farhan Akbar", batch: "Alumni Batch 3", role: "Performance Marketer di Digital Agency", comment: "Materinya langsung bisa dipakai untuk optimasi campaign klien. Penjelasan targeting & scaling strategy sangat insightful." },
      { name: "Dewi Kartika", batch: "Alumni Batch 5", role: "Owner UMKM Fashion Brand", comment: "Setelah mengikuti course ini, aku lebih paham cara menjalankan iklan digital dengan efektif. Dampaknya terasa di peningkatan penjualan." }
    ]
  }
];