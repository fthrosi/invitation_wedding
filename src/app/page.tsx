import { HeroSection } from "@/components/hero-section"
import { CoupleSection } from "@/components/couple-section"
import { EventSection } from "@/components/event-section"
import { LocationSection } from "@/components/location-section"
import { GallerySection } from "@/components/gallery-section"
import { LoveStorySection } from "@/components/love-story-section"
import { GiftSection } from "@/components/gift-section"
import { WishesSection } from "@/components/wishes-section"
import { FooterSection } from "@/components/footer-section"

export default function WeddingInvitation() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CoupleSection />
      <EventSection />
      <LocationSection />
      <GallerySection />
      <LoveStorySection />
      <GiftSection />
      <WishesSection />
      <FooterSection />
    </main>
  )
}
