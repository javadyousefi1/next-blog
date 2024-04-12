const Footer = () => {
  return (
    <footer className="bg-ligth-gray2  w-full p-10">
      <div className="container max-w-7xl">
        <div className="flex justify-between gap-x-40 flex-col md:flex-row">
          {/* main detail */}
          <div className="mb-10">
            {/* logo */}
            <div className="flex-1">
              <span className="font-semibold text-xl md:text-4xl">Javad</span>
              <span className="font-bold text-blue md:text-[18px] text-sm">
                .Blog
              </span>
            </div>
            <p className="text-black text-sm mt-3">
              Digitaldastin by Javad Yousefi{" "}
            </p>
            {/* social icon */}
            <div className="flex justify-start gap-x-4 mt-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 1.03813C22.0424 1.71361 20.9821 2.23024 19.86 2.56813C19.2577 1.87564 18.4573 1.38482 17.567 1.16206C16.6767 0.939292 15.7395 0.995328 14.8821 1.32259C14.0247 1.64984 13.2884 2.23253 12.773 2.99185C12.2575 3.75116 11.9877 4.65047 12 5.56813V6.56813C10.2426 6.6137 8.50127 6.22394 6.93101 5.43358C5.36074 4.64321 4.01032 3.47677 3 2.03813C3 2.03813 -1 11.0381 8 15.0381C5.94053 16.4361 3.48716 17.1371 1 17.0381C10 22.0381 21 17.0381 21 5.53813C20.9991 5.25959 20.9723 4.98173 20.92 4.70813C21.9406 3.70163 22.6608 2.43084 23 1.03813V1.03813Z"
                  stroke="#2B2C34"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                  stroke="#2B2C34"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 11.3701C16.1234 12.2023 15.9812 13.0523 15.5937 13.7991C15.2062 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4077 15.906C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5923C7.96035 11.7616 8.09202 10.91 8.47028 10.1584C8.84854 9.40691 9.45414 8.7938 10.2009 8.4063C10.9477 8.0188 11.7977 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
                  stroke="#2B2C34"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 6.5H17.51"
                  stroke="#2B2C34"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                  stroke="#2B2C34"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 9H2V21H6V9Z"
                  stroke="#2B2C34"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="#2B2C34"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className=" flex-1 flex justify-between flex-col gap-y-4 md:flex-row">
            {/* category */}
            <div>
              <p className="font-bold mb-4">Category</p>
              <ul>
                <li className="font-light mb-3 hover:text-blue transition-all ease-in-out duration-150 cursor-pointer">
                  Css
                </li>
                <li className="font-light mb-3 hover:text-blue transition-all ease-in-out duration-150 cursor-pointer">
                  Javascript
                </li>
                <li className="font-light mb-3 hover:text-blue transition-all ease-in-out duration-150 cursor-pointer">
                  React Js
                </li>
                <li className="font-light mb-3 hover:text-blue transition-all ease-in-out duration-150 cursor-pointer">
                  Vue Js
                </li>
              </ul>
            </div>
            {/* About Me */}
            <div>
              <p className="font-bold mb-4">About Me</p>
              <ul>
                <li className="font-light mb-3 hover:text-blue transition-all ease-in-out duration-150 cursor-pointer">
                  About Me
                </li>
                <li className="font-light mb-3 hover:text-blue transition-all ease-in-out duration-150 cursor-pointer">
                  Projects
                </li>
                <li className="font-light mb-3 hover:text-blue transition-all ease-in-out duration-150 cursor-pointer">
                  Achievement
                </li>
              </ul>
            </div>
            {/* Get in touch */}
            <div>
              <p className="font-bold mb-4">Get in touch</p>
              <ul>
                <li className="font-light mb-3 hover:text-blue transition-all ease-in-out duration-150 cursor-pointer">
                  +62-8XXX-XXX-XX
                </li>
                <li className="font-light mb-3 hover:text-blue transition-all ease-in-out duration-150 cursor-pointer">
                  javadyousefi9000@gmail.com
                </li>
              </ul>
            </div>
            {/* Follow Us */}
            <div>
              <p className="font-bold mb-4">Follow Us</p>
              <ul>
                <li className="font-light mb-3 hover:text-blue transition-all ease-in-out duration-150 cursor-pointer">
                  Instagram
                </li>
                <li className="font-light mb-3 hover:text-blue transition-all ease-in-out duration-150 cursor-pointer">
                  Twitter{" "}
                </li>
                <li className="font-light mb-3 hover:text-blue transition-all ease-in-out duration-150 cursor-pointer">
                  Linkdin
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray my-5"></div>
        <div className="flex justify-between">
          <p className="text-xs text-black">© 2022 Digitaldastin</p>
          <p className="text-xs text-black">Made With ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
