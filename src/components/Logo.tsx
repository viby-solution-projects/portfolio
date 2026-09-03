import { cn } from "../utils/cn";

export default function Logo({
  light = false,
  href = "#/",
}: {
  light?: boolean;
  href?: string;
}) {
  return (
    <a
      className={cn("logo", light && "logo-light")}
      href={href}
      aria-label="Viby home"
    >
      <span className="logo-mark">V</span>
      <span>
        VIBY
        <br />
        <small>ECOSYSTEM</small>
      </span>
    </a>
  );
}
