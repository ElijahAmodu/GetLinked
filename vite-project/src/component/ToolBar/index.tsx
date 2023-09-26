import React, {
    // FC,
    // PropsWithChildren,
    // useEffect,
    // useRef,
    useState,
  } from "react";
//   import classes from "./toolBar.module.css";
  import classNames from "classnames";
  import { Link, useLocation } from "react-router-dom";
  import { Link as LinkS, animateScroll as scroll } from "react-scroll";
//   import { ReactComponent as Documentationicon } from "assets/svgs/documentationIcon.svg";
  import { useMediaQuery } from "../../hooks/useMediaQuery";
  import GetLinkedButton from "./../getLinkedButton";
  
  type Props = {
    lightVariant?: boolean;
  };
  
//   type MenuLinkProps = {
//     to: string;
//     useHref?: boolean;
//     className?: string;
//     target?: string;
//   };
//   const MenuLink: FC<PropsWithChildren<MenuLinkProps>> = ({
//     children,
//     to,
//     useHref = false,
//     target,
//     className,
//   }) => {
//     if (useHref) {
//       return (
//         <a href={to} target={target} className={className}>
//           {children}
//         </a>
//       );
//     }
//     return (
//       <Link to={to} className={className}>
//         {children}
//       </Link>
//     );
//   };
  
  const ToolBar: React.FC = ({ lightVariant }: Props) => {
    const [navbar, setNavbar] = useState(false);
    const [click, setClick] = useState(false);
    // const [dropdownClick, setDropdownClick] = useState(false);
    // const dropdownRef = useRef<HTMLDivElement | null>(null);
    const handleClick = () => setClick(!click);
    // const handleDropdownClick = () => setDropdownClick(!dropdownClick);
    // const closeMobileMenu = () => setClick(false);
    const isMobile = useMediaQuery("(max-width: 980px)");
    const location = useLocation();
    const isAgreementPath = location.pathname.includes("/agreement");
  
    const ChangeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true); 
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", ChangeBackground);
  
  
    const links = [
      {
        name: "TimeLine",
        type: "scroll",
        id: "timeLine",
      },
      {
        name: "Overview",
        type: "scroll",
        id: "overview",
      },
  
      {
        name: "FAQs",
        submenu: true,
        id: "faqs",
      },
      {
        name: "Contacts",
        submenu: true,
        id: "contacts",
      },
    ];
  
    // const handleLogin = () => {
    //   window.open(
    //     process.env.REACT_APP_WEBESITE_URL || "https://dashboard.onah.africa",
    //     "_blank"
    //   );
    // };
  
    // const handleCreateAccount = () => {
    //   window.open(
    //     (process.env.REACT_APP_WEBESITE_URL || "https://dashboard.onah.africa") +
    //       "/auth/create-account",
    //     "_blank"
    //   );
    // };
    // const handleClickOutside = (event: MouseEvent) => {
    //   if (
    //     dropdownRef.current &&
    //     !dropdownRef.current.contains(event.target as Node)
    //   ) {
    //     setDropdownClick(false);
    //   }
    // };
  
    // useEffect(() => {
    //   document.addEventListener("mousedown", handleClickOutside);
    //   return () => {
    //     document.removeEventListener("mousedown", handleClickOutside);
    //   };
    // }, []);
  
    return (
      <nav
        className={`${
          navbar ? "bg-header-title/70" : "transparent"
        } h-20 flex justify-center items-center text-base sticky top-0 z-50 backdrop-blur-sm 2xl:px-[139px] mt-[-80px]`}
      >
        <div className="tw-container mx-auto flex justify-between items-center lg:px-0">
          <Link
            to="/"
            className="flex items-start text-white lg:text-2xl"
            role="none"
            onClick={() => {}}
          >
            {/* <Onah
              className={classNames(
                "z-10 h-[32px] max-2xl:h-[24px] w-auto",
                isAgreementPath && "text-basic-pitch-black",
                navbar && "!text-yellow-200"
              )}
            /> */}
          </Link>
          <div
            className={classNames(
              isMobile ? "block" : "hidden",
  
              " origin-[-100%_60%] text-xl  cursor-pointer "
            )}
            role="none"
            onClick={handleClick}
          >
            {/* {click ? (
              <Clear
                className={classNames(
                  isAgreementPath && "text-basic-pitch-black",
                  navbar && "!text-white"
                )}
              />
            ) : (
              <Burger
                className={classNames(
                  isAgreementPath && "text-basic-pitch-black",
                  navbar && "!text-white"
                )}
              />
            )} */}
          </div>
          <div
            className={classNames(
              `${click ? "flex" : "hidden"}`,
              `${
                isMobile
                  ? " bg-white px-6 flex flex-col justify-between w-full h-[calc(100vh-80px)] pb-8 absolute top-[80px] left-0 lg:left[-100%] opacity-1 transition duration-300 ease-in-out items-center"
                  : "!flex items-center justify-between  font-semibold space-x-6 w-full"
              }`
            )}
          >
            <ul
              className={classNames(
                `${
                  isMobile
                    ? "flex flex-col w-full"
                    : "flex items-center text-white space-x-6 font-semibold w-fit ml-6 "
                }`,
                isAgreementPath && "!text-black",
                navbar && (isMobile ? "!text-black" : "!text-white")
  
                // navbar && isMobile && "!text-black"
              )}
            >
              {links.map(() => (
                <li>
                  <div
                    className={classNames(
                      isMobile ? "border-b" : "border-b-0",
                      "lg:px-3 text-left md:cursor-pointer group "
                    )}
                  >
                    {/* {link.type === "scroll" ? (
                      <LinkS
                        to={link.id}
                        activeClass="active"
                        className="py-4 lg:py-7 flex justify-between items-center md:pr-0 pr-5 group"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={closeMobileMenu}
                      >
                        {link.name}
                      </LinkS>
                    ) : (
                      <h1
                        className="py-4 lg:py-7 flex justify-between items-center md:pr-0 pr-5 group"
                        onClick={link.submenu ? handleDropdownClick : undefined}
                      >
                       
                        )}
                      </h1>
                    )} */}
                    
                  </div>
                </li>
              ))}
            </ul>
            <div className="inline-flex gap-8 items-center">
              <GetLinkedButton
                className="!bg-yellow-300 !text-black  !min-w-[155.5px] whitespace-nowrap"
                // onClick={handleCreateAccount}
              >
                Register
              </GetLinkedButton>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default ToolBar;
  