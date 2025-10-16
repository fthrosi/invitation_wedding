import { Card } from "@/components/ui/card"
import Image from "next/image"
export function GallerySection() {
  const images = [
    { id: 1, query: "/gambar1.jpg" },
    { id: 2, query: "/gambar2.jpg" },
    { id: 3, query: "/gambar3.jpg" },
    { id: 4, query: "/gambar4.jpg" },
    { id: 5, query: "/gambar5.jpg" },
    { id: 6, query: "/gambar6.jpg" },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 2xl:py-28 px-4 sm:px-6 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-primary mb-3 sm:mb-4">
            {"Momen Berharga"}
          </h2>
          <p className="text-primary/80 text-sm sm:text-base md:text-lg">
            {"Perjalanan cinta kami dalam gambar"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {images.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group cursor-pointer"
            >
              <div className="aspect-square w-full overflow-hidden relative">
                <Image
                  src={image.query}
                  alt={`Gallery ${image.id}`}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                fill
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
