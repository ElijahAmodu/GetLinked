import React from 'react';
import GetLinkedButton from '../getLinkedButton';

interface NavItemArray {
  name: string;
  id: string;
  link: string;
}

const NavList: NavItemArray[] = [
  {
    name: "TimeLine",
    id: "timeline",
    link: "#"
  },
  {
    name: "Overview",
    id: "overview",
    link: "#"
  },
  {
    name: "FAQs",
    id: "fAQs",
    link: "#"
  },
  {
    name: "Contact",
    id: "contact",
    link: "#"
  },

]

interface ToolBarItemProp {
  link: string;
  text: string;
  className?: string;
}

const ToolBarItem: React.FC<ToolBarItemProp> = ( { link, text, className} ) => {
  const defaultClassName = 'text-blue-600'; 
  const combinedClassName = className ? `${defaultClassName} ${className}` : defaultClassName;
  return (
     <a href={link} className={combinedClassName}>{text}</a>
  )
}


const ToolBar = () => {
  return (
    <nav className=''>
      <div className=' flex gap-4 bg-amber-700'>
        {NavList.map((item) => (
          <ToolBarItem key={item.id} link={item.link} text={item.name} className='p-10'/>
        ))}
        <GetLinkedButton>
          Register
        </GetLinkedButton>
      </div>
    </nav>
  );
};

export default ToolBar;