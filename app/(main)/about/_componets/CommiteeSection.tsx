"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define TypeScript interfaces
interface CommitteeMember {
  name: string;
  role: string;
  image: string;
}

interface CommitteeData {
  title: string;
  description: string;
  members: CommitteeMember[];
}

interface Committees {
  [key: string]: CommitteeData;
}

export default function CommitteesSection() {
  const [activeCommittee, setActiveCommittee] = useState("audit");

  const committeesData: Committees = {
    audit: {
      title: "Audit Committee",
      description:
        "The Committee objectives are to assist the Board in safeguarding assets, monitoring internal control systems, identify and monitor risks as well as designing and implementing appropriate systems to manage the risks.",
      members: [
        {
          name: "Caroline Mudenda",
          role: "Chairperson",
          image: "/member1.jpg",
        },
        {
          name: "Anymore Taruvinga",
          role: "CEO",
          image: "/member2.jpg",
        },
      ],
    },
    licensing: {
      title: "Licensing, Litigation and Legislative Committee",
      description:
        "The Committee mandate is to ensure that the Chief Executive Officer acts in terms of legislation on licensing and examines proposed suspensions of licences and gives judgement.",
      members: [
        {
          name: "Caroline Mudenda",
          role: "Chairperson",
          image: "/member1.jpg",
        },
        {
          name: "William B. Manhimanzi",
          role: "Member",
          image: "/member3.jpg",
        },
        {
          name: "Margaret Mantiziba",
          role: "Member",
          image: "/member4.jpg",
        },
        {
          name: "Anymore Taruvinga",
          role: "CEO",
          image: "/member2.jpg",
        },
      ],
    },
    hr: {
      title: "Human Resources Committee",
      description:
        "This Committee is mandated to design remuneration strategy and policies and monitor market remuneration trends.",
      members: [
        {
          name: "Margaret Mantiziba",
          role: "Chairperson",
          image: "/member4.jpg",
        },
        {
          name: "Caroline Mudenda",
          role: "Member",
          image: "/member1.jpg",
        },
        {
          name: "Anymore Taruvinga",
          role: "CEO",
          image: "/member2.jpg",
        },
      ],
    },
    education: {
      title: "Investor Education Committee",
      description:
        "This Committee focuses on developing and implementing investor education programs to enhance financial literacy and protect investors in the capital markets.",
      members: [
        {
          name: "Mabutho Sibanda",
          role: "Chairman",
          image: "/member5.jpg",
        },
        {
          name: "Margaret Mantiziba",
          role: "Member",
          image: "/member4.jpg",
        },
        {
          name: "Anymore Taruvinga",
          role: "CEO",
          image: "/member2.jpg",
        },
      ],
    },
  };

  return (
    <section id="committees" className="py-16 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-2 ">SECZ Committees</h2>
          <p className="text-muted-foreground mb-8 ">
            Our specialized committees work together to ensure effective
            governance and oversight of Zimbabwe's capital markets.
          </p>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Committee Selection Tabs */}
            <div className="lg:w-1/4">
              <Tabs
                value={activeCommittee}
                onValueChange={setActiveCommittee}
                className="w-full"
              >
                <TabsList className="grid grid-cols-2 lg:grid-cols-1 h-auto gap-2 bg-transparent">
                  {Object.entries(committeesData).map(([key, committee]) => (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className="data-[state=active]:bg-amber-900 data-[state=active]:text-white py-3 px-4 text-left justify-start h-auto whitespace-normal w-full"
                    >
                      <span className="text-sm font-medium w-full">
                        {committee.title.split(" ")[0]}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Committee Details */}
            <div className="w-full">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl text-amber-700">
                    {committeesData[activeCommittee].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {committeesData[activeCommittee].description}
                  </p>

                  <h3 className="text-lg font-semibold mb-4">
                    Committee Members
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {committeesData[activeCommittee].members.map(
                      (member: CommitteeMember, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-4 p-3 rounded-lg bg-muted/50"
                        >
                          <div className="relative">
                            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden border-2 border-amber-200">
                              {member.image ? (
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <span className="text-amber-700 font-bold text-lg">
                                  {member.name
                                    .split(" ")
                                    .map((n: string) => n[0])
                                    .join("")}
                                </span>
                              )}
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold">{member.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {member.role}
                            </p>
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
