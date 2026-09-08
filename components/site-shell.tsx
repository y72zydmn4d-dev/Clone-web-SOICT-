"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Search, Sun, X, ChevronRight, Facebook, Linkedin, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const links = [["About", "/about"], ["Education", "/education"], ["Research", "/research"], ["News", "/news"], ["Events", "/events"], ["People", "/people"], ["Contact", "/contact"]];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); const [open, setOpen] = useState(false); const [dark, setDark] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { setDark(localStorage.getItem("soict-theme") === "dark"); const onScroll = () => setScrolled(window.scrollY > 8); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  const toggle = () => { const next = !dark; setDark(next); localStorage.setItem("soict-theme", next ? "dark" : "light"); };
  return <div className={dark ? "dark-site paper min-h-screen" : "paper min-h-screen"}>
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "border-b line bg-white/90 backdrop-blur-xl dark:bg-[#091525]/90" : "bg-transparent"}`}>
      <div className="container-site flex h-[76px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="SOICT home"><span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-lg font-black text-white">S</span><span className="hidden leading-tight sm:block"><b className="block text-[15px] tracking-wide">SOICT</b><span className="muted text-[10px] uppercase tracking-[.12em]">Hanoi University of Science & Technology</span></span></Link>
        <nav className="hidden items-center gap-5 lg:flex">{links.map(([label, href]) => <Link key={href} href={href} className={`text-sm font-semibold transition hover:text-brand ${pathname.startsWith(href) ? "text-brand" : ""}`}>{label}</Link>)}</nav>
        <div className="flex items-center gap-1"><Link href="/search" aria-label="Search" className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-white/10"><Search size={19}/></Link><button onClick={toggle} aria-label="Toggle color mode" className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-white/10">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button><button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="rounded-lg p-2 lg:hidden hover:bg-slate-100 dark:hover:bg-white/10">{open ? <X size={21}/> : <Menu size={21}/>}</button></div>
      </div>
      {open && <div className="border-t line bg-white px-5 pb-5 pt-3 shadow-xl dark:bg-[#0e1f35] lg:hidden">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} href={href} key={href} className="flex items-center justify-between border-b line py-3 text-sm font-semibold">{label}<ChevronRight size={16}/></Link>)}</div>}
    </header>
    <main>{children}</main>
    <footer className="mt-12 border-t line bg-[#0d213b] text-slate-200"><div className="container-site grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><div className="mb-4 flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-brand font-black text-white">S</span><b>SOICT</b></div><p className="max-w-xs text-sm leading-6 text-slate-400">School of Information and Communication Technology, Hanoi University of Science and Technology.</p><div className="mt-5 flex gap-3"><Facebook size={18}/><Linkedin size={18}/><Instagram size={18}/></div></div><FooterGroup title="Explore" links={links.slice(0, 4)}/><FooterGroup title="Study" links={[["Undergraduate", "/education"], ["Graduate", "/education"], ["PhD", "/education"], ["Research", "/research"]]}/><div><h3 className="mb-4 font-bold text-white">Contact</h3><p className="text-sm leading-7 text-slate-400">C7 Building, HUST<br/>1 Dai Co Viet, Hanoi<br/>info@soict.edu.vn</p></div></div><div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">© 2026 SOICT — Mock frontend experience for academic exploration.</div></footer>
  </div>;
}
function FooterGroup({ title, links: groupLinks }: { title: string; links: string[][] }) { return <div><h3 className="mb-4 font-bold text-white">{title}</h3><div className="flex flex-col gap-3">{groupLinks.map(([label, href]) => <Link className="text-sm text-slate-400 transition hover:text-white" key={href + label} href={href}>{label}</Link>)}</div></div>; }
