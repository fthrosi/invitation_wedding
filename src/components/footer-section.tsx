import { Heart, Instagram, Phone, Mail } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="py-12 sm:py-14 md:py-16 lg:py-20 2xl:py-24 px-4 sm:px-6 md:px-8 bg-muted/30 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-primary fill-primary mx-auto mb-3 sm:mb-4" />
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-primary mb-2 sm:mb-3">{"Nata & Fathur"}</h3>
          <p className="text-primary/80 italic text-xs sm:text-sm md:text-base text-balance leading-relaxed px-2">
            {
              '"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya"'
            }
          </p>
          <p className="text-xs text-primary/80 mt-2">{"— QS. Ar-Rum: 21"}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <a
            href="tel:+6281234567890"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm text-accent">{"0812-3456-7890"}</span>
          </a>
          <a
            href="mailto:sarah.ahmad@example.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm text-accent">{"sarah.ahmad@example.com"}</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm text-accent">{"@sarah.ahmad"}</span>
          </a>
        </div>

        <div className="text-center pt-6 sm:pt-8 border-t border-border">
          <p className="text-xs sm:text-sm text-accent/80">
            {"© 2025 Nata & Fathur. Dibuat dengan"} <Heart className="w-3 h-3 inline fill-primary text-primary" />{" "}
            {"untuk hari spesial kami"}
          </p>
        </div>
      </div>
    </footer>
  )
}
