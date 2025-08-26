"use client";

import { useState, useRef } from "react";
import { Mail, Phone, Globe, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createClient } from "@supabase/supabase-js";
import ReCAPTCHA from "react-google-recaptcha";

const SUPABASE_URL = "https://wngdyuvcyiseauwxyqrs.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduZ2R5dXZjeWlzZWF1d3h5cXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5MTI1NTIsImV4cCI6MjA3MDQ4ODU1Mn0.ZPHckuntDXDABdLdS55eEuWs6elk520SHOeud1blE_0";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const RECAPTCHA_SITE_KEY = "6Lc7FbMrAAAAAGapg-23lxiKnuOmaQDzxWQVh2Nu"; //6Le3m6IrAAAAAHs75Vw77f695Fr-vHBF04I0ricR  

export default function Contact({ t }: { t: any }) {
  const [formData, setFormData] = useState({
    name: "", // valeur pré-remplie
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const token = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    if (!token) {
      alert("Veuillez valider le reCAPTCHA.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("portfolio-messages").insert([formData]);

    if (error) {
      alert("Erreur lors de l'envoi : " + error.message);
    } else {
      alert("Message envoyé avec succès !");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-blue-50"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 gradient-text animate-bounce-in">
          {t("contactTitle")}
        </h2>
        <p className="text-xl text-slate-600 mb-12">{t("contactSubtitle")}</p>

        {/* 3 Cards infos */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 hover-lift card-3d border-gradient animate-fade-in-scale">
            <CardContent className="p-0 text-center">
              <Mail className="w-8 h-8 text-orange-600 mx-auto mb-4 animate-pulse-3d" />
              <h3 className="font-semibold mb-2">{t("email")}</h3>
              <p className="text-slate-600">
                <a href="mailto:bini.ahmed@gmail.com">bini.ahmed@gmail.com</a>
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 hover-lift card-3d border-gradient animate-fade-in-scale">
            <CardContent className="p-0 text-center">
              <Phone className="w-8 h-8 text-orange-600 mx-auto mb-4 animate-pulse-3d" />
              <h3 className="font-semibold mb-2">{t("phone")}</h3>
              <p className="text-slate-600">
                <a href="tel:+212617459805">+212 617-459805</a>
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 hover-lift card-3d border-gradient animate-fade-in-scale">
            <CardContent className="p-0 text-center">
              <Globe className="w-8 h-8 text-orange-600 mx-auto mb-4 animate-pulse-3d" />
              <h3 className="font-semibold mb-2">{t("freelance")}</h3>
              <p className="text-slate-600">
                <a
                  href="https://www.upwork.com/freelancers/~01c8bbff0cbcfc2974?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("upworkProfile")}
                </a>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-8 space-y-6 border border-orange-100"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("name")} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={t("namePlaceholder")}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={t("emailPlaceholder")}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {t("subject")} *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
              placeholder={t("subjectPlaceholder")}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {t("message")} *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 resize-none"
              placeholder={t("messagePlaceholder")}
            />
          </div>

          <div className="relative h-0 overflow-hidden">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              size="invisible"
              ref={recaptchaRef}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full gradient-bg hover-lift shadow-lg text-white font-semibold flex items-center justify-center gap-2"
          >
            <Send className="h-5 w-5" />
            {loading ? "Envoi..." : t("send")}
          </Button>
        </form>

        {/* Boutons CTA en bas */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button size="lg" className="gradient-bg hover-lift shadow-lg text-white font-semibold">
            <Mail className="w-4 h-4 mr-2" />
            {t("startProject")}
          </Button>
          <Button variant="outline" size="lg" className="border-gradient hover-lift">
            <Calendar className="w-4 h-4 mr-2" />
            {t("bookConsultation")}
          </Button>
        </div>
      </div>
    </section>
  );
}
