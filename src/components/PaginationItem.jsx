const PaginationItem = ({ text }) => {
    return (
        <li className="rounded-full px-3 py-2 text-center cursor-pointer">
            {text}
        </li>
    );
};

export default PaginationItem;
