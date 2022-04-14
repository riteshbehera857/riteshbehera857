import Link from 'next/link'
import PropTypes from 'prop-types'


const NavItems = ({ name, path }) => {
    return (
        <>
            <Link href={path}>
                <a className='font-body text-2xl text-center uppercase mr text-body_text rounded-md hover:bg-opacity-10 transition-all ease-in-out delay-150 active:ring active:ring-primary '>{name}</a>
            </Link>
        </>
    )
}

export default NavItems

NavItems.propTypes = {
    path: PropTypes.string,
    name: PropTypes.string
}
