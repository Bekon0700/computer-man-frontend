import React from 'react'
import QuestionCard from '../../components/question-card/QuestionCard'

const data = [
  {
      id: 1,
      q: 'Difference between SQL and NoSQL',
      a: 'SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.'
  },
  {
      id: 2,
      q: 'What is JWT, and how does it work?',
      a: 'JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.'
  },
  {
      id: 3,
      q: 'What is the difference between javascript and NodeJS?',
      a: 'JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.'
  },
  {
      id: 4,
      q: 'How does NodeJS handle multiple requests at the same time?',
      a: 'How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.'
  },
]


const Blog = () => {
  return (
    <div className='bg-white text-black dark:bg-gray-800 dark:text-gray-100'>
        <div className='w-11/12 mx-auto py-8'>
            <p className='text-3xl font-bold text-center pb-8'>Blog Post</p>
            <div className='flex flex-col gap-4'>
                {
                    data.map(el => <QuestionCard key={el.id} data={el} />)
                }
            </div>
        </div>
    </div>
  )
}

export default Blog