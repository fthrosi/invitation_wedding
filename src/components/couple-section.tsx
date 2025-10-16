import { Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function CoupleSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 2xl:py-28 px-4 sm:px-6 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-primary mb-3 sm:mb-4">
            {"Mempelai"}
          </h2>
          <p className="text-primary/60 text-sm sm:text-base md:text-lg">
            {"Dua hati yang bersatu dalam ikatan suci"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          <Card className="p-6 sm:p-8 text-center border-2 hover:border-primary transition-colors duration-300">
            <div className="mb-6 sm:mb-8">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <Image src="/pengantin-wanita.jpeg" alt="Sarah" className="w-full h-full object-cover" layout="fill"/>
              </div>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary mb-2 sm:mb-3">
              {"Nata"}
            </h3>
            <p className="text-primary/80 text-sm sm:text-base mb-4">{"Putri dari Bapak Budi & Ibu Siti"}</p>
            <div className="pt-4 border-t border-border">
              <p className="text-xs sm:text-sm text-primary/80 italic leading-relaxed">
                {'"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan"'}
              </p>
              <p className="text-xs text-primary/80 mt-2">{"— QS. Ar-Rum: 21"}</p>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 text-center border-2 hover:border-primary transition-colors duration-300">
            <div className="mb-6 sm:mb-8">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <Image src="/pengantin-pria.jpg" alt="Ahmad" className="w-full h-full object-cover" layout="fill" />
              </div>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary mb-2 sm:mb-3">
              {"Fathur"}
            </h3>
            <p className="text-primary/80 text-sm sm:text-base mb-4">{"Putra dari Bapak Hasan & Ibu Fatimah"}</p>
            <div className="pt-4 border-t border-border">
              <p className="text-xs sm:text-sm text-primary/80 italic leading-relaxed">
                {'"Maka nikahkanlah mereka dengan izin keluarganya dan berilah maskawin yang pantas"'}
              </p>
              <p className="text-xs text-primary/80 mt-2">{"— QS. An-Nisa: 25"}</p>
            </div>
          </Card>
        </div>


        <div className="flex items-center justify-center gap-2 sm:gap-3 my-10 sm:my-12 md:my-14 lg:my-16">
          <div className="h-px w-16 sm:w-20 md:w-24 bg-primary/30" />
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary fill-primary animate-pulse" />
          <div className="h-px w-16 sm:w-20 md:w-24 bg-primary/30" />
        </div>
      </div>
    </section>
  )
}
