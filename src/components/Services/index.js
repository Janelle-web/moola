import React from "react"
import Icon1 from "../../images/svg-4.svg"
import Icon2 from "../../images/svg-5.svg"
import Icon3 from "../../images/svg-6.svg"
import { ServicesContainer, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH1, ServicesH2, ServicesP } from "./ServicesElements"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2> Reduce Expenses</ServicesH2>
          <ServicesP>We help lower your rates and interests and increase your overall savings.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2> Virtual Offices</ServicesH2>
          <ServicesP>Our platforms are accessible anywhere in the world via internet.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2> Premium Privileges</ServicesH2>
          <ServicesP>Signup on our special membership card that returns 5% cash back.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
