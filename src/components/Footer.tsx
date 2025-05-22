import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="h-[160px] bg-[#111827] flex justify-center">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between lg:w-[1120px] md:w-[696px] w-[343px] mt-[32px]">
          <span className="lg:inline md:inline hidden text-[16px] text-[#9CA3AF] font-normal">
            &copy; codeit - 2024
          </span>
          <span className="text-[16px] text-[#E5E7EB] font-normal">
            Privacy Policy FAQ
          </span>

          <div className="flex flex-row justify-center gap-[12px]">
            <Link href="https://www.facebook.com">
              <Image
                width={20}
                height={20}
                alt="facebook"
                src="/images/ic_facebook.png"
              />
            </Link>
            <Link href="https://www.twitter.com">
              <Image
                width={20}
                height={20}
                alt="facebook"
                src="/images/ic_twitter.png"
              />
            </Link>
            <Link href="https://www.youtube.com">
              <Image
                width={20}
                height={20}
                alt="facebook"
                src="/images/ic_youtube.png"
              />
            </Link>
            <Link href="https://www.instagram.com">
              <Image
                width={20}
                height={20}
                alt="facebook"
                src="/images/ic_instagram.png"
              />
            </Link>
          </div>
        </div>
        <span className="md:hidden mt-[24px] text-[16px] text-[#9CA3AF] font-normal">
          &copy; codeit - 2024
        </span>
      </div>
    </footer>
  );
};

export default Footer;
