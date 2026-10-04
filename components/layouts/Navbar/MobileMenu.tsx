import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { label: "خانه", href: "#home" },
  { label: "درباره ما", href: "#about" },
  { label: "خدمات", href: "#services" },
  { label: "مقالات", href: "#articles" },
  { label: "تماس با ما", href: "#contact" },
];

export function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-amber-400 md:hidden">
      <div className="flex h-full flex-col items-center justify-center gap-8">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-2xl font-medium"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}