interface LinkCTAProps {
  ctaText: string;
  ctaLink: string;
  target?: string;
  ctaStyles: any;
  isArrowEnabled?: boolean;
}

const LinkCTA = ({
  ctaText,
  ctaLink,
  target,
  ctaStyles,
  isArrowEnabled,
}: LinkCTAProps): JSX.Element => {
  return (
    <a
      href={ctaLink}
      target={target}
      className={`${ctaStyles?.bgColor} ${ctaStyles?.hoverBgColor} ${
        ctaStyles?.color ?? "text-white"
      } text-xs font-bold uppercase px-4 py-4 md:px-6 md:py-3 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 ${
        ctaStyles?.customClasses
      }`}
      type="button"
    >
      {ctaText}
      {isArrowEnabled && <i className="fa-solid fa-arrow-right-long ml-3"></i>}
    </a>
  );
};

export default LinkCTA;
