import { Fragment } from "react";

function inlineMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}

/** Renders the bold markers and line breaks stored in project case-study copy. */
export function MarkdownText({ text, className = "" }: { text: string; className?: string }) {
  const blocks = text.trim().split(/\n\n+/);
  return (
    <div className={className}>
      {blocks.map((block, index) => (
        <p key={index} className="mb-4 leading-relaxed last:mb-0">
          {block.split("\n").map((line, lineIndex) => (
            <Fragment key={lineIndex}>
              {lineIndex > 0 ? <br /> : null}
              {inlineMarkdown(line)}
            </Fragment>
          ))}
        </p>
      ))}
    </div>
  );
}
