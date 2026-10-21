// Multi-language support for Bradford School Website
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_academics: "Academics",
        nav_teachers: "Teachers",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "Welcome to Bradford School",
        hero_subtitle: "Excellence in Education, Excellence in Character",
        hero_btn: "Learn More",
        
        // Quick Info
        students: "450 Students",
        students_desc: "Growing community of learners",
        facilities: "Modern Facilities",
        facilities_desc: "State-of-the-art infrastructure",
        faculty: "Expert Faculty",
        faculty_desc: "Dedicated and qualified teachers",
        location: "Kohat, Pakistan",
        location_desc: "Serving the community since establishment",
        
        // About Section
        about_title: "About Bradford School",
        about_text: "Bradford School is a premier educational institution located in Kohat, dedicated to providing quality education and holistic development to its students. With a student body of 450 bright and enthusiastic learners, we pride ourselves on creating an environment that fosters academic excellence and personal growth.",
        about_text2: "Our mission is to empower students with knowledge, skills, and values that will help them succeed in their academic pursuits and become responsible citizens of society.",
        
        // Leadership
        leadership_title: "School Leadership",
        principal: "Principal",
        principal_name: "Sir Nawaz",
        principal_desc: "Visionary leader committed to educational excellence and student development",
        
        // Statistics
        stats_title: "By The Numbers",
        stat_students: "Students",
        stat_faculty: "Faculty Members",
        stat_years: "Years of Service",
        stat_dedication: "Dedication",
        
        // Footer
        footer_phone: "Phone: +92-922-915555",
        footer_email: "Email: info@bradfordschool.pk",
        footer_copyright: "© 2024 Bradford School, Kohat. All rights reserved.",
        footer_home: "Home",
        footer_about: "About",
        footer_contact: "Contact",
        
        // About Page
        about_vision: "Vision",
        about_mission: "Mission",
        about_vision_text: "Bradford School envisions a future where every student is empowered with knowledge, skills, and virtues to become a responsible global citizen. We strive to create an environment that nurtures curiosity, creativity, and critical thinking.",
        about_mission_text: "Our mission is to provide quality education that develops students academically, physically, socially, and morally. We are committed to fostering a culture of excellence, integrity, and inclusivity where every student can achieve their full potential.",
        about_values: "Core Values",
        about_excellence: "Excellence",
        about_excellence_desc: "We pursue excellence in all endeavors, setting high standards for academics and personal conduct.",
        about_integrity: "Integrity",
        about_integrity_desc: "We believe in honesty, ethical behavior, and accountability in all our actions.",
        about_respect: "Respect",
        about_respect_desc: "We respect diversity, individuality, and the dignity of every member of our community.",
        about_collaboration: "Collaboration",
        about_collaboration_desc: "We work together to achieve common goals and support each other's growth.",
        about_innovation: "Innovation",
        about_innovation_desc: "We embrace creative thinking and modern approaches to education.",
        about_community: "Community",
        about_community_desc: "We foster a sense of belonging and responsibility towards our school and society.",
        about_facts: "Quick Facts",
        
        // Contact Page
        contact_title: "Get in Touch",
        contact_subtitle: "We'd love to hear from you",
        contact_info: "Contact Information",
        contact_address: "Address",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_hours: "Working Hours",
        contact_form_title: "Send us a Message",
        contact_name: "Full Name *",
        contact_email_label: "Email Address *",
        contact_phone_label: "Phone Number",
        contact_subject: "Subject *",
        contact_message: "Message *",
        contact_submit: "Send Message",
        contact_success: "Thank you for your message! We will get back to you soon.",
        contact_select_subject: "-- Select Subject --",
        contact_admission: "Admission Inquiry",
        contact_academics_inquiry: "Academic Matters",
        contact_events: "Events & Activities",
        contact_feedback: "Feedback",
        contact_other: "Other",
        contact_location: "Location",
        
        // Academics Page
        academics_title: "Academic Programs",
        academics_subtitle: "Quality Education for Every Student",
        academics_curriculum: "Our Curriculum",
        academics_curriculum_text: "Bradford School follows both Cambridge and National curricula, providing students with a comprehensive and balanced education. Our academic programs are designed to develop critical thinking, creativity, and problem-solving skills.",
        academics_classes: "Classes Offered",
        academics_primary: "Primary Section",
        academics_primary_classes: "Classes: 1-5",
        academics_primary_desc: "Foundation building with focus on literacy, numeracy, and life skills",
        academics_middle: "Middle Section",
        academics_middle_classes: "Classes: 6-8",
        academics_middle_desc: "Transitional phase with emphasis on subject specialization",
        academics_secondary: "Secondary Section",
        academics_secondary_classes: "Classes: 9-10 (O-Levels)",
        academics_secondary_desc: "Cambridge O-Levels with comprehensive academic preparation",
        academics_higher: "Higher Section",
        academics_higher_classes: "Classes: 11-12 (A-Levels)",
        academics_higher_desc: "Cambridge A-Levels with advanced subject specialization",
        academics_subjects: "Core Subjects",
        academics_sciences: "Sciences",
        academics_math: "Mathematics",
        academics_languages: "Languages",
        academics_humanities: "Humanities",
        academics_methodology: "Teaching Methodology",
        academics_methodology_text: "We employ modern, interactive teaching methods that encourage students to think independently and creatively. Our classrooms are equipped with multimedia resources, and we utilize project-based learning, group discussions, and practical demonstrations to make learning engaging and effective.",
        academics_extracurricular: "Extracurricular Activities",
        academics_sports: "Sports",
        academics_sports_desc: "Football, cricket, badminton, athletics",
        academics_arts: "Arts & Culture",
        academics_arts_desc: "Drama, music, art, cultural events",
        academics_tech: "Technology",
        academics_tech_desc: "Computer clubs, coding, digital literacy",
        academics_community: "Community Service",
        academics_community_desc: "Social outreach, environmental awareness",
        
        // Teachers Page
        teachers_title: "Our Faculty",
        teachers_subtitle: "Dedicated Educators Shaping Futures",
        teachers_intro_title: "Meet Our Expert Teachers",
        teachers_intro_text: "Our faculty comprises highly qualified and experienced educators who are passionate about fostering academic excellence and personal growth. With years of teaching experience and commitment to student success, they create an inspiring learning environment where every student thrives.",
        teachers_why_title: "Why Choose Our Teachers?",
        teachers_qualified: "All teachers hold relevant degrees and teaching certifications with continuous professional development.",
        teachers_experienced: "Average teaching experience of 12+ years with proven track record of student success.",
        teachers_innovative: "Use modern teaching methodologies and incorporate technology in daily lessons.",
        teachers_supportive: "Committed to individual student development with personalized attention and mentoring.",
        teachers_passionate: "Deeply committed to fostering love for learning and academic excellence.",
        teachers_rolemodels: "Set excellent examples through integrity, professionalism, and dedication.",
        
        teacher1_name: "Mr. Ahmed Hassan",
        teacher1_subject: "Mathematics & Physics",
        teacher1_bio: "15 years of teaching experience with a passion for making complex concepts simple and engaging.",
        teacher2_name: "Mrs. Fatima Khan",
        teacher2_subject: "English & Urdu Literature",
        teacher2_bio: "Dedicated to developing students' language skills and fostering a love for literature and writing.",
        teacher3_name: "Dr. Muhammad Ali",
        teacher3_subject: "Chemistry & Biology",
        teacher3_bio: "PhD holder committed to practical learning and conducting regular lab sessions for better understanding.",
        teacher4_name: "Ms. Ayesha Malik",
        teacher4_subject: "History & Geography",
        teacher4_bio: "Expert in making history come alive and geography interactive through innovative teaching methods.",
        teacher5_name: "Mr. Hassan Tech",
        teacher5_subject: "Information Technology",
        teacher5_bio: "Tech-savvy educator bridging the gap between theory and practical application in computer science.",
        teacher6_name: "Mrs. Sara Khan",
        teacher6_subject: "Physical Education & Sports",
        teacher6_bio: "Passionate about developing physical fitness, teamwork, and sports excellence among students."
    },
    ur: {
        // Navigation
        nav_home: "ہوم",
        nav_about: "تعارف",
        nav_academics: "تعلیمات",
        nav_teachers: "اساتذہ",
        nav_contact: "رابطہ",
        
        // Hero Section
        hero_title: "برڈفورڈ اسکول میں خوش آمدید",
        hero_subtitle: "تعلیم میں کمال، کردار میں کمال",
        hero_btn: "مزید معلومات",
        
        // Quick Info
        students: "450 طالبین",
        students_desc: "سیکھنے والوں کی بڑھتی ہوئی تنظیم",
        facilities: "جدید سہولیات",
        facilities_desc: "جدید انفراسٹرکچر",
        faculty: "ماہر اساتذہ",
        faculty_desc: "منتخب اور قابل استاد",
        location: "کوہاٹ، پاکستان",
        location_desc: "کمیونٹی کی خدمت میں",   
        
        // About Section
        about_title: "برڈفورڈ اسکول کے بارے میں",
        about_text: "برڈفورڈ اسکول کوہاٹ میں ایک اہم تعلیمی ادارہ ہے جو طالب علموں کو معیاری تعلیم اور مکمل ترقی فراہم کرتا ہے۔ 450 طالبین کی تنظیم کے ساتھ، ہم تعلیمی کمالیت اور ذاتی ترقی کو فروغ دینے والے ماحول میں فخر محسوس کرتے ہیں۔",
        about_text2: "ہمارا مقصد طالب علموں کو علم، مہارت اور اقدار سے آراستہ کرنا ہے تاکہ وہ اپنی تعلیمی کوششوں میں کامیاب ہوں اور معاشرے کے ذمہ دار شہری بنیں۔",
        
        // Leadership
        leadership_title: "اسکول کی قیادت",
        principal: "پرنسپل",
        principal_name: "سر نواز",
        principal_desc: "تعلیمی کمالیت اور طالب علم کی ترقی کے لیے وژن رکھنے والے لیڈر",
        
        // Statistics
        stats_title: "اعدادوشمار",
        stat_students: "طالبین",
        stat_faculty: "اساتذہ",
        stat_years: "سال کی خدمت",
        stat_dedication: "سمرپن",
        
        // Footer
        footer_phone: "فون: +92-922-915555",
        footer_email: "ای میل: info@bradfordschool.pk",
        footer_copyright: "© 2024 برڈفورڈ اسکول، کوہاٹ۔ تمام حقوق محفوظ ہیں۔",
        footer_home: "ہوم",
        footer_about: "تعارف",
        footer_contact: "رابطہ",
        
        // About Page
        about_vision: "نظریہ",
        about_mission: "مشن",
        about_vision_text: "برڈفورڈ اسکول کا نظریہ ایک ایسا مستقبل ہے جہاں ہر طالب علم علم، مہارت اور فضائل سے آراستہ ہو تاکہ وہ ایک ذمہ دار عالمی شہری بنے۔",
        about_mission_text: "ہمارا مقصد معیاری تعلیم فراہم کرنا ہے جو طالب علموں کو تعلیمی، جسمانی، سماجی اور اخلاقی طور پر ترقی دے۔",
        about_values: "بنیادی اقدار",
        about_excellence: "کمالیت",
        about_excellence_desc: "ہم تمام کوششوں میں کمالیت کی تلاش میں ہیں",
        about_integrity: "دیانتداری",
        about_integrity_desc: "ہم ہر عمل میں ایمانداری اور احتساب میں یقین رکھتے ہیں",
        about_respect: "احترام",
        about_respect_desc: "ہم اپنی کمیونٹی کے ہر فرد کا احترام کرتے ہیں",
        about_collaboration: "تعاون",
        about_collaboration_desc: "ہم مشترکہ مقاصد کے حصول کے لیے اکٹھا کام کرتے ہیں",
        about_innovation: "نوعیت",
        about_innovation_desc: "ہم تعلیم میں نئے طریقوں کو قبول کرتے ہیں",
        about_community: "کمیونٹی",
        about_community_desc: "ہم اپنے اسکول اور معاشرے کے لیے تعلق اور ذمہ داری کو فروغ دیتے ہیں",
        about_facts: "اہم حقائق",
        
        // Contact Page
        contact_title: "ہمارے ساتھ رابطہ کریں",
        contact_subtitle: "ہم آپ کی بات سننا پسند کریں گے",
        contact_info: "رابطہ کی معلومات",
        contact_address: "پتہ",
        contact_phone: "فون",
        contact_email: "ای میل",
        contact_hours: "کام کے اوقات",
        contact_form_title: "ہمیں پیغام بھیجیں",
        contact_name: "مکمل نام *",
        contact_email_label: "ای میل ایڈریس *",
        contact_phone_label: "فون نمبر",
        contact_subject: "موضوع *",
        contact_message: "پیغام *",
        contact_submit: "پیغام بھیجیں",
        contact_success: "آپ کے پیغام کا شکریہ! ہم جلد آپ کے پاس واپس آئیں گے۔",
        contact_select_subject: "-- موضوع منتخب کریں --",
        contact_admission: "داخلہ کی تفصیل",
        contact_academics_inquiry: "تعلیمی معاملات",
        contact_events: "سرگرمیاں",
        contact_feedback: "رائے",
        contact_other: "دوسری",
        contact_location: "مقام",
        
        // Academics Page
        academics_title: "تعلیمی پروگرام",
        academics_subtitle: "ہر طالب علم کے لیے معیاری تعلیم",
        academics_curriculum: "ہمارا نصاب",
        academics_curriculum_text: "برڈفورڈ اسکول کیمبرج اور ملکی نصاب کی پیروی کرتا ہے",
        academics_classes: "کلاسز",
        academics_primary: "بنیادی حصہ",
        academics_primary_classes: "کلاسز: 1-5",
        academics_primary_desc: "بنیاد کی تعمیر",
        academics_middle: "درمیانی حصہ",
        academics_middle_classes: "کلاسز: 6-8",
        academics_middle_desc: "درمیانی مرحلہ",
        academics_secondary: "ثانوی حصہ",
        academics_secondary_classes: "کلاسز: 9-10 (O-Levels)",
        academics_secondary_desc: "کیمبرج O-Levels",
        academics_higher: "اعلیٰ حصہ",
        academics_higher_classes: "کلاسز: 11-12 (A-Levels)",
        academics_higher_desc: "کیمبرج A-Levels",
        academics_subjects: "بنیادی مضامین",
        academics_sciences: "سائنسز",
        academics_math: "ریاضی",
        academics_languages: "زبانیں",
        academics_humanities: "انسانیات",
        academics_methodology: "تدریس کا طریقہ",
        academics_methodology_text: "ہم جدید اور تعاملی تدریس کے طریقوں کو استعمال کرتے ہیں",
        academics_extracurricular: "بیرونی سرگرمیاں",
        academics_sports: "کھیل",
        academics_sports_desc: "فٹ بال، کرکٹ، بیڈمنٹن",
        academics_arts: "فنون",
        academics_arts_desc: "ڈرامہ، موسیقی، فن",
        academics_tech: "ٹیکنالوجی",
        academics_tech_desc: "کمپیوٹر کلبز، کوڈنگ",
        academics_community: "کمیونٹی سروس",
        academics_community_desc: "سماجی خدمات",
        
        // Teachers Page
        teachers_title: "ہماری فیکلٹی",
        teachers_subtitle: "وقف شدہ اساتذہ مستقبل کی تشکیل",
        teachers_intro_title: "ہمارے ماہر اساتذہ سے ملیں",
        teachers_intro_text: "ہماری فیکلٹی اعلیٰ تعلیم یافتہ اور تجربہ کار اساتذہ پر مشتمل ہے جو تعلیمی کمالیت اور ذاتی ترقی میں شغف رکھتے ہیں۔",
        teachers_why_title: "ہماری اساتذہ کو کیوں منتخب کریں؟",
        teachers_qualified: "تمام اساتذہ متعلقہ ڈگریاں رکھتے ہیں اور مسلسل ترقی میں شامل ہیں۔",
        teachers_experienced: "اوسط تدریسی تجربہ 12+ سال ہے۔",
        teachers_innovative: "جدید تدریسی طریقے استعمال کرتے ہیں۔",
        teachers_supportive: "طالب علموں کی ذاتی ترقی کے لیے پرعزم ہیں۔",
        teachers_passionate: "سیکھنے کی محبت میں شغف رکھتے ہیں۔",
        teachers_rolemodels: "اچھی مثالیں پیش کرتے ہیں۔",
        
        teacher1_name: "محمد احمد حسن",
        teacher1_subject: "ریاضی اور فزکس",
        teacher1_bio: "15 سال کا تدریسی تجربہ",
        teacher2_name: "فاطمہ خان",
        teacher2_subject: "انگریزی اور اردو ادب",
        teacher2_bio: "زبان کی مہارتوں میں تخصص",
        teacher3_name: "ڈاکٹر محمد علی",
        teacher3_subject: "کیمسٹری اور بائیولوجی",
        teacher3_bio: "پی ایچ ڈی حامل",
        teacher4_name: "آیشہ ملک",
        teacher4_subject: "ہسٹری اور جیوگرافی",
        teacher4_bio: "تاریخ اور جغرافیہ میں ماہر",
        teacher5_name: "حسن ٹیک",
        teacher5_subject: "معلومات کی ٹیکنالوجی",
        teacher5_bio: "ٹیک-سیکھ ہوئے استاد",
        teacher6_name: "سارہ خان",
        teacher6_subject: "جسمانی تعلیم اور کھیل",
        teacher6_bio: "کھیلوں میں شغف رکھنے والے"
    }
};

// Initialize language
let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

// Language Switcher
function initLanguageSwitcher() {
    const langSwitcher = document.querySelector('.lang-switcher');
    if (!langSwitcher) return;
    
    const buttons = langSwitcher.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            changeLanguage(lang);
        });
    });
    
    updateSwitcherUI();
}

// Change Language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update document direction for Urdu
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    updateSwitcherUI();
}

// Update Switcher UI
function updateSwitcherUI() {
    const buttons = document.querySelectorAll('.lang-switcher button');
    buttons.forEach(btn => {
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage(currentLanguage);
    initLanguageSwitcher();
});
