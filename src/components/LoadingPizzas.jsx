import React from "react"
import ContentLoader from "react-content-loader";

const LoadingPizzas = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="129" cy="129" r="129" /> 
    <rect x="10" y="272" rx="0" ry="0" width="242" height="27" /> 
    <rect x="10" y="313" rx="5" ry="5" width="243" height="45" /> 
    <rect x="12" y="375" rx="1" ry="1" width="90" height="31" /> 
    <rect x="125" y="371" rx="23" ry="23" width="128" height="39" />
  </ContentLoader>
)

export default LoadingPizzas;