const CategoryCard: React.FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => {
  return (
    <div className="mt-10 group inline-block">
      <div className="md:w-[220px] w-[150px] h-[210px]  md:h-[280px] bg-white shadow-md rounded-lg hover:bg-blue transition-all ease-out duration-300 flex justify-     items-center">
        <div className="">
          {/* icon */}
          <div className="w-[70px] h-[70px] pl-10">
            <span>{icon}</span>
          </div>
          {/* text */}
          <p className="md:text-3xl text-lg font-bold pl-5 group-hover:text-white text-black transition-all ease-out duration-300">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
