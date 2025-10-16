import { Heart, MapPin, Syringe as Ring, Home } from "lucide-react"
import { Card } from "@/components/ui/card"

const timeline = [
  {
    date: "12 Jan 2019",
    title: "Pertama Bertemu",
    desc: "Kami dipertemukan dalam sebuah pertemuan sederhana yang berarti.",
    icon: Heart,
  },
  {
    date: "03 Mar 2020",
    title: "Perjalanan Bersama",
    desc: "Menjelajah kota, belajar saling memahami, dan tumbuh bersama.",
    icon: MapPin,
  },
  {
    date: "14 Feb 2024",
    title: "Lamaran",
    desc: "Sebuah 'iya' yang hangat dan penuh harap untuk masa depan.",
    icon: Ring,
  },
  {
    date: "24 Mei 2025",
    title: "Hari Bahagia",
    desc: "Kami memulai rumah tangga dengan doa dan cinta.",
    icon: Home,
  },
]

export function LoveStorySection() {
  return (
    <section id="love-story" className="py-12 sm:py-16 md:py-20 lg:py-24 2xl:py-28 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-primary mb-3 sm:mb-4">
            {"Kisah Cinta Kami"}
          </h2>
          <p className="text-primary/80 text-sm sm:text-base md:text-lg leading-relaxed">
            {"Jejak langkah yang membawa kami hingga ke hari ini."}
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-3 sm:left-4 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block"
            aria-hidden="true"
          />
          <div className="space-y-4 sm:space-y-6">
            {timeline.map((item, idx) => {
              const Icon = item.icon
              const isLeft = idx % 2 === 0
              return (
                <div key={idx} className="md:grid md:grid-cols-2 md:gap-8 items-stretch">
                  <div className={`${isLeft ? "" : "md:col-start-2"}`}>
                    <Card className="p-4 sm:p-6 border-2 h-full">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm text-accent/60">{item.date}</p>
                          <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-accent mt-1">
                            {item.title}
                          </h3>
                          <p className="text-accent/80 text-sm sm:text-base leading-relaxed mt-2">{item.desc}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="hidden md:block" aria-hidden="true" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
