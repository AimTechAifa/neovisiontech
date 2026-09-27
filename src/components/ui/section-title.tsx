import Badge from "./badge";

export default function SectionTitle({
  badge,
  badgeVariant = "blue",
  title,
  highlightedText,
  description,
  centered = true,
}: {
  badge?: string;
  badgeVariant?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"} mb-16`}>
      {badge && (
        <div className="mb-6">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
        {title}
        {highlightedText && (
          <>
            <br />
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {highlightedText}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
