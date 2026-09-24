export interface AboutStat {
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
}

export const aboutData = {
  eyebrow: "About Us",
  headline: "Technology Oriented Company Promoted by Technocrats",
  establishedYear: "2007",
  establishedText: "Established in 2007",
  paragraphs: [
    "JAY TECH INDUSTRIES (JTI) is a technology oriented company promoted by technocrats experienced in various industries for more than two decade.",
    "JTI’s manufacturing unit at Ahmedabad, Gujarat, India provides Complete Engineering solutions to its client’s worldwide using State-of Art Technology and equipments / machines. The highly skilled dedicated professionals at JTI provide the perfect solutions for delivering cost effective, high quality just in time products/ solutions.",
    "We are having latest & fully equipped CNC Machine Shop, Assembly Shop & Designing Depart. We are well equipped with best of software and hardware to cater all the needs of clients and faster response time. Lead time require to develop, modify products and accommodate the design changes are best in industry. The company emphasizes on acquiring an in-depth knowledge of client’s need and designing end-to-end solutions that are fine-tuned to these needs.",
    "To succeed, we use the best tools, technologies and strategies. Our flexibility supported by technologies and processes builds value for our clients. We have forged business relationship with “the pool of technocrats” in application and technology to serve our domestic as well global clients.",
    "We will be obliged if you provide us an opportunity to serve your esteemed organization by forwarding us an inquiry for sample development & quotation purpose.",
  ],
  stats: [
    { value: 20, suffix: "+ Yrs", decimals: 0, label: "Technocrat Experience" },
    { value: 10, suffix: "k+", decimals: 0, label: "Delivered Components" },
    { value: 100, suffix: "%", decimals: 0, label: "Just-In-Time & QA" },
  ] as AboutStat[],
  facilities: [
    "CNC Machine Shop",
    "Assembly Shop",
    "Designing Depart (CAD/CAM)",
    "Sample Development",
  ],
  contact: {
    company: "JAY TECH INDUSTRIES",
    address: "A/54 Billeshwar Estate, Opp. G.V.M.M, Odhav, Ahmedabad-382418",
    phones: ["+91 99742 96091", "+91 97243 24427"],
  },
};
