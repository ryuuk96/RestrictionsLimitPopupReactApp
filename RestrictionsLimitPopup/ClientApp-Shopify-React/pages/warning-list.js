import React, { useState } from 'react';
import { Card, DataTable, EmptyState, Link, Page } from '@shopify/polaris';
import { WarningStatus, WarningType } from '../models/ConstUtility';
export default function WarningList() {
  const [warningRows, setWarningRows] = useState(
    [
      [
        <Link url="https://www.example.com" key="FirstWarning">
          First Warning
        </Link>,
        `${(new Date()).getDate()} / ${(new Date()).getMonth()} / ${(new Date()).getFullYear()}`,
        WarningType.AgeRestriction,
        WarningStatus.Active,
      ],
      [
        <Link url="https://www.example.com" key="FirstWarning">
          Second Warning
        </Link>,
        `${(new Date()).getDate()} / ${(new Date()).getMonth()} / ${(new Date()).getFullYear()}`,
        WarningType.OutOfStock,
        WarningStatus.Active,
      ],
      [
        <Link url="https://www.example.com" key="FirstWarning">
          Third Warning
        </Link>,
        `${(new Date()).getDate()} / ${(new Date()).getMonth()} / ${(new Date()).getFullYear()}`,
        WarningType.ProductElements,
        WarningStatus.Inactive,
      ],
      [
        <Link url="https://www.example.com" key="FirstWarning">
          Fourth Warning
        </Link>,
        `${(new Date()).getDate()} / ${(new Date()).getMonth()} / ${(new Date()).getFullYear()}`,
        WarningType.ProductUnit,
        WarningStatus.Inactive,
      ]
    ]
  )
  const [warningsPresent, setWarningsPresent] = useState(false)

  const addWarning = () => {
    console.log('Warning is to be added');
    setWarningsPresent(true);
  }

  const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

  return (
    <div>
      {warningsPresent ? (
        <Page title="Created Warnings"
          primaryAction={{ content: "Add warning", onAction: {addWarning} }}>
          <Card>
            <DataTable
              columnContentTypes={['text', 'text', 'text', 'text']}
              headings={['Name', 'Created at', 'Type', 'Status']}
              rows={warningRows}
            />
          </Card>
        </Page>
      ) : (
          <EmptyState
            heading="Add warnings to start"
            action={{
              content: 'Add warning',
              onAction: addWarning,
            }}
            image={img} >
            <p>Add custom warnings to get started or edit one from the templates</p>
          </EmptyState>
        )}
    </div>
  );
}
