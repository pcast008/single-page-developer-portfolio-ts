import styled from "styled-components";
import profileImageMobile from "../assets/images/image-profile-mobile.webp";
import profileImageTablet from "../assets/images/image-profile-tablet.webp";
import profileImageDesktop from "../assets/images/image-profile-desktop.webp";

export const ProfileImage = styled.div`
  background-image: url(${profileImageMobile});
  position: absolute;
  top: 0;
  left: 50%;
  width: 10.875rem;
  height: 23.9375rem;
  background-size: contain;
  background-repeat: no-repeat;
  transform: translateX(-50%);
  z-index: -1;

  @media (min-width: 768px) {
    background-image: url(${profileImageTablet});
    width: 20.125rem;
    height: 37.5rem;
    right: 0;
    left: auto;
    transform: none;
  }

  @media (min-width: 1440px) {
    background-image: url(${profileImageDesktop});
    width: 27.8125rem;
    height: 45rem;
    right: 10.31rem;
  }
`;
