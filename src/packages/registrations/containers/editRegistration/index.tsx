import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, RadioField, SelectField, TextField } from '../../../../core/components/form';
import { Gender } from '../../../../core/models/user';
import { routes } from '../../../../core/routes';

interface EditRegistrationProps {}

const EditRegistration: React.FunctionComponent<EditRegistrationProps> = () => {
    const methods = useForm({});
    React.useEffect(() => {
        methods.setValue('fullName', 'Nguyen Van A');
        methods.setValue('email', 'trinhvanquyet@gmail.com');
        methods.setValue('mobile', '09123717822');
        methods.setValue('gender', Gender.MALE);
        methods.setValue('registrationTime', new Date('12/5/2022'));
        methods.setValue('sale', 500000);
        methods.setValue('status', true);
    }, []);

    const _handleOnSubmit = async () => {};

    return (
        <div className="flex flex-col justify-center flex-1 py-12 sm:px-6 lg:px-8 intro-y">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-0 text-3xl font-extrabold text-center text-gray-900">Edit Registration</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <FormWrapper methods={methods}>
                        <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-5">
                            <SelectField
                                label="Subject"
                                name="subject"
                                values={[
                                    { label: 'Javascript', value: '1' },
                                    { label: 'Java', value: '' },
                                    { label: 'C#', value: '' },
                                    { label: 'Marketing', value: '' },
                                ]}
                            />
                            <SelectField
                                label="Package"
                                name="package"
                                values={[
                                    { label: 'Package 1 - 500,000 - 350,000', value: '' },
                                    { label: 'Package 2 - 800,000 - 700,000', value: '2' },
                                    { label: 'Package 3 - 1,000,000 - 900,000', value: '' },
                                    { label: 'Package 4 - 3,000,000 - 2,800,000', value: '' },
                                ]}
                            />
                            <TextField label="Full name" name="fullName" type="fullName" />
                            <TextField label="Email address" name="email" type="email" />
                            <TextField label="phone number" name="mobile" type="text" />

                            <RadioField
                                label="sex"
                                name="gender"
                                values={[
                                    { label: 'Male', value: Gender.MALE },
                                    { label: 'Female', value: Gender.FEMALE },
                                ]}
                            />

                            <TextField label="Registration Time" name="registrationTime" type="date" defaultValue={'12/5/2022'} />
                            <TextField label="Sale" name="sale" type="number" />
                            <SelectField
                                label="Status"
                                name="status"
                                values={[
                                    { label: 'Active', value: true },
                                    { label: 'Inactive', value: false },
                                ]}
                            />
                            <TextField label="Valid From" name="validFrom" type="date" defaultValue={'12/5/2022'} />
                            <TextField label="Valid To" name="validTo" type="date" defaultValue={'12/5/2022'} />

                            <FormErrorMessage />
                            <div className="flex space-x-2">
                                <Link href={routes.registrationUrl} passHref>
                                    <div className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                        Cancel
                                    </div>
                                </Link>
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Edit Registration
                                </button>
                            </div>
                        </form>
                    </FormWrapper>
                </div>
            </div>
        </div>
    );
};

export default EditRegistration;