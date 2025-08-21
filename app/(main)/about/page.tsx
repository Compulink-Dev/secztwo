"use client";

import { motion } from "framer-motion";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import CommitteesSection from "./_componets/CommiteeSection";
import Publication from "./_componets/Publication";
import Document from "./_componets/Document";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="d">
        {/* Hero Section */}
        <section className="relative py-32 flex items-center justify-center  bg-gradient-to-br from-[var(--seczim-brown)] to-[var(--seczim-brown-light)] text-[var(--seczim-white)]">
          <div className="container mx-auto px-6 relative z-10 flex h-full items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl font-bold mb-4">
                Securities and Exchange Commission of Zimbabwe
              </h1>
              <p className="text-xl">
                Protecting investors through effective regulation of the capital
                market and promoting innovation.
              </p>
              <div className="mt-8 flex gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Learn More
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-amber-900 hover:text-white border-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rest of the content remains the same as in the first component */}
        {/* About Section */}
        <section id="who-is-secz" className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">Who is SECZ?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>What We Do</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Regulate trading and dealing in securities</li>
                      <li>
                        • Register, supervise and regulate securities exchanges
                      </li>
                      <li>
                        • License, supervise and regulate licensed persons
                      </li>
                      <li>• Encourage development of capital markets</li>
                      <li>• Advise the Government on securities matters</li>
                      <li>• Promote investor education</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      A regulator of a diverse and efficient capital market
                      anchored on robust institutions by 2030.
                    </p>

                    <Separator className="my-4" />

                    <CardTitle className="mt-4">Our Mission</CardTitle>
                    <p>
                      To protect investors through effective regulation of the
                      capital market and promote innovation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Key Objectives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Providing high levels of investor confidence</li>
                      <li>• Reducing systemic risk in capital markets</li>
                      <li>
                        • Promoting market integrity and investor confidence
                      </li>
                      <li>• Preventing market manipulation and fraud</li>
                      <li>• Ensuring transparency in capital markets</li>
                      <li>• Promoting investor education</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">Our Values</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="">
                  <Image
                    src="/values.png"
                    alt="values"
                    className=""
                    height={800}
                    width={800}
                  />
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="fairness">
                    <AccordionTrigger>Fairness</AccordionTrigger>
                    <AccordionContent>
                      We are just and impartial in all our decisions and
                      actions. We are consistent and transparent in our conduct.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="accountability">
                    <AccordionTrigger>Accountability</AccordionTrigger>
                    <AccordionContent>
                      We account for the authority and resources entrusted to
                      us. We take full responsibility for our decisions and
                      actions.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="competence">
                    <AccordionTrigger>Competence</AccordionTrigger>
                    <AccordionContent>
                      We continually upgrade our skills and competences to keep
                      abreast with market developments and best practices.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="integrity">
                    <AccordionTrigger>Integrity</AccordionTrigger>
                    <AccordionContent>
                      We are honest and uphold the highest standards of
                      professionalism. We can be trusted to keep privileged
                      information confidential.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="teaming">
                    <AccordionTrigger>Teaming</AccordionTrigger>
                    <AccordionContent>
                      We are a cohesive and high performing team that executes
                      and delivers break through results.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Structure Section */}
        <section id="structure" className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">Structure of SECZ</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img
                  src="/structure.png"
                  alt="SECZ Organizational Structure"
                  className="w-full h-[200px]  lg:h-[450px] max-w-4xl mx-auto"
                  width={400}
                  height={400}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Committees Section */}
        <CommitteesSection />

        {/* CEO Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className=""
            >
              <h2 className="text-3xl font-bold mb-8">
                Chief Executive Officer
              </h2>
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general" className="text-xs lg:text-xm">
                    General Information
                  </TabsTrigger>
                  <TabsTrigger value="readmore" className="text-xs lg:text-xm">
                    Read More
                  </TabsTrigger>
                  <TabsTrigger value="ceo" className="text-xs lg:text-xm">
                    Anymore Taruvinga
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="general">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-justify text-sm lg:text-md">
                        In accordance with Securities Act the CEO has overall
                        responsibility for creating, planning, implementing, and
                        integrating the strategic direction of the Commission.
                        This includes responsibility for all components and
                        departments of SECZ. The CEO makes certain that the
                        Commission's leadership maintains constant awareness of
                        both external and internal landscape and industry
                        developments.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="readmore">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-justify">
                        The mandate of the CEO is therefore to manage the day to
                        day operations of the Commission and ensure that
                        operations are consistent with policies developed by the
                        Board and are carried out in such a way that meets the
                        requirements of the Securities Act. The CEO leads, in
                        conjunction with the Board, the development and
                        implementation of the Commission's strategy while
                        ensuring that Commission procedures and overall
                        management are designed in accordance with established
                        Board policy. The CEO keeps the Board informed of
                        existing or impending Board policy issues.
                      </p>
                      <p className="text-justify mt-4">
                        The CEO acts as a direct liaison between the Board and
                        management of the Commission and communicates to the
                        Board on behalf of management. The CEO also communicates
                        on behalf of the Commission to employees, Government,
                        the market and the public.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="ceo">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <img
                            src="/ceo.jpg"
                            alt="CEO Anymore Taruvinga"
                            className="w-48 h-64 object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">
                            Chief Executive Officer
                          </h3>
                          <p className="italic">
                            CFA Charterholder, MSc Finance & Investment, B. Com
                            Finance.
                          </p>

                          <p className="mt-4">
                            Anymore is a CFA Charter holder with over 14 years
                            of experience in the banking and capital markets
                            sectors, including as Bank and Group Equities Market
                            Analyst for Afrasia Bank, Investment Analyst for
                            MMC, and Group Research Analyst for Premier Finance
                            group, now Ecobank.
                          </p>

                          <p className="mt-4">
                            His immediate past position was Head of the Zimbabwe
                            Stock Exchange (ZSE) Markets responsible for ZSE
                            operations, trading, and listings. Previously he has
                            held the position of Head of Business Development
                            and Marketing as well as Product Development
                            Manager.
                          </p>

                          <p className="mt-4">
                            Apart from a wide network, Anymore brings a wealth
                            of practical experience in marketing, business
                            development, strategy and financial analysis. He is
                            a Non-Executive Director of the Investor Protection
                            Board where he chairs the Investment Committee.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>

        {/* Publication */}
        <div className=" bg-amber-50 ">
          <div className="container mx-auto px-6">
            <div className="">
              <p className="text-4xl font-bold py-8">Publication</p>
            </div>
            <div className="">
              <Publication
                title="Custom Publication Title"
                date="January 1, 2023"
                author="Custom Author"
                category="Reports"
                pdfUrl="/path/to/custom.pdf"
                downloadText="Download PDF [2.5 MB]"
              />
            </div>
          </div>
        </div>

        {/* Document Viewer */}
        <div className=" bg-gray-50">
          <div className="container mx-auto ">
            <div className="">
              <p className="py-8 text-3xl font-bold">Documents</p>
              <Document />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ListItem component for navigation
const ListItem = ({ href, title, children }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
