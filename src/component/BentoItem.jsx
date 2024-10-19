/* eslint-disable react/prop-types */
const BentoItem = ({ className, children, height = "auto", padding, border, style = {} }) => {
  return (
    <div className={className} style={{ minHeight: height, border, padding: padding, borderRadius: "15px", ...style }}>
      {children}
    </div>
  );
};

export default BentoItem;
