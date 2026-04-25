import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  price: string;
  category: string;
  image: string;
  href?: string;
  aspectRatio?: "portrait" | "square";
};

export function ProductCard({
  name,
  price,
  category,
  image,
  href = "/shop",
  aspectRatio = "portrait",
}: ProductCardProps) {
  return (
    <Link href={href} className="group">
      <div
        className={`relative overflow-hidden bg-foreground/[0.03] ${
          aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
        }`}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
      </div>
      <div className="mt-4 space-y-1">
        <p className="text-[10px] tracking-[0.2em] uppercase text-muted">
          {category}
        </p>
        <h3 className="font-serif text-sm lg:text-base">{name}</h3>
        <p className="text-sm text-muted">{price}</p>
      </div>
    </Link>
  );
}
