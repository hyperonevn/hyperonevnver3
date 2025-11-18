import React from 'react';

const tech = [
  {
    name: 'Google Gemini',
    logo: 'https://www.gstatic.com/ai/gemini/logo.png',
    desc: 'Multimodal AI for reasoning, analysis and automation.'
  },
  {
    name: 'OpenAI GPT',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
    desc: 'Advanced language and reasoning engine powering Hyper Bot & Hyper ID.'
  },
  {
    name: 'Google Cloud Platform',
    logo: 'https://www.gstatic.com/cloud/images/cloud-logo.svg',
    desc: 'Cloud Run, Firestore, Cloud Storage and OAuth – core infrastructure.'
  },
  {
    name: 'Cloudflare',
    logo: 'https://www.cloudflare.com/img/logo-cloudflare-dark.svg',
    desc: 'Edge network, R2 storage and Workers for global low-latency performance.'
  },
  {
    name: 'Vercel',
    logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
    desc: 'Frontend deployment and edge serverless powering Hyper ME & Teach.'
  }
];

export const TechStackSection: React.FC = () => {
  return (
    <section className="w-full py-16">
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        HYPER ONE IS BUILT ON
      </h2>

      <p className="text-gray-300 max-w-3xl leading-relaxed mb-12">
        Hyper One leverages world-class AI and cloud hyperscalers to deliver
        real-time intelligence, enterprise stability, and global performance.
        Our hybrid multi-cloud architecture ensures speed, reliability and
        infinite scalability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tech.map((item) => (
          <div
            key={item.name}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition duration-200"
          >
            <div className="flex items-center gap-4">
              <img src={item.logo} className="w-12 h-12 object-contain" alt={item.name} />
              <h3 className="text-xl font-semibold">{item.name}</h3>
            </div>
            <p className="text-gray-300 mt-3 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
