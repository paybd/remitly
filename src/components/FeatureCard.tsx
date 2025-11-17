import { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="w-full max-w-sm md:max-w-none h-full rounded-2xl bg-white p-6 border border-sky-600 shadow-lg hover:shadow-xl transition-shadow duration-200 text-center group flex flex-col">
      <div className="flex flex-col items-center gap-5">
        <div className="h-16 w-16 rounded-xl bg-sky-50 flex items-center justify-center ring-1 ring-sky-100 transition-transform duration-200 ease-out group-hover:scale-110">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-neutral-700">{description}</p>
        </div>
      </div>
    </div>
  );
}


