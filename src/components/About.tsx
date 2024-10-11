import aboutImg from "@/assets/img1.jpg"

const About = () => {
  return (
    <div className="bg-black pb-20">
      <div>
        <div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1000 100" 
            fill="#f3f4f6"
          >
            <path d="M0 0v84l500 16 500-16V0H0z" opacity=".2"></path>
            <path d="M0 0v64l500 36 500-36V0H0z" opacity=".4"></path>
            <path d="M0 0v44l500 56 500-56V0H0z" opacity=".4"></path>
            <path d="M0 0v24l500 76 500-76V0H0z" opacity=".5"></path>
            <path d="M0 0v4l500 96 500-96V0H0z"></path>
          </svg>
        </div>
      </div>
      <div className="container text-white mt-8">
        <div className="mb-14 text-center">
          <h3 className="text-xl">
            About Me.
          </h3>
          <h4 className="text-gray-400">
            Non, vous n'êtes pas prêt à faire ma connaissance 🙂
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <h1 className="text-6xl font-medium mb-3">
              Eddy Léon
            </h1>
            <h2 className="text-2xl font-medium text-gray-400 mb-3">
              Frontend Developer
            </h2>
            <p className="max-w-[450px] mb-3 text-gray-300 border-l-2 border-gray-600 pl-2">
              Back in 2020, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. 
              Fast-forward to today, and I’ve had the privilege.
            </p>
            <p className="max-w-[450px] text-gray-300 border-l-2 border-gray-500 pl-2">
              Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. 
              Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, 
              a start-up, a huge corporation, and a digital product studio.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src={aboutImg} 
              alt="about image"
              className="w-[350px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About