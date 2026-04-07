import React from "react";

const whyUsData = [
  {
    title: "Formation et mentorat intensif",
    icon: "🎓",
  },
  {
    title: "Accès aux investisseurs locaux et internationaux",
    icon: "💼",
  },
  {
    title: "Programmes spécialisés : Agri, Green, Tech, Innovation",
    icon: "🌱",
  },
  {
    title: "Communauté internationale et networking",
    icon: "🌍",
  },
];

const WhyUs = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">Pourquoi nous choisir</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {whyUsData.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-lg shadow hover:shadow-xl transition cursor-pointer"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
