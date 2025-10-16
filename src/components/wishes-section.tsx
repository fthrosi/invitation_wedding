import { Quote } from "lucide-react"
import { Card } from "@/components/ui/card"

const wishes = [
  {
    name: "Sahabat",
    message: "Semoga pernikahan kalian senantiasa dipenuhi cinta, kesabaran, dan keberkahan.",
  },
  {
    name: "Keluarga",
    message: "Barakallahu lakuma wa baraka 'alaikuma, wa jama'a bainakuma fi khair.",
  },
  {
    name: "Rekan",
    message: "Selamat menempuh hidup baru! Semoga bahagia selalu dan saling menguatkan.",
  },
]

export function WishesSection() {
  return (
    <section id="wishes" className="py-12 sm:py-16 md:py-20 lg:py-24 2xl:py-28 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-primary mb-3 sm:mb-4">
            {"Ucapan & Doa"}
          </h2>
          <p className="text-primary/80 text-sm sm:text-base md:text-lg leading-relaxed">
            {"Beberapa doa yang hangat dari orang terdekat kami."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {wishes.map((w, i) => (
            <Card key={i} className="p-4 sm:p-6 border-2">
              <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-primary mb-3" aria-hidden="true" />
              <p className="text-accent text-sm sm:text-base leading-relaxed">{w.message}</p>
              <p className="mt-4 text-xs sm:text-sm text-accent/80">
                {"— "}
                {w.name}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <p className="text-xs sm:text-sm text-primary/80">
            {"Ingin mengirim ucapan? Hubungi kami melalui kontak di bagian footer."}
          </p>
        </div>
      </div>
    </section>
  )
}
