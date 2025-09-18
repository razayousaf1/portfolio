"use client";
import { useState } from "react";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

// Import social icons
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    "bot-field": "", // Honeypot field
  });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    // Check honeypot field
    if (formData["bot-field"]) {
      console.log("Bot detected! Submission blocked.");
      return;
    }

    setSending(true);

    try {
      const response = await fetch("https://formspree.io/f/xgvlpgwd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        toast({
          title: "Message Sent Successfully!",
          description: "✈️ Your message has been delivered.",
        });
        setFormData({ name: "", email: "", subject: "", message: "", "bot-field": "" });
      } else {
        toast({
          title: "Error sending message",
          description: "Something went wrong. Please try again.",
        });
        console.error("Formspree error", response);
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again.",
      });
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  const socials = [
    { icon: FaLinkedin, color: "#0077b5", url: "https://www.linkedin.com/in/syed-yousaf-raza-11079b200/", name: "LinkedIn" },
    { icon: FaInstagram, color: "#e4405f", url: "https://www.instagram.com/yousafraza512?igsh=MW5tdGp3YTBmZGZkMA%3D%3D&utm_source=qr", name: "Instagram" },
    { icon: FaFacebook, color: "#1877f2", url: "https://www.facebook.com/share/18e9AC2T84/?mibextid=wwXIfr", name: "Facebook" },
    { icon: SiFiverr, color: "#1dbf73", url: "https://www.fiverr.com/s/bdZjze1", name: "Fiverr" },
    { icon: FaGithub, color: "#000000", url: "https://github.com/razayousaf1", name: "GitHub" },
    { icon: Mail, color: "#d44638", url: "mailto:yraza2671@gmail.com", name: "Gmail" },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Let's connect and discuss opportunities in software development, AI
            projects, and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left image + social buttons */}
          <div className="flex flex-col items-center">
            <img
              src="getintouch.jpg"
              alt="Professional networking and business communication"
              className="rounded-xl shadow-lg w-full h-auto mb-8"
            />

            <ul className="wrapper flex flex-wrap justify-center">
              {socials.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <li key={idx} className="icon group">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center w-14 h-14 rounded-full shadow-md transition-all duration-300"
                      style={{ background: "#fff", color: "#000" }}
                    >
                      <Icon className="text-2xl transition-all duration-300 group-hover:text-white" />
                    </a>
                    <span
                      className="tooltip opacity-0 transition-all duration-300 absolute text-white px-2 py-1 rounded"
                      style={{ background: social.color }}
                    >
                      {social.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right contact form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              {/* Honeypot input */}
              <input
                type="text"
                name="bot-field"
                style={{ display: "none" }}
                value={formData["bot-field"]}
                onChange={handleInputChange}
              />

              <h3 className="text-2xl font-semibold text-secondary mb-6">
                Send me a message
              </h3>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium relative overflow-hidden flex items-center justify-center"
                >
                  {!sending && (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform duration-300" />
                    </span>
                  )}
                  {sending && (
                    <>
                      <div className="absolute top-1/2 left-1/4 h-1 w-24 bg-gradient-to-r from-white/70 to-white/0 rounded-full animate-trail"></div>
                      <Send className="absolute top-1/2 left-1/4 h-5 w-5 text-white animate-planeFly" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes planeFly {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          25% { transform: translate(20px, -10px) rotate(15deg); }
          50% { transform: translate(50px, -25px) rotate(25deg); }
          75% { transform: translate(90px, -40px) rotate(35deg); }
          100% { transform: translate(150px, -80px) rotate(45deg); opacity: 0; }
        }
        .animate-planeFly { animation: planeFly 1.5s ease-out forwards; }

        @keyframes trailFade {
          0% { transform: translate(0, 0); opacity: 0.7; }
          100% { transform: translate(150px, -80px); opacity: 0; }
        }
        .animate-trail { animation: trailFade 1.5s ease-out forwards; }

        .wrapper { display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; }
        .icon { position: relative; }
        .icon .tooltip { position: absolute; top: -40px; left: 50%; transform: translateX(-50%); opacity: 0; pointer-events: none; transition: all 0.3s ease; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
        .icon:hover .tooltip { opacity: 1; }
        .icon a:hover { color: white !important; }
      `}</style>
    </section>
  );
}
