"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { X, ArrowRight, Target, Zap } from "lucide-react";

const industries = [
  {
    id: 1,
    title: "Healthcare & Life Sciences",
    tagline: "Smarter Healthcare: Faster, Safer, and More Accessible",
    description:
      "Healthcare systems generate massive volumes of data daily—from patient records to real-time monitoring. Yet, manual processes and fragmented systems leave much of this critical information underutilized. We bridge this gap with intelligent systems that turn data into lifesaving insights.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200",
    challenges: [
      "Clinician Burnout: Excessive time spent on documentation rather than patient care.",
      "Diagnostic Delays: Critical insights buried under data overload.",
      "Operational Strain: Rising costs and staff shortages stretching resources thin.",
      "Blind Spots: Limited visibility into patient risk factors and long-term outcomes.",
      "Disconnected Care: Fragmented patient experiences across different systems and departments.",
    ],
    solutions: [
      {
        title: "Clinical Intelligence & Diagnostics",
        desc: "Identify patterns and prioritize critical cases instantly. Our AI analyzes medical images, reports, and clinical data to support doctors with faster, more accurate diagnoses.",
      },
      {
        title: "Smart Documentation & Workflow Automation",
        desc: "Eliminate administrative bottlenecks. AI converts conversations and notes into structured records automatically, significantly reducing paperwork and freeing up professionals to focus on care.",
      },
      {
        title: "Virtual Health Assistants",
        desc: "Provide 24/7 patient support. AI-powered chat and voice assistants guide patients through symptoms, appointments, and care instructions, reducing unnecessary hospital visits.",
      },
      {
        title: "Predictive Health Analytics",
        desc: "Intervene before complications arise. By analyzing historical and real-time data, we identify patients at high risk of readmission or disease progression to enable proactive care.",
      },
      {
        title: "Personalized Care Insights",
        desc: "Drive data-backed decisions. AI synthesizes patient history, clinical data, and outcomes to help clinicians craft highly personalized, effective treatment plans.",
      },
    ],
  },
  {
    id: 2,
    title: "Education & Skill Development",
    tagline: "The Future of Learning: Smarter, Faster, and Personalized",
    description:
      'Education is evolving, but traditional "one-size-fits-all" models struggle to meet diverse learner needs. Institutions face the overwhelming task of managing content, assessments, and data without the right tools to personalize the experience or track real-time progress.',
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2500&auto=format&fit=crop",
    challenges: [
      "Generic Learning Models: Standardized approaches that fail to engage individual learners.",
      'The "Black Box" of Progress: Limited visibility into skill gaps and learning outcomes.',
      "Administrative Overload: Educators buried in grading and paperwork instead of mentoring.",
      "Scalability Issues: Difficulty maintaining quality while training large audiences.",
      "Engagement Drop-off: Inconsistent retention rates and passive learner participation.",
    ],
    solutions: [
      {
        title: "Personalized Learning Pathways",
        desc: "Deliver the right content at the right time. AI adapts the curriculum to each individual’s pace and performance, ensuring every learner reaches their potential.",
      },
      {
        title: "Performance Tracking & Skill Gap Analysis",
        desc: "Turn activity into insight. Continuously monitor learner progress to instantly identify skill gaps and provide actionable data to educators.",
      },
      {
        title: "Intelligent Tutoring & Assistance",
        desc: "Scale mentorship effectively. AI-powered assistants answer questions, provide hints, and guide users through exercises, freeing educators to focus on complex teaching.",
      },
      {
        title: "Automated Assessment & Feedback",
        desc: "Slash grading time. AI evaluates assignments, quizzes, and practical exercises to deliver instant, consistent feedback to learners.",
      },
      {
        title: "Engagement & Retention Optimization",
        desc: "Proactively prevent drop-outs. AI analyzes engagement patterns to identify at-risk learners early and recommend interventions to boost completion rates.",
      },
    ],
  },
  {
    id: 3,
    title: "Agriculture",
    tagline: "Precision Agriculture: Grow More, Waste Less, Plan Better",
    description:
      "Farmers today face mounting pressure from unpredictable weather, rising costs, and labor shortages. While data exists in fields and supply chains, turning it into timely decisions is the industry's biggest hurdle. We transform raw data into actionable agricultural intelligence.",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1200",
    challenges: [
      "Yield Uncertainty: Unpredictable outputs due to weather and soil variability.",
      "Rising Input Costs: Expensive seeds, fertilizers, and resources squeezing margins.",
      "Field Blind Spots: Inability to monitor crop health across vast land areas manually.",
      "Reactive Management: Slow responses to pests and diseases leading to avoidable damage.",
      "Post-Harvest Losses: Inefficient supply chains causing waste before produce reaches the market.",
    ],
    solutions: [
      {
        title: "Crop Health Monitoring",
        desc: "Detect stress and disease early. AI monitors crop conditions to flag issues instantly, allowing you to take action before damage spreads.",
      },
      {
        title: "Smart Yield Forecasting",
        desc: "Plan with confidence. AI analyzes historical and current data to provide realistic yield estimates, supporting better market strategy and logistics.",
      },
      {
        title: "Precision Resource Management",
        desc: "Optimize every drop and grain. AI identifies exactly where and when water and fertilizers are needed, maximizing efficiency and reducing waste.",
      },
      {
        title: "Pest & Disease Risk Alerts",
        desc: "Prevent outbreaks before they happen. Early warning systems identify risk factors for pests and diseases, helping farmers respond quickly to minimize loss.",
      },
      {
        title: "Supply Chain & Harvest Planning",
        desc: "Streamline the journey from farm to fork. AI optimizes harvesting schedules, storage, and distribution to reduce spoilage and improve profitability.",
      },
    ],
  },
  {
    id: 4,
    title: "Environment & Waste Management",
    tagline: "Smarter Cities: Efficient Waste Management & Sustainability",
    description:
      "Managing the waste of growing cities and industries is critical for public health and the planet. Yet, traditional systems rely on static schedules and manual monitoring, leading to inefficiencies and compliance risks. We bring real-time intelligence to environmental operations.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200",
    challenges: [
      "Inefficient Logistics: Static collection routes that waste fuel and time.",
      "Service Gaps: Overflowing bins and missed pickups damaging public perception.",
      "High Operational Costs: Escalating fuel and labor expenses.",
      "Data Voids: Limited visibility into recycling rates and waste generation trends.",
      "Compliance Complexity: Difficulty tracking environmental metrics for regulatory reporting.",
    ],
    solutions: [
      {
        title: "Smart Waste Monitoring",
        desc: "Optimize collection timing. AI monitors fill-levels across bins and facilities in real-time to prevent overflows and streamline resource deployment.",
      },
      {
        title: "Intelligent Collection & Routing",
        desc: "Reduce fuel usage and costs. AI generates dynamic collection routes based on actual needs rather than fixed schedules.",
      },
      {
        title: "Recycling & Waste Segregation Insights",
        desc: "Improve recovery rates. AI identifies waste types and recycling patterns to enhance segregation strategies and reduce landfill dependency.",
      },
      {
        title: "Environmental Risk & Compliance Monitoring",
        desc: "Stay ahead of regulations. AI supports early detection of environmental risks and automates compliance tracking and reporting.",
      },
      {
        title: "Citizen Engagement & Awareness Tools",
        desc: "Connect with the community. AI-powered assistants educate citizens, streamline complaints, and improve overall service responsiveness.",
      },
    ],
  },
  {
    id: 5,
    title: "Retail & E-commerce",
    tagline: "Retail Intelligence: Work Smarter, Sell More, Delight Customers",
    description:
      "In a competitive market, retailers and MSMEs must balance inventory, customer engagement, and complex operations. Without data-driven tools, businesses risk overstocking, missing sales opportunities, and losing customers to competitors. We democratize enterprise-grade AI for businesses of all sizes.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200",
    challenges: [
      "Inventory Imbalance: Lost revenue from overstocking or stockouts due to poor forecasting.",
      "Customer Disconnect: Inability to personalize experiences for today’s demanding shoppers.",
      "Operational Drag: High costs and time wasted on manual, repetitive workflows.",
      "Marketing Blindness: Difficulty measuring ROI and understanding promotion effectiveness.",
      "Slow Adaptation: Lagging behind market trends and shifting customer preferences.",
    ],
    solutions: [
      {
        title: "Smart Inventory Management",
        desc: "Eliminate guesswork. AI analyzes sales patterns and seasonal trends to optimize stock levels, ensuring you carry the right products at the right time.",
      },
      {
        title: "Personalized Customer Engagement",
        desc: "Drive loyalty and sales. Deliver hyper-personalized recommendations and offers that resonate with individual customer preferences.",
      },
      {
        title: "Sales Forecasting & Analytics",
        desc: "Predict the future of your business. AI forecasts sales trends to help you plan inventory, optimize pricing, and capture more revenue.",
      },
      {
        title: "Operational Workflow Automation",
        desc: "Focus on growth, not paperwork. Automate routine tasks like billing and reporting to free up staff for high-value customer interactions.",
      },
      {
        title: "Marketing & Promotions Optimization",
        desc: "Maximize marketing ROI. Identify exactly which campaigns and products resonate with specific customer segments to stop wasting ad spend.",
      },
    ],
  },
  {
    id: 6,
    title: "FinTech",
    tagline: "Next-Gen Finance: Smarter, Faster, and Secure",
    description:
      "Financial institutions handle massive transaction volumes and complex regulations daily. Reactive, manual processes create risk and slow down customer service. We deploy AI to secure operations and deliver the seamless experiences modern customers expect.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2500&auto=format&fit=crop",
    challenges: [
      "Reactive Security: Fraud detection that is often too slow to prevent loss.",
      "Operational Friction: High costs associated with manual verification and compliance.",
      "Impersonal Banking: Difficulty delivering tailored financial advice at scale.",
      "Regulatory Burden: Complex, time-consuming reporting requirements.",
      "Analysis Paralysis: Inefficient credit decisioning and missed investment trends.",
    ],
    solutions: [
      {
        title: "Fraud Detection & Risk Management",
        desc: "Secure every transaction. AI monitors activity in real-time to detect and block suspicious behavior instantly, minimizing financial loss.",
      },
      {
        title: "Personalized Banking & Customer Insights",
        desc: "Understand your customer. AI analyzes behavior to offer tailored financial products and proactive support that builds loyalty.",
      },
      {
        title: "Credit Scoring & Loan Decision Automation",
        desc: "Approve with confidence. AI evaluates loan applications faster and more accurately, streamlining approvals while managing risk exposure.",
      },
      {
        title: "Regulatory Compliance & Reporting",
        desc: "Simplify the audit trail. AI automates the analysis and validation of financial data, making regulatory reporting effortless and accurate.",
      },
      {
        title: "Investment & Market Analytics",
        desc: "Uncover market opportunities. AI identifies emerging trends and patterns to empower investors and advisors with data-driven decision support.",
      },
    ],
  },
  {
    id: 7,
    title: "Logistics & Warehousing",
    tagline: "Intelligent Logistics: Agile, Reliable, and Cost-Effective",
    description:
      "Logistics is the backbone of commerce, but complexity creates bottlenecks. From the warehouse floor to the final mile, companies face pressure to deliver faster while cutting costs. We provide the visibility and control needed to master the supply chain.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    challenges: [
      "Space Inefficiency: Poor utilization of warehouse capacity and inventory.",
      "Delivery Unpredictability: Delayed shipments damaging customer trust.",
      "Rising Costs: Spiraling fuel and operational expenses.",
      "Data Black Holes: Limited real-time visibility into order status and inventory.",
      "Manual Errors: Mistakes in picking and packing that lead to returns and waste.",
    ],
    solutions: [
      {
        title: "Smart Inventory Management",
        desc: "Optimize the warehouse. AI monitors stock levels and predicts replenishment needs to organize space efficiently and prevent shortages.",
      },
      {
        title: "Route Optimization & Fleet Management",
        desc: "Drive efficiency. AI plans the most effective delivery routes and schedules, significantly reducing fuel consumption and delivery delays.",
      },
      {
        title: "Demand Forecasting & Planning",
        desc: "Anticipate market needs. AI predicts demand based on historical data and seasonal trends, enabling precise resource planning.",
      },
      {
        title: "Automated Picking & Packing Assistance",
        desc: "Reduce fulfillment errors. AI guides warehouse staff to pick and pack items with speed and precision, improving throughput.",
      },
      {
        title: "Real-Time Supply Chain Visibility",
        desc: "Make decisions instantly. Gain immediate insight into inventory, orders, and shipments to improve transparency and operational agility.",
      },
    ],
  },
  {
    id: 8,
    title: "Public Governance & Citizen Services",
    tagline: "Governance Reimagined: Transparent, Responsive, and Efficient",
    description:
      "Governments manage vast amounts of data and critical services. Manual, fragmented processes lead to delays and citizen frustration. EmDex Labs leverages AI to transform administrative data into better public services and streamlined operations.",
    image:
      "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80&w=1200",
    challenges: [
      "Service Delays: Slow response times to citizen requests and complaints.",
      "Bureaucratic Bottlenecks: High administrative workloads and manual paperwork.",
      "Resource Misallocation: Inefficient distribution of public assets and staff.",
      "Opacity: Lack of real-time visibility into service delivery performance.",
      "Policy Gaps: Difficulty utilizing data to inform policy and decision-making.",
    ],
    solutions: [
      {
        title: "Smart Service Request Management",
        desc: "Accelerate resolution. AI automatically classifies, prioritizes, and routes citizen requests to the right department instantly.",
      },
      {
        title: "Resource Allocation & Planning",
        desc: "Optimize public spend. AI analyzes demand patterns to ensure staff and equipment are deployed exactly where they are needed most.",
      },
      {
        title: "Predictive Policy & Decision Support",
        desc: "Govern with foresight. AI identifies trends and risks within public data to help policymakers make proactive, informed decisions.",
      },
      {
        title: "Automated Document & Workflow Processing",
        desc: "Go paperless. AI digitizes forms and approvals, eliminating administrative bottlenecks and speeding up service delivery.",
      },
      {
        title: "Citizen Engagement & Feedback Insights",
        desc: "Listen to the community. AI monitors feedback to identify service gaps and emerging needs, fostering trust and satisfaction.",
      },
    ],
  },
  {
    id: 9,
    title: "Energy & Renewables",
    tagline: "Future Energy: Cleaner, Smarter, and More Efficient",
    description:
      "The energy sector must balance growing demand with sustainability goals. Managing generation, distribution, and consumption efficiently is critical to reducing emissions and costs. We provide the intelligence needed to power a sustainable future.",
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200",
    challenges: [
      "Unplanned Downtime: Equipment failures causing expensive outages.",
      "Grid Inefficiency: Waste caused by poor balancing of generation and distribution.",
      "Supply-Demand Mismatch: Difficulty predicting demand spikes.",
      "Operational Costs: Rising expenses coupled with resource inefficiencies.",
      "Compliance Risks: Navigating strict safety and environmental regulations.",
    ],
    solutions: [
      {
        title: "Predictive Maintenance & Equipment Monitoring",
        desc: "Prevent outages. AI monitors asset health in real-time to anticipate failures and schedule maintenance before problems occur.",
      },
      {
        title: "Energy Generation & Distribution Optimization",
        desc: "Balance the grid. AI analyzes supply and demand data to maximize generation efficiency and minimize waste.",
      },
      {
        title: "Renewable Resource Forecasting",
        desc: "Predict the unpredictable. AI forecasts solar and wind output based on weather and historical data to ensure reliable grid integration.",
      },
      {
        title: "Safety & Compliance Monitoring",
        desc: "Automate safety. AI tracks operational data to ensure continuous compliance with safety standards and environmental regulations.",
      },
      {
        title: "Consumer & Grid Analytics",
        desc: "Optimize consumption. AI analyzes usage patterns to refine billing, reduce peak load stress, and engage customers in energy saving.",
      },
    ],
  },
];

export default function IndustryGrid() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedIndustry = industries.find((i) => i.id === selectedId);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedId]);

  return (
    <section
      id="industry"
      className="section-padding bg-background overflow-hidden"
    >
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-xs mb-2 block"
          >
            Industries we serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Transforming every <span className="text-primary">sector</span>
          </motion.h2>
        </div>

        {/* 3x3 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              onClick={() => setSelectedId(industry.id)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative h-[380px] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow bg-gray-900 border border-gray-100/10"
            >
              {/* Background Image - Clean No LayoutId to stop flicker */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                style={{ backgroundImage: `url(${industry.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/80" />

              {/* Content Layout */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                {/* TOP: Title & Tagline */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 leading-tight drop-shadow-md">
                    {industry.title}
                  </h3>
                </div>

                {/* BOTTOM: Explore Button */}
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                  <span className="text-xs uppercase tracking-wider font-semibold text-primary">
                    Discover Solutions
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedId && selectedIndustry && (
          <div className="fixed inset-0 z-[100] flex justify-end items-stretch">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Slide-Over Drawer Panel - Smooth Tween instead of Spring */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                ease: [0.16, 1, 0.3, 1],
                duration: 0.5,
              }} // Smooth iOS-like curve
              className="relative w-full md:w-[85vw] lg:w-[60vw] xl:max-w-3xl h-full bg-background shadow-2xl flex flex-col overflow-hidden border-l border-white/10"
              style={{
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px",
              }}
            >
              {/* Inner Scroll Container - Ensures Clipping works */}
              <div className="flex-1 overflow-y-auto custom-scrollbar relative">
                {/* Compact Header */}
                <div className="relative w-full min-h-[280px] flex items-end">
                  {/* Background Image & Overlay */}
                  <div className="absolute inset-0 z-0">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${selectedIndustry.image})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/20" />{" "}
                    {/* Stronger dark overlay */}
                  </div>

                  {/* Close Button - Sticky */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedId(null);
                    }}
                    className="absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-white/20 hover:text-white border border-white/10 backdrop-blur-md rounded-full text-white/70 transition-all duration-200"
                  >
                    <X size={20} />
                  </button>

                  {/* Header Content */}
                  <div className="relative z-10 w-full p-6 md:p-8 pb-8">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }} // Fade only, no repositioning
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-0.5 rounded-md bg-primary text-white text-[10px] font-bold uppercase tracking-wider border border-white/10 shadow-sm">
                          Industry Focus
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold mb-1.5 leading-tight text-white shadow-xl tracking-tight">
                        {selectedIndustry.title}
                      </h2>
                      <p className="text-sm md:text-base font-medium text-white/90 mb-3 opacity-90">
                        {selectedIndustry.tagline}
                      </p>

                      {/* Description - Compact & Readable */}
                      <div className="text-sm text-white/80 leading-relaxed max-w-2xl border-l-2 border-primary/60 pl-3">
                        {selectedIndustry.description}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="bg-background relative p-6 md:p-8 space-y-10 pb-20">
                  {/* 1. Solutions Grid */}
                  <div>
                    <div className="flex items-center gap-2.5 mb-5 border-b border-border/40 pb-3">
                      <Zap className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-bold text-foreground">
                        Intelligent Solutions
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {selectedIndustry.solutions.map((sol, idx) => (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 0.1 + idx * 0.03, // Slight stagger, fade only
                            duration: 0.4,
                          }}
                          key={idx}
                          className="group relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-border/60 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
                        >
                          {/* Decorative Background Gradient on Hover */}
                          <div className="absolute inset-0 bg-linear-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                              {/* Stylized Number Badge */}
                              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-background border border-border/50 text-base font-bold text-primary shadow-xs group-hover:scale-110 transition-transform duration-300">
                                {(idx + 1).toString().padStart(2, "0")}
                              </span>

                              {/* Visual decoration */}
                              <ArrowRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary transition-colors -rotate-45 group-hover:rotate-0" />
                            </div>

                            <h4 className="font-bold text-lg text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                              {sol.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                              {sol.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* 2. Challenges List */}
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-border/50 p-6">
                    <div className="flex items-center gap-2.5 mb-5">
                      <Target className="w-5 h-5 text-red-500" />
                      <h3 className="text-lg font-bold text-foreground">
                        Key Challenges
                      </h3>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {selectedIndustry.challenges.map((challenge, idx) => {
                        const [title, desc] = challenge.split(":");
                        return (
                          <li key={idx} className="flex gap-3 items-start">
                            <span className="shrink-0 w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center text-[10px] font-bold mt-0.5 border border-red-200 dark:border-red-800">
                              {idx + 1}
                            </span>
                            <div className="text-xs md:text-sm">
                              <span className="font-bold text-foreground block mb-0.5">
                                {title}
                              </span>
                              <span className="text-muted-foreground leading-relaxed">
                                {desc}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
