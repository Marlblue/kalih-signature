const FACILITIES = [
  {
    icon: "park",
    title: "Area Outdoor Asri",
    description: "Area outdoor yang rindang dan sejuk untuk bersantai bersama keluarga atau teman.",
  },
  {
    icon: "child_care",
    title: "Kids Friendly",
    description: "Area bermain yang aman dan nyaman untuk menemani waktu bersama si kecil.",
  },
  {
    icon: "wifi",
    title: "WiFi Cepat",
    description: "WiFi cepat dan stabil untuk WFC, belajar, meeting online, hingga menyelesaikan pekerjaan.",
  },
  {
    icon: "local_parking",
    title: "Parkir Luas",
    description: "Area parkir yang luas dan mudah diakses untuk mobil, motor, maupun rombongan.",
  },
];

export default function Facilities() {
  return (
    <section id="fasilitas" data-reveal className="bg-surface py-24">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl font-bold text-primary mb-6 tracking-tight">
            Mengapa Memilih Kalih Signature?
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Nikmati suasana café di Tegal yang nyaman untuk keluarga, bekerja, meeting, hingga berbagai acara.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {FACILITIES.map((facility) => (
            <div key={facility.title} className="text-center group">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-xl transition-all group-hover:-translate-y-1">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {facility.icon}
                </span>
              </div>
              <h4 className="font-bold text-lg mb-2">{facility.title}</h4>
              <p className="text-sm text-secondary">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
