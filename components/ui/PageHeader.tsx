import Eyebrow from "@/components/ui/Eyebrow";

type PageHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  centered?: boolean;
};

export default function PageHeader({ eyebrow, title, description, centered }: PageHeaderProps) {
  return (
    <div
      className={`pt-32 pb-16 px-gutter max-w-container-max mx-auto ${centered ? "text-center" : ""}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1
        className={`font-display text-4xl sm:text-5xl font-bold text-primary tracking-tight ${
          centered ? "" : "max-w-2xl"
        }`}
      >
        {title}
      </h1>
      <p className={`text-secondary text-lg mt-4 max-w-xl ${centered ? "mx-auto" : ""}`}>
        {description}
      </p>
    </div>
  );
}
