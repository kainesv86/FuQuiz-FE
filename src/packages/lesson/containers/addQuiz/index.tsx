import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField } from '../../../../core/components/form';
import { routes } from '../../../../core/routes';

interface AddQuizProps {}

const AddQuiz: React.FunctionComponent<AddQuizProps> = () => {
    const methods = useForm();
    const router = useRouter();

    const _handleOnSubmit = async () => {};

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="flex flex-col mt-8">
                <FormWrapper methods={methods}>
                    <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-8 divide-y divide-gray-200">
                        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                            <div>
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">Add new lesson subject</h3>
                                        <p className="max-w-2xl mt-1 text-sm text-gray-500">
                                            This information will be displayed publicly so be careful what you share.
                                        </p>
                                    </div>
                                </div>

                                {/* <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Title
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <TextField label="" name="title" />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="briefInfo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Brief Info
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <textarea
                                        {...methods.register('briefInfo')}
                                        rows={7}
                                        name="briefInfo"
                                        id="briefInfo"
                                        autoComplete="given-name"
                                        className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="details" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Details
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <QuillInput description={details} setDescription={setDetails} />
                                </div>
                            </div>
                        </div> */}
                            </div>
                        </div>

                        <div className="pt-5">
                            <div className="flex justify-end">
                                <Link href={router.asPath.replace('/lesson/add', '')} passHref>
                                    <button
                                        type="button"
                                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Cancel
                                    </button>
                                </Link>
                                <Link href={routes.blogListUrl} passHref>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </FormWrapper>
            </div>
        </div>
    );
};

export default AddQuiz;