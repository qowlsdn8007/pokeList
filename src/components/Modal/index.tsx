import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  const navigate = useNavigate();
  useEffect(() => {
    // Disable scrolling on the body when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      // Re-enable scrolling on the body when modal is closed
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleDimmedClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      navigate(-1);
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  return ReactDOM.createPortal(
    <div>
      <Overlay tabIndex={0} onClick={handleDimmedClick}>
        <Content>
          <CloseButton role="button" onClick={handleClose}>
            x
          </CloseButton>
          {children}
        </Content>
      </Overlay>
    </div>,
    document.body
  );
}

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 10;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 420px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  text-align: center;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 20px;
  justify-content: end;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
`;

export default Modal;
