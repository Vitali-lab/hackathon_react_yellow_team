import { useState } from 'react';
import { Button } from '../Button/Button';
import styled from 'styled-components';

const ModalContainer = ({ className, toFavorite, onCancel, isAddFavorite, resultMessage }) => {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      setIsOpen(false);
      onCancel && onCancel();
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    onCancel && onCancel();
  };

  const handleConfirm = () => {
    setIsOpen(false);
    toFavorite && toFavorite();
  };

  const isResultModal = !!resultMessage;

  return (
    <div className={className} onClick={handleOverlayClick}>
      <div className="overlay"></div>
      <div className="box">
        {isResultModal ? (
          <>
            <h3>Результат</h3>
            <h4>{resultMessage}</h4>
            <div className="buttons">
              <Button width="120px" color="#98FB98" title="OK" onClick={handleConfirm} />
            </div>
          </>
        ) : (
          <>
            <h3>
              {isAddFavorite
                ? 'Вы уверены, что хотите добавить пользователя в избранное?'
                : 'Вы уверены, что хотите удалить пользователя из избранного?'}
            </h3>
            <div className="buttons">
              <Button width="120px" color="#98FB98" title="Да" onClick={handleConfirm} />
              <Button width="120px" color="#FA8072" title="Отмена" onClick={handleCancel} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export const Modal = styled(ModalContainer)`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  & .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  & .box {
    position: relative;
    width: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;
    text-align: center;
    z-index: 20;
    background-color: #fffdf0;
    border: 3px solid #ffd700;
    border-radius: 12px;
    padding: 0 20px 20px 0;
  }

  & h3 {
    padding: 30px 0 10px 0;
  }

  & h4 {
    padding: 0 0 20px 0;
  }

  & .buttons {
    display: flex;
    justify-content: center;
  }

  & .buttons button {
    margin: 0 5px;
  }
`;
