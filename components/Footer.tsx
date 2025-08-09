import { details } from "@/lib/details";

export default function Footer() {
  return (
    <footer className="relative w-full max-w-5xl mx-auto px-4 py-10">
      <div className="text-center border-t accent-border pt-8">
        <div className="text-sm font-medium accent-text mb-2">
          © {new Date().getFullYear()} {details.tagline}
        </div>
        <div className="text-xs text-gray-500 italic">
          {details.footer.creditText}
        </div>
      </div>
    </footer>
  );
}
