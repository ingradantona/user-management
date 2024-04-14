import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

const containerVariants: Variants = {
  hidden: {
    x: 0,
    y: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      bounce: 0.4,
    },
  },
};

export const Overlay = styled.div`
  z-index: 100;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerModal = styled(motion.div).attrs(() => ({
  variants: containerVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 10px;
  width: 30%;
  max-height: 90vh;
  box-shadow: 9px 8px 20px #00000029;
  z-index: 8888;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
  padding: 3vh;
  text-align: center;
`;
