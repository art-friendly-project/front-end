import TermsAndPolicy from './TermsAndPolicy';
import ImprovementComments from './ImprovementComments';
// import Instagram from './Instagram';
import ServiceSectionTitle from './ServiceSectionTitle';

const ServiceSection = () => {
  return (
    <div className="flex flex-col pb-6 border-b-10 border-b-gray-00">
      <ServiceSectionTitle />
      <TermsAndPolicy />
      <ImprovementComments />
      {/* <Instagram /> */}
    </div>
  );
};

export default ServiceSection;
