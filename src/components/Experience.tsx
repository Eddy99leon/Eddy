import Skills from "./Skills"

const Experience = () => {
  return (
    <div>
        <div className="container py-10">
            <div className="mb-14 text-center">
                <h3 className="text-xl text-blue-500 mb-2">
                    Experience et Compétence
                </h3>
                <h4 className="text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                </h4>
            </div>
            <div className="block md:flex md:gap-2">
                <div className="flex-1 space-y-3 mb-8 md:mb-0">
                    <div className="rounded py-3 pr-3">
                        <div className="flex gap-1">
                            <h1 className="font-semibold">
                                Poste:
                            </h1>
                            <h1 className="text-blue-700">
                                Développeur Fullstack React / Symfony
                            </h1>
                        </div>
                        <div className="flex gap-1">
                            <h1 className="font-semibold">
                                Entreprise:
                            </h1>
                            <h1>
                                SK'HAY 
                                <span>

                                </span>
                            </h1>
                        </div>
                        <div className="flex gap-1">
                            <h1 className="font-semibold">
                                Date:
                            </h1>
                            <h1>
                                Mars 2024 - Maintenant
                            </h1>
                        </div>
                        <div className="flex gap-1">
                            <h1 className="font-semibold">
                                Type:
                            </h1>
                            <h1>
                                CDI
                            </h1>
                        </div>
                        <p className="text-sm text-gray-500 text-justify mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-2 py-1 text-xs bg-blue-100 rounded-full whitespace-nowrap text-blue-600">
                                React.Js
                            </span>
                            <span className="px-2 py-1 text-xs bg-blue-100 rounded-full whitespace-nowrap text-blue-600">
                                Material Ui
                            </span>
                            <span className="px-2 py-1 text-xs bg-blue-100 rounded-full whitespace-nowrap text-blue-600">
                                Javascript
                            </span>
                            <span className="px-2 py-1 text-xs bg-blue-100 rounded-full whitespace-nowrap text-blue-600">
                                PHP
                            </span>
                            <span className="px-2 py-1 text-xs bg-blue-100 rounded-full whitespace-nowrap text-blue-600">
                                Symfony
                            </span>
                            <span className="px-2 py-1 text-xs bg-blue-100 rounded-full whitespace-nowrap text-blue-600">
                                Pusher
                            </span>
                            <span className="px-2 py-1 text-xs bg-blue-100 rounded-full whitespace-nowrap text-blue-600">
                                MySQL
                            </span>
                        </div>
                    </div>
                    <div className="rounded py-3 pr-3">
                        <div className="flex gap-1">
                            <h1 className="font-semibold">
                                Poste:
                            </h1>
                            <h1 className="text-blue-700">
                                Développeur Fullstack React / Node.Js
                            </h1>
                        </div>
                        <div className="flex gap-1">
                            <h1 className="font-semibold">
                                Entreprise:
                            </h1>
                            <h1>
                                HAISOA
                                <span>

                                </span>
                            </h1>
                        </div>
                        <div className="flex gap-1">
                            <h1 className="font-semibold">
                                Date:
                            </h1>
                            <h1>
                                Jul 2023 - Oct 2023
                            </h1>
                        </div>
                        <div className="flex gap-1">
                            <h1 className="font-semibold">
                                Type:
                            </h1>
                            <h1>
                                Stage
                            </h1>
                        </div>
                        <p className="text-sm text-gray-500 text-justify mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-2 py-1 text-xs bg-blue-100 rounded-full whitespace-nowrap text-blue-600">
                                React.Js
                            </span>
                            <span className="px-2 py-1 text-xs bg-blue-100 rounded-full whitespace-nowrap text-blue-600">
                                Tailwind
                            </span>
                            <span className="px-2 py-1 text-xs bg-blue-100 rounded-full whitespace-nowrap text-blue-600">
                                Javascript
                            </span>
                            <span className="px-2 py-1 text-xs bg-blue-100 rounded-full whitespace-nowrap text-blue-600">
                                Node.js
                            </span>
                            <span className="px-2 py-1 text-xs bg-blue-100 rounded-full whitespace-nowrap text-blue-600">
                                Express.Js
                            </span>
                            <span className="px-2 py-1 text-xs bg-blue-100 rounded-full whitespace-nowrap text-blue-600">
                                JWT
                            </span>
                            <span className="px-2 py-1 text-xs bg-blue-100 rounded-full whitespace-nowrap text-blue-600">
                                MySQL
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-white rounded-md shadow p-3">
                    <Skills />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience