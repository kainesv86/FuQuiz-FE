import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../src/core/components/form';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { Blog } from '../../src/core/models/blog';
import { Subject } from '../../src/core/models/subject';
import { AllRole } from '../../src/core/models/user';
import { routes } from '../../src/core/routes';
import { defaultCurrentUser } from '../../src/core/store/user';
import { BlogBox } from '../../src/packages/blog';
import { StoreLayout } from '../../src/packages/store';

interface CourseListPageProps {}
const subjectList: Subject[] = [
    {
        id: '1',
        subjectCategory: { id: '1', name: 'Coding' },
        createAt: '',
        description:
            'Nếu như vài năm trước đây JavaScript chỉ là một ngôn ngữ lập trình ít người quan tâm thì gần đây cùng với sự phát triển mạnh mẽ của HTML5, Boostrap, NodeJs đã biến JavaScript thành một trong 2 ngôn ngữ lập trình, thiết kế web quan trọng nhất. Do vậy, nắm rõ về JavaScript sẽ giúp bạn có lợi thế lớn trong công việc. <br/> Hiểu được nhu cầu tìm hiểu về JavaScript ngày càng lớn hiện nay, tôi cùng Edumall đã hợp tác sản suất khóa học "Một giờ học JavaScript" nhằm giúp các bạn nắm được kiến thức và lập trình được các chương trình cơ bản chỉ trong 1 giờ. ',
        thumbnailUrl:
            'https://edumall.vn/_next/image?url=%2Fapi%2Fimageproxy%3Furl%3Dhttps%253A%252F%252Fcdn2.topica.vn%252F191ab4fd-9c62-4494-b209-51f86a3924d3%252Fproduct%252F604f1ada9a780e00257881c3&w=1920&q=50',
        title: 'Nhập môn ngôn ngữ lập trình Javascript',
        updateAt: '',
        tagLine: '',
        assignTo: defaultCurrentUser,
    },
    {
        id: '2',
        subjectCategory: { id: '2', name: 'Crypyo' },
        createAt: '',
        description:
            'Khóa học cung cấp cho học viên sẽ 1 cái nhìn toàn diện việc bảo vệ tiền số, bảo vệ thông tin tài sản. Học viên sẽ nắm được những kĩ năng và kiến thức cơ bản, cần thiết về bảo vệ không chỉ tiền số mà còn là thông tin và tài sản số nói chung.',
        thumbnailUrl: 'https://www.stepn.com/img/coin.svg',
        title: 'Cách để GST to to moon cùng anh Quyết',
        updateAt: '',
        tagLine: '',
        assignTo: defaultCurrentUser,
    },
    {
        id: '3',
        subjectCategory: { id: '2', name: 'Health care' },
        createAt: '',
        description:
            'Kỹ thuật chạy bộ đúng cách sẽ giúp bạn nhận được nhiều lợi ích sức khỏe, cảm thấy cơ thể thư giãn, rèn luyện được sức bền lâu hơn và ngăn ngừa nguy cơ gặp chấn thương. Vậy làm thế nào để bạn chạy bộ đúng cách nhằm bảo vệ sức khỏe tốt hơn?',
        thumbnailUrl: 'https://norskmedia.vn/wp-content/uploads/2020/06/running_cover_1.jpg',
        title: 'Mẹo chaỵ bộ 10km không mệt nghỉ bằng giấc ngủ',
        updateAt: '',
        tagLine: '',
        assignTo: defaultCurrentUser,
    },
];

export interface BlogListFilterDTO {
    category: string;
    name: string;
    sort: 'ASC' | 'DESC';
}
const defaultValues: BlogListFilterDTO = {
    category: '',
    name: '',
    sort: 'ASC',
};

const CourseListPage: React.FC<CourseListPageProps> = () => {
    const methods = useForm<BlogListFilterDTO>({
        defaultValues,
    });
    return (
        <RouterProtectionWrapper acceptRoles={AllRole}>
            <StoreLayout>
                <h1 className="mb-5 text-2xl font-bold">New Course:</h1>
                <FormWrapper methods={methods}>
                    <div className="flex items-end p-5 space-x-5 bg-white rounded-md">
                        <div className="max-w-2xl">
                            <TextField label="Name" name="name" />
                        </div>
                        <div className="w-max">
                            <SelectField
                                label="category"
                                name="category"
                                values={[
                                    { label: 'category 1', value: '' },
                                    { label: 'category 2', value: '' },
                                    { label: 'category 3', value: '' },
                                    { label: 'category 4', value: '' },
                                ]}
                            />
                        </div>
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Search
                        </button>
                    </div>
                </FormWrapper>

                <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-3">
                    {subjectList.map((item) => (
                        <Link key={item.id} href={`${routes.subjectUrl}/${item.id}`} passHref>
                            <div className="flex flex-col w-full overflow-hidden duration-700 rounded-lg shadow-lg cursor-pointer hover:-translate-y-5">
                                <div className="min-w-full mx-auto bg-white">
                                    <img className="object-cover h-48 py-3 mx-auto" src={item.thumbnailUrl} alt="thumbnail" />
                                </div>

                                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-indigo-600">
                                            <Link href={''}>
                                                <a className="hover:underline">{item.subjectCategory.name}</a>
                                            </Link>
                                        </p>
                                        <a href={''} className="block mt-2">
                                            <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                                            <p className="mt-3 text-base text-gray-500">{item.description.substring(0, 100) + '...'}</p>
                                        </a>
                                    </div>

                                    <div className="flex items-center mt-6">
                                        <p className="text-2xl font-medium text-gray-900">
                                            <div className="text-orange-600">20.000đ - 100.000đ</div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </StoreLayout>
        </RouterProtectionWrapper>
    );
};

export default CourseListPage;