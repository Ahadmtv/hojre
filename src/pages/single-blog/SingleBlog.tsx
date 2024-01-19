import { FC } from "react"

const SingleBlog: FC = () => {
    const blogList = [
        {
            id: 1,
            imgUrl: '/assets/images/blog/01.jpg',
            imgAlt: 'نمایه مطلب',
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            commentCount: '3',
            btnText: 'ادامه مطلب',
            metaList: [
                {
                    iconName: 'fa-solid fa-user',
                    text: 'احد متولی',
                },
                {
                    iconName: 'fa-solid fa-calendar-days',
                    text: '17 خرداد 1402',
                },
            ],
        },
        {
            id: 2,
            imgUrl: '/assets/images/blog/02.jpg',
            imgAlt: 'نمایه مطلب',
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            commentCount: '3',
            btnText: 'ادامه مطلب',
            metaList: [
                {
                    iconName: 'fa-solid fa-user',
                    text: 'احد متولی',
                },
                {
                    iconName: 'fa-solid fa-calendar-days',
                    text: '17 خرداد 1402',
                },
            ],
        },
        {
            id: 3,
            imgUrl: '/assets/images/blog/03.jpg',
            imgAlt: 'نمایه مطلب',
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            commentCount: '3',
            btnText: 'ادامه مطلب',
            metaList: [
                {
                    iconName: 'fa-solid fa-user',
                    text: 'احد متولی',
                },
                {
                    iconName: 'fa-solid fa-calendar-days',
                    text: '17 خرداد 1402',
                },
            ],
        },
        {
            id: 4,
            imgUrl: '/assets/images/blog/04.jpg',
            imgAlt: 'نمایه مطلب',
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            commentCount: '3',
            btnText: 'ادامه مطلب',
            metaList: [
                {
                    iconName: 'fa-solid fa-user',
                    text: 'احد متولی',
                },
                {
                    iconName: 'fa-solid fa-calendar-days',
                    text: '17 خرداد 1402',
                },
            ],
        },
        {
            id: 5,
            imgUrl: '/assets/images/blog/05.jpg',
            imgAlt: 'نمایه مطلب',
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            commentCount: '3',
            btnText: 'ادامه مطلب',
            metaList: [
                {
                    iconName: 'fa-solid fa-user',
                    text: 'احد متولی',
                },
                {
                    iconName: 'fa-solid fa-calendar-days',
                    text: '17 خرداد 1402',
                },
            ],
        },
        {
            id: 6,
            imgUrl: '/assets/images/blog/06.jpg',
            imgAlt: 'نمایه مطلب',
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            commentCount: '3',
            btnText: 'ادامه مطلب',
            metaList: [
                {
                    iconName: 'fa-solid fa-user',
                    text: 'احد متولی',
                },
                {
                    iconName: 'fa-solid fa-calendar-days',
                    text: '17 خرداد 1402',
                },
            ],
        },
        {
            id: 7,
            imgUrl: '/assets/images/blog/07.jpg',
            imgAlt: 'نمایه مطلب',
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            commentCount: '3',
            btnText: 'ادامه مطلب',
            metaList: [
                {
                    iconName: 'fa-solid fa-user',
                    text: 'احد متولی',
                },
                {
                    iconName: 'fa-solid fa-calendar-days',
                    text: '17 خرداد 1402',
                },
            ],
        },
        {
            id: 8,
            imgUrl: '/assets/images/blog/08.jpg',
            imgAlt: 'نمایه مطلب',
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            commentCount: '3',
            btnText: 'ادامه مطلب',
            metaList: [
                {
                    iconName: 'fa-solid fa-user',
                    text: 'احد متولی',
                },
                {
                    iconName: 'fa-solid fa-calendar-days',
                    text: '17 خرداد 1402',
                },
            ],
        },
        {
            id: 9,
            imgUrl: '/assets/images/blog/09.jpg',
            imgAlt: 'نمایه مطلب',
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            commentCount: '3',
            btnText: 'ادامه مطلب',
            metaList: [
                {
                    iconName: 'fa-solid fa-user',
                    text: 'احد متولی',
                },
                {
                    iconName: 'fa-solid fa-calendar-days',
                    text: '17 خرداد 1402',
                },
            ],
        },
    ]
    return (
        <div>
            سلام من احد هستم
        </div>
    )
}

export default SingleBlog