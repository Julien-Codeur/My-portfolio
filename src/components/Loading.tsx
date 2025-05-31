import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.background.darker};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Logo = styled(motion.div)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary.main};
  margin-bottom: 2rem;
  background: linear-gradient(45deg, ${props => props.theme.colors.primary.main}, ${props => props.theme.colors.secondary.main});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LoadingBar = styled.div`
  width: 200px;
  height: 4px;
  background-color: ${props => props.theme.colors.background.light};
  border-radius: 2px;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, ${props => props.theme.colors.primary.main}, ${props => props.theme.colors.secondary.main});
  border-radius: 2px;
`;

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoadingContainer>
      <Logo
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Portfolio
      </Logo>
      <LoadingBar>
        <Progress
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2 }}
        />
      </LoadingBar>
    </LoadingContainer>
  );
};

export default Loading; 