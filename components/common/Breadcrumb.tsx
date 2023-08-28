const Breadcrumb = () => {
  return (
   <>
    <nav aria-label="breadcrumb"> 
      <ol className="flex space-x-2">
        <li><a href="/" className="after:content-['/'] after:ml-2 text-gray-600 hover:text-primary">Home</a></li>
        <li className="text-primary" aria-current="page">Pruducts</li> 
      </ol>
    </nav>
   </>
  )
}

export default Breadcrumb