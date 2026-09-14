"use client";

import Link from "next/link";
import { ChevronDown, Facebook, Mail, MapPin, Menu, Search, X, Youtube } from "lucide-react";
import { useState } from "react";

type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

const navigation: NavItem[] = [
  { label: "Introduction", href: "/about", children: [{ label: "Educational philosophy", href: "/about" }, { label: "Organization", href: "/people" }, { label: "Board of Deans", href: "/people" }] },
  { label: "Department – Center", href: "/people", children: [{ label: "Computer Science Department", href: "/people" }, { label: "Computer Engineering Department", href: "/people" }, { label: "BK AI Center", href: "/research" }] },
  { label: "Academics", href: "/education", children: [{ label: "Undergraduate Programs", href: "/education" }, { label: "Master Programs", href: "/education" }, { label: "Doctoral Programs", href: "/education" }] },
  { label: "Research", href: "/research", children: [{ label: "Laboratories", href: "/research" }, { label: "Research Projects", href: "/research" }, { label: "Find an expert?", href: "/people" }] },
  { label: "Admission", href: "/education", children: [{ label: "Enlightening your digital future", href: "/education" }, { label: "Reference benchmarks", href: "/education" }] },
  { label: "Student", href: "/events", children: [{ label: "Forms and regulations", href: "/contact" }, { label: "Student Activities", href: "/events" }] },
  { label: "International cooperation", href: "/research", children: [{ label: "Academic Partnerships", href: "/research" }, { label: "Enterprise Partnerships", href: "/research" }] },
];

const footerGroups = [
  ["DEPARTMENT & CENTER", ["Computer Science Department", "Computer Engineering Department", "BKCS Center", "Innovation Center", "NAVIS Center", "BK.AI Center", "Computer Center", "School Office"]],
  ["EDUCATION PROGRAM", ["Undergraduate", "Master", "Doctor"]],
  ["SYSTEMS AND RESOURCES", ["University administration system", "Company and alumni management system", "Forms and regulations"]],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="soict-page min-h-screen">
    <header className="soict-header">
      <div className="soict-header-main"><div className="soict-container soict-brand-row">
        <Link href="/" className="soict-logo" aria-label="SOICT home"><img src="/soict/logo-soict-hust.png" alt="SOICT — Hanoi University of Science and Technology" /></Link>
        <div className="soict-brand-copy"><b>HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY</b><strong>SCHOOL OF INFORMATION AND COMMUNICATIONS TECHNOLOGY</strong></div>
        <div className="soict-tools"><div className="soict-language"><span className="is-active">EN</span><span>VN</span></div><label className="soict-search"><span className="sr-only">Search</span><input placeholder="Search..." /><Search size={16} /></label></div>
        <button onClick={() => setOpen(!open)} className="soict-menu-button" aria-label="Toggle menu">{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div></div>
      <nav className="soict-nav" aria-label="Main navigation"><div className="soict-container"><ul>{navigation.map(item => <li key={item.label} className="soict-nav-item"><Link href={item.href}>{item.label}<ChevronDown size={12} /></Link>{item.children && <ul className="soict-dropdown">{item.children.map(child => <li key={child.label}><Link href={child.href}>{child.label}</Link></li>)}</ul>}</li>)}</ul></div></nav>
      {open && <nav className="soict-mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <div key={item.label}><Link onClick={() => setOpen(false)} href={item.href}>{item.label}</Link>{item.children?.map(child => <Link onClick={() => setOpen(false)} href={child.href} key={child.label}>{child.label}</Link>)}</div>)}</nav>}
    </header>
    <main>{children}</main>
    <footer className="soict-footer"><div className="soict-footer-main"><div className="soict-container soict-footer-grid">{footerGroups.map(([title, links]) => <section key={title}><h2>{title}</h2><ul>{links.map(label => <li key={label}><Link href="/contact">{label}</Link></li>)}</ul></section>)}<section className="soict-contact"><p><span>☎</span> (+84) 24 3869 2463</p><p><Mail size={14} /> vp@soict.hust.edu.vn</p><p>Room 505, B1 Building, Hanoi University of Science and Technology<br/>No.1, Dai Co Viet Street, Hai Ba Trung District, Hanoi City</p><div className="soict-social"><a href="https://facebook.com/SoictOfficially/" aria-label="Facebook"><Facebook size={17}/></a><a href="https://youtube.com/" aria-label="YouTube"><Youtube size={18}/></a><a href="https://maps.google.com/" aria-label="Map"><MapPin size={18}/></a></div></section></div></div><div className="soict-copyright">Copyright © School of Information and Communications Technology</div></footer>
  </div>;
}
