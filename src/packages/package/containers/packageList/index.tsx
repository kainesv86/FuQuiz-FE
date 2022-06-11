import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { routes } from '../../../../core/routes';
import { PaginationBar } from '../../../dashboard';
import { useGetPricePackageListById } from '../../common/hooks/useGetPricePackageListBySubjectId';

interface PackageListProps {
    subjectId: string;
}

const PackageList: React.FunctionComponent<PackageListProps> = ({ subjectId }) => {
    const router = useRouter();
    const [count, setCount] = React.useState<number>(3);

    const { pricePackageList } = useGetPricePackageListById(subjectId);
    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Packages</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the Package from subject including id, duration, list price, sale price and status.
                    </p>
                </div>
                <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={router.asPath.replace(routes.adminPackageListUrl, '')} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Back to subject detail
                        </p>
                    </Link>
                    <Link href={router.asPath + routes.adminAddPackageUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Packages
                        </p>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col mt-8">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <Table>
                                <TableHead fields={['ID', 'Package', 'Duration', 'List Price', 'Sale Price', 'Status', '']} />

                                <TableBody>
                                    {pricePackageList &&
                                        pricePackageList.map((packageSubject) => (
                                            <TableRow key={packageSubject.id}>
                                                <TableDescription>
                                                    <div className="text-gray-900">{packageSubject.id}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{packageSubject.name}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{packageSubject.duration ? packageSubject.duration : ''}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{packageSubject.originalPrice}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{packageSubject.salePrice}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{packageSubject.isActive}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div>
                                                        <Link href={`${routes.adminEditSliderUrl}/`} passHref>
                                                            <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                        </Link>
                                                        <Link href={`${routes.adminEditSliderUrl}/`} passHref>
                                                            <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Deactivate</p>
                                                        </Link>
                                                    </div>
                                                </TableDescription>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageList;