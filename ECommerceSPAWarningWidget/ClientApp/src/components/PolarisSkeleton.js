import { Card, Layout, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer } from "@shopify/polaris";

import React from 'react'

function PolarisSkeleton() {
    return (
        <SkeletonPage primaryAction secondaryActions={2}>
            <Layout>
                <Layout.Section>
                    <Card sectioned>
                        <SkeletonBodyText />
                    </Card>
                    <Card sectioned>
                        <TextContainer>
                            <SkeletonDisplayText size="small" />
                            <SkeletonBodyText />
                        </TextContainer>
                    </Card>
                    <Card sectioned>
                        <TextContainer>
                            <SkeletonDisplayText size="small" />
                            <SkeletonBodyText />
                        </TextContainer>
                    </Card>
                </Layout.Section>
                <Layout.Section secondary>
                    <Card>
                        <Card.Section>
                            <TextContainer>
                                <SkeletonDisplayText size="small" />
                                <SkeletonBodyText lines={2} />
                            </TextContainer>
                        </Card.Section>
                        <Card.Section>
                            <SkeletonBodyText lines={1} />
                        </Card.Section>
                    </Card>
                    <Card subdued>
                        <Card.Section>
                            <TextContainer>
                                <SkeletonDisplayText size="small" />
                                <SkeletonBodyText lines={2} />
                            </TextContainer>
                        </Card.Section>
                        <Card.Section>
                            <SkeletonBodyText lines={2} />
                        </Card.Section>
                    </Card>
                </Layout.Section>
            </Layout>
        </SkeletonPage>
    )
}

export default PolarisSkeleton