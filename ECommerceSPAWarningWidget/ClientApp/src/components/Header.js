import React, { useCallback, useEffect, useState } from 'react'
import { ActionList, AppProvider, Card, TopBar } from "@shopify/polaris";
import Cookies from 'js-cookie';

function Header() {
  const [searchActive, setSearchActive] = useState(false);
  const [shopUserName, setShopUserName] = useState("");
  const [shopUserInitials, setShopUserInitials] = useState("");
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  var gotShopDetails = false;
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

  const getInitials = (name) => {
    if (!name) return;
    var namewords = name.split(" ");
    if (namewords.length === 0)
      return name.charAt(0);
    return `${namewords[0].charAt(0).toUpperCase()}${namewords[1].charAt(0).toUpperCase()}`
  };
  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name={shopUserName}
      detail={shopUserName}
      initials={shopUserInitials}
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

  /** Get Shop related information */
  const getShopDetails = () => {
    fetch('api/Shop/ShopDetails', {
      headers: {
        'origin': Cookies.get("shopOrigin"),
      }
    })
      .then(response => response.json())
      .then(shopData => {
        console.log(shopData);
        shopData = shopData.shop;
        setShopUserName(shopData.shop_owner);

        const userInitials = getInitials(shopData.shop_owner);
        setShopUserInitials(userInitials);

        gotShopDetails = true;
      });
  };

  useEffect(() => {
    if (!gotShopDetails)
      getShopDetails();
  }, []);


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

export default Header;