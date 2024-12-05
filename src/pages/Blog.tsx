import oops from "@/assets/oops.svg"

const Blog = () => {

  return (
    <div className="container py-24" >
      <div className="flex items-center s-section">
        <div className="flex-1">
          right
        </div>
        <div className="flex-1">
          <img src={oops} alt="404 error" />
        </div>
      </div>
    </div>
  )
}

export default Blog