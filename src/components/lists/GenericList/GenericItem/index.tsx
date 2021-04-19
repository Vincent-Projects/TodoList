import React, { useState } from "react";
import styled from "styled-components";
import ColorSelect from "./ColorSelect";
import Icon from "components/Icon";
import { ELLIPSIS } from "components/contants";

export interface GenericItemProps {
  done: boolean;
  text: string;
  color: string;
  handleClick: () => void;
  handleColorChange: (color: string) => void;
  handleDelete?: () => void;
  isNew?: boolean;
}

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.2rem;
  font-size: 0.9rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    background-color: rgb(var(--primary));
    opacity: 0;
    transition: 350ms;
    pointer-events: none;
  }

  &:hover:before {
    width: 100%;
    opacity: 0.1;
  }
`;

interface CheckBoxProps {
  done: boolean;
}

const CheckBox = styled.div`
  width: 1rem;
  height: 1rem;
  align-self: center;
  margin-right: 0.5rem;
  border-radius: 50%;
  border: 2px solid rgb(var(--primary));
  background-color: ${(props: CheckBoxProps) =>
    props.done ? "rgb(var(--primary))" : "transparent"};
`;

const ColorSelectContainer = styled.div`
  margin-right: 0.5rem;
  cursor: pointer;
`;

interface TextProps {
  done: boolean;
}

const Text = styled.p`
  padding: 0.1rem;
  margin: 0;
  word-break: break-all;
  width: 100%;
  text-decoration: ${(props: TextProps) =>
    props.done ? "line-through" : "none"};
  opacity: ${(props) => (props.done ? "0.6" : "1")};
  cursor: pointer;
`;

const InteractionBtnContainer = styled.div`
  position: relative;
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  jusitfy-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 200;

  &:active,
  &:focus {
    transform: translate(-1px, -1px);
  }
`;

const BtnContainer = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  top: 100%;
  right: 0;
  background: rgb(var(--bg-24dp));
  box-shadow: 1px 1px 1px rgb(var(--shadow));
  color: rgb(var(--on-bg));
`;

const MenuBtn = styled.button`
  background: transparent;
  color: ${(props: { danger?: boolean }) =>
    props.danger ? "rgb(var(--error))" : "inherit"};
  border: none;
  white-space: nowrap;
  padding: 1rem;
  width: 100%;
  height: fit-content;
  position: relative;
  cursor: pointer;

  &:after {
    background: linear-gradient(90deg, rgba(var(--primary), 0.15), transparent);
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 250ms;
    pointer-events: none;
  }

  &:hover:after {
    opacity: 1;
  }
`;

const GenericItem = ({
  done,
  text,
  color,
  handleClick,
  handleColorChange,
  isNew,
  handleDelete,
}: GenericItemProps) => {
  const [interactionVisible, setInteractionVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const mouseEnterHandler = () => {
    setInteractionVisible(true);
  };

  const mouseLeaveHandler = () => {
    setInteractionVisible(false);
    setMenuVisible(false);
  };

  const clickHandler = () => {
    setMenuVisible((previousVisible) => {
      return !previousVisible;
    });
  };

  const deleteHandler = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    if (handleDelete) {
      handleDelete();
    }
  };

  return (
    <ItemContainer
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <ColorSelectContainer>
        <ColorSelect color={color} handleColorChange={handleColorChange} />
      </ColorSelectContainer>
      <CheckBox done={done} />
      <Text done={done} onClick={handleClick}>
        {text}
      </Text>
      {interactionVisible && !isNew ? (
        <InteractionBtnContainer>
          <div onClick={clickHandler}>
            <Icon iconName={ELLIPSIS} />
          </div>
          {menuVisible ? (
            <BtnContainer>
              <MenuBtn>Modify Task</MenuBtn>
              <MenuBtn>Change Tag Color</MenuBtn>
              <MenuBtn>Change Due Date</MenuBtn>
              <MenuBtn danger onClick={deleteHandler}>
                Delete Task
              </MenuBtn>
            </BtnContainer>
          ) : null}
        </InteractionBtnContainer>
      ) : null}
    </ItemContainer>
  );
};

export default GenericItem;
