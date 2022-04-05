
import useComments from '../../hooks/useComments';
import Comments from '../Comments/Comments';

const Review = () => {

    const [comments] = useComments([]); 


  


    return (
        <div >
            <h1 className='text-3xl font-bold text-rose-700'>This is Review from our valuable Customers</h1>
           
        <div className='grid grid-cols-3 gap-4 p-10 m-10' >
        
            {
                comments.map(comment=> <Comments key={comment.id} comment={comment}> </Comments>)
            }

        </div>

        </div>
    );
};

export default Review;