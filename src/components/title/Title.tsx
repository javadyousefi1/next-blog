import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  linkText: { text: string; href: string };
  className?: string;
};

function Title({ title, linkText, className }: Props) {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <div className="flex items-center gap-x-3">
        <p className="font-bold md:text-lg text-black text-xs">{title}</p>
        <div className="w-7 h-[1px] bg-black"></div>
      </div>

      <div className="md:flex gap-x-2 items-center hidden">
        <Link href={linkText.href}>
          <span className="font-semibold text-sm">{linkText.text}</span>
        </Link>
        <span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 8 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.20286 14.8762L1.20289 14.8762C1.38024 15.0487 1.60745 15.1472 1.84632 15.1482C2.00583 15.1585 2.16435 15.1248 2.30882 15.0513C2.45467 14.977 2.58112 14.8647 2.67935 14.7256C2.67938 14.7256 2.67941 14.7256 2.67943 14.7255L6.92897 8.7391L6.92952 8.7383C7.07328 8.53299 7.15 8.2786 7.15 8.01867C7.15 7.759 7.07343 7.50486 6.92994 7.29965C6.9298 7.29945 6.92966 7.29924 6.92952 7.29904L2.8264 1.31541C2.74574 1.19001 2.64284 1.08361 2.523 1.00411C2.40239 0.924097 2.26749 0.873279 2.12675 0.856304C1.98594 0.839321 1.84397 0.856788 1.71023 0.907014C1.57765 0.956802 1.457 1.0373 1.35508 1.1419C1.25423 1.23763 1.17161 1.35441 1.11088 1.4849C1.04965 1.61647 1.01156 1.76006 0.998201 1.90747C0.984842 2.0549 0.9964 2.20409 1.0324 2.34672C1.06836 2.48922 1.12823 2.62317 1.20942 2.74062C1.20949 2.74071 1.20955 2.74081 1.20962 2.7409L4.82179 8.01204L1.07479 13.2748L1.07467 13.275C0.992198 13.3912 0.930867 13.5241 0.893308 13.666C0.855747 13.8078 0.842478 13.9566 0.85405 14.1039C0.865622 14.2513 0.901876 14.3952 0.961295 14.5274C1.02071 14.6597 1.10246 14.7785 1.20286 14.8762Z"
              fill="#2B2C34"
              stroke="#2B2C34"
              strokeWidth="0.3"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Title;
