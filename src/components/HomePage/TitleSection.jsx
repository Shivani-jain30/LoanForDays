import React from "react";

const TitleSection = ({
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  return (
   
    <div className="text-center mb-15">
      <h2 className={`text-3xl md:text-4xl font-extrabold text-foreground mb-3`}>
        {title} 
      </h2>
      <p className={`text-muted-foreground max-w-xl mx-auto`}>{subtitle}</p>
      </div>
      
  );
};

export default TitleSection;
