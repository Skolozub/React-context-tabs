import React from "react";
import { PropTypes } from "prop-types";
import { TabsContext } from "./tabs-context";

export const Tab = ({ tabKey, title = "", children }) => (
  <TabsContext.Consumer>
    {({ activeTabKey, headerTabs, setHeaderTabs }) => {
      const isNoSuchTab = !headerTabs.some(
        ([headersKey, headersTitle]) =>
          tabKey === headersKey && title === headersTitle
      );
      if (isNoSuchTab) setHeaderTabs(prev => [...prev, [tabKey, title]]);

      const isCurrentTabActive = activeTabKey === tabKey;
      return isCurrentTabActive && children;
    }}
  </TabsContext.Consumer>
);

Tab.propTypes = {
  tabKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  title: PropTypes.string
};
