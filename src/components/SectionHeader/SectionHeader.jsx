import "./SectionHeader.scss"

export const SectionHeader = ({title}) => {
  return (
    <div className="section_header">
      <h2 className="section_title">{title}</h2>
      <div className="separator"></div>
    </div>
  );
};
