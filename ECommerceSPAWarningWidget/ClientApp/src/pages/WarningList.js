import { Button, DisplayText, Stack, Subheading, TextContainer as div } from '@shopify/polaris';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import PolarisSkeleton from '../components/PolarisSkeleton';
import AddWarning from './AddWarning';

function WarningList() {

  const [warningList, setWarningList] = useState([]);
  const [displayAddWarning, setDisplayAddWarning] = useState(false);

  /** Triggering the useEffect for getting the warning list */
  useEffect(() => {
    fetch('api/Warnings', {
      headers: {
        'origin': Cookies.get("shopOrigin"),
      }
    })
      .then(response => response.json())
      .then(warningList => setWarningList(warningList));
  }, []);

  return (
    !displayAddWarning ?
      (warningList.length > 0 ?
        <div>WarningList</div>
        :
        <div style={{ overflowY: 'hidden', display: 'grid', gridTemplateColumns: '1fr 2fr', width: '100%', height: '100%' }}>
          <div style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Stack vertical wrap alignment="center" >
              <DisplayText size="medium">No warnings created</DisplayText>
              <div style={{ textAlign: 'center' }}>Add a new warning to get started and improve the customer experience, while increasing your sales</div>
              <div style={{ color: '#3e4166' }}>
                <Button size="large" monochrome outline onClick={() => setDisplayAddWarning(true)}>Add Warning</Button>
              </div>
            </Stack>
          </div>

          <div style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <img src={process.env.PUBLIC_URL + '/images/placeholder/WarningListPlaceholder.svg'}
              style={{ width: 'auto', height: '350px' }} />
          </div>
        </div>) :
      (<AddWarning />)
  )
}

export default WarningList;
