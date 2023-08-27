interface PaginationProps {
  className: string;
}
const Pagination = ({ className }:PaginationProps) => {
  return (
    <div className={className}>
      <nav aria-label="Page navigation">
        <ul className="inline-flex space-x-2">
          <li><button className="flex items-center justify-center w-10 h-10 text-brand-green transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-brand-green-100 hover:text-white">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg></button>
          </li>
          <li><button className="w-10 h-10 text-white transition-colors duration-150 bg-brand-green border border-r-0 border-brand-green-100 rounded-full focus:shadow-outline hover:bg-brand-green-100">1</button></li>
          <li><button className="w-10 h-10 text-brand-green transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-brand-green-100 hover:text-white">2</button></li>
          <li><button className="w-10 h-10 text-brand-green transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-brand-green-100 hover:text-white">3</button></li>
          <li>
            <button className="flex items-center justify-center w-10 h-10 text-brand-green transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-brand-green-100 hover:text-white">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination