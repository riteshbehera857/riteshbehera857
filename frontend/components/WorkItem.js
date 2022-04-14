const WorkItem = () => {
    return (
        <>
            <div className="p-4 rounded-md bg-secondary hover:scale-[1.05] transition-all duration-300">
                <div className="h-96 flex justify-center items-center mb-5 rounded-md overflow-hidden">
                    <img src="/Authentication.svg" alt='' className="h-full w-full object-cover" />
                </div>
                <div>
                    <h1 className="font-body text-4xl text-white font-medium mb-4">
                        Morganzee - The Closet
                    </h1>
                    <p className="font-body text-xl text-white">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur libero non modi, assumenda quaerat cum autem at alias distinctio id adipisci voluptas explicabo error, amet debitis cupiditate exercitationem sunt?
                    </p>
                </div>
            </div>
        </>
    )
}

export default WorkItem
