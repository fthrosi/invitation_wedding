import { Calendar, Clock, MapPin, Shirt } from "lucide-react"
import { Card } from "@/components/ui/card"

export function EventSection() {
  return (
    <section id="event" className="py-12 sm:py-16 md:py-20 lg:py-24 2xl:py-28 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-primary mb-3 sm:mb-4">
            {"Waktu & Tempat"}
          </h2>
          <p className="text-primary/80 text-sm sm:text-base md:text-lg">
            {"Kami menanti kehadiran Anda dalam momen spesial kami"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Akad Nikah */}
          <Card className="p-6 sm:p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-4">
                <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-primary mb-2">{"Akad Nikah"}</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary text-sm sm:text-base">{"Sabtu, 15 Mei 2025"}</p>
                  <p className="text-xs sm:text-sm text-primary/80">{"15 Dzulqa'dah 1446 H"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary text-sm sm:text-base">{"09.00 - 10.00 WIB"}</p>
                  <p className="text-xs sm:text-sm text-primary/80">{"Waktu Indonesia Barat"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary text-sm sm:text-base">{"Masjid Al-Ikhlas"}</p>
                  <p className="text-xs sm:text-sm text-primary/80 leading-relaxed">
                    {"Jl. Babarsari No. 123, Yogyakarta"}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-white w-full inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-primary rounded-lg hover:bg-primary/80 transition-colors duration-300 text-xs sm:text-sm font-medium"
            >
              <MapPin className="w-4 h-4 mr-2" />
              {"Buka Google Maps"}
            </a>
          </Card>

          {/* Resepsi */}
          <Card className="p-6 sm:p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-4">
                <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-primary mb-2">{"Resepsi"}</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary text-sm sm:text-base">{"Sabtu, 15 Mei 2025"}</p>
                  <p className="text-xs sm:text-sm text-primary/80">{"15 Dzulqa'dah 1446 H"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary text-sm sm:text-base">{"11.00 - 14.00 WIB"}</p>
                  <p className="text-xs sm:text-sm text-primary/80">{"Waktu Indonesia Barat"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary text-sm sm:text-base">{"Gedung Permata"}</p>
                  <p className="text-xs sm:text-sm text-primary/80 leading-relaxed">
                    {"Jl. UGM No. 1, Yogyakarta"}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors duration-300 text-xs sm:text-sm font-medium"
            >
              <MapPin className="w-4 h-4 mr-2" />
              {"Buka Google Maps"}
            </a>
          </Card>
        </div>

        {/* Dress Code */}
        <Card className="p-6 sm:p-8 bg-white border-2">
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Shirt className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-primary mb-2">{"Dress Code"}</h3>
              <p className="text-primary/80 text-sm sm:text-base leading-relaxed">
                {
                  "Kami sangat menghargai kehadiran Anda. Untuk menjaga kekhidmatan acara, kami mengharapkan tamu menggunakan pakaian formal atau busana muslim yang sopan."
                }
              </p>
            </div>
            <div className="flex gap-2 sm:gap-3 flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#D4A574] border-2 border-accent" title="Gold" />
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#E8C4B8] border-2 border-primary" title="Rose" />
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#F5F5DC] border-2 border-secondary"
                title="Ivory"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
