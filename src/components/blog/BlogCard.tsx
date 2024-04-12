import Image from "next/image";
import ArticleImage from "../../assets/images/Article_Image.png";
import profile from "../../assets/images/profile.jpg";
const BlogCard = () => {
  return (
    <>
      <div className="flex-col bg-white hover:shadow-custom-shadow transition-all duration-300 ease-in-out rounded-lg min-w-[250px] min-h-[300px] p-3">
        {/* Image */}
        <Image
          src={ArticleImage}
          alt="ArticleImage"
          className="rounded-lg w-[260px] h-[196px]"
        />
        {/* title */}
        <h1 className="text-black font-bold mt-4 text-md">
          Fundamental of javascript
        </h1>
        {/* author */}
        <div className="flex justify-between gap-x-4 items-center mt-14">
          {/* profile */}
          <div>
            <Image
              src={profile}
              alt="profile"
              className="rounded-full w-[50px]"
            />
          </div>
          {/* detail */}
          <div className="flex-col flex-1">
            <h1 className="font-bold">Javad</h1>
            <div className="flex justify-between items-center">
              <p className="text-sm">Jan 10, 2022</p>
              <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
              <p className="text-sm">3 min read</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
