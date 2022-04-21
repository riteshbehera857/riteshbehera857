import { urlFor } from "../client"

const WorkItem = ({ work }) => {
    return (
        <>
            <div className="p-4 rounded-lg bg-secondary hover:scale-[1.05] transition-all duration-300 shadow-md text-center">
                <div className="h-[14rem] lg:h-96 flex justify-center items-center mb-5 rounded-md overflow-hidden">
                    <img src={urlFor(work.thumbnail)} alt='' className="h-full w-full object-cover" />
                </div>
                <div>
                    <h1 className="font-secondaryBody text-4xl text-body_text font-bold mb-4">
                        {work.name}
                    </h1>
                    <p className="font-secondaryBody text-[1.4rem] text-body_text">
                        {work.description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default WorkItem
