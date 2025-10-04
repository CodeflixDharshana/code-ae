const teamMembers = [
  {
    name: "John Doe",
    designation: "CEO & Founder",
    bio: "Visionary leader with 15+ years of experience in technology and innovation",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Jane Smith",
    designation: "Lead Developer",
    bio: "Full-stack expert passionate about creating elegant and efficient solutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sarah Lee",
    designation: "Creative Director",
    bio: "Award-winning designer crafting beautiful and intuitive user experiences",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com"
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx}
              className="bg-card border border-border p-8 rounded-2xl shadow-card hover:shadow-glow hover:border-orange/50 transition-smooth text-center"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 object-cover border-4 border-orange/30"
              />
              <h3 className="text-2xl font-semibold mb-2 text-foreground">{member.name}</h3>
              <p className="text-orange font-medium mb-3">{member.designation}</p>
              <p className="text-muted-foreground mb-6">{member.bio}</p>
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange hover:text-orange/80 transition-smooth"
              >
                <i className="fab fa-linkedin text-xl"></i>
                Connect
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
