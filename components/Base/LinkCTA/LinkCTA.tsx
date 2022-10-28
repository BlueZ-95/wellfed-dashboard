export type variants = "primary" | "secondary";

const variantClasses: Record<variants, string> = {
  primary: "bg-wellfedPrimaryBlue text-white hover:bg-wellfedPrimaryGreen",
  secondary:
    "bg-transparent border border-wellfedPrimaryBlue text-wellfedPrimaryBlue hover:bg-wellfedPrimaryBlue hover:text-white",
};

interface LinkCTAProps {
  ctaText: string;
  ctaLink: string;
  target?: string;
  customClasses?: string;
  variant: variants;
  isArrowEnabled?: boolean;
}

const LinkCTA = ({
  ctaText,
  ctaLink,
  target,
  customClasses,
  variant,
  isArrowEnabled,
}: LinkCTAProps): JSX.Element => {
  return (
    <a
      href={ctaLink}
      target={target}
      className={`${variantClasses[variant]} text-xs font-bold uppercase px-4 py-4 md:px-6 md:py-3 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 ${customClasses}`}
      type="button"
    >
      {ctaText}
      {isArrowEnabled && <i className="fa-solid fa-arrow-right-long ml-3"></i>}
    </a>
  );
};

export default LinkCTA;
