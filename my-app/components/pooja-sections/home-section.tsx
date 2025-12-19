import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Phone } from "lucide-react";
import type { HomeSectionProps } from "./types";

export default function HomeSection({
  badgeText,
  title,
  descriptions,
  primaryButtonText = "Book a Pooja Now",
  primaryButtonAction,
  secondaryButtonText = "Call Us",
  secondaryButtonAction,
  secondaryButtonIcon: SecondaryButtonIcon = Phone,
  imageSrc,
  imageAlt,
  backgroundColor,
  textColor = "#9B251E",
  accentColor = "#FBDCAB",
}: HomeSectionProps) {
  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ backgroundColor: textColor, color: accentColor }}
            >
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">{badgeText}</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ color: textColor }}
            >
              {title}
            </h1>
            {descriptions.map((description, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-lg sm:text-xl leading-relaxed"
                    : "text-base sm:text-lg leading-relaxed"
                }
                style={{ color: textColor, opacity: index === 0 ? 0.9 : 0.85 }}
              >
                {description}
              </p>
            ))}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto text-lg px-8 py-6 transition-all duration-300 hover:opacity-90 active:scale-95 shadow-lg"
                style={{ backgroundColor: textColor, color: accentColor }}
                onClick={primaryButtonAction}
              >
                <Link href="/contact-us">{primaryButtonText}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg px-8 py-6 border-2 transition-all duration-300 hover:bg-black/5 active:scale-95"
                style={{ borderColor: textColor, color: textColor }}
                onClick={secondaryButtonAction}
              >
                <Link href="/contact-us">
                  <SecondaryButtonIcon className="h-5 w-5 mr-2" />
                  {secondaryButtonText}
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
