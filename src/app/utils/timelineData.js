import imgApi from './images';
import avatarApi from './avatars';
const timelineData = [
  {
    id: '1',
    name: 'John Doe',
    date: 'September, 12 2018',
    time: '08:01',
    icon: 'add_circle',
    avatar: avatarApi[6],
    image: imgApi[19],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce placerat enim et odio molestie sagittis.',
    liked: true,
    comments: [
      {
        id: '1_1',
        from: 'Jane Doe',
        avatar: avatarApi[2],
        date: 'May, 29 2018',
        message: 'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
      },
      {
        id: '1_2',
        from: 'Jim Doe',
        avatar: avatarApi[10],
        date: 'May, 29 2018',
        message: 'Ut sed eros finibus, placerat orci id, dapibus mauris.'
      },
      {
        id: '1_3',
        from: 'Jihan Doe',
        avatar: avatarApi[4],
        date: 'May, 29 2018',
        message: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est. '
      }
    ]
  },
  {
    id: '2',
    name: 'John Doe',
    date: 'September, 10 2018',
    time: '03:20',
    icon: 'date_range',
    avatar: avatarApi[6],
    image: '',
    content: 'Quisque ut metus sit amet augue rutrum feugiat. Vestibulum bibendum nisi eget magna malesuada, at mattis eros efficitur. Vivamus facilisis quam ullamcorper iaculis gravida.',
    liked: true,
    comments: [
      {
        id: '2_1',
        from: 'Jane Doe',
        avatar: avatarApi[2],
        date: 'May, 29 2018',
        message: 'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
      },
      {
        id: '2_2',
        from: 'Jihan Doe',
        avatar: avatarApi[4],
        date: 'May, 29 2018',
        message: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est. '
      }
    ]
  },
  {
    id: '3',
    name: 'John Doe',
    date: 'Aug, 17 2018',
    time: '04:10',
    icon: 'description',
    avatar: avatarApi[6],
    image: imgApi[20],
    content: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    liked: false,
    comments: [
      {
        id: '3_1',
        from: 'Jack Doe',
        avatar: avatarApi[8],
        date: 'May, 29 2018',
        message: 'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
      },
      {
        id: '3_2',
        from: 'Jim Doe',
        avatar: avatarApi[9],
        date: 'May, 29 2018',
        message: 'Ut sed eros finibus, placerat orci id, dapibus mauris.'
      },
      {
        id: '3_3',
        from: 'Jihan Doe',
        avatar: avatarApi[4],
        date: 'May, 29 2018',
        message: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est. '
      },
      {
        id: '3_4',
        from: 'Janet Doe',
        avatar: avatarApi[5],
        date: 'May, 29 2018',
        message: 'Aenean sit amet magna'
      }
    ]
  },
  {
    id: '4',
    name: 'John Doe',
    date: 'Aug, 10 2018',
    time: '08:05',
    icon: 'favorite',
    avatar: avatarApi[6],
    image: '',
    content: 'Donec dignissim, odio ac imperdiet luctus, ante nisl accumsan justo, et venenatis ante metus pellentesque sem.',
    liked: true,
    comments: [
      {
        id: '4_1',
        from: 'Jane Doe',
        avatar: avatarApi[2],
        date: 'May, 29 2018',
        message: 'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
      }
    ]
  },
  {
    id: '5',
    name: 'John Doe',
    date: 'Aug, 10 2018',
    time: '02:50',
    icon: 'lock',
    avatar: avatarApi[6],
    image: imgApi[12],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce placerat enim et odio molestie sagittis.',
    liked: false,
    comments: [
      {
        id: '5_1',
        from: 'Jim Doe',
        avatar: avatarApi[9],
        date: 'May, 29 2018',
        message: 'Ut sed eros finibus, placerat orci id, dapibus mauris.'
      },
      {
        id: '5_2',
        from: 'Jihan Doe',
        avatar: avatarApi[4],
        date: 'May, 29 2018',
        message: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est. '
      }
    ]
  }
];

export default timelineData;
