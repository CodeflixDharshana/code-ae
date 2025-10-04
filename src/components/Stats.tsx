const stats = [
  {
    icon: "ri-emotion-happy-line",
    number: "250+",
    label: "Happy Clients"
  },
  {
    icon: "ri-file-list-3-line",
    number: "491+",
    label: "Finished Projects"
  },
  {
    icon: "ri-star-line",
    number: "15+",
    label: "Skills Delivered"
  },
  {
    icon: "ri-cup-line",
    number: "100+",
    label: "Cups of Tea"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Our Achievements</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange mb-4">
                <i className={`${stat.icon} text-3xl text-white`}></i>
              </div>
              <div className="text-4xl font-bold text-orange mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
