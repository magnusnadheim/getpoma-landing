"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/poma-logo.png"
            alt="Poma AI"
            width={60}
            height={18}
            style={{ width: 'auto', height: '18px' }}
          />
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            href="/faq" 
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
          <Link 
            href="/privacy" 
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
            <a 
              href="https://apps.apple.com/app/poma-ai/id6748758285" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Image
                src="/appstore.png"
                alt=""
                width={15}
                height={15}
                className="h-[15px] w-[15px] brightness-0 invert"
              />
              <span className="hidden sm:inline">Download</span>
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
