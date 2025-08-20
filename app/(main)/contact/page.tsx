"use client";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedText from "@/components/AnimatedText";

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Here you would typically send the data to your API
      console.log("Form data:", data);
      // Reset form after submission
      reset();
      alert("Thank you for your message. We will get back to you soon.");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <AnimatedText
              text="Contact Us"
              className="text-4xl md:text-6xl font-bold mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            >
              Get in touch with the Securities and Exchange Commission of
              Zimbabwe
            </motion.p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-blue-900">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Your name"
                      className="w-full"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="Subject of your message"
                      className="w-full"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Your message here..."
                      rows={5}
                      className="w-full"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button type="submit" className="mt-4">
                    Send Message
                  </Button>
                </form>
              </motion.div>

              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-blue-900">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">
                      Head Office
                    </h3>
                    <p className="text-gray-700">
                      SECZIM Building
                      <br />
                      8th Floor, East Wing
                      <br />
                      Corner First Street & Kwame Nkrumah Avenue
                      <br />
                      Harare, Zimbabwe
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">
                      Phone
                    </h3>
                    <p className="text-gray-700">+263 242 774 456 / 774 457</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">
                      Email
                    </h3>
                    <p className="text-gray-700">info@seczim.co.zw</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">
                      Operating Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday to Friday: 8:00 AM - 4:30 PM
                      <br />
                      Closed on weekends and public holidays
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">
              Our Location
            </h2>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              {/* Embedded Google Map would go here */}
              <div className="w-full h-full flex items-center justify-center bg-blue-100">
                <span className="text-2xl">📍 Map of SECZIM Location</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
