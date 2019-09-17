import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Tab } from "./tab";
import { TabsContext } from "./tabs-context";
import styled, { css } from "styled-components";

export const Tabs = ({ defaultTabKey, children }) => {
  const [activeTabKey, setActiveTab] = useState(defaultTabKey);
  const [headerTabs, setHeaderTabs] = useState([]);

  return (
    <TabsContext.Provider
      value={{ activeTabKey, headerTabs, setActiveTab, setHeaderTabs }}
    >
      <StyledTabs>
        {headerTabs.map(([key, title]) => {
          const setActiveTabKey = () => setActiveTab(key);

          return (
            <StyledTab
              key={key}
              role="button"
              tabIndex={0}
              onClick={setActiveTabKey}
              onKeyDown={setActiveTabKey}
              active={key === activeTabKey}
            >
              {title}
            </StyledTab>
          );
        })}
      </StyledTabs>
      {children}
    </TabsContext.Provider>
  );
};

Tabs.propTypes = {
  defaultTabKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Tabs.Tab = Tab;

const StyledTabs = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  border-bottom: 1px solid #e3e3e3;
`;

const StyledTab = styled.div`
  display: flex;
  padding: 0 20px 10px 20px;
  border-bottom: 1px solid transparent;
  outline: none;
  transition: 0.3s all;
  cursor: pointer;

  &:hover {
    color: #1aac50;
    border-bottom: 1px solid #1aac50;
  }

  ${({ active }) =>
    active &&
    css`
      font-weight: 700;
      border-bottom: 1px solid #1aac50;

      &:hover {
        color: #1d1f20;
      }
    `}
`;
