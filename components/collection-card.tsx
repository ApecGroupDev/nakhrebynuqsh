import Image from "next/image";
import Link from "next/link";

type CollectionCardProps = {
  name: string;
  description: string;
  image: string;
  href?: string;
};

export function CollectionCard({
  name,
  description,
  image,
  href = "/collections",
}: CollectionCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden aspect-[4/5]"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/10 transition-opacity duration-500" />
      <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
        <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">
          {name}
        </h3>
        <p className="text-sm text-white/70 mb-4 max-w-xs">{description}</p>
        <span className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-white/80 group-hover:text-gold transition-colors duration-300">
          Explore Collection &rarr;
        </span>
      </div>
    </Link>
  );
}
