"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ContactFormSchema } from "@/lib/schemas";
import { sendEmail } from "@/lib/actions";

type FormInputs = z.infer<typeof ContactFormSchema>;

export default function Contact() {
  const sectionRef = useIntersectionObserver();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
    try {
      // Primary: Server action
      const result = await sendEmail(formData);

      if (result?.error) {
        // Fallback: API route
        const fallbackRes = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!fallbackRes.ok) {
          throw new Error("Failed to deliver message via fallback.");
        }
      }

      toast.success("Message sent successfully! I will reply shortly.");
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send message. Please contact me directly via email.");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-muted/20 opacity-0 transition-opacity duration-700"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Have a project in mind, an inquiry, or looking to collaborate? Send me a message and I&rsquo;ll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Contact Details Card */}
          <Card className="lg:col-span-5 border border-border/80 bg-card h-fit">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                    <a
                      href="tel:+917666330242"
                      className="text-base font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      (+91) 7666330242
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                    <a
                      href="mailto:webdev.yusufansari@gmail.com"
                      className="text-base font-semibold text-foreground hover:text-primary transition-colors break-all"
                    >
                      webdev.yusufansari@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                    <p className="text-base font-semibold text-foreground">
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Form Card */}
          <Card className="lg:col-span-7 border border-border/80 bg-card shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1.5 text-foreground"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Jane Doe"
                      aria-invalid={!!errors.name}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1.5 text-foreground"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-1.5 text-foreground"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry / Opportunity"
                    aria-invalid={!!errors.subject}
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1.5 text-foreground"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your project or questions..."
                    aria-invalid={!!errors.message}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto font-semibold gap-2 shadow-sm"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
