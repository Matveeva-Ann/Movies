import styled from '@emotion/styled';
import bgImg from '../../../public/UA-uk-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg';

export const HomeWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 14px;
  max-width: 795px;
  margin: 0 auto;
  padding: 22px 21px;
  background-color: transparent;
  z-index: 2;
`;

export const HomeBg = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.8) 100%);
  }
`;
