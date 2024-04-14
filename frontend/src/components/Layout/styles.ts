import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Page = styled.div`
  width: 100vw;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

interface IPageProps {
  $isOpen?: boolean;
}

export const Menu = styled(motion.div).attrs<IPageProps>(({ $isOpen }) => ({
  variants: {
    open: {
      width: '20vw',
      transition: {
        duration: 0.5,
        type: 'spring',
        damping: 13,
      },
    },
    close: {
      width: '8vw',
      transition: {
        duration: 0.5,
        type: 'spring',
        damping: 13,
      },
    },
  },
  initial: 'close',
  animate: $isOpen ? 'open' : 'close',
}))`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  box-shadow: 0px 3px 10px #00000015;
  border-radius: 0 15px 15px 0;
  padding: 1vw;
  display: flex;
  gap: 1vw;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const LogoButton = styled.button`
  width: 100%;
  height: 8vh;
  position: relative;

  & img {
    position: absolute;
    width: 4vw;
    top: 0;
    left: calc(3vw - 2vw);
  }
`;

const hiddenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: 'ease',
    },
  },
};

export const LogoTitle = styled(motion.h3).attrs(() => ({
  variants: hiddenVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  font-size: clamp(0.1rem, 1rem + 0.6vh, 1.2rem);
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.typography.title};
  margin-left: 2vw;
`;

export const Content = styled(motion.main).attrs(() => ({
  variants: hiddenVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  width: 100%;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: ${({ theme }) => theme.colors.background.border};
`;

export const RoutesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3vh;

  .link {
    color: ${({ theme }) => theme.colors.typography.basic};
    font-family: 'Poppins', sans-serif;
    border-radius: 8px;
    height: 6vh;
    text-decoration: none;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    position: relative;

    svg {
      fill: ${({ theme }) => theme.colors.typography.basic};
      position: absolute;
      left: calc(3vw - 0.6vw);
      height: auto;
      width: 1.2vw;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary.main};

      p {
        color: ${({ theme }) => theme.colors.primary.main};
      }

      svg {
        fill: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`;

export const LinkName = styled(motion.p).attrs(() => ({
  variants: hiddenVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  margin-left: 4.5vw;
  white-space: nowrap;
`;
