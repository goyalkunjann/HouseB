import Image from 'next/image';
import React from 'react';
import logo from '../../../../public/assets/images/logo.svg';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/slice/slice';
import { SCREENS } from '../Utils/CustomModal/Modal';

export const Footer = () => {
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(toggleModal({
      screen: SCREENS.LEAD_POPUP,
      visible: true,
    }));
  };

  const handleSocialIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="w-full h-auto bg-[#222222] lg:px-0 px-[20px]">
      <div className="lg:max-w-[1290px] w-full mx-auto flex flex-col py-[20px]">
        <div className="font-semibold text-[25px] leading-[40px] text-white">
          About us
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 py-[20px] lg:gap-0 gap-[40px]">
          <div className="flex flex-col gap-[20px]">
            <a href="/">
              <Image
                src={logo}
                alt="House Banao"
                width={130}
                height={57}
                className="ml-[-29px]"
              />
            </a>
            <div className="w-full">
              <p className="text-[#D1D1D1] text-[14px] leading-[19px] font-sans font-normal w-[200px]">
                House Banao is your premier destination for luxury and modern interior design and construction
              </p>
            </div>
            <div className="flex gap-[20px]">
              {socialIcons.map(({ icon, url }, index) => (
                <FontAwesomeIcon
                  icon={icon}
                  key={index}
                  style={{ color: '#ffffff', backgroundColor: '#313131' }}
                  onClick={() => handleSocialIconClick(url)}
                  className="w-[15px] h-[15px] p-[5px] cursor-pointer rounded-[4px]"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col pt-[15px] text-[#D1D1D1] font-sans font-normal text-[13px] lg:ml-[100px] ml-0">
            <span className="text-[13px] font-semibold">Our Services</span>
            <div className="w-full flex flex-col mt-[19px]">
              <ul className="flex flex-col gap-[8px] w-[150px]">
                {footerMenus.map((menu, index) => (
                  <li key={index}>{menu}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-[34px] text-[#D1D1D1] font-sans font-normal text-[13px] lg:mt-[53px] lg:ml-[100px] ml-0">
            <ul className="flex flex-col gap-[8px] w-[150px]">
              {footerLinks.map((menu, index) => (
                <li key={index}>
                  {menu.name === 'Privacy Policy' ? (
                    <a href={menu.url} target="_blank" rel="noopener noreferrer">
                      {menu.name}
                    </a>
                  ) : (
                    menu.name
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col text-[#D1D1D1] gap-[5px] font-sans font-normal text-[13px] lg:mt-[53px] lg:pl-[168px] pl-0">
            <a href="mailto:support@housebanao.com">support@housebanao.com</a>
            <div className="w-full">
              <p className="w-[150px]">
                747B, 7th floor, JMD Megapolis Sector 48, Gurgaon, Haryana 122018
              </p>
            </div>
          </div>
        </div>
        <div className="text-center text-white text-sm py-[10px]">
          © 2024 Vive HouseBanao Technologies Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export const footerMenus = [
  'Interior design',
  'End to end construction',
  'House design',
  'Office design',
];

export const footerLinks = [
  { name: 'Privacy Policy', url: '/assets/documents/HouseBanaoPrivacyPolicy.pdf' },
  { name: 'Reviews', url: '#' },
  { name: 'Careers', url: '#' },
  { name: 'Pricing', url: '#' },
];

export const socialIcons = [
  { icon: faFacebookF, url: 'https://www.facebook.com/profile.php?id=61557081024259' },
  { icon: faInstagram, url: 'https://www.instagram.com/house_banao' },
  { icon: faLinkedinIn, url: 'https://www.linkedin.com/company/housebanao/' },
];
