import Image from "next/image";

type PortraitProps = {
  kind: "hero" | "authority";
  src: string;
  alt: string;
};

export function Portrait({ kind, src, alt }: PortraitProps) {
  return (
    <figure className={`portrait portrait-${kind}`}>
      <div className="portrait-orbit" aria-hidden="true" />
      <Image
        src={src}
        alt={alt}
        width={900}
        height={1200}
        priority={kind === "hero"}
        unoptimized
      />
      {kind === "hero" && (
        <figcaption>
          <span className="portrait-caption-kicker">Com Renata Garcia</span>
          <strong>Clareza antes da pressa.</strong>
        </figcaption>
      )}
    </figure>
  );
}
