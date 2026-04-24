/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  Star, 
  ChevronRight, 
  Utensils, 
  Coffee, 
  Beer,
  Image as ImageIcon
} from "lucide-react";

const HOURS = [
  { day: "Poniedziałek", time: "11:30 - 22:00" },
  { day: "Wtorek", time: "11:30 - 22:00" },
  { day: "Środa", time: "11:30 - 22:00" },
  { day: "Czwartek", time: "11:30 - 22:00" },
  { day: "Piątek", time: "11:30 - 22:00" },
  { day: "Sobota", time: "11:30 - 22:00" },
  { day: "Niedziela", time: "11:30 - 22:00" },
];

const GALLERY_LINKS = [
  { name: "Wnętrze Karczmy", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEmM8RxJMCPvqANq9uMjf_qPO_emICg_eDaeOo7Vpha0iT5YjhQgu4sHa716iCrAzFksAmN8avSn0s8a1fJ_hvJbcT8K9Vw-Rj4AGBXXWOi8nXdWy5-W4RJdhyc9VOsf72sFQ435REET-bL=s800", url: "https://maps.app.goo.gl/pmWJW1sRyP9Hqjhd8" },
  { name: "Nasze Dania", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEbzC16f4FHa4OImiuoCnngU66wkdJTyEucKO3Afh-T84D1zxhjrov7csrUFmhEqjS-RQCwehW2ADdhz8aEV_gWBQVrCJYbd5WFZtYCgWlObKczMgX37lGKL_tiPAHrLmiftubqIC_WEtTD=s800", url: "https://maps.app.goo.gl/4RCX4zemmRav12WK9" },
  { name: "Klimat Zagrody", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHyux76IB-NTMHyXRStxEGrmoazOAbJnt4c9Ng13SUeCgHpFeBu3tJS5e9PjxAYYiMGrQmwDNILpPLSEh3eXRuPlWwrVcKj3yw9-1S5ny0nMQUPr0k7ucgHl-psFur-DdUHvtNO=s800", url: "https://maps.app.goo.gl/CYvkAZibcRDdc2QC6" },
  { name: "Regionalne Specjały", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEC5d4BQZ5OnAjWuxxi1Nf1kM8HGpQLlzuAZ6mVVXfsyuB8IqPQvtet17dzBj40AXc-K3k3VcIyOUZhVwMAdaAiVqGBmk4Jz4Lr6WhF5CyvQLVeMqRnH4aeOjE1XZERORyxFI6G=s800", url: "https://maps.app.goo.gl/NwP1HJpvqfUnGPxZ8" },
  { name: "Goście w Zagrodzie", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGKzlcmxHzQZ3APFMWs6fj7oP-HfbIazOGLCXmBvQhsVkAxsZZcJXftIvE9UevRBZwIiE8QAl-pzUqCslhX374baoyNyV8oN63pxH3TD9xIqWCZIVME-PKnIhFg6QpAlbdSJF7OSA=s800", url: "https://maps.app.goo.gl/RCoQ7SFXJP9xcEPLA" },
];

const Parzenica = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50 0 C60 20 90 20 90 50 C90 80 60 80 50 100 C40 80 10 80 10 50 C10 20 40 20 50 0 Z M50 20 C40 35 30 35 30 50 C30 65 40 65 50 80 C60 65 70 65 70 50 C70 35 60 35 50 20 Z" opacity="0.15" />
    <circle cx="50" cy="50" r="5" opacity="0.2" />
  </svg>
);

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  };

  const FolkDivider = () => (
    <div className="flex items-center justify-center gap-4 py-12 opacity-20">
      <div className="h-px w-24 bg-tavern-gold"></div>
      <Parzenica className="w-8 h-8 text-tavern-gold" />
      <div className="h-px w-24 bg-tavern-gold"></div>
    </div>
  );

  return (
    <div className="min-h-screen selection:bg-tavern-gold selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-tavern-cream/90 backdrop-blur-xl border-b border-tavern-wood/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="relative flex items-center justify-center w-14 h-14">
              <Parzenica className="absolute inset-0 text-tavern-gold" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-black tracking-tighter text-tavern-brown uppercase">Zagroda</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-tavern-gold -mt-1">Zakopane</span>
            </div>
          </motion.div>
          <div className="hidden lg:flex gap-10 text-[11px] uppercase tracking-[0.25em] font-black text-tavern-brown/60">
            <a href="#about" className="hover:text-tavern-gold transition-all relative group">
              O nas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tavern-gold transition-all group-hover:w-full"></span>
            </a>
            <a href="#danie-dnia" className="hover:text-tavern-gold transition-all relative group">
              Danie Dnia
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tavern-gold transition-all group-hover:w-full"></span>
            </a>
            <a href="#galeria" className="hover:text-tavern-gold transition-all relative group">
              Galeria
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tavern-gold transition-all group-hover:w-full"></span>
            </a>
            <a href="#kontakt" className="hover:text-tavern-gold transition-all relative group">
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tavern-gold transition-all group-hover:w-full"></span>
            </a>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href="tel:530188652" 
            className="hidden sm:flex items-center gap-3 bg-tavern-wood text-white px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-tavern-dark transition-all shadow-xl shadow-tavern-brown/10 active:scale-95"
          >
            <Phone size={14} className="text-tavern-gold" /> 530 188 652
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHyux76IB-NTMHyXRStxEGrmoazOAbJnt4c9Ng13SUeCgHpFeBu3tJS5e9PjxAYYiMGrQmwDNILpPLSEh3eXRuPlWwrVcKj3yw9-1S5ny0nMQUPr0k7ucgHl-psFur-DdUHvtNO=s1200" 
            alt="Zagroda Atmosphere" 
            className="w-full h-full object-cover brightness-[0.35] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tavern-dark/40 via-transparent to-tavern-cream/10"></div>
        </div>
        <div className="absolute top-24 left-1/2 -translate-x-1/2 opacity-20">
           <Parzenica className="w-64 h-64 text-white" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-[10rem] font-bold mb-4 tracking-tighter leading-none italic font-serif opacity-90">
              Zagroda
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <p className="text-lg md:text-2xl font-light mb-12 text-tavern-cream/90 tracking-[0.4em] uppercase font-sans">
              Tradycyjna Dusza Zakopanego
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href="#danie-dnia" className="min-w-[240px] bg-tavern-gold hover:bg-tavern-cream hover:text-tavern-brown text-white px-12 py-5 rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-2xl shadow-tavern-gold/20 active:scale-95 group">
              Sprawdź Obiad Dnia
              <ChevronRight size={14} className="inline ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61567887907726" 
              target="_blank" 
              className="min-w-[240px] flex items-center justify-center gap-3 border border-white/40 hover:bg-white hover:text-tavern-brown px-12 py-5 rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all backdrop-blur-sm shadow-xl"
            >
              <Facebook size={16} /> Facebook
            </a>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 animate-bounce"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Przewiń</span>
          <div className="w-px h-12 bg-white/20 mx-auto"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 px-6 bg-tavern-cream relative folk-pattern">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-tavern-cream to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-5">
            <Parzenica className="w-96 h-96" />
          </div>
          <motion.div {...stagger} className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div variants={fadeIn} className="relative z-10 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 text-tavern-gold mb-8">
                <Parzenica className="w-8 h-8" />
                <span className="uppercase tracking-[0.5em] text-[10px] font-black">Gościnność od Serca</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-[0.95] tracking-tighter italic">
                Prawdziwa kuchnia,<br/><span className="text-tavern-gold">która łączy.</span>
              </h2>
              <p className="text-xl text-tavern-brown/80 mb-12 leading-relaxed font-medium">
                W samym sercu Krupówek czeka na Państwa Zagroda – karczma stworzona z miłości do tradycji. Specjalizujemy się w daniach regionalnych, a nasze <span className="text-tavern-red font-bold underline decoration-tavern-red/30 underline-offset-8">domowe pierogi</span> stały się symbolem jakości, którą goście wspominają jeszcze długo po powrocie z gór.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 text-left">
                <div className="group highland-card p-8 bg-white/50 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-tavern-wood/10 rounded-xl flex items-center justify-center text-tavern-wood mb-6 group-hover:scale-110 transition-transform">
                    <Utensils size={24} />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-widest mb-3">Lokalne Smaki</h4>
                  <p className="text-sm text-tavern-brown/60 leading-relaxed">Każde danie przygotowujemy ze starannie dobranych produktów od lokalnych dostawców.</p>
                </div>
                <div className="group highland-card p-8 bg-white/50 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-tavern-red/10 rounded-xl flex items-center justify-center text-tavern-red mb-6 group-hover:scale-110 transition-transform">
                    <Star size={24} />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-widest mb-3">Atmosfera</h4>
                  <p className="text-sm text-tavern-brown/60 leading-relaxed">Drewniane wnętrza i kameralny wystrój sprzyjają miłym spotkaniom w gronie najbliższych.</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="relative px-4 sm:px-8 mt-24 lg:mt-0">
              <div className="absolute inset-0 border-[20px] border-tavern-gold/5 rounded-[4rem] rotate-3 scale-110"></div>
              <div className="aspect-[4/5] overflow-hidden rounded-[3rem] shadow-3xl shadow-tavern-brown/20 relative z-10">
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEmM8RxJMCPvqANq9uMjf_qPO_emICg_eDaeOo7Vpha0iT5YjhQgu4sHa716iCrAzFksAmN8avSn0s8a1fJ_hvJbcT8K9Vw-Rj4AGBXXWOi8nXdWy5-W4RJdhyc9VOsf72sFQ435REET-bL=s800" 
                  alt="Traditional dish" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-2 sm:-bottom-12 sm:-right-6 bg-tavern-dark text-white p-6 sm:p-10 rounded-[2.5rem] shadow-3xl z-20 max-w-[240px] sm:max-w-[280px] wood-texture">
                <div className="flex gap-1 text-tavern-gold mb-5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm italic font-serif leading-relaxed opacity-90 mb-6">
                  "Miejsce z duszą. Pierogi smakują jak u babci, a atmosfera sprawia, że chce się tu wracać każdego dnia pobytu."
                </p>
                <a 
                  href="https://maps.app.goo.gl/nEfAujcPHFj2uBMd9" 
                  target="_blank"
                  className="inline-flex items-center gap-2 group text-[10px] font-black uppercase tracking-[0.3em] hover:text-tavern-gold transition-colors"
                >
                  Więcej Opinii <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Danie Dnia Section */}
      <section id="danie-dnia" className="py-32 px-6 wood-texture text-tavern-cream relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-tavern-cream via-transparent to-transparent opacity-10"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <div className="inline-flex items-center gap-4 bg-tavern-red px-10 py-3 rounded-full mb-10 shadow-2xl shadow-tavern-red/20">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              <span className="text-sm font-black uppercase tracking-[0.3em]">OFERTA NA DZIŚ • 23.04.2026</span>
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            </div>
            <h2 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter leading-none italic font-serif">40.00 PLN</h2>
            <p className="text-tavern-gold text-2xl font-serif italic max-w-2xl mx-auto opacity-80 leading-relaxed font-light">
              Dwa dania pełne tradycyjnego smaku, przygotowane ze świeżych składników.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-xl relative group transition-all duration-500 hover:border-tavern-red/30"
            >
              <div className="absolute top-8 right-8 text-tavern-red/20">
                <Parzenica className="w-16 h-16" />
              </div>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-tavern-red mb-6 bg-tavern-red/10 px-4 py-1.5 rounded-full">Propozycja I</span>
              <div className="space-y-10">
                <div className="relative group/item">
                  <span className="absolute -left-6 top-3 text-[10px] font-bold text-tavern-gold/40">01.</span>
                  <p className="font-serif text-3xl md:text-4xl font-bold mb-2 group-hover/item:text-tavern-gold transition-colors">Zupa Pomidorowa</p>
                  <p className="text-sm text-tavern-cream/40 uppercase tracking-widest font-black leading-relaxed">Z makaronem, według domowej receptury</p>
                </div>
                <div className="relative group/item">
                  <span className="absolute -left-6 top-3 text-[10px] font-bold text-tavern-gold/40">02.</span>
                  <p className="font-serif text-3xl md:text-4xl font-bold mb-2 group-hover/item:text-tavern-gold transition-colors">Stek Wieprzowy</p>
                  <p className="text-sm text-tavern-cream/40 uppercase tracking-widest font-black leading-relaxed">Siekany z cebulką, ziemniaki, świeża surówka</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-xl relative group transition-all duration-500 hover:border-tavern-gold/40"
            >
              <div className="absolute top-8 right-8 text-tavern-gold/20">
                <Parzenica className="w-16 h-16" />
              </div>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-tavern-gold mb-6 bg-tavern-gold/10 px-4 py-1.5 rounded-full">Propozycja II</span>
              <div className="space-y-10">
                <div className="relative group/item">
                  <span className="absolute -left-6 top-3 text-[10px] font-bold text-tavern-gold/40">01.</span>
                  <p className="font-serif text-3xl md:text-4xl font-bold mb-2 group-hover/item:text-tavern-gold transition-colors">Rosół Tradycyjny</p>
                  <p className="text-sm text-tavern-cream/40 uppercase tracking-widest font-black leading-relaxed">Z ręcznie robionym makaronem i warzywami</p>
                </div>
                <div className="relative group/item">
                  <span className="absolute -left-6 top-3 text-[10px] font-bold text-tavern-gold/40">02.</span>
                  <p className="font-serif text-3xl md:text-4xl font-bold mb-2 group-hover/item:text-tavern-gold transition-colors">Kotlet Schabowy</p>
                  <p className="text-sm text-tavern-cream/40 uppercase tracking-widest font-black leading-relaxed">Złocista panierka, ziemniaki, zestaw surówek</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeIn} transition={{ delay: 0.5 }} className="mt-20 text-center">
             <p className="text-tavern-cream/40 text-[10px] uppercase tracking-[0.5em] font-black">Codziennie inna oferta • Zapraszamy od 11:30</p>
          </motion.div>
        </div>
      </section>

      <FolkDivider />

      {/* Featured Review Section */}
      <section className="py-24 px-6 bg-tavern-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            {...fadeIn}
            className="highland-card p-12 md:p-20 text-center relative overflow-hidden highland-gradient"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
               <Parzenica className="w-full h-full scale-150 rotate-12" />
            </div>
            
            <div className="flex justify-center gap-1 text-tavern-gold mb-10">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star fill="currentColor" size={24} />
                </motion.div>
              ))}
            </div>

            <h3 className="text-3xl md:text-5xl font-serif italic font-bold mb-10 leading-tight text-tavern-dark">
              "To miejsce jest absolutnie wspaniałe! Świetna atmosfera, piękne wnętrze, a jedzenie... Było PRZEPYSZNE! Każdy kęs to magia."
            </h3>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tavern-gold/20 flex items-center justify-center text-tavern-gold font-bold text-xl italic">
                  G
                </div>
                <div className="text-left">
                  <p className="font-black uppercase tracking-widest text-xs">Opinia z Google Maps</p>
                  <p className="text-tavern-brown/40 text-xs">Kwiecień 2026</p>
                </div>
              </div>
              
              <a 
                href="https://maps.app.goo.gl/oDd3LEiAJmdG873o8" 
                target="_blank"
                className="inline-flex items-center gap-3 bg-tavern-dark text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-tavern-gold transition-all shadow-xl active:scale-95 group"
              >
                Przeczytaj pełną opinię <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <FolkDivider />
      <section id="galeria" className="py-40 px-6 bg-tavern-cream relative folk-pattern">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-32">
            <Parzenica className="w-16 h-16 mx-auto mb-8 text-tavern-gold opacity-40" />
            <h2 className="text-6xl md:text-8xl font-bold mb-8 italic tracking-tighter">Okiem Zagrody</h2>
            <p className="text-tavern-brown/50 uppercase tracking-[0.5em] text-[10px] font-black">Nasze wnętrza, dania i atmosfera</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {GALLERY_LINKS.map((link, idx) => (
              <motion.a
                key={idx}
                whileHover={{ y: -10 }}
                href={link.url}
                target="_blank"
                className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-tavern-brown shadow-xl"
              >
                <img 
                  src={link.image} 
                  alt={link.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 grayscale-[0.5] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-tavern-gold/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 backdrop-blur-[2px]">
                  <ImageIcon className="text-white scale-150" size={32} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] block opacity-60">Zobacz w Google Maps</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="kontakt" className="py-32 px-6 border-t border-tavern-wood/5 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            <motion.div {...fadeIn} className="lg:col-span-4">
              <h3 className="text-4xl font-bold mb-12 italic font-serif flex items-center gap-4 text-tavern-dark">
                Znajdź nas w <span className="text-tavern-gold">Sercu</span> Zakopanego
              </h3>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-tavern-gold/10 rounded-xl flex items-center justify-center text-tavern-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-tavern-gold mb-3">Lokalizacja</h4>
                    <p className="text-2xl font-bold leading-tight">
                      Krupówki 24<br />
                      34-500 Zakopane
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-tavern-red/10 rounded-xl flex items-center justify-center text-tavern-red">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-tavern-red mb-3">Rezerwacje</h4>
                    <a href="tel:530188652" className="text-3xl font-black hover:text-tavern-gold transition-colors">
                      530 188 652
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61567887907726" 
                    target="_blank"
                    className="w-14 h-14 bg-tavern-brown text-white rounded-2xl flex items-center justify-center hover:bg-tavern-gold hover:scale-110 transition-all duration-300"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://maps.app.goo.gl/nEfAujcPHFj2uBMd9" 
                    target="_blank"
                    className="flex-1 bg-tavern-cream border border-tavern-wood/10 rounded-2xl flex items-center justify-center gap-3 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:border-tavern-gold transition-all duration-300"
                  >
                    Wyznacz trasę <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.3 }}
              className="lg:col-span-8 space-y-12"
            >
              <div className="grid sm:grid-cols-2 gap-12 bg-tavern-cream/30 p-10 rounded-[3rem] border border-tavern-wood/5">
                <div>
                  <h3 className="text-xl font-bold mb-8 italic font-serif flex items-center gap-4">
                    <Clock className="text-tavern-gold" size={20} /> Godziny otwarcia
                  </h3>
                  <div className="space-y-4">
                    {HOURS.map((h, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-tavern-wood/5 pb-2 text-sm">
                        <span className="font-bold opacity-40 uppercase tracking-widest text-[9px]">{h.day}</span>
                        <span className="font-black text-tavern-brown/80">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-tavern-gold/5 rounded-[2rem] group-hover:scale-105 transition-transform"></div>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-square shadow-tavern-brown/10">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.070882631626!2d19.95056521273461!3d49.29400037127513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f2912b6578ef%3A0x1d2720b4207972d3!2sKarczma%20Zagroda!5e0!3m2!1spl!2spl!4v1777016954010!5m2!1spl!2spl" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-tavern-dark text-white relative overflow-hidden wood-texture">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div {...fadeIn} className="flex flex-col items-center gap-10">
            <div className="relative">
              <Parzenica className="absolute -inset-10 text-tavern-gold/20 animate-pulse" />
              <img 
                src="https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/465440644_122101444844596263_5355178507973342333_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=pbWCW5mcRRcQ7kNvwH90XiH&_nc_oc=AdoZr_xfXMdjRiedXqsLEaJS-h6Nk8XG0eaQ-IaoRZfTSsySuR9DZYqLlMu1pMnM5Jk&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=H_5tdgnlyEONyX_EJRSwrQ&oh=00_Af38ihd8LiEpzxUHnD-npropYcEjRjxtpCb1A1X2rVnLJg&oe=69F0D91C" 
                alt="Logo Small" 
                className="w-16 h-16 rounded-full border-2 border-tavern-gold object-cover shadow-2xl relative z-10 brightness-75 hover:brightness-100 transition-all"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-black tracking-widest text-tavern-gold uppercase italic mb-2">Zagroda</h2>
              <p className="text-[10px] uppercase tracking-[0.5em] font-black opacity-30">Zakopane • Krupówki 24</p>
            </div>
            <div className="w-32 h-px bg-white/10"></div>
            <div className="flex gap-10 text-white/40">
              <a href="https://www.facebook.com/profile.php?id=61567887907726" className="hover:text-tavern-gold hover:scale-120 transition-all">
                <Facebook size={24} />
              </a>
              <a href="https://maps.app.goo.gl/nEfAujcPHFj2uBMd9" className="hover:text-tavern-gold hover:scale-120 transition-all">
                <Star size={24} fill="currentColor" />
              </a>
            </div>
            <p className="text-[9px] uppercase tracking-[0.6em] text-white/20 font-black pt-10">
              Copyright © 2026 Karczma Zagroda Zakopane<br/>Wszelkie Prawa Zastrzeżone
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
