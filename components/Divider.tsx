interface DividerProps {
  label: string;
}

const Divider: React.FC<DividerProps> = ({ label }) => {
  return (
    <div className='flex gap-3 items-center my-3 mx-auto w-fit'>
      <div className='h-px w-5 bg-gray-500'></div>
      <span className='text-gray-500 text-sm'>{label}</span>
      <div className='h-px w-5 bg-gray-500'></div>
    </div>
  );
};

export default Divider;
