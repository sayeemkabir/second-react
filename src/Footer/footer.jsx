import Logo from "../assets/aximmica-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">

        <div className="col-span-1">
          <img src={Logo} alt="Logo" className="w-16 h-16 mb-4" />
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        
        {/* Second column */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Locations</li>
          </ul>
        </div>
        

        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-4">Our Office Areas</h4>
          <ul className="text-sm">
            <li>New York</li>
            <li>Los Angeles</li>
            <li>London</li>
            <li>Paris</li>
            <li>Tokyo</li>
          </ul>
        </div>
        

        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-4">Contact Details</h4>
          <p className="text-sm">123 Street Name</p>
          <p className="text-sm">City, Country</p>
          <p className="text-sm">Email: example@example.com</p>
          <p className="text-sm">Phone: +1234567890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
