const LinkCTA = ({ ctaText, ctaLink, target, ctaColors }) => {
  return (
    <a
      href={ctaLink}
      target={target}
      className={`${ctaColors.bgColor} hover:${ctaColors.hoverBgColor} text-white text-xs font-bold uppercase px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
      type="button"
    >
      {ctaText}
    </a>
  );
};

export default LinkCTA;
