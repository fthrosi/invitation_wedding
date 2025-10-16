import { Heart } from "lucide-react"
import Image from "next/image"
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/watercolor-floral-border-with-pink-burgundy-flowers-blush-background.jpg" alt="Wedding background" layout="fill" className="object-cover"/>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <div className="mb-6 sm:mb-8 animate-in  slide-in-from-top-full duration-500">
          <p className="text-xs sm:text-sm md:text-base text-primary/60 uppercase tracking-widest mb-3 sm:mb-4">
            {"Undangan Pernikahan"}
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="h-px w-12 sm:w-16 bg-primary" />
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary" />
            <div className="h-px w-12 sm:w-16 bg-primary" />
          </div>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-primary mb-4 sm:mb-6 animate-in slide-in-from-left-full duration-500">
          {"Nata & Fathur"}
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary/60 mb-6 sm:mb-8 animate-in slide-in-from-right-full duration-500">
          {"Sabtu, 15 Mei 2025"}
        </p>

        <div className="animate-fade-in-up animation-delay-600">
          <p className="text-sm sm:text-base md:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto px-2 sm:px-4">
            {
              "Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami"
            }
          </p>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 animate-fade-in-up animation-delay-800">
          <a
            href="#event"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-300 text-xs sm:text-sm md:text-base font-medium"
          >
            {"Lihat Detail Acara"}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-9 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 sm:h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
