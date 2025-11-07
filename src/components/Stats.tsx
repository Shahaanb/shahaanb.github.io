import { Card } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    {
      number: "7+",
      label: "Major Projects",
      subtitle: "Completed",
    },
    {
      number: "4",
      label: "Certifications",
      subtitle: "Earned",
    },
    {
      number: "2027",
      label: "Expected Graduation",
      subtitle: "B.Tech AI",
    },
  ];

  return (
    <section className="py-20 bg-navy-medium/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all text-center group"
              >
                <div className="space-y-2">
                  <h3 className="text-4xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform">
                    {stat.number}
                  </h3>
                  <p className="text-foreground font-semibold text-sm">
                    {stat.label}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {stat.subtitle}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
