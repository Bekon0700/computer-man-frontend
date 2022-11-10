import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import TableRow from '../../components/table-row/TableRow'
import { authContext } from '../../context/AuthProvider'

const Reviews = () => {
  const [review, setReview] = useState([])
  const { user } = useContext(authContext)
  const [reviewId, setReviewId] = useState(null)

  useEffect(() => {
    fetch(`https://computer-man-backend.vercel.app/api/v1/reviews/${user.email}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('jwtoken')}`
      },
    })
      .then(res => res.json())
      .then(data => {
        const { reviews } = data
        setReview([...reviews])
      })

  }, [reviewId, review])


  const handleDltBtn = (id) => {
    fetch(`https://computer-man-backend.vercel.app/api/v1/reviews/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('jwtoken')}`
      }
    })
      .then(res => res.json())
      .then(data => {

        const reviewFilter = review.filter(el => el._id != id)
        setReview(reviewFilter)

        toast.success('Review Deleted')
      }).catch(err => {
    })
    
  }

  const submitEditBtn = (e) => {
    e.preventDefault()
    const reviewInput = e.target.reviewInput.value;
    const reviewData = {
      review: reviewInput,
    }

    fetch(`https://computer-man-backend.vercel.app/api/v1/reviews/${reviewId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('jwtoken')}`
      },
      body: JSON.stringify(reviewData)
    })
      .then(res => res.json())
      .then(data => {
        e.target.reset()
        setReviewId(null)
        toast.success('Review Updated')
      }).catch(err => {
        console.log(err)
      })
  }

  const handleEditBtn = (id) => {
    setReviewId(id)
  }

  return (
    <div className='w-11/12 mx-auto flex flex-col gap-6 py-12 h-screen'>
      {
        review.length != 0 ?
        <>
        <p className='text-2xl text-center font-semibold'>All reviews</p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Service Name</th>
              <th>User Name</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {
              review.map((el, id) => <TableRow key={id} id={id} data={el} editBtn={handleEditBtn} delBtn={handleDltBtn} />)
            }
          </tbody>
        </table>
      </div>
      </>
      :
      <div className='text-center text-3xl font-bold '><p>No got no reviews</p></div>
      }
        {/* Put this part before </body> tag */}
        <div>
          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <p className='pb-2 font-semibold text-lg'>Add your updated review</p>
              <form onSubmit={submitEditBtn}>
                <textarea className="textarea w-full border-gray-900" name="reviewInput" placeholder="your review"></textarea>
                <button className='py-3 bg-blue-500 text-white font-semibold uppercase w-full rounded-md mt-2'>submit</button>
              </form>
              <div className="modal-action">
                <label htmlFor="my-modal-5" className="btn">Close</label>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Reviews