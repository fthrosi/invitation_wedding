"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ExternalLink, MapPin } from "lucide-react"

export function LocationSection() {
  return (
    <section id="location" className="py-12 sm:py-16 md:py-20 lg:py-24 2xl:py-28 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-primary mb-3 sm:mb-4">
            {"Lokasi"}
          </h2>
          <p className="text-primary/80 text-sm sm:text-base md:text-lg">
            {"Silakan lihat lokasi Akad dan Resepsi pada peta berikut"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Akad Nikah */}
          <Card className="p-4 sm:p-6 md:p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 text-primary mb-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium uppercase tracking-widest">{"Akad Nikah"}</span>
              </div>
              <h3 className="font-serif text-lg sm:text-2xl md:text-3xl text-accent">{"Masjid Al-Ikhlas"}</h3>
              <p className="text-accent/50 text-xs sm:text-sm md:text-base mt-2">
                {"Jl. Merdeka No. 123, Jakarta Selatan"}
              </p>
            </div>

            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg border mb-4 sm:mb-6">
              <iframe
                title="Peta Akad - Masjid Al-Ikhlas"
                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7906.35001465946!2d110.38389814633736!3d-7.771259028680974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59b2d4729729%3A0xac4d7b5fcf34f8e4!2sUniversitas%20Gadjah%20Mada!5e0!3m2!1sid!2sid!4v1760562028283!5m2!1sid!2sid"}
                className="w-full h-full"
                loading="lazy"
              />
            </AspectRatio>

            <div className="flex justify-end">
              <Button asChild size="sm" className="gap-2 text-xs sm:text-sm">
                <a
                  href={"https://www.google.com/maps/search/?api=1&query=Universitas%20Gajah%20Mada%2C%20Yogyakarta"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  {"Buka di Google Maps"}
                </a>
              </Button>
            </div>
          </Card>

          {/* Resepsi */}
          <Card className="p-4 sm:p-6 md:p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 text-primary mb-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium uppercase tracking-widest">{"Resepsi"}</span>
              </div>
              <h3 className="font-serif text-lg sm:text-2xl md:text-3xl text-foreground">{"Gedung Permata"}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base mt-2">
                {"Jl. Kemang Raya No. 45, Jakarta Selatan"}
              </p>
            </div>

            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg border mb-4 sm:mb-6">
              <iframe
                title="Peta Resepsi - Gedung Permata"
                src={
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0932013495703!2d110.41986464414435!3d-7.779942175624198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59f1fb2f2b45%3A0x20986e2fe9c79cdd!2sUniversitas%20Atma%20Jaya%20Yogyakarta%20-%20Kampus%203%20Gedung%20Bonaventura%20Babarsari!5e0!3m2!1sid!2sid!4v1760562103648!5m2!1sid!2sid"
                }
                className="w-full h-full"
                loading="lazy"
              />
            </AspectRatio>

            <div className="flex justify-end">
              <Button asChild size="sm" className="gap-2 text-xs sm:text-sm">
                <a
                  href={
                    "https://www.google.com/maps/search/?api=1&query=Universitas%20Atma%20Jaya%20Yogyakarta%20-%20Kampus%203%20Gedung%20Bonaventura%20Babarsari"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  {"Buka di Google Maps"}
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
