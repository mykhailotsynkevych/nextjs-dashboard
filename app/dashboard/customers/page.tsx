import {fetchFilteredCustomers} from '@/app/lib/data';
import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';

export const metadata: Metadata = {
    title: 'Customers'
};


export default async function Page({
    searchParams,
     }: {
    searchParams?: {
        query?: string;
    };
}) {
    const customers = await fetchFilteredCustomers(searchParams?.query || '');
    return (
        <CustomersTable customers={customers} />
    );
}