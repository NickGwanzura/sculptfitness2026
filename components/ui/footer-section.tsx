
"use client"

import * as React from "react"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Switch } from "./switch"
import { Instagram, Facebook, Send, Moon, Sun } from "lucide-react"
import Logo from "../Logo"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t border-black/[0.03] bg-white dark:bg-near-black text-dark-text dark:text-ivory transition-colors duration-700">
      <div className="container mx-auto px-8 md:px-12 lg:px-20 py-24 md:py-32 max-w-screen-xl">
        <div className="grid gap-16 lg:grid-cols-3 lg:gap-24">

          {/* Brand & Newsletter */}
          <div className="space-y-10">
            <Logo variant="dark" className="h-24 md:h-32 justify-start dark:invert opacity-80" />
            <div className="space-y-6">
              <p className="text-[13px] text-dark-secondary/60 dark:text-ivory/50 font-light leading-relaxed max-w-xs">
                Receive intentional movement insights and exclusive updates.
              </p>
              <form className="relative max-w-xs group">
                <Input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="bg-transparent border-t-0 border-x-0 border-b border-black/10 dark:border-white/10 rounded-none px-0 h-12 text-[10px] tracking-[0.3em] uppercase font-bold focus:border-copper transition-colors placeholder:text-black/20 dark:placeholder:text-white/20"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-copper hover:text-near-black dark:hover:text-white transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h3 className="mb-10 text-[10px] tracking-[0.4em] uppercase font-bold text-copper/50">Explore</h3>
            <nav className="flex flex-col space-y-5 text-[11px] tracking-[0.2em] uppercase font-bold text-dark-secondary/80 dark:text-ivory/70">
              <a href="#/" className="hover:text-copper transition-colors">Home</a>
              <a href="#/about" className="hover:text-copper transition-colors">The Architect</a>
              <a href="#/services" className="hover:text-copper transition-colors">Offerings</a>
              <a href="#/askana" className="hover:text-copper transition-colors">Askana</a>
              <a href="#/discovery" className="hover:text-copper transition-colors">Discovery</a>
              <a href="#/contact" className="hover:text-copper transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact & Connect */}
          <div className="space-y-12">
            <div>
              <h3 className="mb-10 text-[10px] tracking-[0.4em] uppercase font-bold text-copper/50">Location</h3>
              <div className="space-y-6 text-sm font-light text-dark-secondary dark:text-ivory/60 leading-relaxed">
                <p>Harare, Zimbabwe</p>
                <a href="https://wa.me/263779261868" target="_blank" rel="noopener noreferrer" className="block border-b border-copper/10 pb-1 w-fit hover:border-copper transition-colors">
                  WhatsApp & Calls
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-black/[0.03] dark:border-white/[0.03] flex items-center justify-between">
              <div className="flex space-x-8">
                <a href="#" className="group">
                  <Instagram className="h-5 w-5 text-dark-text/40 dark:text-ivory/40 group-hover:text-copper transition-colors" />
                </a>
                <a href="#" className="group">
                  <Facebook className="h-5 w-5 text-dark-text/40 dark:text-ivory/40 group-hover:text-copper transition-colors" />
                </a>
                <a href="https://wa.me/263779261868" target="_blank" rel="noopener noreferrer" className="group">
                  <span className="text-[10px] items-center flex font-bold tracking-widest text-dark-text/40 dark:text-ivory/40 group-hover:text-copper transition-colors">WHATSAPP</span>
                </a>
              </div>

              <div className="flex items-center space-x-3 opacity-40 hover:opacity-100 transition-opacity">
                <Sun className="h-3.5 w-3.5 text-copper" />
                <Switch
                  id="dark-mode"
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                  className="scale-75"
                />
                <Moon className="h-3.5 w-3.5 text-copper" />
              </div>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="mt-24 pt-12 border-t border-black/[0.03] dark:border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[9px] tracking-[0.4em] uppercase font-bold text-dark-secondary/30 dark:text-ivory/20 flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <span>© 2025 SCULPT WELLNESS. EST. HARARE.</span>
            <span className="hidden md:block opacity-30">|</span>
            <a href="https://wa.me/263777816368" target="_blank" rel="noopener noreferrer" className="text-copper/40 hover:text-copper transition-colors">SITE DEVELOPED BY NT GLOBAL SOLUTIONS</a>
          </p>
          <nav className="flex gap-10 text-[9px] tracking-[0.4em] uppercase font-bold text-dark-secondary/30 dark:text-ivory/20">
            <a href="#" className="hover:text-copper transition-colors">Privacy</a>
            <a href="#" className="hover:text-copper transition-colors">Terms</a>
            <a href="#" className="hover:text-copper transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
