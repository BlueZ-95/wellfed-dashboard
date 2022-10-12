const LinkCTA = ({ ctaText, ctaLink, target, ctaStyles }) => {
  return (
    <a
      href={ctaLink}
      target={target}
      className={`${ctaStyles?.bgColor} hover:${ctaStyles?.hoverBgColor} ${
        ctaStyles.color ?? "text-white"
      } text-xs font-bold uppercase px-4 py-4 md:px-6 md:py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
      type="button"
    >
      {ctaText}
    </a>
  );
};

export default LinkCTA;
