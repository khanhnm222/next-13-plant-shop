import Image from 'next/image'
import { ReactElement } from 'react';
import { IconComment, IconLike } from '../icons';

interface CommentSectionProps {
  className?: string;
  disableHeader?: boolean;
}

interface CommentCardProps {
  id?: number;
  name: string;
  avatar: string;
  createdDate: string;
  content: string;
}

const CommentCard = ({
  name, avatar, createdDate, content
}: CommentCardProps): ReactElement => {
  return (
    <div className="p-6 mb-6 rounded-md lg:p-6 dark:bg-gray-900">
      <div className="items-center justify-between block mb-4 lg:flex">
        <div className="flex flex-wrap items-center mb-4 lg:mb-0">
          <Image className="object-cover mb-1 mr-2 rounded-full shadow w-14 h-14 lg:mb-0"
            width={14}
            height={14}
            alt='avatar'
            src={avatar}
          />
          <div>
            <h2 className="mr-2 text-lg font-medium text-gray-700 dark:text-gray-400">
              {name}
            </h2>
            <p className="text-sm font-medium text-gray-400 dark:text-gray-400">{createdDate}</p>
          </div>
        </div>
      </div>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        {content}
      </p>
      <div className="flex items-center">
        <div className="flex mr-3 text-sm text-gray-700 dark:text-gray-400">
          <a href="#">
            <IconLike />
          </a>
          <span>Like</span>
        </div>
        <div className="flex text-sm text-gray-700 dark:text-gray-400">
          <a href="#">
            <IconComment />
          </a>
          <span>Reply</span>
        </div>
      </div>
    </div>
  )
}

const CommentSection = ({ className, disableHeader = false }: CommentSectionProps) => {

  const userComments = [
    {
      id: 1,
      name: 'Nguyen Van A',
      avatar: '/avatar/avatar-example.jpg',
      createdDate: '12, SEP 2023',
      content: 'The plant is so pretty. It is really nice when put it in my bed room'
    },
    {
      id: 2,
      name: 'Nguyen Thi C',
      avatar: '/avatar/avatar-example-1.jpg',
      createdDate: '12, SEP 2023',
      content: 'The price is very cheap for everything it bring to my house'
    },
    {
      id: 3,
      name: 'Huynh Minh C',
      avatar: '/avatar/avatar-example-2.jpg',
      createdDate: '12, SEP 2022',
      content: 'I am so happy when catching my wife suprise by this gift. It would help us enjoy spacing in our garden'
    },
  ]

  return (
    <div className={className ? `${className} mt-10` : 'mt-10'}>
      {!disableHeader && (
        <>
          <hr className="h-px my-8 bg-primary border-0 dark:bg-gray-700 opacity-[0.5]" />
          <p className="text-xl py-1 font-semibold text-brand-green">REVIEWS</p>
        </>
      )
      }
      <section className="py-10 dark:bg-gray-800">
        <div className="px-4 py-6 mx-auto lg:py-4 md:px-6">
          <div className="lg:grid-cols-[50%,1fr] grid grid-cols-1 gap-6">
            <div>
              {userComments.map((comment: CommentCardProps) => {
                return (
                  <CommentCard
                    key={comment.id}
                    name={comment.name}
                    avatar={comment.avatar}
                    createdDate={comment.createdDate}
                    content={comment.content}
                  />
                )
              })}
            </div>
            <div>
              <div className="p-6 bg-gray-100 rounded-md dark:bg-gray-900">
                <h2 className="px-2 mb-6 text-2xl font-semibold text-left text-gray-600 dark:text-gray-400">
                  Leave a comment</h2>
                <form action="" className="">
                  <div className="px-2 mb-6">
                    <label htmlFor="firstname" className="block mb-2 font-medium text-gray-700 dark:text-gray-400">
                      Your review *</label>
                    <textarea name="message" placeholder="write a review" required
                      className="block w-full px-4 leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-500 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "></textarea>
                  </div>
                  <div className="px-2 mb-6">
                    <label htmlFor="firstname" className="block mb-2 font-medium text-gray-700 dark:text-gray-400">
                      Name *
                    </label>
                    <input type="text" placeholder=" name" required
                      className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded bg-gray-50 lg:mb-0 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                  </div>
                  <div className="px-2 mb-6">
                    <label htmlFor="firstname" className="block mb-2 font-medium text-gray-700 dark:text-gray-400">
                      Email *
                    </label>
                    <input type="text" placeholder="abc@gmail.com" required
                      className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                  </div>
                  <div className="px-2">
                    <button
                      className="px-4 py-2 font-medium text-gray-100 bg-primary rounded shadow hover:bg-secondary hover:text-brand-green">
                      Submit Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default CommentSection