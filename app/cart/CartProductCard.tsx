import Button from "@/components/Button";
import IconTrash from "@/components/icons/IconTrash";
import TextInput from "@/components/TextInput";
import Image from "next/image";


interface CartProductCardProps {
  number: number;
  title: string;
  imgSrc: string;
  shortDescription: string;
  price: number;
  discountedPrice?: number;
}

const CartProductCard: React.FC<CartProductCardProps> = ({
  number,
  title,
  imgSrc,
  shortDescription,
  price,
  discountedPrice,
}) => {
  const formattedPrice = price.toFixed(2).replace('.', ',');
  const formattedDiscountedPrice = discountedPrice
    ? discountedPrice.toFixed(2).replace('.', ',')
    : null;

  return (
    <div className='p-4 border-t border-gray-100 lg:flex lg:justify-between lg:items-center'>
      <div className='flex gap-3 items-center relative'>
        <span className='text-xl'>{number}.</span>
        <Image className='w-24 h-24' src={imgSrc} alt={title} />
        <div>
          <p className='text-xl'>{title}</p>
          <small className='text-sm'>{shortDescription}</small>
        </div>
        <Button
          icon='only'
          variant='secondary'
          additionalClass='absolute right-0 top-0'
        >
          <IconTrash />
        </Button>
      </div>
      <div className='flex justify-between mt-4'>
        <TextInput name='quantity' type='number' label='' placeholder='' />
        <bdi className='text-2xl'>
          {formattedPrice}USD
          {discountedPrice && (
            <del className='text-gray-400 pl-2'>
              {formattedDiscountedPrice}USD
            </del>
          )}
        </bdi>
      </div>
    </div>
  );
};

export default CartProductCard;
