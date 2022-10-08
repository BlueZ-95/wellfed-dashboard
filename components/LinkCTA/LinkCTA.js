const LinkCTA = ({ ctaText, ctaLink, target, ctaColors }) => {
  console.log("ctaColors", ctaColors);
  return (
    <a
      href={ctaLink}
      target={target}
      style={{ padding: "18px 15px" }}
      className={`${ctaColors.bgColor} hover:${ctaColors.hoverBgColor} text-white text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
      type="button"
    >
      {ctaText}
    </a>
  );
};

export default LinkCTA;
