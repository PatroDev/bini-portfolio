import Image from "next/image";
import {
  MapPin,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = ({ t }: { t: any }) => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Photo circulaire */}
        <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-orange-400">
          <Image
            src="/BiniAmed.png"
            alt="Bini Amed"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="text-2xl font-bold mb-2 gradient-text animate-bounce-in">
          Bini Amed
        </div>
        <p className="text-slate-400 mb-6">{t("footerTagline")}</p>

        {/* Localisation */}
        <div className="flex justify-center items-center gap-2 text-slate-400 mb-6">
          <MapPin className="w-4 h-4" />
          <span>{t("location")}</span>
        </div>

        {/* Social links */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <a
            href="https://linkedin.com/in/bini-amed-709478342"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-blue-700 hover:bg-blue-400 transition-colors duration-200"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://www.youtube.com/@bini-mindset"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-red-600 rounded-lg hover:bg-red-400 transition-colors duration-200"
          >
            <Youtube className="h-6 w-6" />
          </a>
          <a
            href="https://www.tiktok.com/@bini.amed225"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            <Image
              src="/icons/tiktok.svg"
              alt="TikTok"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://wa.me/212617459805"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-green-600 rounded-lg hover:bg-green-400 transition-colors duration-200"
          >
            <Image
              src="/icons/whatsapp.svg"
              alt="WhatsApp"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01c8bbff0cbcfc2974?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-emerald-600 rounded-lg hover:bg-emerald-400 transition-colors duration-200"
          >
            <Image src="/icons/upwork.svg" alt="Upwork" width={24} height={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-slate-500">
          © 2025 Bini Amed. {t("allRightsReserved")}
        </div>
        
        <br />
        <p className="text-transparent">
        made with love by{" "}
        <a
            href="https://github.com/PatroDev/bini-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-transparent"
        >
            @patrodev-2025 For bini-portfolio
        </a>
        </p>
        {/* Texte caché “made with love”  mais visible en devTools */}
        <span
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            whiteSpace: "nowrap",
          }}
        >
          made with love by @patrodev-2025 & bini portfolio
        </span>
      </div>
    </footer>
  );
};

export default Footer;
