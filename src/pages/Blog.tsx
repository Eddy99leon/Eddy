import oops from "@/assets/oops.svg"

const Blog = () => {

  return (
    <div className="container py-16" >
      <div className="flex items-center">
        <div className="flex-1">
          <div>
            - retour.
          </div>
          <h3 className="text-gray-500">
            Pas de panique !
          </h3>
          <h2 className="text-4xl font-semibold">
            Cette page est encours <br />de developpement.
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
            Lorem, ipsum dolor sit amet consectetur adipisicing.
            Lorem, ipsum dolor sit amet consectetur adipisicing.
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center ">
          <img 
            src={oops}
            className="w-[350px] h-[350px]" 
            alt="404 error" 
          />
        </div>
      </div>
    </div>
  )
}

export default Blog