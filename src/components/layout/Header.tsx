"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import Ad from "../common/Ad";
import ad from "@/assets/bangla-bid-ad.jpg";
import BodyContainer from "../common/BodyContainer";
import bigAdImg from "@/assets/walton-ad.jpg";
import Btn from "../common/Btn";
import { RxCross2 } from "react-icons/rx";
import { format } from "date-fns";
import StayTuned from "../common/StayTuned";
import DownloadApp from "../common/DownloadApp";
import { GoDotFill } from "react-icons/go";
import Dropdown from "../common/Dropdown";
import HorizontalScrollableText from "@/components/home/FeatureNews/HorizontalScrollableText";

const Header: React.FC = () => {
  const date = new Date();
  const formattedDate = format(date, "EEEE, d MMMM, yyyy");

  const menuItems = [
    { text: "Latest", link: "/latest" },
    { text: "National", link: "/category/national" },
    { text: "Politics", link: "/category/politics" },
    { text: "Economy", link: "/category/economy" },
    { text: "International", link: "/category/international" },
    { text: "Country", link: "/category/crime-news" },
    { text: "Education", link: "/category/education" },
    { text: "Opinion", link: "/category/opinion" },
    { text: "Sports", link: "/category/sports" },
    { text: "Entertainment", link: "/category/entertainment" },
    { text: "Literature", link: "/category/literature" },
  ];

  const megaMenuItems = [
    { text: "National", link: "/category/national" },
    { text: "International", link: "/category/international" },
    { text: "Sports", link: "/category/sports" },
    { text: "Health", link: "/category/health" },
    { text: "Education", link: "/category/education" },
    { text: "Feature", link: "/category/feature" },
    { text: "Photo", link: "/category/photo" },
    { text: "Politics", link: "/category/politics" },
    { text: "West Bengal", link: "/category/west-bengal" },
    { text: "Entertainment", link: "/category/entertainment" },
    { text: "Lifestyle", link: "/category/lifestyle" },
    { text: "Religion", link: "/category/religion" },
    { text: "Odd News", link: "/category/odd-news" },
    { text: "District News", link: "/category/district-news" },
    { text: "Economy", link: "/category/economy" },
    { text: "Technology", link: "/category/technology" },
    { text: "Treatment", link: "/category/treatment" },
    { text: "Literature", link: "/category/literature" },
    { text: "Opinion", link: "/category/opinion" },
    { text: "Crime News", link: "/category/crime-news" },
    { text: "Bangladeshi Diaspora", link: "/category/bangladeshi-diaspora" },
    { text: "Tourism", link: "/category/tourism" },
    { text: "Beauty Tips", link: "/category/beauty-tips" },
    { text: "Mass Media", link: "/category/mass-media" },
    { text: "Video", link: "/category/video" },
  ];

  function closeDialog() {
    const dialog = document.getElementById(
      "megaMenuModal"
    ) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  }

  return (
    <>
      {/* header top */}
      <BodyContainer>
        <div className="mx-auto ">
          <div className="sm:flex hidden flex-wrap md:gap-3 gap-6 justify-center md:justify-between items-center lg:pt-9 md:pt-7 pt-5">
            <div className="md:w-auto w-full md:order-1 order-2 text-xl md:text-[22px] md:text-left text-center sm:block hidden">
              <p className="">
                {formattedDate}
              </p>
            </div>
            <div className="md:w-auto md:order-2 order-1">
              <Link href="/">
                <Image
                  className="lg:w-[230px] md:w-[160px] w-[160px] mx-auto ml-0"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/logocitynews.png`}
                  alt="logo"
                  priority={true}
                  width={230}
                  height={150}
                />
              </Link>
            </div>
            <div className="lg:justify-end justify-center order-3 flex lg:w-auto w-full">
              <div className="items-center flex">
                <Dropdown />
              </div>
              <div className="divider w-0 mx-0 divider-neutral divider-horizontal"></div>
              <div>
                <Link
                  onClick={() => {
                    const modal = document.getElementById(
                      "search_modal"
                    ) as HTMLDialogElement;
                    modal?.showModal();
                  }}
                  href={"#"}
                  className="flex items-center gap-1 md:leading-[2px] leading-[2px] text-xl font-medium pl-2"
                >
                  <IoSearchSharp /> Search
                </Link>
              </div>
            </div>
          </div>

          <div className="sm:hidden flex justify-between items-center pt-6">
            <div>
              <Link href="/">
                <Image
                  className="w-[130px] mx-auto lg:ml-14 md:ml-14 ml-0"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/logocitynews.png`}
                  alt="logo"
                  width={130}
                  height={80}
                />
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <Link
                onClick={() => {
                  const searchModal = document.getElementById(
                    "search_modal"
                  ) as HTMLDialogElement;
                  searchModal?.showModal();
                }}
                href={"#"}
                className="flex items-center gap-1 md:leading-[2px] leading-[2px] text-xl font-bold pl-2"
              >
                <IoSearchSharp />
              </Link>
              <FaBars
                onClick={() => {
                  const megaMenuModal = document.getElementById(
                    "megaMenuModal"
                  ) as HTMLDialogElement;
                  megaMenuModal?.showModal();
                }}
                className="text-xl cursor-pointer"
              />
            </div>
          </div>

          {/* menu item */}
          <nav className="navbar md:pt-3">
            <div className="navbar-center w-full justify-center lg:flex sticky top-0 shadow-lg py-4">
              <div className="menu menu-horizontal justify-center items-center p-0">
                {menuItems.map((menuItem) => (
                  <li key={menuItem.text}>
                    <Link
                      className="hover:text-primary rounded-none md:text-left text-center sm:inline-block hidden text-dark text-xl md:text-[22px] font-medium"
                      href={menuItem.link}
                      replace={false}
                    >
                      {menuItem.text}
                    </Link>
                  </li>
                ))}
                <FaBars
                  onClick={() => {
                    const megaMenuModal = document.getElementById(
                      "megaMenuModal"
                    ) as HTMLDialogElement;
                    megaMenuModal?.showModal();
                  }}
                  className="text-xl cursor-pointer sm:block hidden text-dark"
                />

                <dialog
                  id="megaMenuModal"
                  className="modal overflow-scroll bg-[#0000008e]"
                >
                  <div className="w-full h-full bg-white">
                    {/* mega menu top bar */}
                    <div className="border-b border-black">
                      <BodyContainer>
                        <div className="flex justify-between items-center py-7">
                          <Link href={"/"} onClick={() => closeDialog()}>
                            <Image
                              className="md:w-[180px] w-[150px]"
                              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/logocitynews.png`}
                              alt="logo"
                              width={180}
                              height={90}
                            />
                          </Link>
                          <form method="dialog">
                            <button>
                              <RxCross2 className="md:text-4xl text-3xl" />
                            </button>
                          </form>
                        </div>
                      </BodyContainer>
                    </div>
                    {/* mega modal */}
                    <BodyContainer>
                      <div className="flex md:flex-row flex-col md:gap-6 gap-4 py-6">
                        <div className="lg:w-[65%] md:w-[100%] sm:w-[620px] sm:mx-auto w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-4 grid-cols-2 lg:gap-1 md:gap-6 sm:gap-0 gap-6 text-xl md:text-2xl font-medium">
                          <ul>
                            {megaMenuItems.slice(0, 6).map((megaMenuItem) => (
                              <li key={megaMenuItem.text}>
                                <Link
                                  className="md:text-left text-center inline-block hover:text-blue-500"
                                  href={megaMenuItem.link}
                                  onClick={() => closeDialog()}
                                >
                                  {megaMenuItem.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <ul>
                            {megaMenuItems.slice(6, 12).map((megaMenuItem) => (
                              <li key={megaMenuItem.text}>
                                <Link
                                  className="md:text-left text-center inline-block hover:text-blue-500"
                                  href={megaMenuItem.link}
                                  onClick={() => closeDialog()}
                                >
                                  {megaMenuItem.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <ul>
                            {megaMenuItems.slice(12, 18).map((megaMenuItem) => (
                              <li key={megaMenuItem.text}>
                                <Link
                                  className="md:text-left text-center inline-block hover:text-blue-500"
                                  href={megaMenuItem.link}
                                  onClick={() => closeDialog()}
                                >
                                  {megaMenuItem.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <ul>
                            {megaMenuItems.slice(18, 24).map((megaMenuItem) => (
                              <li key={megaMenuItem.text}>
                                <Link
                                  className="md:text-left text-center inline-block hover:text-blue-500"
                                  href={megaMenuItem.link}
                                  onClick={() => closeDialog()}
                                >
                                  {megaMenuItem.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="w-full lg:col-span-4 md:col-span-2 sm:col-span-4 col-span-2 md:mt-10 mt-6">
                            <Ad image={bigAdImg} link={"#"} />
                          </div>
                        </div>
                        <div className="w-[.5px] bg-black h-auto"></div>
                        <div className="lg:w-[34%] md:w-[100%]">
                          <StayTuned colon={true} />
                          <div className="mt-6 py-5">
                            <DownloadApp colon={true} />
                          </div>
                          {/* important links */}
                          <ul
                            style={{ listStyleType: "disc" }}
                            className="flex flex-wrap text-lg md:text-[23px] font-medium gap-y-0 list-disc border-t border-black pt-3 justify-between"
                          >
                            <li>
                              <Link
                                className="flex items-center gap-1 hover:text-blue-500"
                                href={"/"}
                                onClick={() => closeDialog()}
                              >
                                <GoDotFill className="text-sm" />
                                About Us
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="flex items-center gap-1 hover:text-blue-500"
                                href={"/"}
                                onClick={() => closeDialog()}
                              >
                                <GoDotFill className="text-sm" />
                                Advertisement Policy
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="flex items-center gap-1 hover:text-blue-500"
                                href={"/"}
                                onClick={() => closeDialog()}
                              >
                                <GoDotFill className="text-sm" />
                                Comment Policy
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="flex items-center gap-1 hover:text-blue-500"
                                href={"/"}
                                onClick={() => closeDialog()}
                              >
                                <GoDotFill className="text-sm" />
                                Privacy Policy
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="flex items-center gap-1 hover:text-blue-500"
                                href={"/"}
                                onClick={() => closeDialog()}
                              >
                                <GoDotFill className="text-sm" />
                                Contact
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="flex items-center gap-1 hover:text-blue-500"
                                href={"/"}
                                onClick={() => closeDialog()}
                              >
                                <GoDotFill className="text-sm" />
                                Unicode Converter
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </BodyContainer>
                  </div>
                </dialog>
              </div>
            </div>
          </nav>
        </div>
      </BodyContainer>
      {/* header ad starts here */}

      <div className="sm:-mt-0 -mt-10 mb-2 md:mb-0">
        <HorizontalScrollableText text="Breaking news: Stay updated with the latest headlines from around the world. Follow us for real-time news updates and in-depth coverage." />
      </div>
      <BodyContainer>
        <Ad image={ad} link={"#"} />
      </BodyContainer>
      {/* search modal */}
      <dialog id="search_modal" className="modal bg-[#00000085]">
        <div className="modal-box min-w-[40%] py-8 md:py-10 px-7">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-medium text-3xl text-center">What are you looking for?</h3>
          <form className="space-y-3 mt-4">
            <input
              type="text"
              placeholder="Type here..."
              className="input text-xl md:text-2xl h-[60px] input-bordered w-full"
            />
            <Btn text={"Search"} />
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Header;
