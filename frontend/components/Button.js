const Button = ({ title, category }) => {
    return (
        <a className={category === "primary" ? "bg-primary shadow-lg shadow-primary /50 text - white font - body text - 2xl rounded px - 9 py - 5 mt - 5 cursor - pointer" : "bg-transparent border-2 border-primary shadow-lg shadow-primary/50 text-white font-body text-2xl rounded px-9 py-5 mt-5 cursor-pointer"} category={category}>
            {title}
        </a>
    )
}

export default Button
