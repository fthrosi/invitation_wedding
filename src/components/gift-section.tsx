"use client"

import { useState } from "react"
import Image from "next/image"
import { Copy, Gift, QrCode } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export function GiftSection() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyText = async (label: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(label)
      toast.success("Berhasil Menyalin", { description: `${label} berhasil disalin.`, duration: 2000 })
      setTimeout(() => setCopied(null), 1500)
    } catch {
      toast.error("Gagal menyalin", { description: "Silakan salin manual ya." })
    }
  }

  return (
    <section id="gift" className="py-12 sm:py-16 md:py-20 lg:py-24 2xl:py-28 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-4xl w-full mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-primary mb-3 sm:mb-4">
            {"Angpao Digital"}
          </h2>
          <p className="text-primary/80 text-sm sm:text-base md:text-lg leading-relaxed">
            {
              "Doa dan restu Anda adalah hadiah terindah. Bagi yang ingin berbagi tanda kasih, berikut informasi yang dapat digunakan."
            }
          </p>
        </div>

        <div className="flex justify-center w-full">
          <Card className="p-6 sm:p-8 border-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Gift className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="font-serif text-xl sm:text-2xl text-accent">{"Rekening"}</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border border-border rounded-lg p-3 sm:p-4">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-accent/60">{"Bank"}</p>
                  <p className="text-accent font-medium text-sm sm:text-base">{"BCA - 1234567890"}</p>
                  <p className="text-accent/80 text-xs sm:text-sm">{"a.n. Nata"}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyText("Nomor Rekening", "BCA 1234567890 a.n. Nata")}
                  className="whitespace-nowrap text-primary"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  {copied === "Nomor Rekening" ? "Tersalin" : "Salin"}
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border border-border rounded-lg p-3 sm:p-4">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-accent/60">{"E-Wallet"}</p>
                  <p className="text-accent font-medium text-sm sm:text-base">{"Gopay - 0812-3456-7890"}</p>
                  <p className="text-accent/80 text-xs sm:text-sm">{"a.n. Nata"}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyText("Nomor E-Wallet", "Gopay 081234567890 a.n. Nata")}
                  className="whitespace-nowrap text-primary"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  {copied === "Nomor E-Wallet" ? "Tersalin" : "Salin"}
                </Button>
              </div>
            </div>
          </Card>

          {/* <Card className="p-6 sm:p-8 border-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <QrCode className="h-5 w-5 text-foreground" aria-hidden="true" />
              <h3 className="font-serif text-xl sm:text-2xl text-foreground">{"QR Code"}</h3>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/qr-code-for-gift.jpg"
                alt="QR Code Angpao Digital"
                width={240}
                height={240}
                className="rounded-lg border border-border w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover"
              />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground text-center mt-4">
              {"Silakan scan untuk berbagi tanda kasih."}
            </p>
          </Card> */}
        </div>
      </div>
    </section>
  )
}
