import { FaEnvelope, FaCommentDots, FaEnvelopeOpenText, FaGoogle, FaCreditCard, FaFlask, FaTruck } from "react-icons/fa";

const SectionAutomation = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-center py-12 px-6">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img 
          src="/img/img-2.png" 
          alt="Automation Illustration" 
          className="max-w-sm lg:max-w-md"
        />
      </div>
      
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          Bisnis lebih lancar dengan automation!
        </h2>
        <p className="text-gray-600 mb-6">
          Notifikasi order, follow-up pelanggan, hingga konfirmasi pembayaran berjalan otomatis via WhatsApp, SMS, dan Email. A/B testing pun jadi lebih praktis!
        </p>
        
        <div className="grid grid-cols-3 gap-6">
          <Feature icon={FaCommentDots} text="Message Automation" />
          <Feature icon={FaEnvelopeOpenText} text="Email Marketing" />
          <Feature icon={FaGoogle} text="Google Contacts" />
          <Feature icon={FaCreditCard} text="Payment Processor" />
          <Feature icon={FaFlask} text="A/B Testing Form" />
          <Feature icon={FaTruck} text="Logistic" />
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon: Icon, text }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 flex items-center justify-center bg-blue-900 text-white rounded-lg mb-2">
        <Icon size={30} />
      </div>
      <p className="text-gray-700 font-medium">{text}</p>
    </div>
  );
};

export default SectionAutomation;
