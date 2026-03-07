"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldAlert, Activity, Network, Home } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/", icon: Home },
        { name: "Dashboard", href: "/dashboard", icon: ShieldAlert },
        { name: "Radar", href: "/radar", icon: Activity },
        { name: "Network", href: "/network", icon: Network },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full cyber-glass border-b border-cyber-panel-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <ShieldAlert className="w-8 h-8 text-cyber-accent group-hover:glow-text transition-all" />
                        <span className="text-xl font-bold tracking-widest text-white group-hover:glow-text transition-all">
                            TRUTHGUARD <span className="text-cyber-accent">X</span>
                        </span>
                    </Link>
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-4 lg:space-x-8">
                            {links.map((link) => {
                                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive
                                                ? "text-cyber-accent bg-cyber-accent/10 border-b-2 border-cyber-accent cyber-glass-glow"
                                                : "text-cyber-text-secondary hover:text-white hover:bg-cyber-panel-border/50"
                                            }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{link.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
