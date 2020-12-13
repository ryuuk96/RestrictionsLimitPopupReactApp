import React, { useCallback, useRef, useState } from 'react'
import { ActionList, AppProvider, Card, TopBar } from "@shopify/polaris";

export default function AppHeader() {

  const defaultShopState = useRef({
    shopUserName: "TechSoln007",
    shopUserEmail: "tech.soln@gmail.com"
  });
  const [searchActive, setSearchActive] = useState(false);
  const [shopUserName, setShopUserName] = useState(defaultShopState.current.shopUserName);
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const theme = {
    colors: {
      topBar: {
        background: '#225062',
      },
    },
    logo: {
      width: 124,
      topBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
      contextualSaveBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
      url: 'http://jadedpixel.com',
      accessibilityLabel: 'Jaded Pixel',
    },
  };

  const userMenuActions = [
    {
      items: [{ content: "Pricing" }]
    }
  ];

  const toggleUserMenuState = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  );

  /**
   * This will mean the right handside menu where we will show the customer name
   */
  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name={shopUserName}
      detail={shopUserName}
      initials={shopUserName[0].toUpperCase()}
      open={userMenuActive}
      onToggle={toggleUserMenuState}
    />
  );


  const handleSearchFieldChange = useCallback(
    (value) => {
      setSearchValue(value);
      setSearchActive(value.length > 0);
    },
    [],
  )

  const searchResultsMarkup = (
    <Card>
      <ActionList
        items={[
          { content: "This is first search" },
          { content: "This is second search" }
        ]} />
    </Card>
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchFieldChange}
      value={searchValue}
      placeholder="Search" />
  );

  const handleSearchResultsDismiss = useCallback(
    () => {
      setSearchActive(false);
      setSearchValue("");
    },
    [],
  );

  const toggleMobileNavigationActive = useCallback(
    () => {
      setMobileNavigationActive((mobileNavigationActive) => !mobileNavigationActive);
    },
    [],
  );

  return (
    <div>
      <AppProvider
        theme={theme}>
        <TopBar
          showNavigationToggle
          userMenu={userMenuMarkup}
          searchResultsVisible={searchActive}
          searchField={searchFieldMarkup}
          searchResults={searchResultsMarkup}
          onSearchResultsDismiss={handleSearchResultsDismiss}
          onNavigationToggle={toggleMobileNavigationActive} />
      </AppProvider>
    </div>
  )
}