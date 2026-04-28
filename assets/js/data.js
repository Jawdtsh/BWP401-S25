const events = [
  {
    id: 1,
    title: "مؤتمر التقنية 2026",
    description: "مؤتمر تقني شامل يعرض أحدث الابتكارات في الذكاء الاصطناعي وتطوير الويب.",
    location: "مركز المعارض",
    category: "تقنية",
    date: "2026-06-15",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    featured: true
  },
  {
    id: 2,
    title: "حفل الموسيقى الكلاسيكية",
    description: "أمسية رائعة مع أوركسترا الجامعة تقدم مقطوعات عالمية.",
    location: "المسرح الروماني",
    category: "موسيقى",
    date: "2026-07-20",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=60",
    featured: true
  },
  {
    id: 3,
    title: "ماراثون الجامعة",
    description: "ماراثون رياضي مفتوح للطلاب والمجتمع لتعزيز الصحة اللياقة.",
    location: "الملعب الرئيسي",
    category: "رياضة",
    date: "2026-05-10",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&auto=format&fit=crop&q=60",
    featured: true
  },
  {
    id: 4,
    title: "معرض الكتاب",
    description: "معرض سنوي يضم آلاف الكتب والندوات الثقافية.",
    location: "المكتبة المركزية",
    category: "ثقافة",
    date: "2026-08-05",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop&q=60",
    featured: false
  },
  {
    id: 5,
    title: "مهرجان العائلة",
    description: "يوم ترفيهي للعائلات مع ألعاب وأنشطة متنوعة.",
    location: "حديقة الجامعة",
    category: "عائلي",
    date: "2026-09-12",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",
    featured: false
  },
  {
    id: 6,
    title: "ورشة عمل تطوير الويب",
    description: "ورشة عمل مكثفة لتعلم أحدث تقنيات بناء المواقع.",
    location: "مختبر الحاسوب",
    category: "تقنية",
    date: "2026-05-25",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    featured: false
  },
  {
    id: 7,
    title: "بطولة الشطرنج",
    description: "بطولة مفتوحة لمحبي الشطرنج مع جوائز قيمة.",
    location: "النادي الطلابي",
    category: "رياضة",
    date: "2026-10-10",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&auto=format&fit=crop&q=60",
    featured: false
  },
  {
    id: 8,
    title: "ندوة الشعر العربي",
    description: "أمسية شعرية بمشاركة شعراء من مختلف الدول العربية.",
    location: "قاعة الندوات",
    category: "ثقافة",
    date: "2026-11-05",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&auto=format&fit=crop&q=60",
    featured: false
  }
];

const teamMembers = [
  { name: "جودت محسن الشلبي", id: "jawdt_328165", role: "Team Leader", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jawdt" },
  { name: "طارق اسامة الايوبي", id: "tarek_304168", role: "Full Stack Developer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bashir" },
  { name: "محمد يحيى جندلي", id: "mohamadyahya_260290", role: "Front-End Developer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Malak" },
  { name: "عبد القادر مروان كامل", id: "abdulkader_156551", role: "Front-End Developer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aya" },
  { name: "نينار شعبو", id: "ninar_295346", role: "Front-End Developer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hala" },
];
