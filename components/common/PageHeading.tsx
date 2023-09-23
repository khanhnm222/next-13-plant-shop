interface PageHeadingProps {
  title: string;
  subTitle: string;
}

const PageHeading = ({ title, subTitle }: PageHeadingProps) => {
  return (
    <div className="pt-2 col-span-9 text-brand-green">
      <div className="pb-2 text-center">
        <h3 className="text-xl font-extralight leading-none">{subTitle}</h3>
        <h2 className="pd-2 text-4xl font-bold tracking-tighter font-heading leading-none mb-1">{title}</h2>
      </div>
    </div>
  )
}

export default PageHeading