import AgreeUseService from './AgreeUseService';
import ImprovementComments from './ImprovementComments';
import Instagram from './Instagram';
import ServiceSectionTitle from './ServiceSectionTitle';

const ServiceSection = () => {
  return (
    <div className="flex flex-col pb-10 border-b-10 border-b-gray-00 pl-[5%]">
      <ServiceSectionTitle />
      <AgreeUseService />
      <ImprovementComments />
      <Instagram />
    </div>
  );
};

export default ServiceSection;
