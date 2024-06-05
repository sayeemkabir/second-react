import Arthur from "../assets/arthur-morgan.png";

const About = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-5 py-16">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img className="rounded-md w-full md:w-auto" src={Arthur} alt="Arthur Morgan" />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="font-bold text-xl text-start text-black">About Arthur and John</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus temporibus ipsum similique esse dolorem facere, fuga, quasi quaerat rem molestias nobis sunt voluptatem voluptatibus illo? Natus culpa accusantium obcaecati numquam dignissimos consequuntur libero placeat eveniet eius eum molestias iusto nesciunt explicabo, perferendis nam. Aperiam rerum ipsum neque incidunt quaerat perferendis iure culpa id adipisci eveniet! Fugit sint porro harum magni.</p>
        </div>
      </div>
    </>
  );
};

export default About;
