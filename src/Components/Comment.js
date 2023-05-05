import { React} from "react";

// import './Stylesheet/comment.css'
function comment({comment}){


    return(
      //   <div class="card-body mt-3" style={{ backgroundColor: "green" , margin:"10px", borderRadius:"3px"}}>
      //   <div class="d-flex flex-start">
      //     <div class="w-100">
      //       <div class="d-flex justify-content-between align-items-center mb-3">
      //         <h6 class="text-primary fw-bold mb-0" style={{width:"100%"}}>
      //           {comment.movieName}
      //           {/* <text class="text-dark ms-2 w-100">
      //             {comment.review}
      //           </text> */}
      //           <h6 className="h6"  style={{overflow:"auto"}}>{comment.review}</h6>
      //         </h6>
      //       </div>
      //       <div class="d-flex justify-content-between align-items-center"></div>
      //     </div>
      //   </div>
      // </div>
      <div className="bg bg-white shadow-sm my-3 rounded p-3">
        <div>
          <h4 className="text text-center text-primary">{comment.movieName}</h4>
          <hr/>
          <p className="">{comment.review}</p>
        </div>
      </div>
    )
}

export default comment;