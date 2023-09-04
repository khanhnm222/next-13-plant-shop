const Breadcrumb = () => {
  return (
   <>
    <nav aria-label="breadcrumb"> 
      <ol className="flex space-x-2">
        <li><a href="/" className="after:content-['/'] after:ml-2 text-gray-600 hover:text-brand-green">Home</a></li>
        <li className="text-brand-green" aria-current="page">Products</li> 
      </ol>
    </nav>
   </>
  )
}

export default Breadcrumb