import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { TextareaField } from '../../../../core/components/form/textareaField';
import { DimensionType } from '../../../../core/models/dimension';
import { dataParser } from '../../../../core/util/data';
import { useGetDimensionType } from '../../common/hooks/useGetDimensionTypes';
import { addDimension } from './action';
import { AddDimensionDTO, AddDimensionFormDTO } from './interface';

interface AddDimensionProps {
    subjectId: string;
}
const defaultValues: AddDimensionDTO = {
    description: '',
    name: '',
    subject: '',
    type: '',
};
export const AddDimension: React.FunctionComponent<AddDimensionProps> = ({ subjectId }) => {
    const router = useRouter();

    const methods = useForm<AddDimensionFormDTO>({ defaultValues });

    const { dimensionTypes } = useGetDimensionType();

    const _handleOnSubmit = (data: AddDimensionFormDTO) => {
        addDimension({ ...data, subject: subjectId }).then((res) => {
            if (res) {
                router.push(router.asPath.replace('/add', ''));
                toast.success('Add dimension success!');
            }
        });
    };
    return (
        <FormWrapper methods={methods}>
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Add Dimension</h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-500">This page will be add new dimension in current subject</p>
                        </div>

                        <div className="w-full mt-6 space-y-6 sm:max-w-3xl sm:mt-5 sm:space-y-5">
                            <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Type
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <SelectField name="type" label="" values={dataParser<DimensionType>(dimensionTypes, 'name', 'id')} />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Name
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextField label="" name="name" />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Description
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextareaField name="description" label="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <Link href={router.asPath.replace('/add', '')} passHref>
                            <p className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Cancel
                            </p>
                        </Link>
                        <button
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </FormWrapper>
    );
};
