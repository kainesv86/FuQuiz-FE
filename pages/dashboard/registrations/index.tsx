import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { Order } from '../../../src/core/common/dataField';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { DashBoardLayout } from '../../../src/packages/dashboard';
import { RegistrationFilterDTO } from '../../../src/packages/registrations/common/hooks/useGetRegistration';
import RegistrationsList from '../../../src/packages/registrations/containers/registrationList';

interface RegistrationListPageProps extends RegistrationFilterDTO {}

const RegistrationListPage: NextPage<RegistrationListPageProps> = ({
    currentPage,
    email,
    order,
    orderBy,
    pageSize,
    status,
    subject,
    validFrom,
    validTo,
}) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.SALE]}>
            <DashBoardLayout>
                <RegistrationsList
                    currentPage={currentPage}
                    email={email}
                    order={order}
                    orderBy={orderBy}
                    pageSize={pageSize}
                    status={status}
                    subject={subject}
                    validFrom={validFrom}
                    validTo={validTo}
                />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

RegistrationListPage.getInitialProps = async (ctx: NextPageContext): Promise<RegistrationListPageProps> => {
    let props = {
        currentPage: ctx.query?.currentPage || 1,
        email: ctx.query?.email || '',
        order: ctx.query?.order || Order.DESC,
        orderBy: ctx.query?.orderBy || 'validForm',
        pageSize: ctx.query?.pageSize || 10,
        status: ctx.query?.status || '',
        subject: ctx.query?.subject || '',
        validFrom: ctx.query?.validFrom || '',
        validTo: ctx.query?.validTo || '',
    } as RegistrationListPageProps;

    return props;
};

export default RegistrationListPage;
