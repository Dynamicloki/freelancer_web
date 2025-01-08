export function StatsSection() {
  const stats = [
    { label: 'Active Freelancers', value: '10,000+' },
    { label: 'Projects Completed', value: '25,000+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Average Response Time', value: '< 1hr' },
  ];

  return (
    <section className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}